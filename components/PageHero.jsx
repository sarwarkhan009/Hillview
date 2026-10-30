export default function PageHero({ title, crumb }) {
  return (
    <div className="pagehero">
      <div className="container">
        <h1>{title}</h1>
        <p className="crumb">
          <a href="/">Home</a> &raquo; {crumb || title}
        </p>
      </div>
    </div>
  );
}
