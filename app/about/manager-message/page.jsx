import SimplePage from "../../../components/SimplePage";
import { LEADERS } from "../../../lib/content";

export const metadata = {
  title: "Manager",
  description: "Message from the Manager of HillView Public School, Simdega.",
};

export default function LeaderPage() {
  const leader = LEADERS.find((l) => l.role === "Manager");
  return (
    <SimplePage title={leader.role + "'s Message"} crumb="About Us">
      <p><strong>{leader.name}</strong> - {leader.role}</p>
      <p>{leader.message}</p>
    </SimplePage>
  );
}
