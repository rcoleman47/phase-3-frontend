import React, {useState} from 'react'

const UserContext = React.createContext()

function UserProvider({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [generalContractor, setGeneralContractor] = useState({});

  return (
    <UserContext.Provider value= {{isLoggedIn, setIsLoggedIn, generalContractor, setGeneralContractor}}>
      {children}
    </UserContext.Provider>
  );
}
export {UserContext, UserProvider}