import { Route, Routes } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContianer from "./features/Authorization/AuthContianer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import Home from "./features/Home/Home";
import CompleteProfile from "./features/Authorization/CompleteProfile";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer rtl={true} />
      <Routes>
        <Route path="/" element={<AuthContianer />}></Route>
        <Route path="complete-profile" element={<CompleteProfile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App;
