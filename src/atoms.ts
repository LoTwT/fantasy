import { atom } from "jotai"
import type { Nullable } from "@ayingott/sucrose"
import type { Leafer } from "leafer-ui"

export const leaferAtom = atom<Nullable<Leafer>>(null)
