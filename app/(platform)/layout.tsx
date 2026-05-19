import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link-button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import HelpWidget from '@/components/ai/HelpWidget'

export default async function PlatformLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login')

  const initials = (session.user.name ?? session.user.email ?? 'U')
    .split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2)
  const isAdmin = (session.user as { role?: string }).role === 'ADMIN'

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-zinc-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-lg font-bold tracking-tight">Groundwork</Link>
          <Separator orientation="vertical" className="h-5" />
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/dashboard" className="text-zinc-500 hover:text-zinc-900 transition-colors">Dashboard</Link>
            <Link href="/learn" className="text-zinc-500 hover:text-zinc-900 transition-colors">Learn</Link>
            <Link href="/certificates" className="text-zinc-500 hover:text-zinc-900 transition-colors">Certificates</Link>
            <Link href="/settings/profile" className="text-zinc-500 hover:text-zinc-900 transition-colors">Profile</Link>
            {isAdmin && <Link href="/admin" className="text-zinc-400 hover:text-zinc-900 transition-colors text-xs uppercase tracking-wide">Admin</Link>}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LinkButton href="/settings/api-key" variant="ghost" size="sm">API Key</LinkButton>
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs bg-zinc-900 text-white">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 px-6 py-8 max-w-6xl mx-auto w-full">{children}</main>
      <HelpWidget />
    </div>
  )
}
