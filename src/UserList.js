import React from "react";

export default function UserList({ users, setCurrentUser }) {
  return (
    <div className="d-flex">
      <ul className="list-group list-group-flush mx-auto">
        {users.map((user) => (
          <li key={user.id} className="list-group-item mx-auto">
            <button
              className="btn btn-dark"
              type="button"
              onClick={() => setCurrentUser(user)}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
