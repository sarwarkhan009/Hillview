import PageHero from "./PageHero";

export default function SimplePage({ title, crumb, children }) {
  return (
    <>
      <PageHero title={title} crumb={crumb} />
      <section className="section">
        <div className="container prose">{children}</div>
      </section>
    </>
  );
}
