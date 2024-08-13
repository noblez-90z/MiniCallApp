import { useState } from "react";
import { Link } from "react-router-dom";

const CallLogin = () => {
  const [email, setEmial] = useState("");
  return (
    <div className=" px-5 h-screen bg-[#93c5fd]">
      <h1 className="text-2xl font-bold py-5 px-2 capitalize text-white">
        meet a friend
      </h1>
      <div className="shadow-md mx-auto mt-14 lg:w-[60%] bg-[#f2f2f2] rounded-md px-2">
        <h1 className="font-bold text-xl text-center mx-auto py-10 capitalize">
          welcome
        </h1>
        <div className="">
          <div className=" w-full px-3 py-4 my-5  ">
            <label className="font-bold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmial(e.target.value)}
              placeholder="Enter your email here"
              className="border border-gray-300 w-full outline-none rounded py-2 px-2"
            />
          </div>
          <button className=" block w-[200px] py-2 px-5 capitalize mx-auto my-3 rounded-2xl bg-blue-500  text-white font-bold text-xl hover:bg-blue-700">
            <Link to="/CallHomePage"> login</Link>
          </button>
          <p className="pr-2 py-5 capitalize">
            Don't have an account? sign up
            <Link to="/CallSignUp" className="pl-1 text-blue-500 font-bold ">
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallLogin;
