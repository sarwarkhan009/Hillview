import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Curriculum",
  description: "Curriculum at HillView Public School Simdega - CBSE affiliated, English medium.",
};

export default function CurriculumPage() {
  return (
    <SimplePage title="Curriculum" crumb="Academics">
      <p>
        {SCHOOL.fullName} follows the CBSE curriculum as an English medium, co-educational
        school ({SCHOOL.classes}). Along with English, students also study Hindi and Sanskrit.
      </p>
      <p>
        Teaching focuses on building a healthy mind along with a healthy body, with equal
        attention to academics, sports, values and life skills.
      </p>
      <div className="note">
        The detailed class-wise curriculum will be published here by the school office.
        For the current class-wise syllabus, please contact the school office.
      </div>
    </SimplePage>
  );
}
