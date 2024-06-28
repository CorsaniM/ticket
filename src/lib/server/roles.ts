import { auth } from "@clerk/nextjs/server";
import { Roles } from "app/types/globals";

export const checkRole = (role: Roles) => {
  const { sessionClaims } = auth();

  return sessionClaims?.role === role;
};
