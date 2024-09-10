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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="complete-profile" element={<CompleteProfile />} />
        <Route path="/register-login" element={<AuthContianer />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<Not_Found />} />
        <Route path="/guide-line" element={<Guide_line />} />
        <Route
          path="/owner/m_menu"
          element={
            <SubMobileMenu
              role={"کارفرمایان"}
              main_action={"ایجاد پروژه"}
              base_color={"border-blue_base"}
              second_item={"مشاهده پروژه های ایجاد شده"}
              last_item={"مشاهده درخواست های  فریلنسر ها"}
              target_link_1={"/owner/new-project"}
              target_link_2={"/owner"}
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
              target_link_1={"/freelancer/projectLists"}
              target_link_2={"/freelancer"}
            />
          }
        />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Navigate to="dashboard" />
              </ProtectedRoute>
            }
          />

          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <OwnerDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <Navigate to={"project-management"} replace />
                </ProtectedRoute>
              }
            />
            <Route
              path="project-management"
              element={
                <ProtectedRoute>
                  <ProjectManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="review-proposals/:id"
              element={
                <ProtectedRoute>
                  <Review_Proposals />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/owner/new-project" element={<NewProject />} />
        </Route>
        <Route path="/freelancer" element={<FreelancerLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Navigate to={"freelance-dashboard"} />{" "}
              </ProtectedRoute>
            }
          />

          <Route
            path="freelance-dashboard"
            element={
              <ProtectedRoute>
                <FreelanceDashboardLayout />{" "}
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <Navigate to={"proposal-management"} replace />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="proposal-management"
              element={
                <ProtectedRoute>
                  <ProposalManageMent />{" "}
                </ProtectedRoute>
              }
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
          <Route
            index
            element={
              <ProtectedRoute>
                <Navigate to={"dashboard"} />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <AdminDashBoardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute>
                  <UserManageMent />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
