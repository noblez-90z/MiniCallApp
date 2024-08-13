import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CallSignUp from "./callComponent/CallSignUp";
import CallHomePage from "./callComponent/CallHomePage";
import CallLogin from "./callComponent/CallLogin";
import VideoCall from "./callComponent/VideoCall";
import AudioCall from "./callComponent/AudioCall";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/CallHomePage" element={<CallHomePage />} />
          <Route path="/CallSignUp" element={<CallSignUp />} />
          <Route path="/" element={<CallLogin />} />
          <Route path="/VideoCall" element={<VideoCall />} />
          <Route path="/AudioCall" element={<AudioCall />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
