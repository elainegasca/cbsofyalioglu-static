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
    { name: 'Home', href: '/', current: false },
    {
        name: 'Blog',
        icon: BookmarkIcon,
        current: false,
        children: [
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

            { name: 'All Posts', href: '/en/' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ],
    },

    //{ name: 'Blog', href: '/en/', current: false },
    //{ name: 'Blog (Turkish)', href: '/tr/', current: false },
    //{ name: 'Projects', href: '#', icon: FolderIcon, current: false },
    {
        name: 'Blog (Turkish)',
        icon: BookmarkIcon,
        current: false,
        children: [
            { name: 'Python vs JavaScript?', href: '/programlama/python-vs-javascript/' },
            { name: 'Zettelkasten not alma', href: '/not-alma/not-tutma-teknikleri-zettelkasten-metodu/' },
            { name: 'Jamstack nedir?', href: '/programlama/wordpress-vs-jamstack/' },
            { name: 'Notion şablonları listesi', href: '/blog-acmak/notion-sablonlari-ve-ucretsiz-site-olusturmak/' },
            { name: 'Not alma uygulamaları listesi', href: '/not-alma/not-alma-uygulamasi-ve-teknikleri/' },
            { name: 'En iyi blog yazma siteleri listesi', href: '/blog-acmak/en-iyi-blog-siteleri/' },
            { name: 'Proje yönetim ve görev takip uygulamaları listesi', href: '/uretkenlik/proje-yonetim-uygulamalari/' },
            { name: 'Tüm Türkçe yazılar', href: '/tr/' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ],
    },
    {
        name: 'Bookmarks',
        icon: BookmarkIcon,
        current: false,
        children: [
            { name: 'Dev Tools', href: '/bookmarks/dev-tools/' },
            //{ name: 'Design Tools', href: '/bookmarks/design-tools' },
        ],
    },
]

export const footerLinks = [
    { label: 'Home', href: 'https://www.cbsofyalioglu.com' },
    { label: 'Portfolio', href: 'https://webmeister.org' },
    { label: 'Contact', href: 'mailto:canburak@msn.com', ariaLabel: 'Send email' },
]
