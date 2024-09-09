import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import AdminDashBoardLayout from "./features/Admin/dashboard/AdminDashBoardLayout";
import AdminLayout from "./features/Admin/dashboard/AdminLayout";
import UserManageMent from "./features/Admin/dashboard/UserManageMent";
import AuthContianer from "./features/Authorization/AuthContianer";
import CompleteProfile from "./features/Authorization/CompleteProfile";
import FreelanceDashboardLayout from "./features/Freelancer/Dashboard/FreelanceDashboardLayout";
import ProposalManageMent from "./features/Freelancer/Dashboard/ProposalManageMent";
import FreelancerLayout from "./features/Freelancer/FreelancerLayout";
import ProjectLists from "./features/Freelancer/ProjectLists";
import SingleProjectData from "./features/Freelancer/SingleProjectData";
import OwnerDashboardLayout from "./features/Owner/Dashboard/OwnerDashboardLayout";
import ProjectManagement from "./features/Owner/Dashboard/ProjectManagement";
import Review_Proposals from "./features/Owner/Dashboard/Review_Proposals";
import NewProject from "./features/Owner/NewProject";
import OwnerLayout from "./features/Owner/OwnerLayout";
import ProtectedRoute from "./features/ProtectedRoute/ProtectedRoute";
import "./index.css";
import AboutUs from "./pages/AboutUs";
import Guide_line from "./pages/Guide_line";
import HomePage from "./pages/HomePage";
import Not_Found from "./pages/Not_Found";
import SubMobileMenu from "./pages/SubMobileMenu";
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
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/about-us" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
          <Route path="*" element={<ProtectedRoute><Not_Found /></ProtectedRoute>} />
          <Route path="/guide-line" element={<ProtectedRoute><Guide_line /></ProtectedRoute>} />
          <Route
            path="/owner/m_menu"
            element={
              <ProtectedRoute>

              <SubMobileMenu
                role={"کارفرمایان"}
                main_action={"ایجاد پروژه"}
                base_color={"border-blue_base"}
                second_item={"مشاهده پروژه های ایجاد شده"}
                last_item={"مشاهده درخواست های  فریلنسر ها"}
                target_link_1={"/owner/new-project"}
                target_link_2={"/owner"}
                />
                </ProtectedRoute>
            }
          />
          <Route
            path="freelancer/m_menu"
            element={
              <ProtectedRoute>
              <SubMobileMenu
                role={"فریلنسر ها"}
                main_action={"ارسال پیشنهاد"}
                base_color={"border-error"}
                second_item={"مشاهده درخواست ها ارسال شده"}
                last_item={"مشاهده پروژه های کارفرمایان"}
                target_link_1={"/freelancer/projectLists"}
                target_link_2={"/freelancer"}
                />
                </ProtectedRoute>
            }
          />
          <Route
            path="/owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<OwnerDashboardLayout />}>
              <Route
                index
                element={<Navigate to={"project-management"} replace />}
              />
              <Route
                path="project-management"
                element={<ProjectManagement />}
              />
              <Route
                path="review-proposals/:id"
                element={<Review_Proposals />}
              />
            </Route>
            <Route path="new-project" element={<NewProject />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />{" "}
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"freelance-dashboard"} />} />
            <Route
              path="freelance-dashboard"
              element={<FreelanceDashboardLayout />}
            >
              <Route
                index
                element={<Navigate to={"proposal-management"} replace />}
              />
              <Route
                path="proposal-management"
                element={<ProposalManageMent />}
              />
            </Route>
            <Route index element={<Navigate to={"projectLists"} />} />
            <Route path="projectLists" element={<ProjectLists />}></Route>
            <Route path="projectLists/:id" element={<SingleProjectData />} />
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path="dashboard" element={<AdminDashBoardLayout />}>
              <Route index element={<UserManageMent />} />
            </Route>
          </Route>
        </Routes>

    </QueryClientProvider>
  );
}

export default App;
