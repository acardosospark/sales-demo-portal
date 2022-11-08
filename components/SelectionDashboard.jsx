import styles from "./../styles/SelectionDashboard.module.css";
import { useSession, signOut } from "next-auth/react";
import DemoCard from "./DemoCard";

const SelectionDashboard = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
        <DemoCard />


      {/* <h1>main product selection dashboard</h1>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button> */}
    </div>
  );
};

export default SelectionDashboard;
