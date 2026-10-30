import { FALLBACK_NOTICES } from "../lib/content";

export default function Ticker() {
  return (
    <div className="ticker" aria-label="Latest notices">
      <div className="container">
        <span className="ticker-label">Notices</span>
        <div className="ticker-track">
          <div className="ticker-items">
            {FALLBACK_NOTICES.map((n) => (
              <a key={n.title} href="/notices">{n.title}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
