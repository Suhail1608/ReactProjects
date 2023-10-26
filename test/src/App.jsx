import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {evaluate, calc} from './features/sumSlice/sumSlice'
import useEval from './hooks/useEval'
import { useEffect } from 'react'

function App() {
  const value = useSelector((state)=>state.sum.value)
  const dispatch = useDispatch()
  const [val, sumValue, clearValue] = useEval(value)
  useEffect(()=>{
    dispatch(evaluate(val))
  },[val])
  function handleSum(){
    sumValue(value)
  }
  function handleClear(){
    clearValue()
    dispatch(evaluate(""))
  }
  return (
    <>
      <div className='main'>
        <div className='calc'>
          <div className='display-box'>
            {/* <textarea draggable={false} style={{resize:"none"}} value={value}></textarea> */}
            <input value={value} readOnly></input>
          </div>
          <div className='button-box'>
            <button onClick={()=>{dispatch(calc("+"))}}>+</button>
            <button onClick={()=>{dispatch(calc("-"))}}>-</button>
            <button onClick={()=>{dispatch(calc("*"))}}>x</button>
            <button onClick={()=>{dispatch(calc("/"))}}>/</button>
            <div className='button-box-num'>
              <button onClick={()=>{dispatch(calc("7"))}}>7</button>
              <button onClick={()=>{dispatch(calc("8"))}}>8</button>
              <button onClick={()=>{dispatch(calc("9"))}}>9</button>
              <button onClick={()=>{dispatch(calc("4"))}}>4</button>
              <button onClick={()=>{dispatch(calc("5"))}}>5</button>
              <button onClick={()=>{dispatch(calc("6"))}}>6</button>
              <button onClick={()=>{dispatch(calc("1"))}}>1</button>
              <button onClick={()=>{dispatch(calc("2"))}}>2</button>
              <button onClick={()=>{dispatch(calc("3"))}}>3</button>
              <button onClick={()=>{dispatch(calc("0"))}}>0</button>
              <button onClick={()=>{dispatch(calc("."))}}>.</button>
              <button onClick={handleClear}>C</button>
            </div>
            <div className='button-box-sum'>
              <button onClick={handleSum}>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
