"use client"

import { useAtom } from "jotai"
import { useEffect, useRef } from "react"
import { Leafer } from "leafer-ui"
import type { Nullable } from "@ayingott/sucrose"
import { leaferAtom } from "./atoms"
import DockBar from "@/components/DockBar"

export default function Home() {
  const leaferRef = useRef<Nullable<HTMLDivElement>>(null)

  const [leafer, setLeafer] = useAtom(leaferAtom)

  useEffect(() => {
    if (!leafer && leaferRef) {
      setLeafer(new Leafer({ view: leaferRef.current! }))
    }
  }, [leaferRef?.current])

  return (
    <main className="w-full h-full relative">
      <div className="w-full h-full" ref={leaferRef} />
      <DockBar
        dockWrapper={{
          direction: "horizontal",
          position: "bottom",
        }}
      />
    </main>
  )
}
