import type { Nullable } from "@ayingott/sucrose"
import { useAtom } from "jotai"
import { Leafer } from "leafer-ui"
import { useEffect, useRef } from "react"
import { leaferAtom } from "./atoms"
import DockBar from "./components/DockBar"

const App = () => {
  const leaferRef = useRef<Nullable<HTMLDivElement>>(null)

  const [leafer, setLeafer] = useAtom(leaferAtom)

  useEffect(() => {
    if (!leafer && leaferRef) {
      setLeafer(new Leafer({ view: leaferRef.current! }))
    }
  }, [leaferRef?.current])

  return (
    <main className="w-full h-100vh relative">
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

export default App
