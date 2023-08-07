/// <reference types="vite/client" />

type CustomElement<T> = Partial<
  T & { children: unknown } & import("react").DOMAttributes<T> &
    import("react").HTMLAttributes<T> &
    import("react").Attributes
>

declare namespace JSX {
  interface IntrinsicElements {
    ["dock-wrapper"]: CustomElement<import("dockbar").DockWrapper>
    ["dock-item"]: CustomElement<import("dockbar").DockItem>
  }
}
