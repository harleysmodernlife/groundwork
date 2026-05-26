import { LinkButton } from '@/components/ui/link-button'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-white">
        <span className="text-xl font-bold tracking-tight">Groundwork</span>
        <div className="flex gap-3">
          <LinkButton href="/login" variant="ghost">Log in</LinkButton>
          <LinkButton href="/signup">Get started — it's free</LinkButton>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-32 bg-white">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-4">
          Free education for everyone
        </p>
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 max-w-3xl leading-tight mb-6">
          Learn anything.<br />Earn a real certificate.<br />Pay nothing.
        </h1>
        <p className="text-xl text-zinc-500 max-w-xl mb-10">
          Groundwork is an AI-powered education platform. No paywalls. No premium tier.
          No catch. The knowledge belongs to everyone.
        </p>
        <div className="flex gap-4">
          <LinkButton href="/signup" size="lg">Start learning free</LinkButton>
          <LinkButton href="https://github.com/harleysmodernlife/groundwork" size="lg" variant="outline" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </LinkButton>
        </div>
      </section>

      <section className="bg-zinc-50 border-t border-zinc-200 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { step: '01', title: 'Create a free account', body: "That's all we ask. No credit card. No trial period. No upgrade prompt waiting around the corner." },
              { step: '02', title: 'Learn with an AI tutor', body: 'Your tutor guides you through every lesson using the Socratic method — asking questions, adapting to how you think, never just handing you the answer.' },
              { step: '03', title: 'Pass the assessment, earn your certificate', body: "Rigorous testing. If you can pass it, you've earned it. The certificate is free, verifiable, and follows the Open Badges 3.0 standard." },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="text-4xl font-bold text-zinc-200">{step}</span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-zinc-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white px-6 py-24 text-center">
        <blockquote className="text-2xl font-medium max-w-2xl mx-auto leading-relaxed text-zinc-100">
          "Higher education costs money. A lot of it. And the people who need it most
          are usually the ones who can't afford it. Groundwork tears the door off."
        </blockquote>
        <div className="mt-10">
          <LinkButton href="/signup" size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-zinc-900">
            Start for free
          </LinkButton>
        </div>
      </section>

      <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-400 bg-white">
        <p>Groundwork is open source under the AGPL-3.0 license.</p>
        <p className="mt-1">
          <a href="https://github.com/harleysmodernlife/groundwork" className="underline hover:text-zinc-600" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' · '}
          <a href="/login" className="underline hover:text-zinc-600">Log in</a>
          {' · '}
          <a href="/signup" className="underline hover:text-zinc-600">Sign up</a>
          {' · '}
          <a href="/employer/login" className="underline hover:text-zinc-600">Employers</a>
        </p>
      </footer>
    </main>
  )
}
