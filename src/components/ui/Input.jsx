export default function Input({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-black">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
