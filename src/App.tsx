import { FloatingPetals } from "./components/floating-petals";
import { Footer } from "./components/footer";
import { RomanticMessage } from "./components/message";
import { Rose } from "./components/rose";

export default function App() {
  return (
    <main className="relative min-h-dvh overflow-hidden">
      <div className="ambient-glow" aria-hidden="true" />
      <FloatingPetals />

      <div className="relative z-10 flex min-h-dvh flex-col px-6 py-10">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <Rose size={380} particles />
          <RomanticMessage />
        </div>

        <Footer />
      </div>
    </main>
  );
}
