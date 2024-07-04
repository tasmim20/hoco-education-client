import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  return jwtDecode(token);
};

// // utils/verifyToken.ts
// // utils/verifyToken.ts
// // import jwtDecode from 'jwt-decode';

// // export interface User {
// //   name?: string;
// //   picture?: string;
// //   exp?: number;
// // }

// // export const verifyToken = (token: string): User | null => {
// //   try {
// //     const decoded = jwtDecode<User>(token);
// //     const currentTime = Date.now() / 1000;
// //     if (decoded.exp && decoded.exp < currentTime) {
// //       throw new Error('Token has expired');
// //     }
// //     return decoded;
// //   } catch (error) {
// //     console.error('Invalid token:', error);
// //     return null;
// //   }
// // };
// import jwtDecode, { JwtPayload } from "jwt-decode";

// export interface User extends JwtPayload {
//   name?: string;
//   picture?: string;
// }

// export const verifyToken = (token: string): User | null => {
//   try {
//     const decoded = jwtDecode<User>(token);
//     const currentTime = Date.now() / 1000;
//     if (decoded.exp && decoded.exp < currentTime) {
//       throw new Error("Token has expired");
//     }
//     return decoded;
//   } catch (error) {
//     console.error("Invalid token:", error);
//     return null;
//   }
// };
