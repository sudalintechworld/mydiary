// import React from "react";
// import styled from "styled-components"
// import {useSelector} from "react-redux";

// const ContentBox = (props) =>{
// //const my_lists=props.content;
// const diary_list = useSelector(state => state.diary);


// return(
//     <div>
 
//         {[diary_list].map((a, index) => {
//     console.log(a)
//             return (
//                 <Container>
//                     <ContentList key={index.value}>
//                         <MyContent>
                                 
//                         <p>{a.id}</p>
//                         {a.date} <br />
//                         {a.text} <br />
//                         {a.img}
//                         </MyContent>
//                     </ContentList>
//                 </Container>
//             );
//         })}
//         </div>
//     );
// }
// const Container = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `

// const ContentList = styled.div`
// display: flex;
// justify-content: center;
// // align-items: center;
// height: 500px;
// width: 800px;
// background-color: #fff;
// border: 0.5px solid #ddd;
// border-radius : 0px;
// padding: 30px;
// margin: 10px;

// `
// const MyContent = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `
// export default ContentBox;
