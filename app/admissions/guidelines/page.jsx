import SimplePage from "../../../components/SimplePage";
import { ADMISSIONS } from "../../../lib/content";

export const metadata = {
  title: "Admission Guidelines",
  description: "Admission guidelines of HillView Public School, Simdega.",
};

export default function GuidelinesPage() {
  return (
    <SimplePage title="Admission Guidelines" crumb="Admissions">
      <ul>
        {ADMISSIONS.guidelines.map((g) => <li key={g.slice(0, 24)}>{g}</li>)}
      </ul>
    </SimplePage>
  );
}
