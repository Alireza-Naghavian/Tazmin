import { Outlet } from "react-router-dom"
import Header from "../../pages/Header"
import NewProjectLayout from "./NewProjectLayout"
import Footer from "../../ui/Footer"

function NewProject() {
  return (
    <div>
    <div>
        <Header>
            <Outlet/>
        </Header>
    </div>
    <div className="w-full sm:px-20 px-8 container relative pt-12 pb-9 max-w-[1280px]">
        <NewProjectLayout/>
    </div>
    <div className="border-t border-t-gray_base w-full mt-16 ">
        <Footer />
      </div>
    </div>
  )
}

export default NewProject