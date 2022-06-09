import React from "react";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"

import Login from "./Login";



const Header = (props) => {
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

            <SignUpBtn onClick={() => {
                navigate("/signup");
            }}>회원가입</SignUpBtn>

            <LoginBtn onClick={() => {
                navigate("/login");
            }}>로그인</LoginBtn>
             
            </HeaderConatiner>
        </>
    )
}
const HeaderConatiner = styled.div`
    display : grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-columns: 20% 20% 20% 20% 20%;
    background-color: #fafafa;
    width: 100vw;

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

const SignUpBtn = styled.h1`
grid-column-start: 4;
grid-row-start : 1;
font-size: 35px;

font-family: "LeeSeoyun";
color: #5d2503;

`


const LoginBtn = styled.h1`
grid-column-start: 5;
grid-row-start : 1;
font-size: 35px;

font-family: "LeeSeoyun";
color: #5d2503;
`




export default Header;