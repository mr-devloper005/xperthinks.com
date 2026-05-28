import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const brandName = globalContent.site.name
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto grid max-w-[var(--editable-container,1500px)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.35fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-sm border border-white/15 bg-white">
              <img src="/favicon.png?v=20260413" alt={brandName} className="h-24 w-24 max-w-none object-contain" />
            </span>
            <span className="text-4xl font-black uppercase leading-none text-[#f6c739]">{brandName}</span>
          </Link>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/70">{globalContent.footer.description}</p>
          <p className="mt-5 max-w-lg text-sm font-bold uppercase tracking-[0.18em] text-[#2698e8]">{globalContent.footer.tagline}</p>
        </div>

        <div>
          <h3 className="border-b border-white/15 pb-4 text-xs font-black uppercase tracking-[0.22em] text-white">Categories</h3>
          <div className="mt-5 grid gap-3">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-base font-bold text-white/75 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="border-b border-white/15 pb-4 text-xs font-black uppercase tracking-[0.22em] text-white">Menu</h3>
          <div className="mt-5 grid gap-3">
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Contact', '/contact'],
              ['Search', '/search'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-base font-bold text-white/75 hover:text-white">{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-white/45">
        &copy; {year} {brandName}. {globalContent.footer.bottomNote}
      </div>
    </footer>
  )
}
