import { redirect } from "react-router-dom";

export function action() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
} // aby wylogowac użytkownika, usuwany jest token z localStorage oraz ważność tokenu
