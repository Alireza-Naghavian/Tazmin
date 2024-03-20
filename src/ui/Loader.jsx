import React from 'react'
import {Bars} from "react-loader-spinner"
function Loader({width = "60",height="40",mt="",color="rgb(74 109 255)"}) {
  return (
    <Bars
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

export default Loader