import { Link } from "react-router-dom";

function TazminLinkLogo() {
  return (
    <Link to={"/"} className="flex justify-center md:w-fit md:mx-0 mx-auto">
      <div className="w-full flex justify-center ">
        <img
          src="../../../logo/sample_logo4.png"
          className="w-[112px]  text-transparent bg-transparent"
          alt=""
        />
      </div>
    </Link>
  );
}

export default TazminLinkLogo;
