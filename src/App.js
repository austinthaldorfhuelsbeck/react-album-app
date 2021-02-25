import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [albums, setAlbums] = useState([]);

  // Load initial user data
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersFromAPI = await response.json();
      setUsers(usersFromAPI);
    }
    loadUsers();
  }, []);

  // Load album data
  useEffect(() => {
    async function loadAlbums() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${currentUser.id}`
      );
      const albumsFromAPI = await response.json();
      setAlbums(albumsFromAPI);
    }
    loadAlbums();
  }, [currentUser]);

  return (
    <div className="App container">
      <div className="row">
        <div className="left column col-sm">
          <UserList users={users} setCurrentUser={setCurrentUser} />
        </div>
        <div className="right column col-sm">
          <AlbumList user={currentUser} albums={albums} />
        </div>
      </div>
    </div>
  );
}
