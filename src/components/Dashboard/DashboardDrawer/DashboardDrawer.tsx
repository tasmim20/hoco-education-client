"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "../SideBar/SideBar";
import { Avatar, Button, Menu, MenuItem, Tooltip } from "@mui/material";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { getAccessToken } from "@/utils/token";
import { JwtPayload } from "jwt-decode";
import { verifyToken } from "@/utils/verifyToken";
import dynamic from "next/dynamic";

const NavbarProfile = dynamic(
  () => import("@/components/UI/NavbarProfile/NavbarProfile"),
  { ssr: false }
);

const settings = ["Profile", "Account", "Dashboard"];

interface CustomJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  image?: string;
}

const drawerWidth = 240;
type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export default function DashboardDrawer(
  {
    children,
  }: {
    children: React.ReactNode;
  },
  { session }: { session: UserProps | null }
) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [user, setUser] = React.useState<CustomJwtPayload | null>(null);

  React.useEffect(() => {
    const token = getAccessToken("accessToken");
    const verifiedUser = token
      ? (verifyToken(token) as CustomJwtPayload)
      : null;
    setUser(verifiedUser);
  }, []);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#132361",
          boxShadow: 0,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {user && (
            <Box sx={{ flexGrow: 1 }}>
              <Typography color="lightgray" variant="h6" noWrap component="div">
                Hi, {user.name}
              </Typography>
              <Typography color="lightgray" variant="h6" noWrap component="div">
                Welcome Here
              </Typography>
            </Box>
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <NavbarProfile session={session} />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
