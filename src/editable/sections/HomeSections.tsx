import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { ReactNode } from 'react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { globalContent } from '@/editable/content/global.content'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function SectionHeader({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-black/10 pb-4">
      <div>
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
        <span className="mt-3 block h-1 w-7 bg-black" />
      </div>
      {action}
    </div>
  )
}

function OverlayStory({ post, href, size = 'large' }: { post: SitePost; href: string; size?: 'large' | 'small' }) {
  return (
    <Link href={href} className={`group relative block overflow-hidden bg-black text-white ${size === 'large' ? 'min-h-[470px]' : 'min-h-[320px]'}`}>
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-68 transition duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.12)_72%)]" />
      <div className={`relative z-10 flex flex-col justify-end p-7 sm:p-10 ${size === 'large' ? 'min-h-[470px]' : 'min-h-[320px]'}`}>
        <span className="w-fit bg-white/18 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em]">{getEditableCategory(post)}</span>
        <h3 className={`${size === 'large' ? 'text-4xl sm:text-5xl' : 'text-3xl'} mt-5 max-w-3xl font-black leading-[1.04]`}>{post.title}</h3>
        {size === 'large' ? <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">{getEditableExcerpt(post, 175)}</p> : null}
      </div>
    </Link>
  )
}

function NewsCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#2698e8] bg-white/85 text-sm font-black">{(index % 9) + 1}</span>
      </div>
      <h3 className="mt-5 line-clamp-3 text-xl font-black leading-snug">{post.title}</h3>
      <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--slot4-soft-muted-text)]">Admin - {getEditableCategory(post)}</p>
      <p className="mt-4 line-clamp-4 text-base leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 145)}</p>
    </Link>
  )
}

function SidebarList({ posts, primaryTask, primaryRoute, title = 'Latest posts' }: { posts: SitePost[]; primaryTask: TaskKey; primaryRoute: string; title?: string }) {
  if (!posts.length) return null
  return (
    <aside className="bg-[#f2f2f2] p-6 lg:p-8">
      <h2 className="border-b-2 border-[#2698e8] pb-5 text-lg font-black uppercase tracking-[0.04em] text-[#2698e8]">{title}</h2>
      <div className="mt-7 grid gap-7">
        {posts.slice(0, 4).map((post) => (
          <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid grid-cols-[92px_minmax(0,1fr)] gap-4">
            <img src={getEditablePostImage(post)} alt={post.title} className="h-24 w-full object-cover" />
            <div className="min-w-0">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#2698e8]">{getEditableCategory(post)}</p>
              <h3 className="mt-2 line-clamp-3 text-base font-black leading-snug group-hover:text-[#2698e8]">{post.title}</h3>
              <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.08em] text-black/45">Latest desk</p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  )
}

function TinyStory({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-t border-black/10 pt-5">
      <img src={getEditablePostImage(post)} alt={post.title} className="h-24 w-full object-cover" />
      <div>
        <h3 className="line-clamp-2 text-base font-black leading-tight group-hover:text-[#2698e8]">{post.title}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-black/45">{getEditableCategory(post)}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const secondary = posts[1]
  const sidePosts = posts.slice(2, 6)
  const heroTitle = pagesContent.home.hero.title.join(' ')

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container,1500px)] px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <div>
            <p className={`${dc.type.eyebrow} text-[#2698e8]`}>{pagesContent.home.hero.badge}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">{heroTitle}</h1>
          </div>
          <div>
            <p className="max-w-3xl text-base leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>
            <form action="/search" className="mt-5 flex max-w-2xl border border-black/10 bg-white">
              <Search className="ml-4 mt-4 h-5 w-5 text-black/45" />
              <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm font-semibold outline-none" />
              <button className="bg-black px-5 text-sm font-black uppercase tracking-[0.08em] text-white">Search</button>
            </form>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_425px]">
          {lead ? <OverlayStory post={lead} href={postHref(primaryTask, lead, primaryRoute)} /> : null}
          <SidebarList posts={sidePosts} primaryTask={primaryTask} primaryRoute={primaryRoute} />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {secondary ? <OverlayStory post={secondary} href={postHref(primaryTask, secondary, primaryRoute)} size="small" /> : null}
          <div className="border border-black/10 bg-[#f7f7f7] p-7">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2698e8]">{globalContent.site.name}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight">Technology coverage with useful routes attached.</h2>
            <p className="mt-4 text-base leading-8 text-black/65">Read the latest desk updates, move into task detail pages, and explore connected posts without changing the platform logic underneath.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={primaryRoute} className={dc.button.primary}>Browse {taskLabel(primaryTask)}</Link>
              <Link href="/contact" className={dc.button.secondary}>Pitch a story</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(3, 7)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container,1500px)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {railPosts.map((post, index) => <NewsCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(7, 13)
  if (!featured.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container,1500px)] px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader title="Topic lanes" action={<Link href={primaryRoute} className="text-xs font-black uppercase tracking-[0.16em] text-[#2698e8]">View all</Link>} />
        <div className="grid gap-9 lg:grid-cols-2">
          {featured.slice(0, 2).map((post) => (
            <div key={post.id || post.slug}>
              <NewsCard post={post} href={postHref(primaryTask, post, primaryRoute)} index={featured.indexOf(post) + 4} />
              <div className="mt-7 grid gap-5">
                {featured.slice(2, 5).map((small) => <TinyStory key={`${post.id}-${small.id}`} post={small} href={postHref(primaryTask, small, primaryRoute)} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(8)
  const feature = categoryPosts[0] || posts[0]
  const list = categoryPosts.slice(1, 8)
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[var(--editable-container,1500px)] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_425px] lg:px-8">
        <div>
          <SectionHeader title="More news" />
          {feature ? <NewsCard post={feature} href={postHref(primaryTask, feature, primaryRoute)} index={8} /> : null}
          <div className="mt-8 grid gap-6">
            {list.map((post) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group grid gap-6 border-t border-black/10 pt-6 sm:grid-cols-[300px_minmax(0,1fr)]">
                <img src={getEditablePostImage(post)} alt={post.title} className="h-52 w-full object-cover" />
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#2698e8]">{getEditableCategory(post)}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight group-hover:text-[#2698e8]">{post.title}</h3>
                  <p className="mt-4 line-clamp-4 text-base leading-8 text-black/65">{getEditableExcerpt(post, 230)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <SidebarList posts={posts.slice(0, 4)} primaryTask={primaryTask} primaryRoute={primaryRoute} title="Most discussed" />
          <div className="bg-[#f2f2f2] p-6 lg:p-8">
            <h2 className="border-b-2 border-[#2698e8] pb-5 text-lg font-black uppercase tracking-[0.04em] text-[#2698e8]">Top reviews</h2>
            <div className="mt-7 grid gap-5">
              {posts.slice(4, 8).map((post, index) => (
                <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="flex items-start justify-between gap-5 border-b border-black/15 pb-5 last:border-b-0">
                  <span className="text-sm font-black leading-snug">{post.title}</span>
                  <span className="text-lg font-black">{10 - index}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[var(--editable-container,1500px)] border-t border-black/10 pt-10">
        <div className="grid gap-8 bg-[#050505] p-8 text-white lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f6c739]">{pagesContent.home.cta.badge}</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight">{pagesContent.home.cta.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{pagesContent.home.cta.description}</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#2698e8] px-7 py-4 text-sm font-black uppercase tracking-[0.08em] text-white">
            Pitch a story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
