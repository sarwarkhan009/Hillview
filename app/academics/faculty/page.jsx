import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Faculty",
  description: "Faculty of HillView Public School, Simdega.",
};

export default function FacultyPage() {
  return (
    <SimplePage title="Faculty" crumb="Academics">
      <p>
        A team of highly trained and motivated staff members ensures that the school works
        towards nurturing young minds and molding competent and proficient individuals. Our
        skilled and experienced teachers not only unlock the knowledge that lies within books,
        but also instill the qualities and moral values that make for an honest, responsible
        and dignified personality.
      </p>
      <div className="note">
        The detailed staff list will be published here by the school office.
      </div>
    </SimplePage>
  );
}
