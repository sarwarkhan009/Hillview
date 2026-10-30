import SimplePage from "../../components/SimplePage";
import { SCHOOL } from "../../lib/content";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${SCHOOL.fullName} - ${SCHOOL.address}. Call ${SCHOOL.phone}.`,
};

export default function ContactPage() {
  return (
    <SimplePage title="Contact Us" crumb="Contact">
      <div className="grid grid-3" style={{ marginBottom: 26 }}>
        <div className="card">
          <h3>Phone</h3>
          <p><a href={`tel:${SCHOOL.phoneHref}`}>{SCHOOL.phone}</a></p>
        </div>
        <div className="card">
          <h3>Email</h3>
          <p><a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></p>
        </div>
        <div className="card">
          <h3>Address</h3>
          <p>{SCHOOL.address}</p>
        </div>
      </div>
      <p>
        <a className="btn btn-gold" href={SCHOOL.mapUrl} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </p>
    </SimplePage>
  );
}
