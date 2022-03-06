import React from 'react';
import { styled, violet, blackA, indigo } from "../../styles/stitches.config"
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
//import { indigo } from '@radix-ui/colors/types/dark/indigo';

// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
const Box = styled('div', {});
const Img = styled('img', {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
});
export const AspectRatioBox = ({ children, ratio = 16 / 9, style }) => (
    <Box
        css={{
            width: "100%",
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: `0 2px 10px ${blackA.blackA7}`,
            ...style
        }}
    >
        <AspectRatio.Root ratio={ratio}>
            {children}
        </AspectRatio.Root>
    </Box>
);
export const AspectRatioImage = ({ src, alt, ratio = 16 / 9, style }) => (
    <Box
        css={{
            width: "100%",
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: `0 2px 10px ${blackA.blackA7}`,
            ...style
        }}
    >
        <AspectRatio.Root ratio={ratio}>
            <Img
                src={src}
                alt={alt}
            />
        </AspectRatio.Root>
    </Box>
);

const AspectRatioDemo = (props: { src: string, alt: string }) => (
    <Box
        css={{
            width: 200,
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: `0 2px 10px ${blackA.blackA7}`,
        }}
    >
        <AspectRatio.Root ratio={16 / 9}>
            <Img
                src={props.src}
                alt={props.alt}
            />
        </AspectRatio.Root>
    </Box>
);

const GradBox = styled('div', {
    position:"relative",
    borderRadius: 6,
    display: "flex",
    padding: "16px 5%",
    margin:"32px 0",
    backgroundImage: `linear-gradient(330deg, ${violet.violet9} 0%, ${indigo.indigo9} 100%)`
});
const CardPostTitle = styled('h4', {
    color: 'white',
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: '36px',
});
const CardPostDescription = styled('span', {
    color: 'white',
    fontSize: 18,
    lineHeight: '24px',
    margin:0
});
export const CardPost = (props: { link: string, title: string, cover: string, alt: string, description: string }) => (
    <GradBox>
            <AspectRatioDemo
                src={props.cover}
                alt={props.alt}
            />
        <Box css={{ marginLeft: 32, flexDirection:"column", justifyContent: "center" }}>
            <CardPostTitle>{props.title}</CardPostTitle>
            <CardPostDescription>{props.description}</CardPostDescription>
        </Box>
        <a href={props.link} className="no-underline !absolute top-0 bottom-0 left-0 right-0"></a>
    </GradBox>
)

export default AspectRatioDemo;
