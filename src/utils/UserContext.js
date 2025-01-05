import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default user",
    userNumber: null
});

export default UserContext;