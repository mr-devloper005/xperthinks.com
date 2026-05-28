import type { Metadata } from 'next'
import Link from 'next/link'
import { BookmarkCheck, Newspaper, ShieldCheck } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: 'Access your local reader account and continue browsing the technology desk.' })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-black">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[var(--editable-container,1500px)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_430px] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#2698e8]">Reader access</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] sm:text-6xl">Welcome back to the {globalContent.site.name} reading desk.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-black/65">Sign in to continue testing saved reader flows, local account states, and member-facing navigation without touching backend authentication.</p>
            <div className="mt-9 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                [Newspaper, 'Follow story lanes'],
                [BookmarkCheck, 'Return to saved research'],
                [ShieldCheck, 'Browse access'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="border border-black/10 bg-[#f7f7f7] p-5">
                  <Icon className="h-6 w-6 text-[#2698e8]" />
                  <p className="mt-4 text-sm font-black leading-6">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-black/10 bg-[#f2f2f2] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.08)] sm:p-8">
            <h2 className="border-b-2 border-[#2698e8] pb-5 text-lg font-black uppercase tracking-[0.04em] text-[#2698e8]">Login</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-black/65">New here? <Link href="/signup" className="font-black text-black underline-offset-4 hover:underline">Create an account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
