import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import HelpWidget from '@/components/ai/HelpWidget'
import ThemeToggle from '@/components/ThemeToggle'
import UserMenu from '@/components/UserMenu'

export default async function PlatformLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const initials = (session.user.name ?? session.user.email ?? 'U')
    .split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
  const isAdmin = (session.user as { role?: string }).role === 'ADMIN'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Groundwork
          </Link>
          <Separator orientation="vertical" className="h-5" />
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/dashboard" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Dashboard</Link>
            <Link href="/learn" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Learn</Link>
            <Link href="/certificates" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Certificates</Link>
            <Link href="/settings/profile" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Profile</Link>
            {isAdmin && <Link href="/admin" className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-xs uppercase tracking-wide">Admin</Link>}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <UserMenu initials={initials} />
        </div>
      </header>
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">{children}</main>
      <HelpWidget />
    </div>
  )
}
