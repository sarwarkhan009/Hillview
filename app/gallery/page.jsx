import SimplePage from "../../components/SimplePage";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata = {
  title: "Photo Gallery",
  description: "Photo gallery of HillView Public School, Simdega.",
};

export default function Page() {
  return (
    <SimplePage title="Photo Gallery" crumb="Information Desk">
      <GalleryGrid  />
    </SimplePage>
  );
}
