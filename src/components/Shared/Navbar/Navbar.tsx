// "use client";
// import * as React from "react";
// import { useState, useEffect } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import Link from "next/link";
// import { styled, alpha } from "@mui/material/styles";
// import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { Stack, useMediaQuery, useTheme } from "@mui/material";
// import { signOut } from "next-auth/react";
// import { verifyToken } from "@/utils/verifyToken";
// import { getAccessToken, removeAccessToken } from "@/utils/token";
// import { JwtPayload } from "jwt-decode";
// import Part from "./Part";
// import mainLogo from "../../../../public/assets/main-logo.svg";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import { usePathname } from "next/navigation";

// const NavbarProfile = dynamic(
//   () => import("@/components/UI/NavbarProfile/NavbarProfile"),
//   { ssr: false }
// );

// const pages = ["Courses", "Shop", "Career", "Blog", "Contact"];
// const settings = ["Profile", "Account", "Dashboard"];

// interface CustomJwtPayload extends JwtPayload {
//   name?: string;
//   email?: string;
//   image?: string;
//   role?: string;
// }

// type UserProps = {
//   user?: {
//     name?: string | null | undefined;
//     email?: string | null | undefined;
//     image?: string | null | undefined;
//   };
// };

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// function Navbar({ session }: { session: UserProps | null }) {
//   const pathname = usePathname();
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
//   const token = getAccessToken("accessToken");
//   const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

//   const [userRole, setUserRole] = useState<string | undefined>(undefined);
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

//   useEffect(() => {
//     const token = getAccessToken("accessToken");
//     const user: CustomJwtPayload | null = token
//       ? (verifyToken(token) as CustomJwtPayload)
//       : null;
//     const role = user?.role;
//     setUserRole(role);
//   }, []);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const isActive = (page: string) => pathname === `/${page.toLowerCase()}`;

//   const getDashboardLink = () => {
//     switch (userRole) {
//       case "admin":
//         return "/dashboard/admin";
//       case "student":
//         return "/dashboard/student";
//       case "instructor":
//         return "/dashboard/instructor";
//       default:
//         return "/dashboard";
//     }
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       {isDesktop && (
//         <AppBar position="static" sx={{ bgcolor: "#132361" }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               sx={{ mr: 2 }}
//             ></IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//             >
//               HOCO
//             </Typography>
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//           </Toolbar>
//         </AppBar>
//       )}
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#fff",
//           py: "14px",
//           boxShadow: 0,
//           borderBottom: "1px solid lightgray",
//           color: "#132361",
//           fontWeight: "600",
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Part />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{ display: { xs: "none", sm: "none", md: "block" } }}
//             >
//               <Image width={100} alt="image" src={mainLogo} />
//             </Typography>

//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "flex", md: "none" },
//               }}
//             >
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <Link href={`/${page.toLocaleLowerCase()}`} key={page}>
//                     <MenuItem onClick={handleCloseNavMenu}>
//                       <Typography
//                         textAlign="center"
//                         sx={{
//                           color: isActive(page) ? "primary.main" : "inherit",
//                           borderBottom: isActive(page) ? "2px solid" : "none",
//                         }}
//                       >
//                         {page}
//                       </Typography>
//                     </MenuItem>
//                   </Link>
//                 ))}
//                 {user ? (
//                   <Link href={getDashboardLink()} key="Dashboard">
//                     <MenuItem onClick={handleCloseNavMenu}>
//                       <Typography
//                         textAlign="center"
//                         sx={{
//                           color: isActive("dashboard")
//                             ? "primary.main"
//                             : "inherit",
//                           borderBottom: isActive("dashboard")
//                             ? "2px solid"
//                             : "none",
//                         }}
//                       >
//                         Dashboard
//                       </Typography>
//                     </MenuItem>
//                   </Link>
//                 ) : (
//                   <Link href="/login" key="Login">
//                     <MenuItem onClick={handleCloseNavMenu}>
//                       <Typography
//                         textAlign="center"
//                         sx={{
//                           color: isActive("login") ? "primary.main" : "inherit",
//                           borderBottom: isActive("login")
//                             ? "2px solid"
//                             : "none",
//                         }}
//                       >
//                         Login
//                       </Typography>
//                     </MenuItem>
//                   </Link>
//                 )}
//               </Menu>
//             </Box>

//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: "bold",
//                 color: "#132361",
//                 textDecoration: "none",
//                 textTransform: "uppercase",
//               }}
//             >
//               <Image width={100} alt="image" src={mainLogo} />
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               {pages.map((page) => (
//                 <Stack
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     mx: 3,
//                     color: isActive(page) ? "primary.main" : "inherit",
//                     display: "block",
//                     borderBottom: isActive(page) ? "2px solid" : "none",
//                   }}
//                 >
//                   <Link href={`/${page.toLocaleLowerCase()}`} key={page}>
//                     {page}
//                   </Link>
//                 </Stack>
//               ))}
//               {user ? (
//                 <Stack
//                   key="Dashboard"
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     mx: 3,
//                     color: isActive("dashboard") ? "primary.main" : "inherit",
//                     display: "block",
//                     borderBottom: isActive("dashboard") ? "2px solid" : "none",
//                   }}
//                 >
//                   <Link href={getDashboardLink()}>Dashboard</Link>
//                 </Stack>
//               ) : (
//                 <Stack
//                   key="Login"
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     mx: 3,
//                     color: isActive("login") ? "primary.main" : "inherit",
//                     display: "block",
//                     borderBottom: isActive("login") ? "2px solid" : "none",
//                   }}
//                 >
//                   <Link href="/login">Login</Link>
//                 </Stack>
//               )}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <NavbarProfile session={session} />
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar;

"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { signOut } from "next-auth/react";
import { verifyToken } from "@/utils/verifyToken";
import { getAccessToken, removeAccessToken } from "@/utils/token";
import { JwtPayload } from "jwt-decode";
import Part from "./Part";
import mainLogo from "../../../../public/assets/main-logo.svg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const NavbarProfile = dynamic(
  () => import("@/components/UI/NavbarProfile/NavbarProfile"),
  { ssr: false }
);

const pages = ["Home", "Courses", "Shop", "Career", "Blog", "Contact"];
const settings = ["Profile", "Account", "Dashboard"];

interface CustomJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  image?: string;
  role?: string;
}

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
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

function Navbar({ session }: { session: UserProps | null }) {
  const pathname = usePathname();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const token = getAccessToken("accessToken");
  const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

  const [userRole, setUserRole] = useState<string | undefined>(undefined);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const token = getAccessToken("accessToken");
    const user: CustomJwtPayload | null = token
      ? (verifyToken(token) as CustomJwtPayload)
      : null;
    const role = user?.role;
    setUserRole(role);
  }, []);

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
    <Box sx={{ flexGrow: 1 }}>
      {isDesktop && (
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
      )}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          py: "14px",
          boxShadow: 0,
          borderBottom: "1px solid lightgray",
          color: "#132361",
          fontWeight: "600",
        }}
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
                  <Link
                    href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    key={page}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{
                          color: isActive(page) ? "primary.main" : "inherit",
                          borderBottom: isActive(page) ? "2px solid" : "none",
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
                {user ? (
                  <Link href={getDashboardLink()} key="Dashboard">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{
                          color: isActive("dashboard")
                            ? "primary.main"
                            : "inherit",
                          borderBottom: isActive("dashboard")
                            ? "2px solid"
                            : "none",
                        }}
                      >
                        Dashboard
                      </Typography>
                    </MenuItem>
                  </Link>
                ) : (
                  <Link href="/login" key="Login">
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography
                        textAlign="center"
                        sx={{
                          color: isActive("login") ? "primary.main" : "inherit",
                          borderBottom: isActive("login")
                            ? "2px solid"
                            : "none",
                        }}
                      >
                        Login
                      </Typography>
                    </MenuItem>
                  </Link>
                )}
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
                    color: isActive(page) ? "primary.main" : "inherit",
                    display: "block",
                    borderBottom: isActive(page) ? "2px solid" : "none",
                  }}
                >
                  <Link
                    href={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                    key={page}
                  >
                    {page}
                  </Link>
                </Stack>
              ))}
              {user ? (
                <Stack
                  key="Dashboard"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 3,
                    color: isActive("dashboard") ? "primary.main" : "inherit",
                    display: "block",
                    borderBottom: isActive("dashboard") ? "2px solid" : "none",
                  }}
                >
                  <Link href={getDashboardLink()}>Dashboard</Link>
                </Stack>
              ) : (
                <Stack
                  key="Login"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 3,
                    color: isActive("login") ? "primary.main" : "inherit",
                    display: "block",
                    borderBottom: isActive("login") ? "2px solid" : "none",
                  }}
                >
                  <Link href="/login">Login</Link>
                </Stack>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <NavbarProfile session={session} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
