import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import ContentBox from "./ContentBox";
import Upload from "./Upload";
import {db} from "./firebase";
import {collection, gedDoc, getDocs} from "firesbase/firestore";

import{useSelector, useDispatch} from "react-redux";
import {uploadData} from "./redux/modules/myDiary" ;

const Main = () => {
    const navigate = useNavigate();
    // const [content, setContent] = React.useState([ 
    //     {id:"abc@abc.abc1", date:"0000-00-00 00:00:00", text:"텍스트 자리", img:"이미지 자리"},
    //     {id:"abc@abc.abc2", date:"0000-00-00 00:00:00", text:"텍스트 자리", img:"이미지 자리"},
    //     {id:"abc@abc.abc3", date:"0000-00-00 00:00:00", text:"텍스트 자리", img:"이미지 자리"},
    //     ])

    const dispatch = useDispatch();   

    React.useEffect(() => {
        console.log(db)
        
      
    },[]);

    const diary_list = useSelector(state => state.diary.list);
  
    return (
        <>
        <MainContainer>            
        {diary_list.map((a, index) => {
             return (
        <ContentBoxes key={index}>
                <MyContent>           
                    {a.id}
                    {a.date} <br />
                    {a.text} <br />
                    {a.img}
                </MyContent>
               
            </ContentBoxes>
            );
        })}
        <WriteBtn onClick ={() =>{
            navigate("/Upload");
        }}>일기쓰기</WriteBtn>
        </MainContainer>
        
        </>
    )
}

const MainContainer = styled.div`
font-family: "LeeSeoyun";
display: flex;
justify-content: center;
flex-direction : column;
align-items: center;
`

const ContentBoxes = styled.div`

height: 500px;
width: 800px;
background-color: #fff;
border: 0.5px solid #ddd;
border-radius : 0px;
padding: 30px;
margin: 10px;

`
const MyContent = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const WriteBtn = styled.h1`
position: fixed;
  bottom: 50px;
  right: 100px;
  width :150px;
  border-radius: 150px;
  border : 4px solid #15cfec;
  background-color: #15cfec;
  padding: 15px;
  color: #fff;
//   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
//     rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

`

export default Main;