import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import { Icon } from "../components/Icons";
import { SCHOOL, ABOUT, WHY_US, FACILITIES, LEADERS } from "../lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />

      {/* Welcome */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="kicker" style={{ color: "var(--gold-dark)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.8rem" }}>
                Welcome to {SCHOOL.short}
              </p>
              <h2>A school that prepares students for life</h2>
              <p>{ABOUT.intro}</p>
              {ABOUT.body.slice(0, 1).map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
              <a className="btn btn-outline" href="/about">Read More About Us</a>
            </div>
            <img src="/images/about-school.svg" alt="About HillView Public School Simdega" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Why HillView */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Why Choose Us</p>
            <h2>Why HillView Public School Simdega</h2>
            <p>What makes our school a place where children love to learn and grow.</p>
          </div>
          <div className="grid grid-4">
            {WHY_US.map((c, idx) => (
              <div className="card" key={c.title}>
                <div className="card-icon"><Icon name={["book", "users", "leaf", "heart"][idx]} /></div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Campus &amp; Facilities</p>
            <h2>Our Facilities</h2>
          </div>
          <div className="grid grid-3">
            {FACILITIES.map((f, idx) => (
              <div className="card" key={f.name}>
                <div className="card-icon"><Icon name={["monitor", "flask", "book", "book", "trophy", "leaf"][idx]} /></div>
                <h3>{f.name}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a className="btn btn-outline" href="/facilities">View All Facilities</a>
          </div>
        </div>
      </section>

      {/* Voices that lead */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Vision. Values. Leadership.</p>
            <h2>Voices That Lead</h2>
          </div>
          <div className="grid grid-3">
            {LEADERS.map((l) => (
              <div className="card leader" key={l.role}>
                <div className="avatar">
                  <img src="/images/avatar.svg" alt={`${l.name}, ${l.role}`} loading="lazy" />
                </div>
                <blockquote>&ldquo;{l.quote}&rdquo;</blockquote>
                <strong>{l.name}</strong>
                <span>{l.role}</span>
                <p style={{ marginTop: 10 }}>
                  <a href={l.href}>Read full message &raquo;</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Admissions Open</h2>
          <p>
            {SCHOOL.classes} | {SCHOOL.medium} | Call {SCHOOL.phone} or visit the school office.
          </p>
          <a className="btn btn-gold" href={SCHOOL.applyUrl} target="_blank" rel="noopener noreferrer">Apply for Admission</a>{" "}
          <a className="btn btn-outline" style={{ color: "#fff", borderColor: "#fff" }} href="/contact">Contact Us</a>
        </div>
      </section>
    </>
  );
}
