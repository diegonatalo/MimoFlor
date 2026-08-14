import { Rose } from "./components/rose";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4">
      <Rose size={500} particles />
      <h1 className="fade-up font-allura text-6xl text-rose-200">Bom dia Be</h1>
    </div>
  );
}
