"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Ovde bi proveravali da li je korisnik ulogovan
    // Za sada samo prikazujemo dummy stranicu
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to your Dashboard!</h1>
      <p className="text-lg">Ovde će biti tvoji kontakti, kampanje i sve ostalo!</p>
    </main>
  );
}
