export default function Signup() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <form className="flex flex-col gap-4 w-80">
          <input type="email" placeholder="Email" className="border p-2 rounded" />
          <input type="password" placeholder="Password" className="border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Create Account</button>
        </form>
      </main>
    );
  }
  