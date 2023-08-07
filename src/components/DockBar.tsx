import "dockbar"
import type { DockWrapper } from "dockbar"
import { useCallback } from "react"
import clsx from "clsx"
import { useAtomValue } from "jotai"
import type { Leafer } from "leafer-ui"
import { Rect } from "leafer-ui"
import Square from "./icons/Square"
import DockItem from "./DockItem"
import { leaferAtom } from "@/atoms"

interface DockbarProps {
  dockWrapper?: Partial<DockWrapper>
  className?: string
}

export interface DockBarItem {
  key: string
  IconComponent: React.ReactNode
  onClick: (leafer: Leafer) => void
}

const dockBarItems: DockBarItem[] = [
  {
    key: "rectangle",
    IconComponent: <Square />,
    onClick: (leafer) => {
      leafer.add(
        new Rect({
          x: 100,
          y: 100,
          width: 200,
          height: 200,
          fill: "#32cd79",
        }),
      )
    },
  },
]

function DockBar(props: DockbarProps) {
  const { dockWrapper, className } = props
  const { position = "bottom" } = dockWrapper ?? {}

  const leafer = useAtomValue(leaferAtom)!

  const getAsideStyle = useCallback(
    (position: DockWrapper["position"]) => {
      let style = ""

      const horizontalStyle = "left-1/2 -translate-x-1/2"
      const verticalStyle = "top-1/2 -translate-y-1/2"

      switch (position) {
        case "top":
          style = `top-4 ${horizontalStyle}`
          break
        case "left":
          style = `left-4 ${verticalStyle}`
          break
        case "right":
          style = `right-4 ${verticalStyle}`
          break
        case "bottom":
        default:
          style = `bottom-4 ${horizontalStyle}`
          break
      }

      return style
    },
    [position],
  )

  return (
    <aside
      className={clsx([
        "absolute bg-gray-100 rounded-lg shadow",
        getAsideStyle(position),
        className,
      ])}
    >
      <dock-wrapper {...dockWrapper}>
        {dockBarItems?.map(({ key, IconComponent, onClick }) => (
          <dock-item key={key}>
            <DockItem onClick={() => onClick(leafer)}>{IconComponent}</DockItem>
          </dock-item>
        ))}
      </dock-wrapper>
    </aside>
  )
}

export default DockBar
