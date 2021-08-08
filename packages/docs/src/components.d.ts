/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TableOfContents } from "@stencil/ssg";
import { DocsData } from "./data.server/docs";
export namespace Components {
    interface DocsMenu {
        "activePath": string;
        "toc": TableOfContents;
    }
    interface DocsPage {
        "data": DocsData;
    }
    interface ErrorPage {
    }
    interface LandingPage {
    }
    interface ModeSwitch {
    }
    interface NxextLogo {
    }
    interface NxextSite {
    }
    interface SiteBackdrop {
        "visible": boolean;
        "withColor": boolean;
    }
    interface SiteFooter {
    }
    interface SiteHeader {
    }
}
declare global {
    interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {
    }
    var HTMLDocsMenuElement: {
        prototype: HTMLDocsMenuElement;
        new (): HTMLDocsMenuElement;
    };
    interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {
    }
    var HTMLDocsPageElement: {
        prototype: HTMLDocsPageElement;
        new (): HTMLDocsPageElement;
    };
    interface HTMLErrorPageElement extends Components.ErrorPage, HTMLStencilElement {
    }
    var HTMLErrorPageElement: {
        prototype: HTMLErrorPageElement;
        new (): HTMLErrorPageElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLModeSwitchElement extends Components.ModeSwitch, HTMLStencilElement {
    }
    var HTMLModeSwitchElement: {
        prototype: HTMLModeSwitchElement;
        new (): HTMLModeSwitchElement;
    };
    interface HTMLNxextLogoElement extends Components.NxextLogo, HTMLStencilElement {
    }
    var HTMLNxextLogoElement: {
        prototype: HTMLNxextLogoElement;
        new (): HTMLNxextLogoElement;
    };
    interface HTMLNxextSiteElement extends Components.NxextSite, HTMLStencilElement {
    }
    var HTMLNxextSiteElement: {
        prototype: HTMLNxextSiteElement;
        new (): HTMLNxextSiteElement;
    };
    interface HTMLSiteBackdropElement extends Components.SiteBackdrop, HTMLStencilElement {
    }
    var HTMLSiteBackdropElement: {
        prototype: HTMLSiteBackdropElement;
        new (): HTMLSiteBackdropElement;
    };
    interface HTMLSiteFooterElement extends Components.SiteFooter, HTMLStencilElement {
    }
    var HTMLSiteFooterElement: {
        prototype: HTMLSiteFooterElement;
        new (): HTMLSiteFooterElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "docs-menu": HTMLDocsMenuElement;
        "docs-page": HTMLDocsPageElement;
        "error-page": HTMLErrorPageElement;
        "landing-page": HTMLLandingPageElement;
        "mode-switch": HTMLModeSwitchElement;
        "nxext-logo": HTMLNxextLogoElement;
        "nxext-site": HTMLNxextSiteElement;
        "site-backdrop": HTMLSiteBackdropElement;
        "site-footer": HTMLSiteFooterElement;
        "site-header": HTMLSiteHeaderElement;
    }
}
declare namespace LocalJSX {
    interface DocsMenu {
        "activePath"?: string;
        "toc"?: TableOfContents;
    }
    interface DocsPage {
        "data"?: DocsData;
    }
    interface ErrorPage {
    }
    interface LandingPage {
    }
    interface ModeSwitch {
    }
    interface NxextLogo {
    }
    interface NxextSite {
    }
    interface SiteBackdrop {
        "visible"?: boolean;
        "withColor"?: boolean;
    }
    interface SiteFooter {
    }
    interface SiteHeader {
    }
    interface IntrinsicElements {
        "docs-menu": DocsMenu;
        "docs-page": DocsPage;
        "error-page": ErrorPage;
        "landing-page": LandingPage;
        "mode-switch": ModeSwitch;
        "nxext-logo": NxextLogo;
        "nxext-site": NxextSite;
        "site-backdrop": SiteBackdrop;
        "site-footer": SiteFooter;
        "site-header": SiteHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "docs-menu": LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
            "docs-page": LocalJSX.DocsPage & JSXBase.HTMLAttributes<HTMLDocsPageElement>;
            "error-page": LocalJSX.ErrorPage & JSXBase.HTMLAttributes<HTMLErrorPageElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "mode-switch": LocalJSX.ModeSwitch & JSXBase.HTMLAttributes<HTMLModeSwitchElement>;
            "nxext-logo": LocalJSX.NxextLogo & JSXBase.HTMLAttributes<HTMLNxextLogoElement>;
            "nxext-site": LocalJSX.NxextSite & JSXBase.HTMLAttributes<HTMLNxextSiteElement>;
            "site-backdrop": LocalJSX.SiteBackdrop & JSXBase.HTMLAttributes<HTMLSiteBackdropElement>;
            "site-footer": LocalJSX.SiteFooter & JSXBase.HTMLAttributes<HTMLSiteFooterElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
        }
    }
}
