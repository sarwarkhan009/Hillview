import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Syllabus",
  description: "Class-wise syllabus of HillView Public School, Simdega.",
};

export default function SyllabusPage() {
  return (
    <SimplePage title="Syllabus" crumb="Academics">
      <div className="note">
        The class-wise syllabus will be published here by the school office. For the current
        syllabus, please contact the class teacher or the school office.
      </div>
    </SimplePage>
  );
}
