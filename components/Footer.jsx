import { NAV } from "../lib/nav";
import { SCHOOL } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-4">
          <div>
            <h4>{SCHOOL.fullName}</h4>
            <p>{SCHOOL.tagline}.</p>
            <p style={{ marginTop: 10 }}>{SCHOOL.trust}</p>
            <p>Est. {SCHOOL.established}</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About The School</a></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/academics/academic-calendar">Academic Calendar</a></li>
              <li><a href="/notices">Notices</a></li>
              <li><a href="/news">School News</a></li>
              <li><a href="/gallery">Photo Gallery</a></li>
            </ul>
          </div>
          <div>
            <h4>Information</h4>
            <ul>
              <li><a href="/about/mandatory-disclosure">Mandatory Disclosure</a></li>
              <li><a href="/recognition/results">Results</a></li>
              <li><a href="/admissions/fees">Fee Structure</a></li>
              <li><a href={SCHOOL.feePayUrl} target="_blank" rel="noopener noreferrer">Pay Fee Online</a></li>
              <li><a href={SCHOOL.campusTourUrl} target="_blank" rel="noopener noreferrer">Campus Video Tour</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <ul>
              <li>{SCHOOL.address}</li>
              <li><a href={`tel:${SCHOOL.phoneHref}`}>{SCHOOL.phone}</a></li>
              <li><a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} {SCHOOL.fullName}. All rights reserved. | Design by{" "}
            <a href="https://future-spark.web.app" target="_blank" rel="noopener noreferrer">
              Future Spark App Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
