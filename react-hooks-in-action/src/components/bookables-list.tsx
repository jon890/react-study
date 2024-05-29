"use client";

import { DB } from "@/static";
import { getUniqueValues } from "@/utils/util";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function BookablesList() {
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = DB.bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  // @ts-ignore
  const groups = getUniqueValues(DB.bookables, "group");

  const bookable = bookablesInGroup[bookableIndex];
  const [hasDetails, setHasDetails] = useState(false);

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }

  return (
    <>
      <div>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {groups.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : ""}>
              <button className="btn" onClick={() => setBookableIndex(i)}>
                {b.title}
              </button>
            </li>
          ))}
        </ul>
        <p>
          <button className="btn" onClick={nextBookable} autoFocus>
            <FaArrowRight></FaArrowRight>
            <span>Next</span>
          </button>
        </p>
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails((has) => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{DB.days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.sort().map((s) => (
                      <li key={s}>{DB.sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
