"use client";
import { useEffect, useState } from "react";
import { isFirebaseConfigured } from "../lib/firebase";
import { listItems } from "../lib/firestore";

export default function GalleryGrid() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setItems([]);
      return;
    }
    listItems("gallery").then(setItems).catch(() => setItems([]));
  }, []);

  if (items === null) return <p>Loading...</p>;
  if (items.length === 0) {
    return (
      <div className="note">
        {isFirebaseConfigured
          ? "Photos from school events will be published here soon."
          : "The photo gallery goes live once the school's content system is connected. Please check back soon."}
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {items.map((it) => (
        <figure key={it.id}>
          <img src={it.imageUrl} alt={it.caption || "School photo"} loading="lazy" />
          {it.caption && <figcaption>{it.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
