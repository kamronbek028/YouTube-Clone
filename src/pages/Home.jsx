import React from "react";

import SidebarLinks from "../constants/sidebarLinks";
import PopularVideos from "../components/PopularVideos";

const Home = () => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [isSidebarOpen, isSidebarOpenSet] = React.useState(true);

  return (
    <div className="home">
      {isSidebarOpen && <SidebarLinks />}
      <PopularVideos apiKey={apiKey} />
    </div>
  );
};

export default Home;
