import { Box, List, Stack } from "@mui/material";

import Image from "next/image";
import logo from "../../../../public/assets/main-logo.svg";
import Part from "@/components/Shared/Navbar/Part";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getAccessToken } from "@/utils/token";
import { verifyToken } from "@/utils/verifyToken";
import { JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

// Define a custom interface extending JwtPayload
export interface CustomJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
}

const SideBar = () => {
  const [userRole, setUserRole] = useState<string | undefined>(undefined);

  useEffect(() => {
    const token = getAccessToken("accessToken");
    const user: CustomJwtPayload | null = token
      ? (verifyToken(token) as CustomJwtPayload)
      : null;
    const role = user?.role;
    setUserRole(role);
  }, []);

  // console.log(role);
  return (
    <Box>
      <Stack
        py="1"
        mt="1"
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Part />
        <Image width={100} height={100} alt="logo" src={logo} />
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
