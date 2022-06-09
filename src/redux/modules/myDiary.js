import { db } from "../../firebase";


//Action Type
const CREATE = "myDiary/CREATE";
const LOAD = "myDiary/LOAD";
const DELETE = "myDiary/DELETE";
const UPDATE = "myDiary/UPDATE";

const initialState = {list: [
    {id:"아이디", date:"날짜", text:"텍스트", img:"이미지"},
    {id:"아이디2", date:"날짜2", text:"텍스트2", img:"이미지"}
]};


//Action creator
export const uploadData = (data) => {
    return {type: CREATE, data};
};

export const loadData = (data_list) => {
    return {type: LOAD, data_list};
};

export const updateData = (data) => {
    return {type: UPDATE, data};
};



//middlewares





//Reducer
export default function reducer(state = initialState, action ={}) {
switch(action.type) {
    case "myDiary/LOAD":{
        return{data: action.data};
    }
    case "myDiary/CREATE": {
        const new_my_diary = [{...state.data}, action.posting];
        return {...state, data: new_my_diary};        
}
        default: return state;
    }
}