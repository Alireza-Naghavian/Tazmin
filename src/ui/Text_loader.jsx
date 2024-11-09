import React from 'react'
import Loader_round from './Loader_round'

function Text_loader({ loadingCondition ,className}) {
  return (
    <div className={`${className} flex  gap-x-2 items-center `}>
    <span>
      <Loader_round loadingCondition={loadingCondition} />
    </span>
    <span className="">درحال بارگزاری...</span>
  </div>
  )
}

export default Text_loader