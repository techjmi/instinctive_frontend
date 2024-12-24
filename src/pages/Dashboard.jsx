
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SidebarDash from "../components/SidebarDash";
import DashboardOverview from "../components/DashboardOverview";
import Students from "../components/Students";
import Chapter from "../components/Chapter";
import Help from "../components/Help";
import Setting from "../components/Setting";
import Report from "../components/Report";

const Dashboard = () => {
  const [tab, setTab] = useState("dash");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl); 
    }
  }, [location.search]); 

  return (
    <div className="md:min-h-screen flex flex-col md:flex-row">
      <div className="sidebar md:w-56">
        <SidebarDash />
      </div>

      <div className="w-full p-3 rounded-[12px] bg-white">
        {tab === "dash" && <DashboardOverview />}
        {tab === "student" && <Students />}
        {tab === "chapter" && <Chapter />}
        {tab === "help" && <Help />}
        {tab === "report" && <Report />}
        {tab === "setting" && <Setting />}
      </div>
    </div>
  );
};

export default Dashboard;
