/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      url: {props.url}<br />

      route: {props.route} <br></br>
      data: {props.data}
      <p>Greetings to you, {name}!</p>
    </main>
  );
}