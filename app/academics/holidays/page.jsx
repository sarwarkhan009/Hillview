import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "List of Holidays",
  description: "School holidays list of HillView Public School Simdega.",
};

export default function HolidaysPage() {
  return (
    <SimplePage title="List of Holidays" crumb="Academics">
      <p>
        The school observes all national holidays and festivals as per the academic calendar
        approved for the session.
      </p>
      <div className="note">
        The session-wise holiday list will be published here by the school office.
      </div>
    </SimplePage>
  );
}
