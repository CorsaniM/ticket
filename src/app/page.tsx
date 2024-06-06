import Link from "next/link";


import { api } from "app/trpc/server";

export default async function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>Hola</h1>
    </main>
  );
}

