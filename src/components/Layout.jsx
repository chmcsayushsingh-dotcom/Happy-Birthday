import { Outlet } from "react-router-dom";
import FloatingFX from "./FloatingFX";

export default function Layout() {
  return (
    <>
      <FloatingFX />
      <Outlet />
    </>
  );
}
