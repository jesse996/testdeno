/** @jsx h */
import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";

import { PageProps, Handlers } from "$fresh/server.ts";
import { Container } from "../components/layout/Container.tsx";
import NftPage from "../islands/NftPage.tsx";


interface BaseResp<T> {
  code: number,
  msg: string,
  result?: T
}

interface BaseListResp<T> {
  total: number,
  records: T[]
}

export interface NftResp {
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
    const host = 'https://fml233.cn:8443/api'

    const resp = await fetch(`${host}/nft/page`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ page: 1, size: 20 })
    });

    const data = await resp.json();

    return ctx.render(data);
  },
};

export default function Nft({ data }: PageProps<BaseResp<BaseListResp<NftResp>> | null>) {
  if (!data) {
    return <div>data is null</div>
  }
  return <Container>
    <NftPage initData={data.result?.records || []}></NftPage>
  </Container>

}