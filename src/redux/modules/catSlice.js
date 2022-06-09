import{createSlice} from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: "cat",
    initialState: {
        name: "펄이 고양이",
        age: 100
        
    },
    reducers : {
        changeName: (state, action) => {
            state.name = action.payload;
        } //액션생성함수들어갈 자리, 어떤 행동을 하는지까지 넣어줌.
        //immer라고 부르는 불변성 유지 패키지를 이미 툴킷이 가지고 있음. 
        //immer는 자바스크립트의 프록시라는 객체를 이용해서 불변성 유지를 한다. 프록시 객체는 기본적인 동작(할당, 순회, 열거 등등)의 새로운 동작을 만들때 사용한다.
    }
});

export const {changeName} = catSlice.actions;
export default catSlice.reducer;
