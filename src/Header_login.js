import React from "react";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword, onAuthStateChanged,
    signOut
  } from "firebase/auth"
  import {auth, db} from "./shared/firebase";
 



const Header_login = (props) => {
    const navigate = useNavigate();





    return (
        <>
        <HeaderConatiner>
            <Title onClick={() => {
                navigate("/");
                }}> 아무렇게나 일기장</Title>
            
            <HomeBtn onClick={() => {
                navigate("/");
            }}> Home</HomeBtn>

            <NotifiBtn onClick={() => {
                navigate("/");
            }}> 알림 </NotifiBtn>

            {/* <UserName>
                유저네임
            </UserName> */}

            <LogoutBtn onClick={async () => {
            await signOut(auth)
            navigate("/login")
            }}>로그아웃</LogoutBtn>
             
            </HeaderConatiner>
        </>
    )
}
const HeaderConatiner = styled.div`
    display : grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-columns: 20% 20% 20% 10% 10% 10% 10%;
    background-color: #fafafa;

`
const Title = styled.h1`
    margin : 15px 0px;
    font-family: "LeeSeoyun";
    font-size : 40pt;
    grid-column-start: 3;
    grid-row-start : 1;
    // display: flex;
    color: #000;

`
const HomeBtn = styled.h1`
grid-column-start: 2;
grid-row-start : 1;
font-size: 35px;
display: flex;
font-family: "LeeSeoyun";
color: #15cfec;
`

const NotifiBtn = styled.h1`
grid-column-start: 5;
grid-row-start : 1;
font-size: 35px;

font-family: "LeeSeoyun";
color: #5d2503;

`
// const UserName = styled.h1`
// grid-column-start: 4;
// grid-row-start : 1;
// font-size: 35px;

// font-family: "LeeSeoyun";
// color: #5d2503;
// `


const LogoutBtn = styled.h1`
grid-column-start: 6;
grid-row-start : 1;
font-size: 35px;

font-family: "LeeSeoyun";
color: #5d2503;
`




export default Header_login;