import {
  faChevronCircleLeft,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const VideoCall = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate(-1);
  };
  return (
    <div className="lg:bg-[#93c5fd] h-screen flex justify-center items-center">
      <div className="relative shadow-lg lg:bg-white w-full md:w-[60%] mx-auto h-screen lg:h-96  rounded">
        <div className="">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={change}
            size="2x"
            color="blue"
            className="p-2 cursor-pointer"
          />
        </div>
        <div className="absolute flex justify-center bottom-3  w-full ">
          <button className=" text-white py-2 px-5 bg-red-500 rounded-full">
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </div>
        <div className="absolute border w-40 h-40 right-1 rounded"></div>
      </div>
    </div>
  );
};

export default VideoCall;
