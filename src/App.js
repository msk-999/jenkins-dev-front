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
import Service1 from "./Pages/services/Ims/CloudSolutions";
import Service2 from "./Pages/services/Ims/DatecenterMigration";
import Service3 from "./Pages/services/Ims/ManagedServices";
import Service4 from "./Pages/services/DevOps/DevOps";
import Service5 from "./Pages/services/Development/Software";
import Service6 from "./Pages/services/Development/Wesite";
import Service7 from "./Pages/services/Development/ECommerce";
import Blog from "./Pages/blogs/ItSupportBlog";
import Blog1 from "./Pages/blogs/BlogPages/ChooseRightNac";
import Blog2 from "./Pages/blogs/BlogPages/ShallIgoWithItOutsourcing";
import Blog3 from "./Pages/blogs/BlogPages/WhatIsMobileAppDevelopment";
import Blog4 from "./Pages/blogs/BlogPages/DatacenterManagementServices";
import Blog5 from "./Pages/blogs/BlogPages/ROI";
import Blog6 from "./Pages/blogs/BlogPages/BusinessPlan";
import Blog7 from "./Pages/blogs/BlogPages/CustomSoftwareDevelopment";
import Blog8 from "./Pages/blogs/BlogPages/IMS";
import Blog9 from "./Pages/blogs/BlogPages/BenifitsOfBYOD";
import Blog10 from "./Pages/blogs/BlogPages/InfrastructureManagement";
import Blog11 from "./Pages/blogs/BlogPages/ModernECommerce";
import Blog12 from "./Pages/services/Development/ECommerce";
import Blog13 from "./Pages/blogs/BlogPages/DataCenterMonitoring";
import Blog14 from "./Pages/blogs/BlogPages/SoftwareDevelopmentProsCons";
import Blog15 from "./Pages/blogs/BlogPages/CloudMigration";
import Blog16 from "./Pages/blogs/BlogPages/CloudMigrationPlan";
import Blog17 from "./Pages/blogs/BlogPages/NewEcommerce";
import Blog18 from "./Pages/blogs/BlogPages/Multicloud";
import Blog19 from "./Pages/blogs/BlogPages/TechTrends";
import Blog20 from "./Pages/blogs/BlogPages/BigData";
import Blog21 from "./Pages/blogs/BlogPages/ArtificialIntelligence";
import Blog22 from "./Pages/blogs/BlogPages/IT";
import Blog23 from "./Pages/blogs/BlogPages/CustomSoftware";
import Blog24 from "./Pages/blogs/BlogPages/CloudDataSecurity";
import Blog25 from "./Pages/blogs/BlogPages/WFH";
import Blog26 from "./Pages/blogs/BlogPages/DisasterRecoveryPlan";
import Blog27 from "./Pages/blogs/BlogPages/TeamBuilding";
import Blog28 from "./Pages/blogs/BlogPages/TimeManagementTechnique";
import Blog29 from "./Pages/blogs/BlogPages/BusinessAutomation";
import Blog30 from "./Pages/blogs/BlogPages/ITOutsourcing";
import Blog31 from "./Pages/blogs/BlogPages/SoftwareManagementTool";
import Blog32 from "./Pages/blogs/BlogPages/Intrapreneurship";
import Blog33 from "./Pages/blogs/BlogPages/AvoidProblems";
import Blog34 from "./Pages/blogs/BlogPages/ItInfrastructureManagement";
import Blog35 from "./Pages/blogs/BlogPages/DevOpsIT";
import Blog36 from "./Pages/blogs/BlogPages/MobileAppDevlopment";
import Blog37 from "./Pages/blogs/BlogPages/WebApplication";
import Blog38 from "./Pages/blogs/BlogPages/CloudComputingBlog";
import DigitalMarketing from "./Pages/DigitalMarketing";

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
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/cloud-solutions" element={<Service1 />} />
        <Route path="/datacenter-migration" element={<Service2 />} />
        <Route path="/managed-services" element={<Service3 />} />
        <Route path="/devops" element={<Service4 />} />
        <Route path="/software-development" element={<Service5 />} />
        <Route path="/website-development" element={<Service6 />} />
        <Route path="/ecommerce-development" element={<Service7 />} />
        <Route path="/it-support-blog" element={<Blog />} />
        <Route
          path="/blogs/choose-a-right-nac-network-access-control-for-your-office"
          element={<Blog1 />}
        />
        <Route
          path="/blogs/shall-i-go-with-it-outsourcing"
          element={<Blog2 />}
        />
        <Route path="/blogs/mobile_app_development" element={<Blog3 />} />
        <Route
          path="/blogs/datacenter-management-services"
          element={<Blog4 />}
        />
        <Route
          path="/blogs/how-technology-can-improve-roi"
          element={<Blog5 />}
        />
        <Route
          path="/blogs/what-is-business-continuity-plan"
          element={<Blog6 />}
        />
        <Route
          path="/blogs/why-custom-software-development"
          element={<Blog7 />}
        />
        <Route path="/blogs/what-is-ims" element={<Blog8 />} />
        <Route path="/blogs/benefits-of-byod" element={<Blog9 />} />
        <Route
          path="/blogs/what-is-infrastructure-management"
          element={<Blog10 />}
        />
        <Route
          path="/blogs/importance-of-modern-e-commerce"
          element={<Blog11 />}
        />
        <Route path="/blogs/e-commerce-development" element={<Blog12 />} />
        <Route path="/blogs/data-center-monitoring" element={<Blog13 />} />
        <Route
          path="/blogs/pros-and-cons-of-software-development"
          element={<Blog14 />}
        />
        <Route
          path="/blogs/dos-donts-while-doing-cloud-migration"
          element={<Blog15 />}
        />
        <Route
          path="/blogs/how-to-makea-a-cloud-migration-plan"
          element={<Blog16 />}
        />
        <Route path="/blogs/are-you-e-commerce-newbie" element={<Blog17 />} />
        <Route path="/blogs/what-is-multicloud" element={<Blog18 />} />
        <Route path="/blogs/top-technology-trends" element={<Blog19 />} />
        <Route
          path="/blogs/are-you-ignoring-big-data-dont-do-that"
          element={<Blog20 />}
        />
        <Route
          path="/blogs/artificial-intelligence-tools"
          element={<Blog21 />}
        />
        <Route
          path="/blogs/information-technology-in-india"
          element={<Blog22 />}
        />
        <Route path="/blogs/do-you-need-custom-software" element={<Blog23 />} />
        <Route path="/blogs/cloud-data-security" element={<Blog24 />} />
        <Route
          path="/blogs/work-from-home-or-work-from-office"
          element={<Blog25 />}
        />
        <Route path="/blogs/disaster-recovery-plan" element={<Blog26 />} />
        <Route
          path="/blogs/points-you-should-know-for-team-building"
          element={<Blog27 />}
        />
        <Route path="/blogs/time-management-technique" element={<Blog28 />} />
        <Route
          path="/blogs/business_automation_benefits"
          element={<Blog29 />}
        />
        <Route path="/blogs/why-it-outsourcing" element={<Blog30 />} />
        <Route
          path="/blogs/why-entrepreneurs-use-software-management-tools-to-boost-business"
          element={<Blog31 />}
        />
        <Route
          path="/blogs/3-reasons-why-intrapreneurship"
          element={<Blog32 />}
        />
        <Route
          path="/blogs/common-problems-in-software-development"
          element={<Blog33 />}
        />
        <Route
          path="/blogs/it-infrastructure-management"
          element={<Blog34 />}
        />
        <Route path="/blogs/devops-it-blog" element={<Blog35 />} />
        <Route
          path="/blogs/mobile-application-development"
          element={<Blog36 />}
        />
        <Route path="/blogs/what-web-applications-do" element={<Blog37 />} />
        <Route path="/blogs/cloud-computing-blog" element={<Blog38 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
