import SimplePage from "../../../components/SimplePage";

export const metadata = {
  title: "Labs & Library",
  description: "Laboratories and library of HillView Public School Simdega.",
};

export default function LabsPage() {
  return (
    <SimplePage title="Labs & Library" crumb="Facilities">
      <h2>Laboratories</h2>
      <p>
        The school has dedicated laboratories for physics, chemistry, biology and mathematics,
        where students learn through hands-on, practical work. A modern computer lab builds
        digital skills from an early age.
      </p>
      <h2>Library</h2>
      <p>
        The school library offers a wide range of books that encourage reading, reference
        work and self-study.
      </p>
    </SimplePage>
  );
}
