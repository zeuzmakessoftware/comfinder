"use client";

import { Thread, useEdgeRuntime } from "@assistant-ui/react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const runtime = useEdgeRuntime({
    api: "/api/chat",
  });

  return (
    <div className="h-screen bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 animate-gradient-x flex flex-col items-center justify-center text-white">
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-wide drop-shadow-md text-shadow tracking-tighter">
          Comm Finder
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">
          Uncover your next unforgettable experience. Discover your next event.
        </p>
      </header>
      <main className="w-full max-w-3xl p-6 md:p-8 lg:p-10 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transform hover:scale-105 transition-transform duration-300 ease-out">
        <div className="flex-1 max-h-[60vh] overflow-auto rounded-2xl border border-white/20">
          <Thread
            runtime={runtime}
            tools={[]}
          />
        </div>
      </main>
    </div>
  );
}
