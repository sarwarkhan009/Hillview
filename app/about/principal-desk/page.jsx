import SimplePage from "../../../components/SimplePage";
import { LEADERS } from "../../../lib/content";

export const metadata = {
  title: "Principal's Desk",
  description: "Message from the Principal of HillView Public School Simdega.",
};

export default function PrincipalPage() {
  const leader = LEADERS.find((l) => l.role === "Principal");
  return (
    <SimplePage title="Principal&#39;s Desk" crumb="About Us">
      <p><strong>{leader.name}</strong> - {leader.role}</p>
      <p>{leader.message}</p>
    </SimplePage>
  );
}
