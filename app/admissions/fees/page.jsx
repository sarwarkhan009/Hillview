import SimplePage from "../../../components/SimplePage";
import { SCHOOL } from "../../../lib/content";

export const metadata = {
  title: "Fee Structure",
  description: "Fee structure of HillView Public School, Simdega.",
};

export default function FeesPage() {
  return (
    <SimplePage title="Fee Structure" crumb="Admissions">
      <p>
        For the class-wise fee structure, please contact the school office or collect it from
        the school reception. Fee payment can also be made online through the school&#39;s fee
        portal.
      </p>
      <p>
        <a className="btn btn-gold" href={SCHOOL.feePayUrl} target="_blank" rel="noopener noreferrer">
          Pay Fee Online
        </a>
      </p>
      <div className="note">
        The detailed session-wise fee structure will be published here by the school office.
      </div>
    </SimplePage>
  );
}
