import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { verifyToken } from "@/utils/verifyToken";
import { getAccessToken } from "@/utils/token";
import { JwtPayload } from "jwt-decode";
import { Typography } from "@mui/material";

interface CustomJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
}

const AuthLinks = () => {
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<string | undefined>(undefined);

  useEffect(() => {
    const token = getAccessToken("accessToken");
    const user: CustomJwtPayload | null = token
      ? (verifyToken(token) as CustomJwtPayload)
      : null;
    setUserRole(user?.role);
  }, []);

  const isActive = (page: string) => {
    if (page === "Home") {
      return pathname === "/";
    }
    return pathname === `/${page.toLowerCase()}`;
  };

  const getDashboardLink = () => {
    switch (userRole) {
      case "admin":
        return "/dashboard/admin";
      case "student":
        return "/dashboard/student";
      case "instructor":
        return "/dashboard/instructor";
      default:
        return "/dashboard";
    }
  };

  return (
    <>
      {userRole ? (
        <Link href={getDashboardLink()}>
          <Typography
            textAlign="center"
            sx={{
              color: isActive("dashboard") ? "primary.main" : "inherit",
              borderBottom: isActive("dashboard") ? "2px solid" : "none",
            }}
          >
            Dashboard
          </Typography>
        </Link>
      ) : (
        <Link href="/login">
          <Typography
            textAlign="center"
            sx={{
              color: isActive("login") ? "primary.main" : "inherit",
              borderBottom: isActive("login") ? "2px solid" : "none",
            }}
          >
            Login
          </Typography>
        </Link>
      )}
    </>
  );
};

export default AuthLinks;
