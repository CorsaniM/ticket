export {};
export type Roles = "admin" | "user" | "unathourized" | "org:page_owner";
declare global {
  interface CustomJwtSessionClaims {
    membership: Record<string, string>;
    departament: Record<string, string>;
    role?: Roles;
  }
}
