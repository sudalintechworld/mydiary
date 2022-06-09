import React from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Login from "./Login";
import SignUp from "./SignUp";
import Upload from "./Upload";
import Header_login from "./Header_login";
import ContentBox from "./ContentBox";

import './App.css';
import {auth, db} from "./shared/firebase";
import {collection, addDoc} from "firebase/firestore";
import {createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signOut
} from "firebase/auth"


function App() {
const[is_login, setIsLogin] = React.useState(false);
const loginCheck = async (user) => {
  if(user) {
    setIsLogin(true);
  }else{
    setIsLogin(false);
  }
};
React.useEffect(() => {
  onAuthStateChanged(auth,loginCheck);
}, []);

  return (
<div className="App">
  {is_login? (<Header_login/>): ( <Header/>)}
  
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/" element={<Main />}/>
      <Route path="/upload" element={<Upload />}/>
      
    </Routes>
   
      

</div>
  );
}


export default App;
