import { useState, useEffect } from "react";
import { fetchUser, IUser } from "../utils";

function User() {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async (): Promise<void> => {
    try {
      setUser(await fetchUser());
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error!</p>;
  }

  if (!user) {
    return <p>No user found!</p>;
  }

  return <p>First Name: {user.firstName}</p>;
}

export default User;
