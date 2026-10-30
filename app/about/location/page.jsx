import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Location",
  description: "How to reach HillView Public School, Simdega.",
};

export default function LocationPage() {
  return (
    <SimplePage title="Location" crumb="About Us">
      <p>{SCHOOL.fullName} is located on Kurdeg Road in Simdega, Jharkhand.</p>
      <table className="table">
        <tbody>
          <tr><th>Address</th><td>{SCHOOL.address}</td></tr>
          <tr><th>Phone</th><td>{SCHOOL.phone}</td></tr>
          <tr><th>Email</th><td>{SCHOOL.email}</td></tr>
        </tbody>
      </table>
      <p style={{ marginTop: 18 }}>
        <a className="btn btn-gold" href={SCHOOL.mapUrl} target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </p>
    </SimplePage>
  );
}
