"use client";
import { useEffect, useState } from "react";
import { isFirebaseConfigured } from "../lib/firebase";
import { listItems } from "../lib/firestore";

const EMPTY_TEXT = {
  news: "School news will be published here soon.",
  events: "Upcoming events will be published here soon.",
  notices: "Notices and circulars will be published here soon.",
};

export default function PublicList({ kind }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setItems([]);
      return;
    }
    listItems(kind).then(setItems).catch(() => setItems([]));
  }, [kind]);

  if (items === null) return <p>Loading...</p>;
  if (items.length === 0) {
    return (
      <div className="note">
        {isFirebaseConfigured
          ? EMPTY_TEXT[kind]
          : "This section goes live once the school's content system is connected. Please check back soon."}
      </div>
    );
  }

  return (
    <div>
      {items.map((it) => (
        <article className="item" key={it.id}>
          {it.date && <span className="date">{it.date}</span>}
          <h3>{it.title}</h3>
          {it.time && <p><strong>{it.time}</strong></p>}
          {it.body && <p>{it.body}</p>}
          {it.description && <p>{it.description}</p>}
          {it.link && (
            <p><a href={it.link} target="_blank" rel="noopener noreferrer">View attachment &raquo;</a></p>
          )}
        </article>
      ))}
    </div>
  );
}
