'use client'

import { Building2, FileText, Image as ImageIcon, Mail, MapPin, MessageSquareText, Sparkles, UploadCloud } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { globalContent } from '@/editable/content/global.content'

const lanes = [
  { icon: FileText, title: 'Editorial pitches', body: 'Send story ideas, corrections, guest columns, data notes, or expert commentary for the article desk.' },
  { icon: Building2, title: 'Listing updates', body: 'Share company details, category requests, operating information, or profile corrections for directory-style pages.' },
  { icon: ImageIcon, title: 'Visual submissions', body: 'Submit image-led posts, explainers, portfolios, screenshots, product media, or visual resources for review.' },
  { icon: UploadCloud, title: 'Resources and PDFs', body: 'Recommend reports, downloadable references, guides, bookmarks, and documents that should be easier to discover.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
        <section className="mx-auto grid max-w-[var(--editable-container,1500px)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] sm:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {lanes.map((lane) => (
                <div key={lane.title} className="border border-black/10 bg-[var(--slot4-warm)] p-5">
                  <lane.icon className="h-6 w-6 text-[var(--slot4-accent)]" />
                  <h2 className="mt-4 text-xl font-black">{lane.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/10 bg-[var(--slot4-gray)] p-6 lg:p-8">
            <div className="flex items-center justify-between gap-4 border-b-2 border-[var(--slot4-accent)] pb-5">
              <h2 className="text-lg font-black uppercase tracking-[0.04em] text-[var(--slot4-accent)]">{pagesContent.contact.formTitle}</h2>
              <MessageSquareText className="h-6 w-6 text-[var(--slot4-accent)]" />
            </div>
            <EditableContactLeadForm />
            <div className="mt-8 grid gap-3 border-t border-black/10 pt-6 text-sm font-bold text-[var(--slot4-muted-text)]">
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Use the form for editorial and publishing requests.</p>
              <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Include URLs, categories, and context when possible.</p>
              <p className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> {globalContent.site.name} keeps the public UI independent from backend workflow changes.</p>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
