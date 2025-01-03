import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

type LayoutProps = {
  getStarted: boolean;
};

export default function BasicLayout({ getStarted }: LayoutProps) {
  return (
    <>
      <Navbar getStarted={getStarted} />
      <Outlet />
    </>
  );
}
