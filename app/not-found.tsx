export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-6 text-zinc-400">
        Even Hermes couldn't find this page.
      </p>

      <a
        href="/"
        className="mt-10 rounded-full border border-zinc-700 px-8 py-4 hover:bg-white hover:text-black"
      >
        Return Home
      </a>
    </main>
  );
}