import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Tutorial from "./pages/Tutorial";
import Quests from "./pages/Quests";

const RoutesTree = () => {
  return (
    <div>
      <Routes>
        <Route path="/tutorial" element={<Tutorial />}></Route>
        <Route path="/quests" element={<Quests />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default RoutesTree;
