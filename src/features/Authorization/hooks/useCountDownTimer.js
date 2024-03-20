import { useEffect, useState } from "react"

const useCountDownTimer = ()=>{
    const [minutes,setMinutes] = useState(0);
    const [seconds,setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            if(seconds > 0){
                setSeconds(seconds - 1)
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(interval)
                }else{
                    setSeconds(59)
                    setMinutes(minutes -1)
                }
            }
          
        }, 1000);
        return ()=>{
           clearInterval(interval)     
        }
    },[minutes,seconds])
    return {setMinutes,setSeconds ,minutes,seconds}
}
export default useCountDownTimer