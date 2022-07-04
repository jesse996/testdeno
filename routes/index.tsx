/** @jsx h  */
/* @jsxFrag Fragment */

import { Fragment, h } from "preact";
import { Container } from "../components/layout/Container.tsx";

export default function Home() {
  return (
    <Container>
      <>
        <div className='snap-y snap-mandatory h-screen w-screen overflow-scroll'>
          <div className='snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl'>1</div>
          <div className='snap-start bg-teal-200 w-screen h-screen flex items-center justify-center text-8xl'>2</div>
          <div className='snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl'>3</div>
          <div className='snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-8xl'>4</div>
        </div>
      </>
    </Container>
  );
}
