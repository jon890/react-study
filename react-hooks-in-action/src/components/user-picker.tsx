import { DB } from "@/static";

export default function UserPicker() {
  const users = DB.users;

  return (
    <select>
      <option>Users</option>
      {users.map((u) => (
        <option key={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
