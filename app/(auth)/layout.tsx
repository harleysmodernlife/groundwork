export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left — form */}
      <div className="flex flex-col justify-center px-8 py-12 bg-white">
        <div className="max-w-sm w-full mx-auto">
          <a href="/" className="text-xl font-bold tracking-tight block mb-10">
            Groundwork
          </a>
          {children}
        </div>
      </div>
      {/* Right — mission */}
      <div className="hidden md:flex flex-col justify-center px-12 bg-zinc-900 text-white">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-6">
          Our mission
        </p>
        <p className="text-3xl font-medium leading-snug text-zinc-100">
          Free education for everyone.
          <span className="text-zinc-400"> No asterisks.</span>
        </p>
        <p className="mt-6 text-zinc-400 leading-relaxed">
          Learn anything. Earn a verified certificate. Get a job. Pay nothing.
          The knowledge belongs to everyone — we built the infrastructure to prove it.
        </p>
      </div>
    </div>
  )
}
