"use client"

import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import { Leafer } from "leafer-ui"
import type { Nullable } from "@ayingott/sucrose"
import { leaferAtom } from "./atoms"

export default function Home() {
  const leaferRef = useRef<Nullable<HTMLDivElement>>(null)

  const [leafer, setLeafer] = useAtom(leaferAtom)

  useEffect(() => {
    if (!leafer && leaferRef) {
      setLeafer(new Leafer({ view: leaferRef.current! }))
    }
  }, [leaferRef?.current])

  return (
    <main className="w-full h-full">
      <div className="w-full h-full" ref={leaferRef} />
    </main>
  )
}
