import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Medical",
  description: "Medical care at HillView Public School Simdega.",
};

export default function MedicalPage() {
  return (
    <SimplePage title="Medical" crumb="Facilities">
      <p>
        The wellbeing of students is a priority on our safe and supportive campus. First-aid
        is available at the school, and parents are informed promptly whenever a child needs
        attention.
      </p>
      <div className="note">
        Detailed medical facilities information will be published here by the school office.
      </div>
    </SimplePage>
  );
}
