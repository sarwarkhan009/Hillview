import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Rules & Policies",
  description: "School rules and policies of HillView Public School, Simdega.",
};

export default function RulesPage() {
  return (
    <SimplePage title="Rules & Policies" crumb="Academics">
      <p>
        Respect, Integrity, Care, Harmony, Excellence and Responsibility are the values that
        guide everyday life at HillView Public School, Simdega. Students are expected to be
        disciplined, punctual and respectful to teachers, staff and fellow students.
      </p>
      <div className="note">
        The detailed rulebook and school policies will be published here by the school office.
      </div>
    </SimplePage>
  );
}
