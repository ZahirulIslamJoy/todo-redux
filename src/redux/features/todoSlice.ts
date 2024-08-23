import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type TTodos = {
    title:string,
    description:string,
    isCompleted?:boolean
}

type TInitialState={
    todos:TTodos[]
}


const initialState:TInitialState={
    todos:[]
}

const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state , action : PayloadAction<TTodos>)=>{
            state.todos.push({...action.payload , isCompleted:false})
        }
    }
})
export const {addTodo}=todoSlice.actions

export default todoSlice.reducer;