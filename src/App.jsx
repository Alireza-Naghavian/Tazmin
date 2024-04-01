import { Navigate, Route, Routes } from "react-router-dom";
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
import OwnerDashboardLayout from "./features/Owner/Dashboard/OwnerDashboardLayout";
import ProjectManagement from "./features/Owner/Dashboard/ProjectManagement";
import Review_Proposals from "./features/Owner/Dashboard/Review_Proposals";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FreelancerLayout from "./features/Freelancer/FreelancerLayout";
import FreelanceDashboardLayout from "./features/Freelancer/Dashboard/FreelanceDashboardLayout";
import ProposalManageMent from "./features/Freelancer/Dashboard/ProposalManageMent";
import ProjectLists from "./features/Freelancer/ProjectLists";
import SingleProjectData from "./features/Freelancer/SingleProjectData";
const queryClient = new QueryClient();
function App() {
  AOS.init({
    delay: 500, 
    duration: 600, 
    
  });
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
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<OwnerDashboardLayout />}>
            <Route index element={<Navigate to={"project-management"} replace />}/>
            <Route path="project-management" element={<ProjectManagement />}/>
            <Route path="review-proposals/:id" element={<Review_Proposals />} />
          </Route>
          <Route path="new-project" element={<NewProject />} />
        </Route>
        <Route path="/freelancer" element={<FreelancerLayout/>}>
          <Route  index element={<Navigate to={"freelance-dashboard"}/>}/>
          <Route path="freelance-dashboard" element={<FreelanceDashboardLayout/>} >
          <Route index element={<Navigate to={"proposal-management"} replace/>}/>
          <Route path="proposal-management" element={<ProposalManageMent/>}/>
          </Route>
          <Route index element={<Navigate to={"projectLists"}/>}/>
          <Route path="projectLists" element={<ProjectLists/>} >
          </Route>
          <Route path="projectLists/:id" element={<SingleProjectData/>}/>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
