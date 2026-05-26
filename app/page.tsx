import Link from 'next/link'
import { LinkButton } from '@/components/ui/link-button'

const SUBJECTS = [
  { icon: '🏢', name: 'Business & Entrepreneurship', slug: 'business', courses: 8 },
  { icon: '💰', name: 'Personal Finance', slug: 'personal-finance', courses: 7 },
  { icon: '📊', name: 'Economics', slug: 'economics', courses: 5 },
  { icon: '🧠', name: 'Psychology', slug: 'psychology', courses: 7 },
  { icon: '💻', name: 'Technology & Computing', slug: 'technology', courses: 8 },
  { icon: '🔧', name: 'Skilled Trades', slug: 'trades', courses: 8 },
  { icon: '⚖️', name: 'Law & Legal Rights', slug: 'law-and-legal-rights', courses: 7 },
  { icon: '🔬', name: 'Sciences', slug: 'sciences', courses: 7 },
  { icon: '📐', name: 'Mathematics', slug: 'mathematics', courses: 8 },
  { icon: '🌍', name: 'History & Civics', slug: 'history', courses: 7 },
  { icon: '🗣️', name: 'Language & Communication', slug: 'language', courses: 6 },
  { icon: '❤️', name: 'Health & Wellness', slug: 'health-and-wellness', courses: 5 },
  { icon: '🎨', name: 'Arts & Creative Skills', slug: 'arts-and-creative-skills', courses: 5 },
]

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white dark:bg-zinc-950 z-50">
        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Groundwork</span>
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/learn" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Browse Courses</Link>
          <Link href="#employers" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">For Employers</Link>
          <a href="https://github.com/harleysmodernlife/groundwork" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
        </div>
        <div className="flex gap-2">
          <LinkButton href="/login" variant="ghost" size="sm">Log in</LinkButton>
          <LinkButton href="/signup" size="sm">Sign up free</LinkButton>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-white dark:bg-zinc-950">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded-full px-4 py-1.5 mb-6">
          100% free · No catch · No paywall
        </span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-3xl leading-tight mb-6">
          Learn anything.<br />Earn a real certificate.<br />Pay nothing.
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          Groundwork is an AI-powered education platform with 83 courses across 13 subjects.
          Every lesson is free. Every certificate is free. No premium tier hiding the good stuff.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <LinkButton href="/signup" size="lg">Create free account</LinkButton>
          <LinkButton href="/learn" size="lg" variant="outline">Browse courses — no account needed</LinkButton>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-6 py-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '13', label: 'Subjects' },
            { n: '83', label: 'Courses' },
            { n: '642', label: 'Lessons' },
            { n: 'Free ∞', label: 'Cost to you' },
          ].map(({ n, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{n}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects */}
      <section className="px-6 py-24 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">What do you want to learn?</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Every subject. Every course. All free.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SUBJECTS.map((s) => (
            <Link
              key={s.slug}
              href={`/learn/${s.slug}`}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-sm dark:bg-zinc-900 transition-all group"
            >
              <span className="text-2xl">{s.icon}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-tight">{s.name}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{s.courses} courses</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <LinkButton href="/learn" variant="outline">View all subjects →</LinkButton>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 text-center mb-16">How Groundwork works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                title: 'Browse and enroll — no account required',
                body: "Explore every subject and course before you ever make an account. When you're ready to start a lesson, create a free account. No credit card. No trial. No catch.",
              },
              {
                step: '02',
                title: 'Learn with an AI tutor',
                body: 'Your AI tutor guides you through every lesson using the Socratic method — it asks questions, adapts to how you think, and never just hands you the answer.',
              },
              {
                step: '03',
                title: 'Pass the assessment, earn your certificate',
                body: 'Each course ends with a rigorous assessment. Pass it and you earn a verifiable certificate following the Open Badges 3.0 standard. Free, permanent, yours.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="text-4xl font-bold text-zinc-300 dark:text-zinc-700">{step}</span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="px-6 py-24 max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">Certificates</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Your certificate means something</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Every Groundwork certificate is publicly verifiable via a unique URL. Anyone — an employer, a client, a school — can confirm it&apos;s real.
              Certificates follow the Open Badges 3.0 standard and never expire.
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {['Publicly verifiable link', 'Open Badges 3.0 compliant', 'Never expires', 'Free — always'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-900 dark:bg-zinc-800 text-white rounded-2xl p-8 text-center">
            <p className="text-4xl mb-4">🎓</p>
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">Certificate of Completion</p>
            <p className="text-xl font-bold mb-1">Business Foundations</p>
            <p className="text-zinc-400 text-sm mb-6">Business &amp; Entrepreneurship</p>
            <div className="flex justify-between text-sm border-t border-zinc-700 pt-4">
              <span className="text-zinc-400">Issued to</span>
              <span className="font-medium">Your Name Here</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-zinc-400">Status</span>
              <span className="text-green-400 font-medium">Verified ✓</span>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section id="employers" className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-6 py-24">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">For Employers</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Find candidates who actually know their stuff</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Every Groundwork certificate was earned through a real assessment — not just time spent watching videos.
              Search our learner pool by subject, course, and location. Post jobs. Connect directly.
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 mb-8">
              {[
                'Search verified learners by subject and course',
                'Post jobs targeting specific certificates',
                'No recruiting fees',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <LinkButton href="/employer/signup">Create employer account</LinkButton>
              <LinkButton href="/employer/login" variant="outline">Employer log in</LinkButton>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { subject: 'Business & Entrepreneurship', course: 'Business Foundations', location: 'Remote' },
              { subject: 'Technology & Computing', course: 'Web Development Basics', location: 'Nashville, TN' },
              { subject: 'Skilled Trades', course: 'Electrical Fundamentals', location: 'Anywhere' },
            ].map((card) => (
              <div key={card.course} className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-5 py-4">
                <p className="font-medium text-sm text-zinc-900 dark:text-zinc-100">{card.course}</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{card.subject} · {card.location}</p>
              </div>
            ))}
            <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center pt-2">Example learner certificates</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-zinc-900 dark:bg-zinc-950 text-white px-6 py-24 text-center border-t border-zinc-800">
        <blockquote className="text-2xl md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed text-zinc-100 mb-10">
          &ldquo;Higher education costs money. A lot of it. And the people who need it most
          are usually the ones who can&apos;t afford it. Groundwork tears the door off.&rdquo;
        </blockquote>
        <div className="flex flex-wrap gap-4 justify-center">
          <LinkButton href="/signup" size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-zinc-900">
            Start learning free
          </LinkButton>
          <LinkButton href="/learn" size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Browse courses
          </LinkButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 px-6 py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-10">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Learners</p>
            <div className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
              <Link href="/learn" className="hover:text-zinc-900 dark:hover:text-zinc-100">Browse courses</Link>
              <Link href="/signup" className="hover:text-zinc-900 dark:hover:text-zinc-100">Create account</Link>
              <Link href="/login" className="hover:text-zinc-900 dark:hover:text-zinc-100">Log in</Link>
              <Link href="/forgot-password" className="hover:text-zinc-900 dark:hover:text-zinc-100">Reset password</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Employers</p>
            <div className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
              <Link href="/employer/signup" className="hover:text-zinc-900 dark:hover:text-zinc-100">Create account</Link>
              <Link href="/employer/login" className="hover:text-zinc-900 dark:hover:text-zinc-100">Log in</Link>
              <Link href="/employer/search" className="hover:text-zinc-900 dark:hover:text-zinc-100">Search candidates</Link>
              <Link href="/employer/jobs" className="hover:text-zinc-900 dark:hover:text-zinc-100">Post a job</Link>
            </div>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Platform</p>
            <div className="flex flex-col gap-2 text-zinc-500 dark:text-zinc-400">
              <a href="https://github.com/harleysmodernlife/groundwork" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100">GitHub</a>
              <Link href="/certificates/verify/example" className="hover:text-zinc-900 dark:hover:text-zinc-100">Verify a certificate</Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-2">Groundwork</p>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs leading-relaxed">
              Free education for everyone. No asterisks. Open source under the AGPL-3.0 license.
            </p>
          </div>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6 text-center text-xs text-zinc-400 dark:text-zinc-500">
          Groundwork · Free education for everyone
        </div>
      </footer>

    </main>
  )
}
