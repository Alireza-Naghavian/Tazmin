import HomePage from "../../pages/HomePage";
import { Link} from "react-router-dom"
import NavBar from "../../pages/NavBar";
function Home() {
  return (
    <div>
      <HomePage>
       <Link to={"/home"}>
        <img src="../logo/sample_logo4.png" className="w-[112px]  text-transparent bg-transparent" alt="" />
       </Link>
       <NavBar/>
      </HomePage>
    </div>
  );
}

export default Home;
