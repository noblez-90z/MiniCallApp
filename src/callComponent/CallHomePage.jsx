import { faBars, faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CallHomePage = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem("username"));
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const [userInfo, setUserInfo] = useState(false);
  const display = () => {
    setUserInfo(!userInfo);
  };
  const [menu, setMenu] = useState(false);
  const drop = () => {
    setMenu(!menu);
  };

  return (
    <div className="h-screen px-2 bg-[#93c5fd]">
      <h1 className="font-extrabold font-3xl font-sans p-3 capitalize text-slate-100">
        welcome
        <span className="pl-2 text-blue-700 capitalize">{name}</span>
      </h1>
      <div className=" lg:w-[60%] mx-auto px-4 rounded-xl bg-[#fBfBfB]">
        <h1 className="capitalize font-bold text-xl py-4 text-center">
          make a call
        </h1>
        <div className="">
          <input
            type="search"
            placeholder="Search user"
            className="w-full border rounded-xl py-3 px-2 outline-none"
          />
        </div>
        <div className="">
          <h2 className="font-bold font-xl p-3 capitalize">friends</h2>
          <div className="block md:flex  rounded-xl shadow-md my-2">
            <div className="w-full bg-[#f3f4f6] px-4 rounded-xl ">
              <div className="cursor-pointer  relative" onClick={display}>
                <span
                  className="cursor-pointer absolute right-1 mt-3 w-5 h-5 "
                  onClick={drop}
                >
                  <FontAwesomeIcon icon={faBars} />
                  {menu && (
                    <nav>
                      <div className="block w-fit absolute right-1 list-none border py-2 px-3   font-bold cursor-pointer rounded shadow capitalize ">
                        <li>delete</li>
                      </div>
                    </nav>
                  )}
                </span>
                <div className="px-2 py-2">
                  <p className="font-semibold text-xl capitalize">
                    joel asuquo{" "}
                  </p>
                  <p>donnellnoblex@gmail.com</p>
                </div>
                <div className="flex mx-auto justify-between w-full py-5">
                  <button className="px-5 py-2 capitalize border w-[200px] rounded-md font-bold bg-blue-600 text-slate-200 hover:bg-blue-700">
                    <FontAwesomeIcon icon={faVideo} className="pr-2" />
                    <Link to="/VideoCall">video</Link>
                  </button>
                  <button className="  px-5 capitalize border w-[200px] rounded-md font-bold bg-blue-600 text-slate-200 hover:bg-blue-700">
                    <FontAwesomeIcon icon={faPhone} className="pr-2" />
                    <Link to="/AudioCall">audio</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallHomePage;
