import SimplePage from "../../components/SimplePage";
import PublicList from "../../components/PublicList";

export const metadata = {
  title: "Events",
  description: "Upcoming events at HillView Public School, Simdega.",
};

export default function Page() {
  return (
    <SimplePage title="Events" crumb="Information Desk">
      <PublicList kind="events" />
    </SimplePage>
  );
}
