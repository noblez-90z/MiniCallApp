import { useState } from "react";
import { Link } from "react-router-dom";

const CallSignUp = () => {
  const [email, setEmial] = useState("");
  const [username, setUsername] = useState("");

  const handle = () => {
    localStorage.setItem("emial", email);
    localStorage.setItem(username, JSON.stringify(username));
  };
  const remove = () => {
    localStorage.removeItem("emial");
    localStorage.removeItem("username");
  };

  return (
    <div className=" px-5 h-screen bg-[#93c5fd]">
      <h1 className="text-2xl font-bold py-5 px-2 capitalize text-[#f2f2f2]">
        meet a friend
      </h1>
      <div className=" mx-auto mt-14 lg:w-[60%] rounded-md bg-[#fbfbfb]">
        <h1 className="font-bold text-2xl text-center mx-auto py-8 capitalize">
          sign up
        </h1>
        <div className="">
          <div className=" w-full px-3 py-4 my-5">
            <label className="font-bold">Email:</label>
            <input
              type="email"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmial(e.target.value)}
              className="border border-gray-300 w-full outline-none rounded py-2 px-2"
            />
          </div>

          <div className=" w-full px-3 py-4 my-5">
            <label className="font-bold">Username:</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 w-full outline-none rounded py-2 px-2"
            />
          </div>
          <button className=" block w-[200px] py-2 px-5 capitalize mx-auto my-3 rounded-2xl bg-blue-500  text-white font-bold text-xl hover:bg-blue-700">
            <Link to="/" onClick={handle}>
              sign up
            </Link>
          </button>
          <p className="pl-2 py-3 capitalize">
            already have an account? login
            <Link to="/" className="pl-1 text-blue-500 font-bold ">
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallSignUp;
