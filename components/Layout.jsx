

import styles from "../styles/Layout.module.css";
import LogIn from "./LogIn";
import Navbar from "./Navbar";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      <LogIn />
    </>
  );
};

export default Layout;