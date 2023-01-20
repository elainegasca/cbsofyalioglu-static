// @ts-nocheck
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    LibraryIcon,
    BookmarkIcon,
    ClipboardListIcon,
} from '@heroicons/react/outline'

export const navLinks = [
    { name: 'Home', href: '/', 
      current: false, 
      color:"#721CFF",
    icon: () => <svg width={32} height={32} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m22.36 8.27-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25H6.59c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75c-.1 1.07.19 2.11.82 2.92.76.99 1.93 1.55 3.23 1.55 1.26 0 2.47-.63 3.23-1.64A3.754 3.754 0 0 0 12 12.75c1.29 0 2.42-.6 3.11-1.6.77.99 1.96 1.6 3.2 1.6 1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85ZM11.35 16.66a2.495 2.495 0 0 0-2.23 2.49v2.74c0 .27.22.49.49.49h4.77c.27 0 .49-.22.49-.49V19.5c.01-2.09-1.22-3.08-3.52-2.84Z" 
    fill="#721CFF" />
    <path d="M21.37 14.398v2.98c0 2.76-2.24 5-5 5a.49.49 0 0 1-.49-.49v-2.39c0-1.28-.39-2.28-1.15-2.96-.67-.61-1.58-.91-2.71-.91-.25 0-.5.01-.77.04a3.485 3.485 0 0 0-3.13 3.48v2.74c0 .27-.22.49-.49.49-2.76 0-5-2.24-5-5v-2.96a1 1 0 0 1 1.34-.94c.27.09.54.16.82.2.12.02.25.04.37.04.16.02.32.03.48.03 1.16 0 2.3-.43 3.2-1.17.86.74 1.98 1.17 3.16 1.17 1.19 0 2.29-.41 3.15-1.15.9.73 2.02 1.15 3.16 1.15.18 0 .36-.01.53-.03a4.818 4.818 0 0 0 1.21-.26.997.997 0 0 1 1.32.94Z" 
      fill="#721CFF"
    />
    </svg>
     },
    {
        name: 'Blog',
        icon: () => <svg width={36} height={36} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM8.5 6.38c1.03 0 1.88.84 1.88 1.88s-.84 1.88-1.88 1.88-1.88-.86-1.88-1.89c0-1.03.85-1.87 1.88-1.87Zm3.5 12.7c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88Zm3.5-8.96c-1.03 0-1.88-.84-1.88-1.88s.84-1.88 1.88-1.88 1.88.84 1.88 1.88-.85 1.88-1.88 1.88Z" 
          fill="#F92C8D" />
        </svg>,
        current: false,
        color: "#F92C8D",
        children: [
            { name: 'All Posts', href: '/en/' },
            { name: 'NestJS I: Basics, Modules, Controllers', href: '/code/nestjs-tutorial-I/' },
            { name: 'NestJS II: Dependency Injection, IoC, Providers', href: '/code/nestjs-tutorial-II/' },
            { name: 'SolidJS: Reactive Primitives', href: '/code/solidjs-and-reactive-primitives/' },
            { name: 'NextJS & Nx', href: '/code/next-js-development-within-nx-workspace/' },
            { name: 'AdonisJS & SolidJS Setup', href: '/code/adonisjs-solidjs/' },
            { name: 'AdonisJS & Tailwind Setup', href: '/code/adonisjs5-tailwind/' },
            { name: 'Django & JS I: Backend', href: '/post/django-and-modern-js-libraries-backend/' },
            { name: 'Django & JS II: React', href: '/post/django-and-modern-js-libraries-react/' },
            { name: 'Django & JS III: Svelte', href: '/post/django-and-modern-js-libraries-svelte/' },
            { name: 'Django & JS III: Svelte', href: '/post/django-and-modern-js-libraries-svelte/' },
            { name: 'Content Creation Tools', href: '/productivity/content-creation-tools/' },
            { name: 'Design Resources & Tools', href: '/design/free-design-resources/' },

            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ],
    },

    //{ name: 'Blog', href: '/en/', current: false },
    //{ name: 'Blog (Turkish)', href: '/tr/', current: false },
    //{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
    {
        name: 'Blog (Turkish)',
        icon: () => <svg width={36} height={36} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM6.47 7.72c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-.65.65-1.5.97-2.35.97-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06ZM12 18.78c-2.69 0-4.88-2.19-4.88-4.88 0-.7.57-1.28 1.27-1.28h7.2c.7 0 1.27.57 1.27 1.28.02 2.69-2.17 4.88-4.86 4.88Zm5.53-10c-.65.65-1.5.97-2.35.97-.85 0-1.7-.32-2.35-.97a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .71.71 1.87.71 2.58 0 .29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z" 
        fill="#FE3962" 
        />
        </svg>,
        current: false,
        color: "#FE3962",
        children: [
            { name: 'Tüm yazılar', href: '/tr/' },
            { name: 'Python vs JavaScript?', href: '/programlama/python-vs-javascript/' },
            { name: 'Zettelkasten not alma', href: '/not-alma/not-tutma-teknikleri-zettelkasten-metodu/' },
            { name: 'Jamstack nedir?', href: '/programlama/wordpress-vs-jamstack/' },
            { name: 'Notion şablonları listesi', href: '/blog-acmak/notion-sablonlari-ve-ucretsiz-site-olusturmak/' },
            { name: 'Not alma uygulamaları listesi', href: '/not-alma/not-alma-uygulamasi-ve-teknikleri/' },
            { name: 'En iyi blog yazma siteleri listesi', href: '/blog-acmak/en-iyi-blog-siteleri/' },
            { name: 'Proje yönetim ve görev takip uygulamaları listesi', href: '/uretkenlik/proje-yonetim-uygulamalari/' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ],
    },
    {
        name: 'Bookmarks',
        icon: BookmarkIcon,
        color: "#F78104",
        icon: () => <svg width={36} height={36} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 7.81v8.38C22 19.4 19.4 22 16.19 22H7.81C4.6 22 2 19.4 2 16.19V7.81c0-2.49 1.02-4.3 2.83-5.18.66-.32 1.42.18 1.42.91v8.88c0 1.19.46 2.14 1.29 2.62.84.47 1.9.37 2.98-.28l1.3-.78c.08-.04.28-.04.34-.01l1.32.79c.72.43 1.34.57 1.84.57.52 0 .92-.16 1.16-.3.81-.47 1.27-1.42 1.27-2.61V3.54c0-.73.77-1.23 1.42-.91C20.98 3.51 22 5.32 22 7.81Z" fill="#F78104" />
        <path d="M15.25 2c.55 0 1 .45 1 1v9.42c0 .64-.19 1.12-.52 1.31-.34.2-.88.1-1.48-.26l-1.32-.79c-.51-.31-1.35-.31-1.86 0l-1.32.79c-.6.36-1.14.45-1.48.26-.33-.19-.52-.67-.52-1.31V3c0-.55.45-1 1-1h6.5Z" 
        fill="#F78104" /></svg>,
        current: false,
        children: [
            { name: 'Dev Tools', href: '/bookmarks/dev-tools/' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
            { name: 'Video Archive', href: '/archive/video-archive/'},
        ],
    },
    {name: "Portfolio", href:"https://webmeister.org", color:"#FF9D00", 
    icon: () => <svg width={36} height={36} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm1.06 10.33c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.31l-7.72 7.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l7.72-7.72h-3.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.83c.41 0 .75.34.75.75v4.83Z" 
    fill="#FF9D00" 
    />
    </svg>
}
]

export const footerLinks = [
    { label: 'Home', href: 'https://www.cbsofyalioglu.com' },
    { label: 'Portfolio', href: 'https://webmeister.org' },
    { label: 'Contact', href: 'mailto:canburak@msn.com', ariaLabel: 'Send email' },
]
