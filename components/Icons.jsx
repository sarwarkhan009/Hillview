export function Icon({ name }) {
  const paths = {
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    flask: "M9 3h6 M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3",
    users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    leaf: "M11 20A7 7 0 0 1 4 13c0-5 4-9 10-10 1 4-1 12-7 14 M4 21c4-4 7-6 10-7",
    heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z",
    trophy: "M8 21h8 M12 17v4 M7 4h10v6a5 5 0 0 1-10 0V4z M7 6H4a2 2 0 0 0 0 4h3 M17 6h3a2 2 0 0 1 0 4h-3",
    monitor: "M8 21h8 M12 17v4 M3 4h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z",
    bus: "M3 17V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11 M3 17h18 M3 17v2a1 1 0 0 0 1 1h1 M21 17v2a1 1 0 0 1-1 1h-1 M7 20a1.5 1.5 0 1 0 0-.01 M17 20a1.5 1.5 0 1 0 0-.01 M3 11h18",
  };
  return (
    <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name] || paths.book} />
    </svg>
  );
}
