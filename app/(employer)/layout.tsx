import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { LinkButton } from '@/components/ui/link-button'

export default async function EmployerLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  // Allow unauthenticated access to login/signup — middleware handles the rest
  const isAuthPage =
    typeof window === 'undefined' // always true server-side; check via pathname instead
  // Redirect authenticated students away from employer portal
  if (session?.user && (session.user as { role?: string }).role === 'STUDENT') {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-zinc-900 text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/employer/dashboard" className="text-lg font-bold tracking-tight">
            Groundwork <span className="text-zinc-400 font-normal text-sm">for Employers</span>
          </Link>
          {session?.user && (
            <>
              <Separator orientation="vertical" className="h-5 bg-zinc-700" />
              <nav className="flex items-center gap-4 text-sm">
                <Link href="/employer/dashboard" className="text-zinc-300 hover:text-white transition-colors">Dashboard</Link>
                <Link href="/employer/search" className="text-zinc-300 hover:text-white transition-colors">Find Graduates</Link>
                <Link href="/employer/jobs" className="text-zinc-300 hover:text-white transition-colors">Job Posts</Link>
              </nav>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          {session?.user ? (
            <span className="text-sm text-zinc-400">{session.user.email}</span>
          ) : (
            <>
              <LinkButton href="/employer/login" variant="ghost" size="sm" className="text-white">Log in</LinkButton>
              <LinkButton href="/employer/signup" size="sm">Post jobs</LinkButton>
            </>
          )}
        </div>
      </header>
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  )
}
