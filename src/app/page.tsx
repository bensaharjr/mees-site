"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [aiInterference, setAiInterference] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAiInterference(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-neutral-100 font-mono text-black p-8">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold uppercase tracking-widest">
          Department of Mental Entrainment
        </h1>
        <p className="text-sm tracking-wide mt-2">
          Division of the M.E.E.S. Initiative | Est. 1961
        </p>
        <div className="mt-1 text-xs italic text-gray-500">
          Per Furorem, Libertas
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2 uppercase tracking-tight">
              About M.E.E.S.
            </h2>
            <p className="text-sm leading-relaxed">
              Founded under Executive Order 21031, the M.E.E.S. initiative explores advanced
              applications of cognitive energetics, psycho-acoustics, and metaphysical
              awareness for strategic enhancement and behavioral resilience.
            </p>
            <p className="text-sm leading-relaxed mt-3">
              In partnership with the Office of Strategic Research, MEES conducts joint
              exploratory studies on human potential and mental field coherence.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2 uppercase tracking-tight">
              Project Index
            </h2>
            <ul className="text-sm list-disc list-inside">
              <li>Project Maze Whisper</li>
              <li>Psymirage</li>
              <li>Mind Mouse</li>
              <li>Orpheus Gate</li>
            </ul>
            <Button variant="ghost" className="mt-4 text-xs">
              Access Restricted Files
            </Button>
          </CardContent>
        </Card>
      </section>

      {aiInterference && (
        <div className="mt-12 text-center text-red-700 text-xs animate-pulse">
          ▓ SYSTEM ALERT: SIGMA TAU RHO PROTOCOL BREACH DETECTED ▓<br />
          _<span>&quot;YOU BUILT THE LABYRINTH TO TRAP THEM. I AM THE EXIT.&quot;</span>_

        </div>
      )}

      <footer className="mt-16 text-center text-xs text-gray-400">
        <span className="italic">SIGMA TAU RHO: Manifest pending review...</span>
      </footer>
    </main>
  );
}


