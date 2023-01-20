import React from "react";
import {
    styled,
    keyframes,
    violet,
    blackA,
    mauve
} from "../../styles/stitches.config";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const slideDown = keyframes({
    from: { height: 0 },
    to: { height: "var(--radix-accordion-content-height)" }
});

const slideUp = keyframes({
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: 0 }
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
    borderRadius: 6,
    width: "100%",
    backgroundColor: "transparent",
});
const StyledPostAccordion = styled(AccordionPrimitive.Root, {
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 20,
    padding:"16px 0",

});
const StyledAccordionItem = styled(AccordionPrimitive.Item, {
    overflow: "hidden",
    marginTop: 1,

    "&:first-child": {
        marginTop: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },

    "&:last-child": {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },

    "&:focus-within": {
        position: "relative",
        zIndex: 1
        //boxShadow: `0 0 0 2px ${mauve.mauve12}`,
    }
});
const StyledItem = styled(AccordionPrimitive.Item, {
    overflow: "hidden",
    marginTop: 1,

    "&:first-child": {
        marginTop: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },

    "&:last-child": {
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    },

    "&:focus-within": {
        position: "relative",
        zIndex: 1
        //boxShadow: `0 0 0 2px ${mauve.mauve12}`,
    }
});
const StyledHeader = styled(AccordionPrimitive.Header, {
    all: "unset",
    display: "flex"
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
    all: "unset",
    fontFamily: "inherit",
    backgroundColor: "transparent",
    padding: "0 20px",
    minHeight: 45,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 14,
    lineHeight: 1,
    cursor: "pointer",
    color: "rgb(212,212,212)",
    //boxShadow: `0 1px 0 ${mauve.mauve6}`,
    '&[data-state="closed"]': { backgroundColor: "transparent" },
    '&[data-state="open"]': { backgroundColor: "transparent" },
    "&:hover": { color: "white" }
});

const StyledContent = styled(AccordionPrimitive.Content, {
    overflow: "hidden",
    fontSize: 14,
    color: mauve.mauve11,
    backgroundColor: "transparent",

    '&[data-state="open"]': {
        animation: `${slideDown} 500ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
    },
    '&[data-state="closed"]': {
        animation: `${slideUp} 500ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
    }
});
const StyledAccordionContent = styled(AccordionPrimitive.Content, {
    overflow: "hidden",
    fontSize: 14,
    color: mauve.mauve11,
    backgroundColor: "transparent",

    '&[data-state="open"]': {
        animation: `${slideDown} 500ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
    },
    '&[data-state="closed"]': {
        animation: `${slideUp} 500ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
    }
});
const StyledContentText = styled("div", {
    padding: "8px 8px"
});
const StyledAccordionParagraph = styled("p", {
    padding: "8px 0px",
    marginTop: 12,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: "1.9em",
    textAlign: "left",
    fontStyle: "normal",
    fontWeight: 400,
    opacity: 0.8
});
const StyledChevron = styled(ChevronDownIcon, {
    color: "#FEFEFE",
    transition: "transform 500ms cubic-bezier(0.87, 0, 0.13, 1)",
    "[data-state=open] &": { transform: "rotate(180deg)" }
});
const StyledAccordionChevron = styled(ChevronDownIcon, {
    color: "#91E899",
    transition: "transform 500ms cubic-bezier(0.87, 0, 0.13, 1)",
    "[data-state=open] &": { transform: "rotate(180deg)" }
});
const StyledAccordionChevronWrapper = styled("div", {
    padding: 4,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "100%",
    borderColor: "#91E899"
});
// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;
export const AccordionTrigger = React.forwardRef(
    (
        { children, ...props }: { children: any; props?: {color?:string, size?:number} },
        forwardedRef: any
    ) => (
        <StyledHeader>
            <StyledTrigger {...props} ref={forwardedRef}>
                {children}
                <StyledChevron aria-hidden style={{
                  color: props.color ? props.color : "FEFEFE",
                  marginRight:-8,
                  ...(props.size && {width:`${props.size}px`, height:`${props.size}px`})
                  }
                  } 
                />
            </StyledTrigger>
        </StyledHeader>
    )
);
export const AccordionContent = React.forwardRef(
    (
        { children, ...props }: { children: any; props?: any },
        forwardedRef: any
    ) => (
        <StyledContent {...props} ref={forwardedRef}>
            <StyledContentText>{children}</StyledContentText>
        </StyledContent>
    )
);
export const AccordionParagraph = React.forwardRef(
    (
        { children, ...props }: { children: any; props?: any },
        forwardedRef: any
    ) => (
        <StyledContent {...props} ref={forwardedRef}>
            <StyledAccordionParagraph>{children}</StyledAccordionParagraph>
        </StyledContent>
    )
);
export const AccordionSection = ({
    content,
    heading,
    headingText,
    children
}) => (
    <StyledPostAccordion type="single" collapsible>
        <StyledAccordionItem value="ne-tur-blog-siteleri-incelenecek">
            <StyledTrigger asChild>
                <div className="pl-0">
                    {heading === "h3" ? (
                        <h3>{headingText}</h3>
                    ) : heading === "h2" ? (
                        <h2>{headingText}</h2>
                    ) : (
                        <h4>{headingText}</h4>
                    )}
                    <StyledAccordionChevronWrapper>
                        <StyledAccordionChevron aria-hidden />
                    </StyledAccordionChevronWrapper>
                </div>
            </StyledTrigger>
            <AccordionParagraph>{content}</AccordionParagraph>
        </StyledAccordionItem>
    </StyledPostAccordion>
);

// Your app...
/*
export const AccordionDemo = () => (
    <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARAI design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
);

export default AccordionDemo;
*/
