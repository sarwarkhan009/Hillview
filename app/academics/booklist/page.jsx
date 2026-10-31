import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Booklist",
  description: "Class-wise booklist of HillView Public School Simdega.",
};

export default function BooklistPage() {
  return (
    <SimplePage title="Booklist" crumb="Academics">
      <div className="note">
        The class-wise booklist for the current session will be published here by the school
        office. Until then, please collect the booklist from the school office.
      </div>
    </SimplePage>
  );
}
