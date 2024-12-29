import { getAccessToken, removeAccessToken } from "@/utils/token";
import { verifyToken } from "@/utils/verifyToken";
import { Button } from "@mui/material";
import { JwtPayload } from "jwt-decode";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

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
const AuthButton = ({ session }: { session: UserProps | null }) => {
  const token = getAccessToken("accessToken");

  const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

  const handleLogout = async () => {
    if (session?.user) {
      await signOut(); // For OAuth users (Google, GitHub)
    } else if (user) {
      removeAccessToken("accessToken");
      await signOut({ callbackUrl: "/login" }); // For email/password users
    }
  };
  return (
    <>
      {session?.user || user ? (
        <Button sx={{ color: "#d50000" }} variant="text" onClick={handleLogout}>
          logout
        </Button>
        
     
      ) : (
        <Link href="login">login</Link>
      )}
    </>
  );
};

export default AuthButton;
