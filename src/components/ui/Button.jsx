export default function Button({ text, type = "button", className }) {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${className}`}
    >
      {text}
    </button>
  );
}
