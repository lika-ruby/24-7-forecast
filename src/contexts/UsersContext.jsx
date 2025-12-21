import { useState, createContext } from "react";
import { getUsers } from "../fetch/gets/getUsers";
import { createUser } from "../fetch/gets/setUsers";

export const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const openModalS = () => {
    document.querySelector("#backdropS")?.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  };

  const closeModalS = () => {
    document.querySelector("#backdropS")?.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  };

  const openModalL = () => {
    document.querySelector("#backdropL")?.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");
  };

  const closeModalL = () => {
    document.querySelector("#backdropL")?.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  };

  const setNewUser = async (e) => {
    e.preventDefault();

    const form = e.target;

    const newUser = {
      name: form[0].value.trim(),
      email: form[1].value.trim(),
      password: form[2].value,
    };

    try {
      const users = await getUsers();

      const isExist = users.find((user) => user.email === newUser.email);

      if (isExist) {
        return;
      }

      const createdUser = await createUser(newUser);

      setUser(createdUser);
      setName(createdUser.name);
      setIsLogin(true);
      closeModalS();
    } catch (error) {
      console.error(error);
    }
  };

  const logInUser = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form[0].value.trim();
    const password = form[1].value;

    try {
      const users = await getUsers();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        return;
      }

      setUser(foundUser);
      setName(foundUser.name);
      setIsLogin(true);
      closeModalL();
    } catch (error) {
      console.error(error);
    }
  };

  const logOutUser = () => {
    setUser(null);
    setName("");
    setIsLogin(false);
  };

  return (
    <UsersContext.Provider
      value={{
        user,
        name,
        isLogin,
        openModalS,
        closeModalS,
        openModalL,
        closeModalL,
        setNewUser,
        logInUser,
        logOutUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
