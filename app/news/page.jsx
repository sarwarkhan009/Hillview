import SimplePage from "../../components/SimplePage";
import PublicList from "../../components/PublicList";

export const metadata = {
  title: "School News",
  description: "News from HillView Public School Simdega.",
};

export default function Page() {
  return (
    <SimplePage title="School News" crumb="Information Desk">
      <PublicList kind="news" />
    </SimplePage>
  );
}
