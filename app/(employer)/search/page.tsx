import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { LinkButton } from '@/components/ui/link-button'

export default async function GraduateSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; course?: string }>
}) {
  const session = await auth()
  if (!session?.user?.id) redirect('/employer/login')

  const { q, course } = await searchParams

  const graduates = await db.user.findMany({
    where: {
      isDiscoverable: true,
      role: 'STUDENT',
      ...(q ? {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { location: { contains: q, mode: 'insensitive' } },
          { bio: { contains: q, mode: 'insensitive' } },
        ],
      } : {}),
      ...(course ? {
        certificates: { some: { course: { slug: course } } },
      } : {}),
    },
    include: {
      certificates: {
        include: { course: { select: { name: true, slug: true } } },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  const courses = await db.course.findMany({
    where: { publishedAt: { not: null } },
    select: { slug: true, name: true },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Find Graduates</h1>
        <p className="text-zinc-500 mt-1">
          {graduates.length} verified graduate{graduates.length !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Search + filter */}
      <form className="flex gap-3 flex-wrap">
        <Input
          name="q"
          defaultValue={q}
          placeholder="Search by name, location, or bio..."
          className="max-w-sm"
        />
        <select
          name="course"
          defaultValue={course ?? ''}
          className="border border-zinc-200 rounded-lg px-3 py-1.5 text-sm bg-white"
        >
          <option value="">All certifications</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <button type="submit" className="px-4 py-1.5 bg-zinc-900 text-white rounded-lg text-sm hover:bg-zinc-700 transition-colors">
          Search
        </button>
        {(q || course) && (
          <a href="/employer/search" className="px-4 py-1.5 border border-zinc-200 rounded-lg text-sm hover:bg-zinc-50 transition-colors">
            Clear
          </a>
        )}
      </form>

      {graduates.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <p className="text-zinc-400">No graduates found matching your search.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {graduates.map((grad) => (
            <Card key={grad.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-5 space-y-3">
                <div>
                  <p className="font-semibold">{grad.name ?? 'Anonymous Learner'}</p>
                  {grad.location && <p className="text-sm text-zinc-400">{grad.location}</p>}
                </div>
                {grad.bio && <p className="text-sm text-zinc-500 line-clamp-2">{grad.bio}</p>}
                <div className="flex flex-wrap gap-1.5">
                  {grad.certificates.map((cert) => (
                    <a
                      key={cert.id}
                      href={`/certificates/verify/${cert.verificationCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge variant="secondary" className="text-xs cursor-pointer hover:bg-zinc-200">
                        🎓 {cert.course.name}
                      </Badge>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
