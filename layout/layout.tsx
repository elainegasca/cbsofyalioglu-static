import { WebmeisterGradientLogo } from '../components/logo'
import React, { Fragment, useCallback, useEffect, useState, useMemo } from 'react'
import Script from 'next/script'
import { Dialog, Menu, Transition, Disclosure } from '@headlessui/react'
import Footer from './footer'
import Link from 'next/link'
import {
    TealBlob,
    BluePurpleBlob,
    ThreeColorsBlob,
    TealPinkBlob,
    PurplePinkBlob,
} from '../components/Svg'
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import { Toggle } from '../components/toggle'
import { useRouter } from 'next/router'
import { navLinks, footerLinks } from '../settings'
import { site } from '../settings'
import { useHasMounted, useDebounce } from '../lib/hooks'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Tooltip,
} from '../components/styled'
import { Commander } from '../components'
import Icon from 'supercons'
import jsondata from '../data/posts-metadata.json'
import { SegmentedControl } from '@mantine/core';
import {motion} from 'framer-motion'
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// @ts-nocheck
export default function Layout({ openCommander, closeCommander, x,y, children }) {
    const hasMounted = useHasMounted()
    const shouldLoadScripts = useDebounce(hasMounted, 5000)
    //console.log("loading scripts", shouldLoadScripts)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const setSidebarOpener = useCallback(() => setSidebarOpen(true),[])


    return (
        <div
            className="h-auto min-h-screen flex !overflow-x-hidden relative z-10 !bg-transparent !max-w-[100vw]"
            id="layout"
        >
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden">
                <div id="main-layout"></div>
                <div className='absolute top-0 left-0 right-0 bottom-0 ' id="grad-grad">
                    {/* <SVGComponent /> */}
                </div>
                {/* <PurplePinkBlob />
                <ThreeColorsBlob /> */}
            </div>
            {/* SIDEBAR MOBILE */}
            <SidebarMobile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <SidebarDesktop openCommander={openCommander} />
            {/* <motion.div id="mouse-tracker" style={{x, y, zIndex:1000}}></motion.div> */}

            {/* MAIN CONTENT */}
            <MainContent children={children} setSidebarOpen={setSidebarOpener} />
            <CommanderEl />
        </div>
    )
}
const CommanderEl = () => {
    return <_Commander />
}
const _Commander = () => {
    const hasMounted = useHasMounted()

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const closeCommander = useCallback(() => setOpen(false), [])
    const openCommander = useCallback(() => setOpen(true), [])
    const memoizedData = useMemo(() => jsondata, [])

    const handleKeyDown = (e) => {
        console.log('eeee', e.keyCode)
        if (e.keyCode === 75 && e.metaKey) {
            if (!open) {
                openCommander()
            } else closeCommander()
        }
    }
    useEffect(() => {
        document.addEventListener('onkeydown', handleKeyDown)
        return document.removeEventListener('onkeydown', handleKeyDown)
    })

    useEffect(() => {
        if (hasMounted) {
            setShow(false)
        }
    },[hasMounted])
    return show ? <Commander data={memoizedData} open={open} closeHandler={closeCommander} /> : <div></div>
}

const _Accordion = () => {
    const router = useRouter()
    const navigation = React.useMemo(() => navLinks.map((navlink) =>
        navlink.href === router.asPath ? { ...navlink, current: true } : navlink
    ), [])
    return (
        <Accordion type="single" collapsible>
            {navigation.map((item, i) =>
                item.children ? (
                    <AccordionItem value={`item-${i}`} key={`acc-${i}`}>
                        <AccordionTrigger>{item.name}</AccordionTrigger>
                        <AccordionContent>
                            {item.children.map((subItem) => (
                                <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                >
                                    <a
                                        title={subItem.name}
                                        className="group w-full flex items-center pl-5 pr-2 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-300 "
                                    >
                                        {subItem.name}
                                    </a>
                                </Link>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ) : (
                    <Link key={item.name} href={item.href}>
                        <a
                            title={item.name}
                            className="group w-full flex items-center pl-5 pr-2 py-2 text-sm  text-gray-300 rounded-md hover:text-white"
                        >
                            {item.name}
                        </a>
                    </Link>
                )
            )}
        </Accordion>
    )
}
const AccordionSection = React.memo(_Accordion)

const _SidebarDesktop = ({ openCommander }) => (
    < div id="sidebar-desktop" className="hidden relative md:flex md:flex-shrink-0  z-10 border-r-2 border-solid border-gray-900" >
        <div className="flex flex-col w-80">
            <div className="sidebar-layer"></div>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div id="sidebar-fixed" className="flex flex-col h-0 flex-1 fixed top-16 left-0 w-64 bottom-0 max-h-screen">
                {/* SIDEBAR TOP BANNER*/}
                <div
                    title={"cbsofyalioglu"}
                    className="group w-full flex items-center pl-10 pr-2 mb-4 text-lg  text-gray-300 rounded-md hover:text-white"
                >
                    <Link href="/">
                        <a className="relative top-2 uppercase font-black text-lg" title="homepage">
                            {/* {"can "}
                            {"burak "}
                            {"sofyalioglu"} */}
                            cbs<span className="!text-4xl !font-black !leading-[16px] !h-[16px] !text-[#e5ff01]">.</span>
                        </a>
                    </Link>
                </div>
                <div className="flex items-center h-16 flex-shrink-0 px-4 bg-transparent justify-between">


                </div>

                <div className="flex-1 fixed pl-4 flex-grow top-20 flex flex-col justify-between overflow-y-auto w-80 h-[90vh]">
                    <nav className="flex-1 px-2 py-14 bg-transparent flex-grow h-full space-y-1">
                        {/* <button
                            onClick={openCommander}
                            className="group w-full flex items-center pl-5 pr-2 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-300 justify-between"
                        >
                            Search
                        </button> */}
                        <AccordionSection />
                    </nav>
                    <div>
                    <a
                        title="Professional Works: Company websites, Wix e-commerce and Shopify e-commerce"
                        href={'https://webmeister.org'}
                        className={classNames(
                            'text-gray-700 mx-2 dark:text-gray-300 hover:bg-gray-900 hover:text-white',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                            'portfolio-link'
                        )}
                    >
                        Portfolio ↗
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div >
)
const SidebarDesktop = React.memo(_SidebarDesktop);

const SidebarMobile = ({sidebarOpen = false, setSidebarOpen}) => {
    const router = useRouter()
    const navigation = React.useMemo(() => navLinks.map((navlink) =>
        navlink.href === router.asPath ? { ...navlink, current: true } : navlink
    ), [])
    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed inset-0 flex z-40 md:hidden mobilay"
                open={sidebarOpen}
                onClose={setSidebarOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-90" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-transparent">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-3 right-0 -mr-12 pt-2">
                                <button
                                    className="ml-1 mr-4 flex items-center justify-center h-8 w-8 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </Transition.Child>
                        <div className="flex-shrink-0 flex items-center px-4">
                            <WebmeisterGradientLogo className="" />
                        </div>
                        <div className="mt-5 flex-1 h-0 overflow-y-auto ">
                            <nav className="px-2 space-y-1">
                                <Accordion type="single" collapsible>
                                    {navigation.map((item, i) =>
                                        item.children ? (
                                            <AccordionItem
                                                value={`item-${i}`}
                                                key={`acc-mob-${i}`}
                                            >
                                                <AccordionTrigger>{item.name}</AccordionTrigger>
                                                <AccordionContent>
                                                    {item.children.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                        >
                                                            <a
                                                                title={subItem.name}
                                                                className="group w-full flex items-center pl-5 pr-2 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-300 "
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ) : (
                                            <Link key={item.name} href={item.href}>
                                                <a
                                                    title={item.name}
                                                    className="group w-full flex items-center pl-5 pr-2 py-2 text-sm  text-gray-300 rounded-md hover:text-white"
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        )
                                    )}
                                </Accordion>
                                {/* <button
                                    onClick={openCommander}
                                    className="group w-full flex items-center pl-5 pr-2 py-2 text-sm font-medium text-gray-400 rounded-md hover:text-gray-300 justify-between"
                                >
                                    Search
                                    <Icon glyph="search" size={24} />
                                </button> */}
                            </nav>
                        </div>
                        <div className="ml-4 mb-4">
                            <a
                                title="Professional Works: Company websites, Wix e-commerce and Shopify e-commerce"
                                href={'https://webmeister.org'}
                                className={classNames(
                                    'text-gray-700 mx-2 dark:text-gray-300  hover:text-white portfolio-link',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}
                                rel="me"
                            >
                                Portfolio ↗
                            </a>
                        </div>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                </div>
            </Dialog>
        </Transition.Root>
    )
}
const _MainContent = ({ children, setSidebarOpen }) => (
    <div className="flex flex-col w-0 flex-1 overflow-hidden relative !z-10 shadow-xl">
        <div className="relative flex-shrink-0 flex h-16  z-50">
            <button
                className="px-4 border-r border-gray-200 text-gray-500 bg-gray-800 relative z-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between relative md:blurlay z-50 bg-gray-900 md:hidden">
                <div className="flex-1 flex">
                    {/*<form className="w-full flex md:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                        name="search"
                                    />
                                </div>
                                            </form>*/}
                </div>
                <div className="ml-4 items-center md:ml-6 hidden">
                    <Toggle />
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                            <>
                                <div>
                                    <Menu.Button className="max-w-xs bg-transparent flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        {/*<span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                />*/}
                                    </Menu.Button>
                                </div>
                                <Transition
                                    show={open}
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        static
                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
        {/* MAIN */}
        <main className="will-lock flex-1 relative overflow-y-auto overflow-x-hidden focus:outline-none mt-4 sm:-mt-16 z-10 flex-col items-center w-full">
            <div className="py-20 z-50 mx-auto max-w-[1200px] will-lock">{children}</div>
        </main>

    </div>
)
const MainContent = React.memo(_MainContent);
const SVGComponent = props =>
    <svg width="100%" height="100%" id="bg-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_17_60)">
            <g filter="url(#filter0_f_17_60)">
                <path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#4D07E3"></path>
                <path d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z" fill="#4C00FF"></path>
                <path d="M320 400H400V78.75L332.5 211.5L320 400Z" fill="#B5BFF1"></path>
                <path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#96ACFF"></path>
            </g>
        </g>
        <defs>
            <filter id="filter0_f_17_60" x="-159.933" y="-159.933" width="719.867" height="719.867" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur>
            </filter>
        </defs>
    </svg>


