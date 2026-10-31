import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Affiliation",
  description: "CBSE affiliation details of HillView Public School Simdega.",
};

export default function AffiliationPage() {
  return (
    <SimplePage title="Affiliation" crumb="About Us">
      <table className="table">
        <tbody>
          <tr><th>Board</th><td>Central Board of Secondary Education (CBSE), New Delhi</td></tr>
          <tr><th>Affiliation No</th><td>{SCHOOL.affiliationNo}</td></tr>
          <tr><th>U-Dise No</th><td>{SCHOOL.udiseNo}</td></tr>
          <tr><th>School</th><td>{SCHOOL.fullName}</td></tr>
          <tr><th>Managed by</th><td>Ramawtar Ji Memorial Trust</td></tr>
        </tbody>
      </table>
      <div className="note">
        The school is in the process of confirming the classes covered under its current
        CBSE affiliation. This page will be updated once the school office confirms the details.
      </div>
    </SimplePage>
  );
}
