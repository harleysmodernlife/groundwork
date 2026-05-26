import { auth } from '@/lib/auth'
import Link from 'next/link'

export default async function BrowseLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  const isLoggedIn = !!session?.user

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-zinc-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <Link href={isLoggedIn ? '/dashboard' : '/'} className="text-lg font-bold tracking-tight text-zinc-900">
            Groundwork
          </Link>
          <Link href="/learn" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            Subjects
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <Link href="/dashboard" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
              My Dashboard →
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
                Log in
              </Link>
              <Link
                href="/signup"
                className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
              >
                Sign up free
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">{children}</main>
    </div>
  )
}
