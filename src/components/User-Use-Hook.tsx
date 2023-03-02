import { use } from "react";
import { fetchUser, IUser } from "../utils";

function User() {
  const user: IUser = use<IUser>(fetchUser());

  return <p>First Name: {user.firstName}</p>;
}

export default User;
