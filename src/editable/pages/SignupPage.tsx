import type { Metadata } from 'next'
import Link from 'next/link'
import { BellRing, FolderOpen, UserRoundPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { globalContent } from '@/editable/content/global.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Create a local reader account for the public site demo.' })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#050505] text-white">
        <section className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[var(--editable-container,1500px)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[430px_1fr] lg:px-8">
          <div className="border border-white/10 bg-white p-6 text-black shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:p-8">
            <h1 className="border-b-2 border-[#2698e8] pb-5 text-lg font-black uppercase tracking-[0.04em] text-[#2698e8]">Create account</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-black/65">Already have an account? <Link href="/login" className="font-black text-black underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f6c739]">Join the desk</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] sm:text-6xl">Create a local profile for browsing {globalContent.site.name} like a member.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/68">This signup is intentionally browser-local for template testing. It gives the UI a real access flow while keeping backend files and authentication logic untouched.</p>
            <div className="mt-9 grid max-w-3xl gap-4 sm:grid-cols-3">
              {[
                [UserRoundPlus, 'Simple reader identity'],
                [FolderOpen, 'Task-based discovery paths'],
                [BellRing, 'Ready for future member features'],
              ].map(([Icon, label]) => (
                <div key={label as string} className="border border-white/10 bg-white/[0.06] p-5">
                  <Icon className="h-6 w-6 text-[#f6c739]" />
                  <p className="mt-4 text-sm font-black leading-6">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
