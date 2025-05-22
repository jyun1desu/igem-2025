import { Routes, Route } from "react-router";
import Layout from "@/pages/Layout";
import Home from '@/pages/Home';
import Team from '@/pages/Team';
import Project from '@/pages/Project';
import WetLab from '@/pages/WetLab';
import DryLab from '@/pages/DryLab';
import OurModel from '@/pages/OurModel';
import HumanPractice from '@/pages/HumanPractice';


function App() {

  return (
    <Routes>
      <Route path="/"element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/team/:tab" element={<Team />} />
        <Route path="/project/:tab" element={<Project />} />
        <Route path="/wet-lab/:tab" element={<WetLab />} />
        <Route path="/dry-lab/:tab" element={<DryLab />} />
        <Route path="/our-model" element={<OurModel />} />
        <Route path="/human-practice/:tab" element={<HumanPractice />} />
      </Route>
    </Routes>
  )
}

export default App
