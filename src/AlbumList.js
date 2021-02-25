import React from "react";

export default function AlbumList({ user = {}, albums }) {
  if (user.id) {
    return (
      <ul className="album-list">
        {albums.map((album) => (
          <li key={album.id} className="text-center py-2">
            {album.id} - {album.title}
          </li>
        ))}
      </ul>
    );
  }
  return <p>Please click on a user name to the left</p>;
}
