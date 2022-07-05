/** @jsxFrag Fragment */
/** @jsx h */
import { Head } from "$fresh/runtime.ts";
import { ComponentChildren, Fragment, h } from "preact";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const Container = ({ children, ...customMeta }: Props) => {
  return (
    <>
      {/* <div style={{ minHeight: "100vh" }}> */}
      <Seo {...customMeta} />
      <div className="container">{children}</div>
      {/* </div> */}
      <Footer />
    </>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: "测试哈哈",
    description: "desc",
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
      <link href="/output.css" rel="stylesheet" type="text/css" />

    </Head>
  );
};

const Footer = () => {
  return <footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
      <span class="footer-title">Services</span>
      <a class="link link-hover">Branding</a>
      <a class="link link-hover">Design</a>
      <a class="link link-hover">Marketing</a>
      <a class="link link-hover">Advertisement</a>
    </div>
    <div>
      <span class="footer-title">Company</span>
      <a class="link link-hover">About us</a>
      <a class="link link-hover">Contact</a>
      <a class="link link-hover">Jobs</a>
      <a class="link link-hover">Press kit</a>
    </div>
    <div>
      <span class="footer-title">Legal</span>
      <a class="link link-hover">Terms of use</a>
      <a class="link link-hover">Privacy policy</a>
      <a class="link link-hover">Cookie policy</a>
    </div>
  </footer>
}