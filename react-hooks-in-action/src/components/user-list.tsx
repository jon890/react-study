"use client";

import { DB } from "@/static";
import { useState } from "react";

export default function UserList() {
  const users = DB.users;
  const [userIndex, setUserIndex] = useState(1);

  return (
    <ul className="bookables items-list-nav">
      {users.map((b, i) => (
        <li key={b.id} className={i === userIndex ? "selected" : ""}>
          <button className="btn" onClick={() => setUserIndex(i)}>
            {b.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
