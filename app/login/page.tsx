"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Sprečava osvežavanje stranice

    console.log("Submitting login form...");  // Dodajemo log za debugovanje

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Login successful! Redirecting...");
      // Koristimo useEffect za preusmeravanje na dashboard
      router.push("/dashboard"); // Prebacivanje na dashboard
    } else {
      console.log("Login failed", data);  // Log greške
      setError(data.message);
    }
  };

  // useEffect je tu da se osigura da se navigacija uradi samo klijentski
  useEffect(() => {
    if (error) {
      console.log("Greška prilikom logovanja: ", error);
    }
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </main>
  );
}
