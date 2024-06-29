import { useAuth, useUser } from "@clerk/nextjs";
import { Roles } from "app/types/globals";

export const checkRole = (role: Roles) => {
  const { orgRole } = useAuth();

  if (orgRole === role) return true;
  else {
    return false;
  }
};
