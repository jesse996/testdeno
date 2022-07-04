/** @jsx h */
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";
import { Container } from "../components/layout/Container.tsx";

export default function AboutPage() {
  return (
    <Container>
      <h1>About</h1>
      <p>This is the about page.</p>
      <div>
        <a href="#my-modal-2" class="btn">open modal</a>
        <div class="modal" id="my-modal-2">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
              <a href="#" class="btn">Yay!</a>
            </div>
          </div>
        </div>
      </div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">Hi. i am jesse</div>
        </div>
      </div>

    </Container>
  )
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};