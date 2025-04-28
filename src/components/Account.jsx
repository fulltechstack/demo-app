import { Outlet, useLocation } from "react-router-dom";
import UserProfile from "./UserProfile";

function Account() {
  const path = useLocation().pathname;

  return <>{path === "/account" ? <UserProfile /> : <Outlet />}</>;
}
export default Account;
