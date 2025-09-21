export default function Badge({ label = "HOT" }) {
  return (
    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
      {label}
    </span>
  );
}
