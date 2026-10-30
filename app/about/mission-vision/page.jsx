import SimplePage from "../../../components/SimplePage";
import { MISSION } from "../../../lib/content";

export const metadata = {
  title: "Mission & Vision",
  description: "The mission and vision of HillView Public School, Simdega.",
};

export default function MissionVisionPage() {
  return (
    <SimplePage title="Mission & Vision" crumb="About Us / Mission & Vision">
      <h2>Our Mission</h2>
      <p>{MISSION.mission}</p>
      <h2>Our Vision</h2>
      <p>{MISSION.vision}</p>
    </SimplePage>
  );
}
