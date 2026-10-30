"use client";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "../../lib/firebase";
import CollectionManager from "./CollectionManager";


const TABS = [
  { key: "notices", label: "Notices" },
  { key: "news", label: "News" },
  { key: "events", label: "Events" },
  { key: "gallery", label: "Gallery" },
];


const MAX_ATTEMPTS = 3;
const LOCK_MINUTES = 15;
const LOCK_KEY = "hv_admin_login_lock";


// Client-side lockout: after MAX_ATTEMPTS failed logins, block further
// attempts from this browser for LOCK_MINUTES. This is a UX layer only -
// the real enforcement is Firebase Auth's own throttling (see README).
function readLock() {
  try {
    const v = JSON.parse(localStorage.getItem(LOCK_KEY));
    if (v && typeof v.fails === "number" && typeof v.until === "number") return v;
  } catch {}
  return { fails: 0, until: 0 };
}


export default function AdminApp() {
  const [user, setUser] = useState(undefined);
  const [tab, setTab] = useState("notices");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [lockedUntil, setLockedUntil] = useState(() => readLock().until);
  const [now, setNow] = useState(() => Date.now());


  const auth = getFirebaseAuth();


  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);


  const locked = lockedUntil > now;
  const lockMinutesLeft = Math.max(1, Math.ceil((lockedUntil - now) / 60000));


  useEffect(() => {
    if (!auth) {
      setUser(null);
      return;
    }
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, [auth]);


  if (!isFirebaseConfigured) {
    return (
      <div className="admin-wrap">
        <div className="admin-card">
          <h1 style={{ color: "var(--navy)", fontSize: "1.4rem" }}>Admin Panel</h1>
          <div className="note">
            Firebase is not configured yet. Follow the steps in README.md (section
            &quot;Firebase setup&quot;) to create the Firebase project and add the
            NEXT_PUBLIC_FIREBASE_* values to your <code>.env.local</code> file, then restart
            the site.
          </div>
        </div>
      </div>
    );
  }


  if (user === undefined) {
    return <div className="admin-wrap"><div className="admin-card"><p>Loading...</p></div></div>;
  }


  if (!user) {
    return (
      <div className="admin-wrap login-box">
        <div className="admin-card">
          <h1 style={{ color: "var(--navy)", fontSize: "1.4rem", marginBottom: 16 }}>School Admin Login</h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const lock = readLock();
              if (lock.until > Date.now()) {
                setLockedUntil(lock.until);
                return;
              }
              setErr("");
              setBusy(true);
              try {
                await signInWithEmailAndPassword(auth, email, password);
                localStorage.removeItem(LOCK_KEY);
                setLockedUntil(0);
              } catch (ex) {
                lock.fails += 1;
                if (lock.fails >= MAX_ATTEMPTS) {
                  lock.fails = 0;
                  lock.until = Date.now() + LOCK_MINUTES * 60000;
                  setLockedUntil(lock.until);
                  setErr(`Too many failed attempts. Login is locked for ${LOCK_MINUTES} minutes.`);
                } else {
                  setErr(`Login failed. Please check the email and password. (Attempt ${lock.fails} of ${MAX_ATTEMPTS})`);
                }
                localStorage.setItem(LOCK_KEY, JSON.stringify(lock));
              } finally {
                setBusy(false);
              }
            }}
          >
            <div className="field">
              <label htmlFor="admin-email">Email</label>
              <input id="admin-email" type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
            </div>
            <div className="field">
              <label htmlFor="admin-pass">Password</label>
              <input id="admin-pass" type="password" required value={password}
                onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
            </div>
            {locked && (
              <p className="admin-msg error">
                Login is locked after 3 wrong attempts. Please try again in {lockMinutesLeft} minute{lockMinutesLeft === 1 ? "" : "s"}.
              </p>
            )}
            {err && <p className="admin-msg error">{err}</p>}
            <button className="btn btn-gold" type="submit" disabled={busy || locked}>
              {busy ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }


  return (
    <div className="admin-wrap">
      <div className="admin-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <h1 style={{ color: "var(--navy)", fontSize: "1.4rem" }}>Content Admin</h1>
          <div>
            <small style={{ marginRight: 12, color: "var(--muted)" }}>{user.email}</small>
            <button className="btn btn-outline" onClick={() => signOut(auth)}>Sign Out</button>
          </div>
        </div>
        <div className="admin-tabs">
          {TABS.map((t) => (
            <button key={t.key} className={tab === t.key ? "active" : ""} onClick={() => setTab(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
        <CollectionManager kind={tab} key={tab} />
      </div>
    </div>
  );
}
