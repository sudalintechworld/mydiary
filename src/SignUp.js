import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

import {auth, db} from "./shared/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {collection, addDoc} from "firebase/firestore";
import {getDocs, where, query} from "firebase/firestore";



const SignUp = (props) => {
    const navigate = useNavigate();
   
    const id_ref = React.useRef();
    const name_ref = React.useRef();
    const pw_ref = React.useRef();
    
    
    const signupFB = async () => {
      
        const user = await createUserWithEmailAndPassword(
            auth,
             id_ref.current.value,
             pw_ref.current.value
          );
          
          console.log(user);
    
    const user_docs = await getDocs(
        query(collection(db, "users"), where("user_id", "==", user.user.email))
    );
    
    user_docs.forEach(u => {
        console.log(u.data());
    });
    
      const user_doc = await addDoc(collection(db, "users"), {
          user_id: user.user.email,
          name: name_ref.current.value,
    
      });
      window.alert("회원가입을 축하해!");
    };


    return (
        < >
    
            <SignUpTitleContainer>
            <SignUpTitle >회원가입</SignUpTitle>
            </SignUpTitleContainer>
            <SignUpInputWrap>
                <SignUpIdWrap>
                <SignUpIdTitle> ID</SignUpIdTitle>
                    <SignUpIdInput 
                    id="SignUpIdInput"
                    ref={id_ref}
                    type="text" 
                    placeholder="아이디는 이메일 형식으로 써줘" > 
                    </SignUpIdInput>
                </SignUpIdWrap>
                <SignUpNameWrap>
               <SignUpNameTitle> 닉네임</SignUpNameTitle>
                    <SignUpNameInput 
                    id="SignUpNameInput"
                   ref={name_ref} 
                    type="text" 
                    placeholder="닉네임은 마음대로 해도 돼" ></SignUpNameInput>
                </SignUpNameWrap>


                <form>
                    <SignUpPwWrap>
                    <SignUpPwTitle>PW</SignUpPwTitle>
                        <SignUpPwInput 
                        id="SignUpPwInput"
                        ref={pw_ref} 
                        type="password" 
                        placeholder="비밀번호는 영어와 숫자를 섞어서 10자로 해줘" 
                        autoComplete="on"></SignUpPwInput>
                    </SignUpPwWrap>
                    </form>
                    <SignUpPwCheckWrap>
                        <SignUpPwCheckTitle>PW<br /> 확인</SignUpPwCheckTitle>

                        <SignUpPwCheckInput 
                        id="SignUpPwCheckInput"
                        type="text" 
                        placeholder="비밀번호를 한 번 더 써줘"
                        autoComplete="on"></SignUpPwCheckInput>
                    </SignUpPwCheckWrap>
                    
                </SignUpInputWrap>
                 <SignUpSubmitBtn onClick={ async () => {
                     await signupFB() 
                     navigate("/")
                 }}> 가입하기
                
           
            </SignUpSubmitBtn>
                
        </>
    )
}
const SignUpTitleContainer = styled.div`
    display : grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-columns: 20% 20% 20% 20% 20%;

`

const SignUpTitle = styled.h1`
    font-family: "LeeSeoyun";
    font-size : 60pt;
    grid-column-start: 2;
    grid-row-start : 1;
    color: #2E2E2E;

`
const SignUpInputWrap = styled.div`
    margin-bottom : 10pt;

`
    const SignUpIdWrap = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 1fr;
    grid-row-start: 1;
    // display: flex;
    // jusify-content: center;
    align-items: center;
    font-family: "LeeSeoyun";
    `

        const SignUpIdTitle = styled.h1`
            grid-column-start : 3;
            font-size: 30pt;
            
        `

        const SignUpIdInput = styled.input`
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

    const SignUpNameWrap = styled.div`
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 1fr;
        align-items: center;
        font-family: "LeeSeoyun";
        margin-bottom : 10pt;
    `
        const SignUpNameTitle = styled.h1`
        grid-column-start : 3;
        grid-row-start: 1;
        font-size: 30pt;
        `

        const SignUpNameInput = styled.input`
        grid-column-start : 4;
        grid-row-start: 1;
        border: none; 
        background-color: #fafafa;
        width: 600px; height: 70px;
        font-size: 20px;
        border-radius: 30px;
        outline: none;
        padding-left: 50px;
        font-family: "LeeSeoyun";
        `

    const SignUpPwWrap = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 1fr;
    grid-row-start: 3;
    align-items: center;
    font-family: "LeeSeoyun";
    `
        const SignUpPwTitle = styled.h1`
        grid-column-start : 3;
        grid-row-start: 2;
        font-size: 30pt;
        `
        const SignUpPwInput = styled.input`
        grid-column-start : 4;
        grid-row-start: 2;
        border: none; 
        background-color: #fafafa;
        width: 600px; height: 70px;
        font-size: 20px;
        border-radius: 30px;
        outline: none;
        padding-left: 50px;
        font-family: "LeeSeoyun";
        `
    const SignUpPwCheckWrap = styled.div`
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 0.5fr 1fr 1fr;
        grid-row-start: 4;
        align-items: center;
        font-family: "LeeSeoyun";
        `
        const SignUpPwCheckTitle = styled.h1`
        grid-column-start : 3;
        grid-row-start: 1;
        font-size: 30pt;
        `
        const SignUpPwCheckInput = styled.input`   
        grid-column-start : 4;
        grid-row-start: 1;
        border: none; 
        background-color: #fafafa;
        width: 600px; height: 70px;
        font-size: 20px;
        border-radius: 30px;
        outline: none;
        padding-left: 50px;
        font-family: "LeeSeoyun"; 
        `

const SignUpSubmitBtn = styled.button`
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
export default SignUp;