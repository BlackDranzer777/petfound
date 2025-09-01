import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/index.jsx";
import Landing from "./pages/Landing/index.jsx";
// import FindPet from "./pages/FindPet";
// import ReportPet from "./pages/ReportPet";
// import PetDetails from "./pages/PetDetails";
// import NGOListing from "./pages/NGOListing";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
// import Support from "./pages/Support";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/find" element={<FindPet />} />
        <Route path="/report" element={<ReportPet />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/ngo" element={<NGOListing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} /> */}
      </Routes>
    </Layout>
  );
}
