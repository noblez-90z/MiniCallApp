import {
  faChevronCircleLeft,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const AudioCall = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate(-1);
  };
  return (
    <div className="bg-[#93c5fd] h-screen  flex justify-center items-center">
      <div className=" block  relative  w-full md:w-[60%] mx-auto h-screen lg:h-96  rounded bg-slate-400">
        <div className="">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={change}
            size="2x"
            color="black"
            className="p-2 cursor-pointer"
          />
        </div>
        <div className=" block mx-auto text-center mt-10">
          <FontAwesomeIcon icon={faUser} className="text-9xl" size="2xl" />
        </div>
        <div className="absolute flex justify-center bottom-3   w-full  ">
          <button className=" text-white py-2 px-5 bg-red-500 rounded-full">
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioCall;
