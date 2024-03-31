import {  Puff } from "react-loader-spinner"

function Circle_loader({width = "60",height="40",mt="",color="rgb(74 109 255)"}) {
  return (
   <Puff
   visible={true}
   width={width}
   height={height}
   color={color}
   wrapperStyle={{
       marginTop:mt
   }}
   
   
   />
  )
}

export default Circle_loader