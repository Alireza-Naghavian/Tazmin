
function Header({children}) {
  return (
    <div className="w-full shadow-sm relative flex items-center h-16 z-10 gap-5 md:px-10">
        {children}
    </div>
  )
}

export default Header