"use client";
import { useEffect, useState } from "react";
import { SCHOOL } from "../lib/content";

const SLIDES = [
  {
    img: "/images/hero-campus.svg",
    alt: "HillView Public School campus",
    title: "Welcome to HillView Public School Simdega",
    text: "An English medium, co-educational CBSE affiliated school. Managed by Ramawtar Ji Memorial Trust.",
    cta: { label: "Explore the School", href: "/about" },
  },
  {
    img: "/images/hero-admission.svg",
    alt: "Admissions open",
    title: "Admissions Open",
    text: "Give your child a holistic education in a safe, green campus on Kurdeg Road, Simdega.",
    cta: { label: "Apply for Admission", href: "/admissions/apply" },
  },
  {
    img: "/images/hero-learning.svg",
    alt: "Learning at HillView",
    title: "Healthy Mind, Healthy Body",
    text: "Academics, sports and values - building harmony between mind, body and soul.",
    cta: { label: "Our Facilities", href: "/facilities" },
  },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" aria-label="Highlights">
      {SLIDES.map((s, idx) => (
        <div key={s.img} className={`hero-slide ${idx === i ? "active" : ""}`}>
          <img src={s.img} alt={s.alt} loading={idx === 0 ? "eager" : "lazy"} />
          <div className="hero-caption">
            <h2>{s.title}</h2>
            <p>{s.text}</p>
            <a className="btn btn-gold" href={s.cta.href}>{s.cta.label}</a>
          </div>
        </div>
      ))}
      <div className="hero-dots">
        {SLIDES.map((s, idx) => (
          <button
            key={idx}
            className={idx === i ? "active" : ""}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  );
}
