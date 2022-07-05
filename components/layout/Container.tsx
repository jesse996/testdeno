/** @jsxFrag Fragment */
/** @jsx h */
import {Head} from "$fresh/runtime.ts";
import {ComponentChildren, Fragment, h} from "preact";

export type Props = {
    children: ComponentChildren;
    title?: string;
    name?: string;
    description?: string;
};

export const Container = ({children, ...customMeta}: Props) => {
    return (
        <>
            {/*<div style={{minHeight: "100vh"}}>*/}
            <Seo {...customMeta} />
            <div className="container">{children}</div>
            {/*<Footer/>*/}
            {/*</div>*/}
        </>
    );
};

const Seo = ({...customMeta}) => {
    const meta = {
        title: "测试哈哈",
        description: "desc",
        type: "website",
        ...customMeta,
    };

    return (
        <Head>
            <title>{meta.title}</title>
            <meta content={meta.description} name="description"/>
            <link rel="icon" href="/favicon.ico"/>
            <link href="/output.css" rel="stylesheet" type="text/css"/>

        </Head>
    );
};

const Footer = () => {
    return <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </div>
    </footer>
}