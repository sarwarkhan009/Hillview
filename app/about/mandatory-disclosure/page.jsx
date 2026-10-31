import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Mandatory Disclosure",
  description: "CBSE mandatory disclosure of HillView Public School Simdega.",
};

export default function MandatoryDisclosurePage() {
  return (
    <SimplePage title="Mandatory Disclosure" crumb="About Us">
      <h2>General Information</h2>
      <table className="table">
        <tbody>
          <tr><th>Name of the School</th><td>{SCHOOL.fullName}</td></tr>
          <tr><th>Affiliation No (CBSE)</th><td>{SCHOOL.affiliationNo}</td></tr>
          <tr><th>U-Dise No</th><td>{SCHOOL.udiseNo}</td></tr>
          <tr><th>Address</th><td>{SCHOOL.address}</td></tr>
          <tr><th>Phone</th><td>{SCHOOL.phone}</td></tr>
          <tr><th>Email</th><td>{SCHOOL.email}</td></tr>
          <tr><th>Principal</th><td>Mrs Poonam Milind</td></tr>
          <tr><th>Manager</th><td>Mrs Nutan Gupta</td></tr>
          <tr><th>Trust / Society</th><td>Ramawtar Ji Memorial Trust</td></tr>
          <tr><th>Year of Establishment</th><td>{SCHOOL.established}</td></tr>
        </tbody>
      </table>
      <div className="note">
        The remaining sections of the CBSE mandatory disclosure (documents, results, staff and
        infrastructure details) are being compiled with the school office and will be published
        here. Until then, please contact the school office for any specific document.
      </div>
    </SimplePage>
  );
}
