"use client";
import { useEffect, useState } from "react";
import { listItems, createItem, updateItem, deleteItem, uploadGalleryImage } from "../../lib/firestore";

const FIELDS = {
  notices: [
    { name: "title", label: "Notice title", required: true },
    { name: "date", label: "Date (e.g. 12 Nov 2026)" },
    { name: "body", label: "Details", textarea: true },
    { name: "link", label: "Attachment link (optional PDF URL)" },
  ],
  news: [
    { name: "title", label: "News headline", required: true },
    { name: "date", label: "Date (e.g. 12 Nov 2026)" },
    { name: "body", label: "News text", textarea: true },
  ],
  events: [
    { name: "title", label: "Event name", required: true },
    { name: "date", label: "Date (e.g. 14 Dec 2026)" },
    { name: "time", label: "Time (e.g. 9:00 am - 2:30 pm)" },
    { name: "description", label: "Description", textarea: true },
  ],
  gallery: [
    { name: "caption", label: "Caption" },
  ],
};

export default function CollectionManager({ kind }) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const fields = FIELDS[kind];

  async function refresh() {
    try {
      setItems(await listItems(kind));
    } catch (e) {
      setErr("Could not load items. Check your Firestore rules (see README.md).");
    }
  }

  useEffect(() => { refresh(); }, [kind]);

  async function onSubmit(e) {
    e.preventDefault();
    setMsg(""); setErr(""); setBusy(true);
    try {
      const data = {};
      fields.forEach((f) => {
        if (form[f.name]) data[f.name] = form[f.name];
      });
      if (kind === "gallery") {
        if (!editing) {
          if (!file) { setErr("Please choose an image to upload."); setBusy(false); return; }
          data.imageUrl = await uploadGalleryImage(file);
        }
      }
      if (editing) {
        await updateItem(kind, editing, data);
        setMsg("Updated.");
      } else {
        await createItem(kind, data);
        setMsg("Published.");
      }
      setForm({}); setFile(null); setEditing(null);
      if (e.target.reset) e.target.reset();
      await refresh();
    } catch (ex) {
      setErr("Save failed. Check your Firestore/Storage rules (see README.md).");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <h2 style={{ color: "var(--navy)", fontSize: "1.1rem", marginBottom: 14 }}>
        {editing ? "Edit item" : "Add new"}
      </h2>
      <form onSubmit={onSubmit}>
        {kind === "gallery" && !editing && (
          <div className="field">
            <label htmlFor="g-file">Image file (JPG/PNG, up to ~2 MB recommended)</label>
            <input id="g-file" type="file" accept="image/*"
              onChange={(e) => setFile(e.target.files[0] || null)} />
          </div>
        )}
        {fields.map((f) => (
          <div className="field" key={f.name}>
            <label htmlFor={`f-${f.name}`}>{f.label}{f.required ? " *" : ""}</label>
            {f.textarea ? (
              <textarea id={`f-${f.name}`} required={f.required}
                value={form[f.name] || ""}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} />
            ) : (
              <input id={`f-${f.name}`} type="text" required={f.required}
                value={form[f.name] || ""}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })} />
            )}
          </div>
        ))}
        {msg && <p className="admin-msg ok">{msg}</p>}
        {err && <p className="admin-msg error">{err}</p>}
        <button className="btn btn-gold" type="submit" disabled={busy}>
          {busy ? "Saving..." : editing ? "Save changes" : "Publish"}
        </button>{" "}
        {editing && (
          <button type="button" className="btn btn-outline"
            onClick={() => { setEditing(null); setForm({}); }}>
            Cancel edit
          </button>
        )}
      </form>

      <h2 style={{ color: "var(--navy)", fontSize: "1.1rem", margin: "26px 0 14px" }}>
        Published items
      </h2>
      {items.length === 0 && <p style={{ color: "var(--muted)" }}>Nothing published yet.</p>}
      {items.map((it) => (
        <div className="admin-list-item" key={it.id}>
          <div>
            <h4>{it.title || it.caption || "(untitled)"}</h4>
            <small>{it.date || ""}</small>
            {it.imageUrl && (
              <div><img src={it.imageUrl} alt="" style={{ width: 90, marginTop: 6, borderRadius: 6 }} /></div>
            )}
          </div>
          <div className="admin-actions">
            <button onClick={() => { setEditing(it.id); setForm(it); }}>Edit</button>
            <button className="danger" onClick={async () => {
              if (confirm("Delete this item?")) { await deleteItem(kind, it.id); refresh(); }
            }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
