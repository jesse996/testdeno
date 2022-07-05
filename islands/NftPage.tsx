/** @jsxFrag Fragment */
/** @jsx h */
import { useState, useRef, useEffect } from "preact/hooks";
import { Fragment, h } from "preact";
import { NftResp } from "../routes/nft.tsx";
import _ from 'https://esm.sh/lodash-es@4.17.21/';

export default function NftPage({ initData }: { initData: NftResp[] }) {
  const [list, setList] = useState<NftResp[]>(initData);
  const [isLoading, setIsLoading] = useState(false);

  const listRef = useRef(null);

  useScrollToBottomHook(listRef, async () => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
    try {


      const host = "https://fml233.cn:8443/api"
      const resp = await fetch(`${host}/nft/page`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ page: list.length / 20 + 1, size: 20 })
      });

      const data = await resp.json();
      setList([...list, ...data.result.records]);
    } catch (e) {
      console.log(e)
    }
    setIsLoading(false)
  })


  return <div class={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 place-items-center px-2`} ref={listRef}>

    {list.map(nft => (
      <div key={nft.tokenId} class='rounded-2xl bg-blue-300 overflow-clip w-full' >
        <img src={nft.image} class='w-full max-w-fit aspect-square overflow-clip' />
        <div class='p-3'>
          <p class='pb-2 truncate  break-all'>{nft.name}</p>
          <div class=''>
            <img src={nft.avatar} alt="" class='w-10 h-10 mr-2 rounded-full inline-block' />
            <span>{nft.nickname}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
}


export const useScrollToBottomHook = (
  listDomRef: any,
  callback: () => void,
  reactionDistance = 20
) => {
  console.log('useScrollToBottomHook');

  useEffect(() => {
    const debounced = _.debounce(callback, 250, { leading: true });
    const handleScroll = (e: any) => {

      if (
        document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight <= reactionDistance
      ) {
        debounced()
      }
    }
    window!.addEventListener('scroll', handleScroll)
    return () => {
      // 组件销毁时清除绑定事件
      window!.removeEventListener('scroll', handleScroll)
    }
  }, [callback, reactionDistance, listDomRef])
}