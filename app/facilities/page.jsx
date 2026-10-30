import SimplePage from "../../components/SimplePage";
import { FACILITIES } from "../../lib/content";
import { Icon } from "../../components/Icons";

export const metadata = {
  title: "Infrastructure & Facilities",
  description: "Campus and facilities of HillView Public School, Simdega.",
};

const ICONS = ["monitor", "flask", "book", "book", "trophy", "leaf"];

export default function FacilitiesPage() {
  return (
    <SimplePage title="Infrastructure & Facilities" crumb="Facilities">
      <p>
        The institution has pollution-free premises with a safe and supportive environment,
        and a dedicated and experienced teaching faculty.
      </p>
      <div className="grid grid-3" style={{ marginTop: 22 }}>
        {FACILITIES.map((f, idx) => (
          <div className="card" key={f.name}>
            <div className="card-icon"><Icon name={ICONS[idx]} /></div>
            <h3>{f.name}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </SimplePage>
  );
}
