import React from 'react'
import { styled, violet } from '../../styles/stitches.config'
import { Separator } from './'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
    'backgroundColor': violet.violet6,
    '&[data-orientation=horizontal]': { height: 1, width: '100%' },
    '&[data-orientation=vertical]': { height: '100%', width: 1 },
})

// Exports

// Your app...
const Box = styled('div', {})
const Flex = styled('div', { display: 'flex' })
const Text = styled('p', {
    color: 'white',
    fontSize: 18,
    lineHeight: '20px',
})
const HeaderOne = styled(motion.h1, {
    color: 'white',
    fontSize: 36,
    lineHeight: '52px',
})
export const HeaderThree = styled('h3', {
    color: 'white',
    fontSize: 36,
    lineHeight: '52px',
})
export const TopicHeader = ({ title, description }) => (
    <Box css={{ width: '100%', maxWidth: 720, margin: '0 15px' }}>
        <HeaderOne css={{ fontWeight: 500 }}>{title}</HeaderOne>
        <Separator css={{ margin: '15px 0' }} />
        <Text>{description}</Text>
    </Box>
)

export const PostHeader = ({ title, description, topics, modified, headerId }) => (
    <Box css={{ width: '100%', maxWidth: 720, margin: '0 15px', padding: '0 8px' }}>
        <motion.h1 style={{ fontWeight: 500 }} className="animate-text-md" layoutId={headerId + "-title"}
          exit={{ opacity: 0 }}
        >
            {title}
        </motion.h1>
        <Text className="animate-text-lg text-sm mt-4 opacity-70" css={{ fontSize: 16 }}>
            UPDATED: <time dateTime={modified}>{modified}</time>
        </Text>
        <Separator css={{ margin: '24px 0' }} className="animate-text-xl" />
        <Text className="animate-text-xl opacity-70">{description}</Text>
        <Flex
            css={{ height: 20, alignItems: 'center', marginTop: 32 }}
            className="frontmatter-section-tags"
        >
            {topics.map((cat, index) => (
                <Box key={'article-header-category-' + cat} className="tag-box">
                    <Box key={index}>
                        <Link href={`/${cat}/`} legacyBehavior>
                            <a
                                className={`tag uppercase  animate-text-lg !text-xs`}
                                title={`See ${cat} posts`}
                            >
                                {` `}
                                {cat}
                                {` `}
                            </a>
                        </Link>
                    </Box>
                </Box>
            ))}
        </Flex>
    </Box>
)
