import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

//import FavoriteIcon from '@mui/icons-material/Favorite';
//import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import HomeIcon from "@mui/icons-material/Home";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="" alt="logo" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists.map((playlist, i) => {
        return <SidebarOption key={i} title={playlist.name} />;
      })}
    </div>
  );
};

export default Sidebar;
