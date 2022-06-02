import React, {useState} from 'react'

const UserContext = React.createContext()

function UserProvider({children}){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [generalContractor, setGeneralContractor] = useState({
    id: '',
    company_name: '',
    address: '',
    email: '',
    password_digest: ''
  });

  return (
    <UserContext.Provider value= {{isLoggedIn, setIsLoggedIn, generalContractor, setGeneralContractor}}>
      {children}
    </UserContext.Provider>
  );
}
export {UserContext, UserProvider}