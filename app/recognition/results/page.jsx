import SimplePage from "../../../components/SimplePage";
import { RESULTS_NOTE, SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Results",
  description: "School results of HillView Public School, Simdega.",
};

export default function ResultsPage() {
  return (
    <SimplePage title="Results" crumb="Recognition">
      <p>{RESULTS_NOTE}</p>
      <p>
        Call <a href={`tel:${SCHOOL.phoneHref}`}>{SCHOOL.phone}</a> or email{" "}
        <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
      </p>
      <div className="note">
        Session-wise results will be published here by the school office.
      </div>
    </SimplePage>
  );
}
