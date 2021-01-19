import React from "react";
import SidebarLinks from "../constants/sidebarLinks";

const Home = () => {
  const [isSidebarOpen, isSidebarOpenSet] = React.useState(true);

  return <div className="home">{isSidebarOpen && <SidebarLinks />}</div>;
};

export default Home;
