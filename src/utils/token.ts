// const TOKEN_KEY = "accessToken";

// export const getAccessToken = (key: string): string | null => {
//   if (typeof window !== "undefined") {
//     return localStorage.getItem(TOKEN_KEY);
//   }
//   return null;
// };

// export const setAccessToken = (token: string): void => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem(TOKEN_KEY, token);
//   }
// };

// export const removeAccessToken = (): void => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem(TOKEN_KEY);
//   }
// };

export const setAccessToken = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getAccessToken = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

export const removeAccessToken = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.removeItem(key);
};
