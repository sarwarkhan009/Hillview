"use client";
import { useState } from "react";
import { NAV } from "../lib/nav";
import { SCHOOL } from "../lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);

  return (
    <header>
      <div className="topbar">
        <div className="container">
          <div>
            {SCHOOL.affiliation} | Affiliation No: {SCHOOL.affiliationNo} | U-Dise No: {SCHOOL.udiseNo}
          </div>
          <div className="tb-right">
            <a href={`tel:${SCHOOL.phoneHref}`}>{SCHOOL.phone}</a>
            <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
          </div>
        </div>
      </div>

      <div className="brandrow">
        <div className="container">
          <a href="/" aria-label="HillView Public School home">
            <img src="/Hillview/images/logo.png" alt="HillView Public School logo" className="brand-logo" width="64" height="64" />
          </a>
          <div className="brand-text">
            <h1>{SCHOOL.fullName}</h1>
            <p>{SCHOOL.tagline} | {SCHOOL.trust}</p>
          </div>
          <div className="brand-cta">
            <a className="btn btn-outline" href={SCHOOL.feePayUrl} target="_blank" rel="noopener noreferrer">
              Pay Fee Online
            </a>
            <a className="btn btn-gold" href="/admissions/apply">Apply for Admission</a>
          </div>
        </div>
      </div>

      <nav className="mainnav" aria-label="Main navigation">
        <div className="container">
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            &#9776;
          </button>
          <ul className={`nav-list ${open ? "open" : ""}`}>
            <li>
              <a href="/">Home</a>
            </li>
            {NAV.map((item, i) => (
              <li key={item.label} className={openDrop === i ? "open" : ""}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.children.length && window.innerWidth <= 640) {
                      e.preventDefault();
                      setOpenDrop(openDrop === i ? null : i);
                    }
                  }}
                >
                  {item.label}
                </a>
                {item.children.length > 0 && (
                  <ul className="dropdown">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <a href={c.href} onClick={() => setOpen(false)}>{c.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
