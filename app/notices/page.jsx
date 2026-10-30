import SimplePage from "../../components/SimplePage";
import PublicList from "../../components/PublicList";

export const metadata = {
  title: "Notices",
  description: "Notices and circulars of HillView Public School, Simdega.",
};

export default function Page() {
  return (
    <SimplePage title="Notices" crumb="Information Desk">
      <PublicList kind="notices" />
    </SimplePage>
  );
}
