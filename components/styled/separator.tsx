import React from 'react';
import { styled, violet } from "../../styles/stitches.config"
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
    fontSize: 36,
    lineHeight: '52px',
});




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

