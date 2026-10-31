import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Apply Online",
  description: `Apply for admission at ${SCHOOL.fullName}. Call ${SCHOOL.phone}.`,
};

export default function ApplyPage() {
  return (
    <SimplePage title="Apply for Admission" crumb="Admissions">
      <p>
        To apply for admission, please contact the school office or send an enquiry using the
        details below. Our office team will guide you through the next steps.
      </p>
      <table className="table">
        <tbody>
          <tr><th>Phone</th><td><a href={`tel:${SCHOOL.phoneHref}`}>{SCHOOL.phone}</a></td></tr>
          <tr><th>Email</th><td><a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></td></tr>
          <tr><th>Address</th><td>{SCHOOL.address}</td></tr>
        </tbody>
      </table>
      <p style={{ marginTop: 18 }}>
        <a className="btn btn-gold" href={SCHOOL.applyUrl} target="_blank" rel="noopener noreferrer">Apply Online</a>
      </p>
      <div className="note">
        Our online admission form opens in a new tab. You can also call or email the school
        office using the details above.
      </div>
    </SimplePage>
  );
}
