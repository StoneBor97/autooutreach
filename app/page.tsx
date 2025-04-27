export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold">Welcome to AutoOutreach!</h1>
        <p className="mt-4 text-lg">Please <a href="/login" className="text-blue-600">Login</a> or <a href="/signup" className="text-blue-600">Sign Up</a>.</p>
      </main>
    );
  }
  