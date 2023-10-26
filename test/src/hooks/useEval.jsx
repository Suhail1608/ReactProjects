import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useEval(val) {
    const [value, setValue] = useState(val)
    useEffect(()=>{
        setValue(value)
        console.log(value)
    },[val])

    function sumValue(value){
        try{
            return (
                setValue(eval(value))    
            )
        }catch{
            return (
                null  
            )
        }
       
       
    }
    function clrValue(){
        return setValue("")
    }
    return(
        [value,
        sumValue,
        clrValue]
    )
    
  
}

