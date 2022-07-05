/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import { Container } from "../components/layout/Container.tsx";


interface BaseResp<T> {
  code: number,
  msg: string,
  result?: T
}

interface BaseListResp<T> {
  total: number,
  records: T[]
}

interface NftResp {
  nftClassId: 0,
  userId: 0,
  image: string,
  name: string,
  tokenId: string,
  nickname: string,
  avatar: string
}

export const handler: Handlers<BaseResp<BaseListResp<NftResp>> | null> = {
  async GET(_, ctx) {
    const host = Deno.env.get('HOST')

    const resp = await fetch(`${host}/nft/page`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page: 1, size: 10 })
    });

    const data = await resp.json();

    return ctx.render(data);
  },
};

export default function Nft({ data }: PageProps<BaseResp<BaseListResp<NftResp>> | null>) {
  if (!data) {
    return <div>data is null</div>
  }
  return (
    <Container >
      <div class={`grid grid-cols-2 lg:grid-cols-4 gap-4`}>

        {data.result?.records.map(nft => (
          <div key={nft.tokenId} class='rounded-2xl bg-blue-300 overflow-clip' >
            <img src={nft.image} class='w-full aspect-square' />
            <div class='p-3'>
              <div class='pb-2'>{nft.name}</div>
              <div class='flex items-center '>
                <img src={nft.avatar} alt="" class='w-10 h-10 rounded-full ' />
                <p>{nft.nickname}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </Container>
  )

}