import React from 'react'

function Loader_round({
    loadingCondition,
    width = "w-6",
    height = "h-6",
    className,
  }) {
  return (
    <div className="flex items-center justify-center">
    <svg
      className={`${width} ${height} ${
        loadingCondition ? "block" : "hidden"
      } animate-spin ${className} `}
      viewBox="0 0 100 100"
    >
      <circle
        fill="none"
        strokeWidth="10"
        className="stroke-current opacity-40"
        cx="50"
        cy="50"
        r="40"
      />
      <circle
        fill="none"
        strokeWidth="10"
        className="stroke-current"
        strokeDasharray="250"
        strokeDashoffset="210"
        cx="50"
        cy="50"
        r="40"
      />
    </svg>
  </div>
  )
}

export default Loader_round