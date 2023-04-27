import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/MyNavbar";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Footer from "./components/Footer";
import Careers from "./Pages/Careers";
import DotNetDeveloper from "./Pages/JobRoles/dot-net-developer/DotNetDeveloper";
import CloudArchitecture from "./Pages/JobRoles/cloud-architecture/CloudArchitecture";
import Python from "./Pages/JobRoles/python/Python";
import NetworkEngineer from "./Pages/JobRoles/network-engineer/NetworkEngineer";
import ServiceDeskManager from "./Pages/JobRoles/service-desk-manager/ServiceDeskManager";
import ScrumMaster from "./Pages/JobRoles/scrum-master/ScrumMaster";
import SalesMarketing from "./Pages/JobRoles/sales-marketing/SalesMarketingExecutive";
import Home from "./Pages/Home";
import Service1 from "./Pages/services/Development/CloudSolutions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/dot-net-developer" element={<DotNetDeveloper />} />
        <Route path="/cloud-architecture" element={<CloudArchitecture />} />
        <Route path="/python" element={<Python />} />
        <Route path="/network-engineer" element={<NetworkEngineer />} />
        <Route path="/service-desk-manager" element={<ServiceDeskManager />} />
        <Route path="/scrum-master" element={<ScrumMaster />} />
        <Route path="/sales-marketing" element={<SalesMarketing />} />
        <Route path="/service1" element={<Service1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
