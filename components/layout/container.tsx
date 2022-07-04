/** @jsxFrag Fragment */

/** @jsx h */
import { ComponentChildren, Fragment, h } from "preact";
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const Container = ({ children, ...customMeta }: Props) => {
  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Seo {...customMeta} />
        <div className="container">{children}</div>
        <div>foot</div>
      </div>
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