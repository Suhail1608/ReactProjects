import {createSlice} from '@reduxjs/toolkit'

export const sumSlice = createSlice({
    name:"why am I here?",
    initialState:{
        value:"",
    },
    reducers:{
        increment:(state, action)=>{
            state.value = state.value+1
        },
        decrement:(state, action)=>{
            state.value = state.value-1
        },
        evaluate:(state, action)=>{
            state.value = action.payload
        },
        calc:(state, action)=>{
            switch (action.payload) {
                case "+":
                    state.value +=action.payload
                    break;
                case "-":
                    state.value +=action.payload
                    break;
                case "*":
                    state.value +=action.payload
                    break;
                case "/":
                    state.value +=action.payload
                    break;
                case "7":
                    state.value +=action.payload
                    break;
                case "8":
                    state.value +=action.payload
                    break;
                case "9":
                    state.value +=action.payload
                    break;
                case "4":
                    state.value +=action.payload
                    break;
                case "5":
                    state.value +=action.payload
                    break;
                case "6":
                    state.value +=action.payload
                    break;
                case "1":
                    state.value +=action.payload
                    break;
                case "2":
                    state.value +=action.payload
                    break;
                case "3":
                    state.value +=action.payload
                    break;
                case "0":
                    state.value +=action.payload
                    break;
                case ".":
                    state.value +=action.payload
                    break;
               
                default:
                    break;
            }
        }
    }
})

export const {increment, decrement, evaluate,calc} = sumSlice.actions
export default sumSlice.reducer