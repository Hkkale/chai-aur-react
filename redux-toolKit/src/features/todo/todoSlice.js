import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState={
  todos:[ {id:1,text:"Hello Java"} ]
}



export const todoSlice = createSlice({
  name:"todo",
  initialState,
  reducers:{
    addTodo: (state,action) =>{
      const todo ={
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state , action)=>{
      state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
    },

    updateTodo: (state,action)=>{
      const todo = state.todos.map((todo)=>todo.id  === action.payload ? todo.text = action.payload.text:todo)
    }

  }


})



export const {addTodo, removeTodo, updateTodo} = todoSlice.actions



export default todoSlice.reducer