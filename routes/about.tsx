/** @jsx h */
import {h} from "preact";
import {Handlers} from "$fresh/server.ts";
import {Container} from "../components/layout/Container.tsx";

export default function AboutPage() {
    return (
        <Container>
            <div class={'flex flex-col place-items-center'}>
                <h1>About</h1>
                <p>This is the about page.</p>
                <div class={'my-10'}>
                    <label for="my-modal" class="btn modal-button">open modal</label>

                    <input type="checkbox" id="my-modal" class="modal-toggle"/>
                    <div class="modal">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                            <p class="py-4">You've been selected for a chance to get one year of subscription to use
                                Wikipedia for free!</p>
                            <div class="modal-action">
                                <label for="my-modal" class="btn">Yay!</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mockup-phone ">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">Hi. i am jesse</div>
                    </div>
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