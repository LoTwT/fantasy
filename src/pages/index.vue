<script setup lang="ts">
import { Leafer, Rect } from "leafer-ui"
import type { Nullable } from "@ayingott/sucrose"

const leafer = ref<Nullable<Leafer>>(null)

onMounted(() => {
  leafer.value = new Leafer({ view: "homepage" })

  const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    draggable: true,
  })

  leafer.value.add(rect)
})
</script>

<template>
  <div id="homepage" />
</template>

<style scoped>
#homepage {
  width: 100%;
  height: 100%;
}
</style>

<route lang="yaml">
meta:
  layout: "false"
</route>
