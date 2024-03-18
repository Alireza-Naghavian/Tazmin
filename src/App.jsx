import { Route, Routes } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import AuthContianer from "./features/Authorization/AuthContianer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ToastContainer} from "react-toastify"
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer rtl={true}/>
      <Routes>
        <Route path="/" element={<AuthContianer />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
