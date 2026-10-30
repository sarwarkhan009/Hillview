import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Transport",
  description: "Transport information of HillView Public School, Simdega.",
};

export default function TransportPage() {
  return (
    <SimplePage title="Transport" crumb="Facilities">
      <div className="note">
        School transport details (routes and availability) will be published here by the
        school office. For current transport arrangements, please call {SCHOOL.phone}.
      </div>
    </SimplePage>
  );
}
