import SimplePage from "../../components/SimplePage";
import { ADMISSIONS, SCHOOL } from "../../lib/content";

export const metadata = {
  title: "Admission Procedure",
  description: `Admission procedure at ${SCHOOL.fullName}. Call ${SCHOOL.phone} for enquiries.`,
};

export default function AdmissionsPage() {
  return (
    <SimplePage title="Admission Procedure" crumb="Admissions">
      <p>Admissions are open at {SCHOOL.fullName} ({SCHOOL.classes}, {SCHOOL.medium}).</p>
      <h2>How to apply</h2>
      <ol>
        {ADMISSIONS.procedure.map((s) => <li key={s.slice(0, 24)}>{s}</li>)}
      </ol>
      <p style={{ marginTop: 18 }}>
        <a className="btn btn-gold" href={SCHOOL.applyUrl} target="_blank" rel="noopener noreferrer">Apply Online</a>{" "}
        <a className="btn btn-outline" href="/admissions/guidelines">Read Guidelines</a>
      </p>
    </SimplePage>
  );
}
