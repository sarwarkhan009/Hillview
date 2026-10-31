import SimplePage from "../../../components/SimplePage";
import { LEADERS } from "../../../lib/content";

export const metadata = {
  title: "Chairman",
  description: "Message from the Chairman of HillView Public School Simdega.",
};

export default function LeaderPage() {
  const leader = LEADERS.find((l) => l.role === "Chairman");
  return (
    <SimplePage title={leader.role + "'s Message"} crumb="About Us">
      <p><strong>{leader.name}</strong> - {leader.role}</p>
      <p>{leader.message}</p>
    </SimplePage>
  );
}
