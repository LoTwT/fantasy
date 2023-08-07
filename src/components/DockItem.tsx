import type { HTMLAttributes } from "react"

function DockItem(props: HTMLAttributes<HTMLButtonElement>) {
  return <button {...props}></button>
}

export default DockItem
