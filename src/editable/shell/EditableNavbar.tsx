'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, LogOut, Menu, Search, UserPlus, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { getVisualPreset, visualSystem } from '@/editable/theme/visual-system'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const preset = getVisualPreset(visualSystem.recommendedPreset as any)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandName = globalContent.site.name
  const navVars = { '--editable-nav-bg': '#ffffff', '--editable-nav-text': preset.colors.foreground, '--editable-nav-active': preset.colors.foreground, '--editable-nav-active-text': '#ffffff', '--editable-cta-bg': preset.colors.accent, '--editable-cta-text': '#ffffff', '--editable-search-bg': '#ffffff', '--editable-border': `${preset.colors.muted}2e`, '--editable-container': '1500px' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/96 text-[var(--editable-nav-text)] backdrop-blur-xl">
      <nav className="mx-auto flex min-h-[68px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-sm border border-[var(--editable-border)] bg-white shadow-sm transition-transform group-hover:-rotate-2">
            <img src="/favicon.ico?v=20260413" alt={brandName} className="h-24 w-24 max-w-none object-contain" />

          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[210px] truncate text-3xl font-black uppercase leading-none text-[#f6c739]">{brandName}</span>
            <span className="block max-w-[210px] truncate text-[10px] font-bold uppercase tracking-[0.22em] opacity-55">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.slice(0, 7).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`border-b-2 px-3 py-6 text-xs font-black uppercase tracking-[0.08em] transition ${active ? 'border-[var(--editable-cta-bg)] text-[var(--editable-cta-bg)]' : 'border-transparent hover:border-black hover:text-black'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <form action="/search" className="ml-auto hidden min-w-0 justify-center xl:flex">
          <label className="relative flex w-64 items-center border-l border-r border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-4 py-5">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search the desk" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <span className="hidden max-w-44 items-center gap-2 truncate rounded-sm border border-[var(--editable-border)] px-3 py-2 text-xs font-black uppercase tracking-[0.08em] sm:inline-flex">
                <UserRound className="h-4 w-4 shrink-0" /> <span className="truncate">{session.name}</span>
              </span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-sm bg-black px-4 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-white shadow-sm sm:inline-flex">
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-sm px-3 py-2 text-xs font-black uppercase tracking-[0.08em] hover:bg-black/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-sm bg-[var(--editable-cta-bg)] px-4 py-2.5 text-xs font-black uppercase tracking-[0.08em] text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-sm border border-[var(--editable-border)] bg-white p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-sm border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-sm border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.08em]">
                {item.label}
              </Link>
            ))}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-sm bg-black px-4 py-3 text-left text-sm font-black uppercase tracking-[0.08em] text-white">
                {session.name} - Logout
              </button>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-sm border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black uppercase tracking-[0.08em]">Login</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="rounded-sm bg-[var(--editable-cta-bg)] px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-white">Sign up</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
