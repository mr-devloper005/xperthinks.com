import Link from 'next/link'
import { ArrowRight, BookOpenText, Network, Radar } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { globalContent } from '@/editable/content/global.content'

const statBlocks = [
  ['Editorial lanes', 'Articles, visuals, listings, profiles, PDFs, and saved links work as one content system.'],
  ['Reader rhythm', 'Lead stories, sidebars, compact cards, and detail pages make browsing feel familiar and fast.'],
  ['Practical routes', 'Every major post type keeps a clear path to deeper context, contact actions, or related material.'],
]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto max-w-[var(--editable-container,1500px)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px]">
            <article>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[1.03] sm:text-6xl lg:text-7xl">{pagesContent.about.title}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
              <div className="mt-9 grid gap-5 text-base leading-8 text-[var(--slot4-muted-text)]">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/article" className="inline-flex items-center gap-2 bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white">Read articles <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-black/[0.09] px-6 py-3 text-sm font-black uppercase tracking-[0.08em]">Contact desk</Link>
              </div>
            </article>

            <aside className="bg-[var(--slot4-gray)] p-7">
              <p className="border-b-2 border-[var(--slot4-accent)] pb-5 text-lg font-black uppercase tracking-[0.04em] text-[var(--slot4-accent)]">{globalContent.site.name}</p>
              <div className="mt-7 grid gap-5">
                {statBlocks.map(([title, body]) => (
                  <div key={title} className="border-b border-black/10 pb-5 last:border-b-0">
                    <h2 className="text-xl font-black">{title}</h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{body}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--editable-container,1500px)] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pagesContent.about.values.map((value, index) => {
              const Icon = [Radar, Network, BookOpenText][index] || BookOpenText
              return (
                <div key={value.title} className="border border-black/10 bg-[var(--slot4-surface-bg)] p-7 shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
                  <Icon className="h-7 w-7 text-[var(--slot4-accent)]" />
                  <h2 className="mt-6 text-2xl font-black leading-tight">{value.title}</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--slot4-muted-text)]">{value.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
