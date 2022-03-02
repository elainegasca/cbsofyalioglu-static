import React from 'react';
import { styled } from '@stitches/react';
import { violet } from '@radix-ui/colors';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
    backgroundColor: violet.violet6,
    '&[data-orientation=horizontal]': { height: 1, width: '100%' },
    '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

// Exports
export const Separator = StyledSeparator;

// Your app...
const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });
const Text = styled('p', {
    color: 'white',
    fontSize: 18,
    lineHeight: '20px',
});
const HeaderOne = styled('h1', {
    color: 'white',
    fontSize: 42,
    lineHeight: '52px',
});

export const TopicHeader = ({ title, description }) => (
    <Box css={{ width: '100%', maxWidth: 720, margin: '0 15px' }}>
        <HeaderOne css={{ fontWeight: 500 }}>{title}</HeaderOne>
        <Separator css={{ margin: '15px 0' }} />
        <Text>{description}</Text>
    </Box>
);

export const PostHeader = ({ title, description, topics, modified }) => (
    <Box css={{ width: '100%', maxWidth: 720, margin: '0 15px' }}>
        <HeaderOne css={{ fontWeight: 500 }} className="animate-text-md">{title}</HeaderOne>
        <Text className="animate-text-lg text-sm mt-4" css={{fontSize:16, opacity:0.7}}>UPDATED: <time dateTime={modified}>{modified}</time></Text>
        <Separator css={{ margin: '24px 0' }} className="animate-text-xl" />
        <Text className="animate-text-xl">{description}</Text>
        <Flex css={{ height: 20, alignItems: 'center', marginTop:32 }}>
            {topics.map((cat, index) => (
                <>
                    <Box key={index}>
                        <a href={`/${cat}/`}
                            title={`See ${cat} posts`}
                            key={"article-header-category-" + cat}
                            className={`text-lg uppercase inline-flex items-center py-0.5 rounded-full text-white animate-text-lg`}
                        >
                            {cat}
                        </a>
                    </Box>
                    <Separator className="animate-text-xl" decorative orientation="vertical" css={{ margin: '0 15px' }} />
                </>
            ))}
        </Flex>
    </Box>
);

const SeparatorDemo = ({ title, description }) => (
    <Box css={{ width: '100%', maxWidth: 300, margin: '0 15px' }}>
        <HeaderOne css={{ fontWeight: 500 }}>{title}</HeaderOne>
        <Text>{description}</Text>
        <Separator css={{ margin: '15px 0' }} />
        <Flex css={{ height: 20, alignItems: 'center' }}>
            <Text>Blog</Text>
            <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
            <Text>Docs</Text>
            <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
            <Text>Source</Text>
        </Flex>
    </Box>
);

export default SeparatorDemo;
export * from "./aspect-ratio"
