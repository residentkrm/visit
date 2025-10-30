import type { DirectiveBinding } from 'vue'

const intersectionOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const el = entry.target as HTMLElement
    if (entry.isIntersecting) {
      el.classList.add('reveal-in')
      observer.unobserve(el)
    }
  }
}, intersectionOptions)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
      const preset = binding.value || 'up'

      // Staggered children mode: v-reveal.stagger="'up'"
      if (binding.modifiers?.stagger) {
        const selectorAttr = el.getAttribute('data-reveal-children')
        const baseDelayAttr = el.getAttribute('data-reveal-delay')
        const stepAttr = el.getAttribute('data-reveal-step')
        const nodes: HTMLElement[] = selectorAttr
          ? Array.from(el.querySelectorAll<HTMLElement>(selectorAttr))
          : Array.from(el.querySelectorAll<HTMLElement>(':scope > *'))

        const baseDelay = baseDelayAttr ? Number(baseDelayAttr) : 0
        const step = stepAttr ? Number(stepAttr) : 200

        nodes.forEach((child, index) => {
          child.classList.add('reveal', `reveal-${preset}`)
          // apply base + step*index via CSS var
          child.style.setProperty('--rv-delay', `${baseDelay + index * step}ms`)
          observer.observe(child)
        })
        return
      }

      // Single element reveal
      el.classList.add('reveal', `reveal-${preset}`)
      const singleDelay = el.getAttribute('data-reveal-delay')
      if (singleDelay) {
        el.style.setProperty('--rv-delay', `${Number(singleDelay)}ms`)
      }
      observer.observe(el)
    }
  })

  // reveal-group directive: reveals all elements with a class when any one comes into view
  nuxtApp.vueApp.directive('reveal-group', {
    mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
      const targetClass = binding.value || '.card-glass'
      const preset = el.getAttribute('data-reveal-preset') || 'up'
      const step = Number(el.getAttribute('data-reveal-step')) || 200
      const baseDelay = Number(el.getAttribute('data-reveal-delay')) || 0
      
      const targetElements = Array.from(el.querySelectorAll<HTMLElement>(targetClass))
      
      if (targetElements.length === 0) return
      
      // Add reveal classes to all target elements
      targetElements.forEach((child, index) => {
        child.classList.add('reveal', `reveal-${preset}`)
        child.style.setProperty('--rv-delay', `${baseDelay + index * step}ms`)
      })
      
      // Create a single observer for the container
      const groupObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Reveal all target elements at once
            targetElements.forEach(child => {
              child.classList.add('reveal-in')
            })
            groupObserver.unobserve(el)
          }
        }
      }, intersectionOptions)
      
      groupObserver.observe(el)
    }
  })
})


