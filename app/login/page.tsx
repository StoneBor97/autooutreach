"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";  // Proveri da li si ovo ispravno uveo

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Ovdje se koristi, proveri da li se koristi ispravno

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitting login form...");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Login successful! Redirecting...");
      router.push("/dashboard"); // Ovo bi trebalo da funkcioniše
    } else {
      console.log("Login failed", data);
      setError(data.message);
    }
  };

  useEffect(() => {
    if (error) {
      console.log("Greška prilikom logovanja: ", error);
    }
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <label htmlFor="email" className="sr-only">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <label htmlFor="password" className="sr-only">Password</label>
        <input
          type="password"
          id="password"
          name="password"
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
