"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Stack } from "@mui/material";
import { signOut } from "next-auth/react";
import { verifyToken } from "@/utils/verifyToken";
import { getAccessToken, removeAccessToken } from "@/utils/token";
import { JwtPayload } from "jwt-decode";
import Part from "./Part";
import mainLogo from "../../../../public/assets/main-logo.svg";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import dynamic from "next/dynamic";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

const pages = ["Page", "Courses", "Shop", "Blog", "Login", "Dashboard"];
const settings = ["Profile", "Account", "Dashboard"];

// Define a custom interface extending JwtPayload
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
function Navbar({ session }: { session: UserProps | null }) {
  // const AuthButton = dynamic(
  //   () => import("@/components/UI/AuthButton/AuthButton"),
  //   { ssr: false }
  // );
  const NavbarProfile = dynamic(
    () => import("@/components/UI/NavbarProfile/NavbarProfile"),
    { ssr: false }
  );
  const token = getAccessToken("accessToken");
  const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

  // const user = token ? verifyToken(token) : null;

  // console.log("user", user);

  // const [user, setUser] = React.useState<any>(null); // Use 'any' for the user state if you don't use a specific User interface

  // React.useEffect(() => {
  //   const token = getAccessToken();

  //   if (token) {
  //     const decodedToken = verifyToken(token);
  //     setUser(decodedToken);
  //   } else {
  //     console.log("No access token found");
  //     setUser(null);
  //   }
  // }, []);

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
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // const handleLogout = async () => {
  //   if (session?.user) {
  //     await signOut(); // For OAuth users (Google, GitHub)
  //   } else if (user) {
  //     removeAccessToken();
  //     await signOut({ callbackUrl: "/login" }); // For email/password users
  //   }
  // };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#132361" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            HOCO
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fcb900", py: "12px", boxShadow: 0 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Part />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <Image width={100} alt="image" src={mainLogo} />
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <Link href={page.toLocaleLowerCase()} key={page}>
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "#132361",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              <Image width={100} alt="image" src={mainLogo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Stack
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 3,
                    color: "white",
                    display: "block",
                    backgroundColor: "#fcb900",
                  }}
                >
                  <Link href={page.toLocaleLowerCase()} key={page}>
                    {page}
                  </Link>
                </Stack>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {/* <ShoppingCart /> */}
              <NavbarProfile session={session} />
              {/* <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {session?.user || user ? (
                    <Avatar
                      alt={session?.user?.name || user?.name || "User"}
                      src={
                        session?.user?.image ||
                        user?.image ||
                        "/static/images/avatar/2.jpg"
                      }
                      // src={
                      //   (session?.user as CustomJwtPayload)?.image ||
                      //   (user as CustomJwtPayload)?.image ||
                      //   "/static/images/avatar/2.jpg"
                      // }
                    />
                  ) : (
                    <AccountCircleIcon
                      fontSize="large"
                      sx={{ color: "#132361" }}
                    />
                  )}
                   <AccountCircleIcon
                      fontSize="large"
                      sx={{ color: "#132361" }}
                    />
                </IconButton>
              </Tooltip> */}
              {/* <Menu
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
                  <Link href={setting.toLocaleLowerCase()} key={setting}>
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  </Link>
                ))}
                <Box sx={{ px: "13px" }}>
                  <AuthButton session={session} />
                </Box>
              </Menu> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navbar;
