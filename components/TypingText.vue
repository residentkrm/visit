<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

interface Props {
  text: string
  speed?: number // ms per char
  startDelay?: number // ms before start
  cursor?: boolean // show caret while typing
  cursorAfterDone?: boolean // show caret after done
}

const props = withDefaults(defineProps<Props>(), {
  speed: 40,
  startDelay: 300,
  cursor: true,
  cursorAfterDone: false
})

const displayed = ref('')
const done = ref(false)
const started = ref(false)

let intervalId: number | undefined
let timeoutId: number | undefined

onMounted(() => {
  let index = 0
  timeoutId = window.setTimeout(() => {
    started.value = true
    intervalId = window.setInterval(() => {
      if (index < props.text.length) {
        displayed.value += props.text[index]
        index += 1
      } else {
        done.value = true
        if (intervalId) window.clearInterval(intervalId)
      }
    }, props.speed) as unknown as number
  }, props.startDelay) as unknown as number
})

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
  if (timeoutId) window.clearTimeout(timeoutId)
})
</script>

<template>
  <span class="typing-container">
    <span class="typing-placeholder" aria-hidden="true">{{ props.text }}</span>
    <span class="typing-actual">
      {{ displayed }}<span v-if="started &&((cursor && !done) || (cursorAfterDone && done))" class="caret" aria-hidden="true">_</span>
    </span>
  </span>
</template>


