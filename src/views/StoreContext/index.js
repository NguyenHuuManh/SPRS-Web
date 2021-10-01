import { createContext, useState } from "react";

const initialState = {
  user: null,
  setUser: () => {},
};
const StoreContext = createContext(initialState);

export default (props) => {
  const [user, setUser] = useState(null);
  const store = {
    user: user,
    setUser: setUser,
  };
  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
