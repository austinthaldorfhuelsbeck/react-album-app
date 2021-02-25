import React from "react";

export default function AlbumList({ user = {}, albums }) {
  if (!user.id) return <p>Please click on a user name to the left</p>;
  if (albums.length > 0) {
    return (
      <div className="text-center mx-auto">
        <h1>{user.name} Albums:</h1>
        <ul className="album-list">
          {albums.map((album) => (
            <li key={album.id} className="py-2">
              {album.id} - {album.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <p>Loading...</p>;
}
