/** @jsx h  */
/* @jsxFrag React.Fragment */

import { Fragment, h } from "preact";
import Counter from "../islands/Counter.tsx";
import { Container } from "../components/layout/Container.tsx";
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";

export default function Home() {
  return (
    <Container>
      <Fragment>
        <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll'>
          <div className='snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl'>1</div>
          <div className='snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl'>2</div>
          <div className='snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl'>3</div>
          <div className='snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl'>4</div>
        </div>
      </Fragment>
    </Container>
  );
}
