import Link from "next/link";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/bookings" className="btn btn-header">
            <FaCalendarAlt />
            <span>Bookings</span>
          </Link>
        </li>
        <li>
          <Link href="/bookables" className="btn btn-header">
            <FaDoorOpen />
            <span>Bookables</span>
          </Link>
        </li>
        <li>
          <Link href="/users" className="btn btn-header">
            <FaUsers />
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
