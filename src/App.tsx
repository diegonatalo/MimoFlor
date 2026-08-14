import { Footer } from "./components/footer";
import { RomanticMessage } from "./components/message";
import { Rose } from "./components/rose";

export default function App() {
  return (
    <div className="min-h-dvh flex items-center flex-col gap-4 px-8 text-center pb-4">
      <Rose size={400} particles />
      <RomanticMessage />
      <Footer />
    </div>
  );
}
