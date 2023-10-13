import { createContext } from "react";

const UserContexts = createContext({
  loggedUserId: "userName",
});

export default UserContexts;
