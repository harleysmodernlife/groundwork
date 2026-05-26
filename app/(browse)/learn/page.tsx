import { db } from '@/lib/db'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default async function LearnPage() {
  const subjects = await db.subject.findMany({
    where: { publishedAt: { not: null } },
    orderBy: { order: 'asc' },
    include: {
      courses: {
        where: { publishedAt: { not: null } },
        select: { id: true },
      },
    },
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Subjects</h1>
        <p className="text-zinc-500 mt-1">Everything is free. Pick what you want to learn.</p>
      </div>

      {subjects.length === 0 ? (
        <Card className="text-center py-16">
          <CardContent>
            <p className="text-zinc-400">Curriculum is being built. Check back soon.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <Link key={subject.id} href={`/learn/${subject.slug}`}>
              <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-3xl mb-2">{subject.icon}</div>
                  <CardTitle className="text-base">{subject.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-500 mb-3">{subject.description}</p>
                  <Badge variant="secondary">{subject.courses.length} courses</Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
