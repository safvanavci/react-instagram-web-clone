import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import NotFound from "./pages/NotFound";
import Mobile from "./components/mobile/Mobile";
import { MainContext } from "./context/Context";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [follow, setfollow] = useState(true);
  const [pop, setPop] = useState("");
  const [liked, setLiked] = useState(false);
  const [popup, setPopup] = useState(false);
  const [comment, setComment] = useState("");

  const data = {
    list,
    setList,
    follow,
    setfollow,
    pop,
    setPop,
    liked,setLiked,
    popup,
    setPopup,
    comment,
    setComment

  };

  return (
    <MainContext.Provider value={data} >
      <div className="flex">

      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile/*" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Mobile />
      </div>
    </MainContext.Provider>
  );
}

export default App;
