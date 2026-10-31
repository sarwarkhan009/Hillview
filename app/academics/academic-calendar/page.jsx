import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Academic Calendar",
  description: "Academic calendar of HillView Public School Simdega.",
};

export default function CalendarPage() {
  return (
    <SimplePage title="Academic Calendar" crumb="Academics">
      <p>
        The academic session runs from April to March, as per the CBSE calendar. Term-wise
        examination dates, activities and events are shared with parents through school
        notices.
      </p>
      <div className="note">
        The current session&#39;s academic calendar will be published here by the school office.
      </div>
    </SimplePage>
  );
}
