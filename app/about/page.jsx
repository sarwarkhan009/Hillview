import SimplePage from "../../components/SimplePage";
import { ABOUT, SCHOOL } from "../../lib/content";

export const metadata = {
  title: "About The School",
  description: `About ${SCHOOL.fullName} - ${ABOUT.intro}`,
};

export default function AboutPage() {
  return (
    <SimplePage title="About The School" crumb="About Us">
      <p><strong>{ABOUT.intro}</strong></p>
      {ABOUT.body.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
      <h2>At a glance</h2>
      <table className="table">
        <tbody>
          <tr><th>School</th><td>{SCHOOL.fullName}</td></tr>
          <tr><th>Managed by</th><td>Ramawtar Ji Memorial Trust</td></tr>
          <tr><th>Established</th><td>{SCHOOL.established}</td></tr>
          <tr><th>Board</th><td>{SCHOOL.affiliation} (Affiliation No: {SCHOOL.affiliationNo})</td></tr>
          <tr><th>U-Dise No</th><td>{SCHOOL.udiseNo}</td></tr>
          <tr><th>Type</th><td>{SCHOOL.medium}</td></tr>
          <tr><th>Classes</th><td>{SCHOOL.classes}</td></tr>
          <tr><th>Address</th><td>{SCHOOL.address}</td></tr>
        </tbody>
      </table>
    </SimplePage>
  );
}
