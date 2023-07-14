import React from "react";

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState<{ name: string } | null>(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
