import React from "react";
import { useState } from "react";
import PlaylistButtonPlay from "./PlaylistButtonPlay";
import PlaylistContextMenu from "./PlaylistContextMenu";
import PlaylistCover from "./PlaylistCover";
import PlaylistDescription from "./PlaylistDescription";
import PlaylistTitle from "./PlaylistTitle";

const menuItems = [
  {
    label: "Add to Your Library",
  },
  {
    label: "Share",
    subMenuItems: [
      {
        label: "Copy link to playlist",
      },
      {
        label: "Embed playlist",
      },
    ],
  },
  {
    label: "About recommendations",
  },
  {
    label: "Open in Desktop app",
  },
];

const Playlist = ({ classes, coverUrl, title, description }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  function openContexMenu(event) {
    event.preventDefault();

    setIsContextMenuOpen(true);
  }

  function closeContextMenu() {

    setIsContextMenuOpen(false);
  }

  return (
    <a
      href="/"
      className={`relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group ${classes}`}
      onContextMenu={openContexMenu}
    >
      <div className="relative">
        <PlaylistCover url={coverUrl} />
        <PlaylistButtonPlay />
      </div>
      <PlaylistTitle title={title} />
      <PlaylistDescription description={description} />
      {isContextMenuOpen && (
        <PlaylistContextMenu
          menuItems={menuItems}
          classes="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10"
          onClose={closeContextMenu}
        />
      )}
    </a>
  );
};

export default Playlist;
