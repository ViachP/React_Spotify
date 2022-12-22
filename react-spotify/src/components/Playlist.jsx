import React from "react";
import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistContextMenu from "./PlaylistContextMenu";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";

const Playlist = () => {
  return (
    <a
      href="/"
      className=" relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group"
    >
      <div className="relative">
        <PlaylistCover />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle />
      <PlaylistDescription />
      <PlaylistContextMenu />
    </a>
  );
};

export default Playlist;
