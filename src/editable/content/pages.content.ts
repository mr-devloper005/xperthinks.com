import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Technology intelligence, stories, and resources',
      description: 'Explore technology articles, visual explainers, listings, profiles, and resources through a clean magazine-style interface.',
      openGraphTitle: 'Technology intelligence, stories, and resources',
      openGraphDescription: 'Discover tech stories, visual posts, resources, and task-based content through a sharper magazine experience.',
      keywords: ['technology articles', 'tech magazine', 'business listings', 'content discovery'],
    },
    hero: {
      badge: 'Tech desk live',
      title: ['Ideas, products, security, and business', 'without the clutter.'],
      description: 'Follow the latest technology shifts with an editorial layout built for fast scanning, deeper reading, and useful task-based discovery.',
      primaryCta: { label: 'Read the latest', href: '/article' },
      secondaryCta: { label: 'Explore resources', href: '/pdf' },
      searchPlaceholder: 'Search Apple, AI, cybersecurity, listings, profiles...',
      focusLabel: 'Today',
      featureCardBadge: 'Lead story',
      featureCardTitle: 'Fresh posts drive the cover, sidebars, and topic lanes.',
      featureCardDescription: 'The homepage behaves like a modern tech magazine while keeping every dynamic post source intact.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for readers who jump between stories, references, companies, and visual proof.',
      paragraphs: [
        'The site brings together technology reporting, image-led posts, business listings, social bookmarks, profiles, and resources under one consistent editorial rhythm.',
        'Readers can start with a headline, jump to a related visual, save a reference, or inspect a listing without feeling like they have left the publication.',
        'Every section is designed around practical discovery: sharp category labels, strong images, readable summaries, and clear next actions.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Magazine-style homepage with a lead story, compact side rail, and topic lanes.',
        'Connected sections for articles, visuals, listings, profiles, bookmarks, and resources.',
        'Sharper cards for scanning titles, categories, dates, summaries, and media.',
        'Lightweight UI that keeps discovery fast without touching backend logic.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Keep reading across every content lane.',
      description: 'Move from analysis to visuals, resources, companies, profiles, and saved references without losing the thread.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Pitch a Story', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the newsroom',
    title: 'A technology publication shaped for modern discovery.',
    description: `${slot4BrandConfig.siteName} turns articles, visual posts, listings, profiles, downloads, and bookmarks into one readable technology hub.`,
    paragraphs: [
      'The web is full of fast updates and scattered references. This site gives those pieces a more useful home: headline-led pages, strong imagery, structured metadata, and routes that help readers keep moving.',
      'Our layout treats every content type as part of the same research journey. A reader can begin with an article, inspect a company listing, view supporting images, open a PDF, or follow a profile without breaking context.',
      'The result is a practical editorial experience: beautiful enough to feel current, restrained enough to read for a long time, and organized enough to revisit when the work matters.',
    ],
    values: [
      {
        title: 'Signal over spectacle',
        description: 'Headlines, summaries, dates, categories, and media are arranged so readers can understand what matters before they click.',
      },
      {
        title: 'Connected research paths',
        description: 'Articles, visuals, listings, resources, profiles, and saved links stay connected so discovery feels intentional.',
      },
      {
        title: 'Editorial utility',
        description: 'The UI supports reading, comparing, saving, contacting, and exploring instead of behaving like a generic landing page.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch a story, submit a resource, or talk through a publishing lane.',
    description: 'Use this page for editorial pitches, listing updates, resource submissions, partnership ideas, or corrections. The goal is simple: send the right context once and route it to the right workflow.',
    formTitle: 'Send your note',
  },
  create: {
    metadata: {
      title: 'Create a post',
      description: 'Create a new post, listing, visual, profile, bookmark, or resource from this site interface.',
    },
    hero: {
      badge: 'Create workspace',
      title: 'Create content with a clean guided flow.',
      description: 'Use this editable create page as the front-end workspace for drafting posts, adding media, and preparing structured content across enabled site tasks.',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
