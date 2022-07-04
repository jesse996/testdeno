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
    const host = 'https://fml233.cn:8443/api';
    const hostDev = 'http://localhost:9080/api';

    const resp = await fetch(`${hostDev}/nft/page`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page: 1, size: 10 })
    });

    // const resp = await fetch(`https://api.jingmake.com/nft/allOnList2`, {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ currentPage: 1, pageSize: 20, market: 2, type: 1 })
    // });

    const data = await resp.json();
    console.log(data.result.records.length);

    // console.log(data.data.records.length);
    // console.log(data.data.records.length);


    return ctx.render(data);
  },
};

export default function Nft({ data }: PageProps<BaseResp<BaseListResp<NftResp>> | null>) {
  if (!data) {
    return <div>data is null</div>
  }
  return (
    <Container>
      <h1>NFT</h1>
      {/* <div class={tw`flex flex-wrap ju`}> */}
      <div class={`flex`}>

        {data.result?.records.map(nft => (
          <div key={nft.tokenId}>
            <img src={nft.image} width={64} height={64} />
            <h1>{nft.name}</h1>
            <p>{nft.nickname}</p>

          </div>
        ))}
      </div>

    </Container>
  )

}