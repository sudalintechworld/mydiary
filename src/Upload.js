import React from "react";
import styled from "styled-components"

import {db, storage} from "./shared/firebase";
import {collection, addDoc, getDocs, where, query} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate, Link} from "react-router-dom";
import{useSelector, useDispatch} from "react-redux";
import {uploadData} from"./redux/modules/myDiary"


const Upload = () => {
const file_link_ref=React.useRef(null);
const inputText = React.useRef(null);

const navigate = useNavigate();
const dispatch = useDispatch();
const name = useSelector(state => state.diary.name);
//console.log(name)
const uploadContentList = () => {
    //console.log(inputText.current.value)
    dispatch(uploadData(
        {
            id : name,
            date: "날짜",
            text: inputText.current.value,
            img: file_link_ref.current.value,
        }
    ));
    };
   
const fileInput = async () => {
    const user_content= await addDoc(collection(db, "users"),{
    image_url: file_link_ref.current.url,
    })};

const uploadFB = async(e) => {
    const uploaded_file = await uploadBytes(
        ref(storage, `images/${e.target.files[0].name}`),
        e.target.files[0]
        );
        // console.log(uploaded_file);
        const file_url = await getDownloadURL(uploaded_file.ref);
        // console.log(file_url);
        file_link_ref.current = {url: file_url};
};


    return (
        <>
        <WriteTitleContainer>
            <WriteTitle>일기쓰기</WriteTitle> </WriteTitleContainer>
            <ContentContainer>
                <TextWrap>
                    <TextTitle>일기내용</TextTitle>
                    <TextInput>
                        <input 
                        className="text"
                        type = "text" 
                        ref={inputText}/>
              </TextInput>
                    </TextWrap>
                    
                    <ImgWrap>
                    <ImgTitle>이미지</ImgTitle>
                    <ImgInput>
                        <input 
                        type ="file"
                        className="img"
                        onChange={uploadFB}
                        ref={file_link_ref}/> </ImgInput>
            
                    </ImgWrap>
                <UploadBtn onClick= {uploadContentList}>
                <Link to ="/" style={{textDecoration: "none", color: "inherit"}}>
                    등록하기</Link></UploadBtn>
                    
            </ContentContainer>       
        </>
    )
}


const WriteTitleContainer = styled.div`
font-family: "LeeSeoyun";

    display : grid;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-columns: 20% 20% 20% 20% 20%;
   

`
const WriteTitle = styled.h1`
    
    font-size : 60pt;
    grid-column-start: 2;
    grid-row-start : 1;
    color: #2E2E2E;
`


const ContentContainer = styled.div`
height: 100vh;
font-family: "LeeSeoyun";


`

const TextWrap = styled.div`
font-family: "LeeSeoyun";
display: flex;
justify-content: center;
align-items: center;
`

const TextTitle = styled.h2`
font-size: 30pt;

`
const TextInput = styled.div`

  input[type="text"] {
    background-color: #fafafa;

    font-family: "LeeSeoyun";
    font-size: 20px;
    border: 0;
    margin-left: 20px;
    padding: 10px;
    width: 300px; height: 200px;
  }
`


const ImgWrap = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
margin : auto;

`

const ImgTitle = styled.h2`
font-size: 30pt;

`
const ImgInput = styled.div`

  input[type="file"] {
    
    font-family: "LeeSeoyun";
    font-size: 25px;
    border: 0;
    
    margin-left: 20px;
  }
`
const UploadBtn = styled.button`

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

export default Upload;