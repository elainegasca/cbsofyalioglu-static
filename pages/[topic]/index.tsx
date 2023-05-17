import Image from "next/image";
import Link from 'next/link'
import Head from 'next/head'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MetaTags } from '../../components'
import { site } from '../../settings'
import { TopicHeader } from "../../components/styled"
import { ListItemCard } from "../../components"
import { topics } from "../../settings/topics";


function CategoryPage({ posts, topic, slug, language }) {
    console.log("Category posts: ", topic, slug, language)
    const isTurkish = language === "tr"
    const canonical = `https://www.cbsofyalioglu.com/${topic}/`
    const title = isTurkish ? `Design &amp; Development | ${topic.toUpperCase()} etiketli yazılar` : `Design &amp; Development | ${topic.toUpperCase()} articles`
    const description = topics[topic] ? topics[topic] : isTurkish ? `Şu anda ${topic} etiketine sahip makaleleri görüntülüyorsunuz.` : `You are currently viewing articles with the ${topic} tag.`

    return (
        <>
            <Head>
                <title key="h-title-tag">Design &amp; Development | Can Burak Sofyalıoğlu</title>
                <meta name="title" content={title} key="h-title" />
                <meta name="description" content={description} key="h-description" />
                <link rel="canonical" href={canonical} key="h-canonical" />
                <MetaTags
                    type="website"
                    title={title}
                    description={description}
                    canonical={canonical}
                    cover={site.cover}
                />
            </Head>
            <div className="min-h-screen mb-40">
                <div className="">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                        {/* Text */}
                        <div className="mt-16 mb-10 md:mb-16">
                            <TopicHeader
                                title={topic}
                                description={description}
                            />
                        </div>
                        {/* Article */}
                        <ul className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8">
                            {posts.map((post, index) => (
                                <ListItemCard
                                    title={post.frontMatter.title}
                                    cover={post.frontMatter.cover}
                                    description={post.frontMatter.description}
                                    keywords={post.frontMatter.keywords}
                                    slug={post.frontMatter.slug}
                                    topic={post.frontMatter.topic}
                                    key={`${post.frontMatter.slug}-${topic}-${index}`}
                                />
                            ))}
                        </ul>

                    </div>
                </div>

            </div>
        </>
    )
}

export const getStaticProps = async ({ params: { topic } }) => {
    //console.log("[topic]/[slug] getStaticProps :", topic)
    const files = fs.readdirSync(path.join('posts'))
    let language;
    const posts = []
    files.forEach(filename => {
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        //console.log("ffrontmatter of getstaticprops", frontMatter)
        if (frontMatter.topic === topic || frontMatter.categories?.includes(topic)) {
            language = frontMatter.language
            posts.push({
                frontMatter,

                // The slug will be user defined if exists in the frontmatter
                // Otherwise use default slug obtained from filename
                slug: frontMatter.slug || filename.split(".")[0],
                // If category exists use it,  otherwise use 'posts' directory
                topic: frontMatter.topic,
            })
        }
    })
    return {
        props: {
            topic: encodeURI(topic.toLowerCase().replace(" ", "-")),
            posts,
            language
        }
    }
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    //console.log("files: ", files)
    //console.log("[topic]/[slug].tsx - filenames: ", files)

    const allpaths = files.map(filename => {
        // frontmatter data
        const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
        const { data: frontMatter } = matter(markdownWithMeta)
        //console.log("categories frontmatters: ", filename, frontMatter)
        return {
            params: {
                topic: frontMatter.topic || "post",
            }
        }
    })
    const distinctTopics = [...new Set(allpaths.map(p => p.params.topic))]
    const paths = distinctTopics.map(topic => {
        const currentCategoryPosts = allpaths.filter(path => path.params.topic === topic)
        return {
            params: {
                topic,
            }
        }
    })
    //console.info("Distinct Topics:", distinctTopics)
    //console.log("Current Categories: ", paths)
    return {
        paths,
        fallback: false
    }
}
export default CategoryPage
