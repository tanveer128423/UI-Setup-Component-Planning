export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      <div className="font-bold text-xl">MyApp</div>
      <ul className="hidden md:flex space-x-6">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}
