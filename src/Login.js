import React from "react";
import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom";
import {auth, db } from "./shared/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";


const Login = () => {
    
    const navigate = useNavigate();
    const id_ref = React.useRef();
    const pw_ref = React.useRef();

   
    const loginFB = async () => {
        // console.log(id_ref.current.value, pw_ref.current.value);
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value,
            
        );

        const user_docs = await getDocs(
            query(collection(db, "users"), where("user_id", "==", user.user.email))
        );

        user_docs.forEach((u) => {
        console.log(u.data().name); //이름을 콘솔에 찍어주는데, 어떻게 빼와야하는 건지... 모르겠다...ㅠ
        }); 
        window.alert("반가워!"); 
    };

// const[name, setName] = React.useState(u.data().name);

    function gohome(){
        navigate("/");
        loginFB();
        
    }
    
    return (
        <>
        <LoginTitleContainer>
        <LoginTitle>로그인</LoginTitle>
        </LoginTitleContainer>
        <IdWrap>
            
            <IdTitle> ID</IdTitle>
            <IdInput
            id="IdInput"
            input ref={id_ref}
            type="text" 
            placeholder="아이디는 아무렇게나 쓰면 안돼!"></IdInput>
        </IdWrap>
        <form>
            <PwWrap>
           
                <PwTitle>PW</PwTitle>
                <PwInput 
                   id="PwIdInput"
                input ref={pw_ref}
                type="password" 
                placeholder="비밀번호는 아무렇게나 쓰면 안돼!"
                autoComplete="on"></PwInput>
               
            </PwWrap>
            </form>
            <LoginSubmitBtn onClick={gohome}> 로그인하기
            {/* <LoginSubmitBtn onClick={ async () =>{
            loginFB()
            navigate("/") 
            }}>로그인하기
                 */}
            </LoginSubmitBtn>

        
        </>
    )
}
const LoginTitleContainer = styled.div`
font-family: "LeeSeoyun";
    display : grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-columns: 20% 20% 20% 20% 20%;
`
const LoginTitle = styled.h1`
    // margin : 15px 0px;  
    font-size : 60pt;
     grid-column-start: 2;
    grid-row-start : 1;
    // display: flex;
    color: #2E2E2E;
`
const IdWrap = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 1fr;
    //grid-template-rows: 20% 20% 20% 20% 20%     
    // display: flex;
    // jusify-content: center;
    align-items: center;
     font-family: "LeeSeoyun"
`
const IdTitle = styled.h1`
grid-column-start : 3;
grid-row-start : 1;
font-size: 30pt;
`
const IdInput = styled.input`
grid-column-start : 4;
grid-row-start : 1;
border: none; 
background-color: #fafafa;
width: 600px; height: 70px;

font-size: 20px;
border-radius: 30px;
outline: none;
padding-left: 50px;
font-family: "LeeSeoyun";
`
const PwWrap = styled.div`
display: grid;
grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 1fr;
//grid-template-rows: 20% 20% 20% 20% 20%;
align-items: center;
font-family: "LeeSeoyun";
`
const PwTitle = styled.h1`
grid-column-start : 3;
font-size: 30pt;
`
const PwInput = styled.input`
grid-column-start : 4;
border: none; 
background-color: #fafafa;
width: 600px; height: 70px;
font-size: 20px;
border-radius: 30px;
outline: none;
padding-left: 50px;
font-family: "LeeSeoyun";
`
const LoginSubmitBtn = styled.button`
position: fixed;
bottom: auto;
right: auto;
width :150px;
border-radius: 150px;
border : none;
padding: 10px;
font-family: "LeeSeoyun"; 
font-size : 30px;
color: #fff;
background-color: #15cfec;
`



export default Login;