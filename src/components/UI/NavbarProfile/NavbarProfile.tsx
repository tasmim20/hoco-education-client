"use client";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAccessToken } from "@/utils/token";
import { verifyToken } from "@/utils/verifyToken";
import { JwtPayload } from "jwt-decode";
import Link from "next/link";
import AuthButton from "../AuthButton/AuthButton";

interface CustomJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  image?: string;
}

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};
const settings = ["Profile", "Account"];
const NavbarProfile = ({ session }: { session: UserProps | null }) => {
  const token = getAccessToken("accessToken");
  const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {session?.user || user ? (
              <Avatar
                alt={session?.user?.name || user?.name || "User"}
                src={
                  session?.user?.image ||
                  user?.image ||
                  "/static/images/avatar/2.jpg"
                }
              />
            ) : (
              <AccountCircleIcon fontSize="large" sx={{ color: "#132361" }} />
            )}
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {/* {settings.map((setting) => (
            <Link href={setting.toLocaleLowerCase()} key={setting}>
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            </Link>
          ))} */}

          <Box sx={{ px: "13px" }}>
            <AuthButton session={session} />
          </Box>
        </Menu>
      </Box>
    </>
  );
};

export default NavbarProfile;
