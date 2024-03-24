import { Route, Routes } from "react-router-dom";
import "./index.css";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import AuthContianer from "./features/Authorization/AuthContianer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import CompleteProfile from "./features/Authorization/CompleteProfile";
import SubMobileMenu from "./pages/SubMobileMenu";
import HomePage from "./pages/HomePage";
import OwnerLayout from "./features/Owner/OwnerLayout";
import NewProject from "./features/Owner/NewProject";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer rtl={true} />

      <Routes>
        <Route path="/" element={<AuthContianer />}></Route>
        <Route path="complete-profile" element={<CompleteProfile />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/owner/m_menu"
          element={
            <SubMobileMenu
              role={"کارفرمایان"}
              main_action={"ایجاد پروژه"}
              base_color={"border-blue_base"}
              second_item={"مشاهده پروژه های ایجاد شده"}
              last_item={"مشاهده درخواست های  فریلنسر ها"}
            />
          }
        />
        <Route
          path="freelancer/m_menu"
          element={
            <SubMobileMenu
              role={"فریلنسر ها"}
              main_action={"ارسال پیشنهاد"}
              base_color={"border-error"}
              second_item={"مشاهده درخواست ها ارسال شده"}
              last_item={"مشاهده پروژه های کارفرمایان"}
            />
          }
          
        />
        <Route path="/owner" element={<OwnerLayout/>}>
          <Route path="new-project" element={<NewProject/>}/>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
