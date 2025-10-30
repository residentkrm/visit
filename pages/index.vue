<script setup lang="ts">
const { t } = useI18n()

useHead({ title: () => 'Full-Stack Developer | residentkrm' })

const workingWith = [
  'Vue.js', 'Nuxt', 'TailwindCSS', 'Bootstrap', 'Laravel', 'Node.js', 'MySQL', 'MongoDB', 'Redis', 'ELK', 'CI/CD', 'Docker', 'Git'
];

const techCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'Vue 3 / Nuxt 3', note: 'Composition API, SSR, Islands' },
      { name: 'TypeScript', note: 'types-first, строгая типизация' },
      { name: 'TailwindCSS', note: 'утилитарные стили, дизайн-система' }
    ]
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', note: 'REST, вебхуки, очереди' },
      { name: 'NestJS / Express', note: 'модули, DI, middlewares' },
      { name: 'PostgreSQL', note: 'SQL, индексы, миграции' }
    ]
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', note: 'многостейдж сборки' },
      { name: 'CI/CD', note: 'GitHub Actions' },
      { name: 'Vercel / Netlify', note: 'хостинг фронтенда' }
    ]
  }
]

const timeline = computed(() => [
  { 
    year: t('career.current.year'), 
    company: t('career.current.company'),
    title: t('career.current.position'), 
    description: t('career.current.description'),
    stack: t('career.current.stack')
  },
  { 
    year: t('career.mediaSoft1.year'), 
    company: t('career.mediaSoft1.company'),
    title: t('career.mediaSoft1.position'), 
    description: t('career.mediaSoft1.description'),
    stack: t('career.mediaSoft1.stack')
  },
  { 
    year: t('career.mediaSoft2.year'), 
    company: t('career.mediaSoft2.company'),
    title: t('career.mediaSoft2.position'), 
    description: t('career.mediaSoft2.description'),
    stack: t('career.mediaSoft2.stack')
  }
])
</script>

<template>
  <div class="relative">
    <!-- Hero / About -->
    <section id="about" class="py-20 md:py-28 relative overflow-hidden" style="background-color: #FFF !important;">
      <!-- Grid texture overlay -->
      <div class="absolute inset-0">
        <div class="absolute inset-0" style="background-image: 
          linear-gradient(rgba(31, 41, 55, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(31, 41, 55, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0, 0 0;
          mask: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);
          -webkit-mask: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%);">
        </div>
      </div>
      
      <!-- Gradient overlay -->
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at 30% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(31, 41, 55, 0.1) 0%, transparent 50%);"></div>
      
      <!-- Abstract texture overlay -->
      <div class="absolute inset-0" v-if="false">
        <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Fine dots pattern -->
          <defs>
            <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.3" fill="#1F2937" opacity="0.1"/>
            </pattern>
            <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 L20,10" stroke="#f97316" stroke-width="0.1" opacity="0.08"/>
              <path d="M10,0 L10,20" stroke="#1F2937" stroke-width="0.1" opacity="0.06"/>
            </pattern>
            <pattern id="noise" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
              <rect width="2" height="2" fill="url(#noiseGradient)"/>
            </pattern>
            <radialGradient id="noiseGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#1F2937" stop-opacity="0.02"/>
              <stop offset="100%" stop-color="#f97316" stop-opacity="0.01"/>
            </radialGradient>
          </defs>
          
          <!-- Apply patterns -->
          <rect width="100%" height="100%" fill="url(#dots)"/>
          <rect width="100%" height="100%" fill="url(#lines)"/>
          <rect width="100%" height="100%" fill="url(#noise)"/>
          
          <!-- Subtle wave patterns -->
          <path d="M0,25 Q25,15 50,25 T100,25" stroke="#1F2937" stroke-width="0.2" fill="none" opacity="0.05"/>
          <path d="M0,75 Q25,85 50,75 T100,75" stroke="#f97316" stroke-width="0.2" fill="none" opacity="0.06"/>
        </svg>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight tracking-tight" v-reveal data-reveal-delay="600" style="color: #1F2937 !important;">
            <ClientOnly>
              <TypingText :text="t('hero.title') + ' ' + t('hero.name')" :speed="24" :startDelay="600" :cursor="true" :cursorAfterDone="false" />
            </ClientOnly>
          </h1>
          <p class="text-xl max-w-prose" v-reveal data-reveal-delay="1200" style="color: #6b7280 !important;">
            <ClientOnly>
              <TypingText :text="t('hero.description')" :speed="22" :startDelay="2000" :cursorAfterDone="true" />
            </ClientOnly>
          </p>
          <div class="flex gap-4" v-reveal.stagger data-reveal-children="a" data-reveal-delay="4500" data-reveal-step="180">
            <a href="#stack" class="btn">{{ t('nav.technologies') }}</a>
            <a href="#career" class="btn-outline">{{ t('nav.career') }}</a>
          </div>
        </div>
        <div class="md:justify-self-end" v-reveal="'left'" data-reveal-delay="2500">
          <div class="w-40 h-40 md:w-56 md:h-56 rounded-full border grid place-items-center shadow-lg" style="background: linear-gradient(135deg, #fef3c7, #f1f5f9) !important; border-color: #e2e8f0 !important;">
            <span class="text-3xl" v-if="false">👨‍💻</span>
            <div style="
                background-image: url('_nuxt/1.jpeg');
                height: 200px;
                width: 200px;
                border-radius: 50%;
                background-position: 80% 61%;
                background-size: 100%;
                filter: sepia(0.14) saturate(0.8) brightness(0.9);
            ">
             </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strengths -->
    <section id="strengths" class="dark-section py-16 border-t" v-reveal-group="'.card, h2'" data-reveal-preset="up" data-reveal-step="150" data-reveal-delay="5000" style="background-color: #1F2937 !important;">
      <div class="container mx-auto px-4">
        <div class="space-y-6">
        <h2 class="h2-accent" style="color: #FFF !important;">{{ t('strengths.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">{{ t('strengths.planning.title') }}</h3>
            <p class="mt-2" style="color: #FFF !important;">{{ t('strengths.planning.description') }}</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">{{ t('strengths.systematic.title') }}</h3>
            <p class="mt-2" style="color: #FFF !important;">{{ t('strengths.systematic.description') }}</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">{{ t('strengths.accuracy.title') }}</h3>
            <p class="mt-2" style="color: #FFF !important;">{{ t('strengths.accuracy.description') }}</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">{{ t('strengths.creativity.title') }}</h3>
            <p class="mt-2" style="color: #FFF !important;">{{ t('strengths.creativity.description') }}</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">{{ t('strengths.flexibility.title') }}</h3>
            <p class="mt-2" style="color: #FFF !important;">{{ t('strengths.flexibility.description') }}</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">{{ t('strengths.feedback.title') }}</h3>
            <p class="mt-2" style="color: #FFF !important;">{{ t('strengths.feedback.description') }}</p>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Technologies -->
    <section id="stack" class="py-16 border-t" v-reveal-group="'.tech-category, h2'" data-reveal-preset="up" data-reveal-step="150" data-reveal-delay="200" style="background-color: #FFF !important;">
      <div class="container mx-auto px-4">
        <div class="space-y-8">
          <h2 class="h2-accent text-center" style="color: #1F2937 !important;">{{ t('technologies.title') }}</h2>
          
          <!-- Back-end -->
          <div class="tech-category">
            <h3 class="text-xl font-semibold mb-4 flex items-center" style="color: #1F2937 !important;">
              <svg class="w-6 h-6 mr-2" style="color: #f97316 !important;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ t('technologies.backend') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div class="tech-item">
                <span class="chip-chip">PHP</span>
                <span class="chip-chip">Node.js</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Laravel</span>
                <span class="chip-chip">Symfony</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">MySQL</span>
                <span class="chip-chip">MariaDB</span>
                <span class="chip-chip">Percona</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Redis</span>
                <span class="chip-chip">MongoDB</span>
              </div>
            </div>
          </div>

          <!-- DevOps -->
          <div class="tech-category">
            <h3 class="text-xl font-semibold mb-4 flex items-center" style="color: #1F2937 !important;">
              <svg class="w-6 h-6 mr-2" style="color: #f97316 !important;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
              </svg>
              {{ t('technologies.devops') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div class="tech-item">
                <span class="chip-chip">Bash</span>
                <span class="chip-chip">Linux</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Docker</span>
                <span class="chip-chip">CI/CD</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Load Balancing</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Monitors</span>
              </div>
            </div>
          </div>

          <!-- Front-end -->
          <div class="tech-category">
            <h3 class="text-xl font-semibold mb-4 flex items-center" style="color: #1F2937 !important;">
              <svg class="w-6 h-6 mr-2" style="color: #f97316 !important;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              {{ t('technologies.frontend') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div class="tech-item">
                <span class="chip-chip">Vue.js</span>
                <span class="chip-chip">Nuxt</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">TailwindCSS</span>
                <span class="chip-chip">Bootstrap</span>
                <span class="chip-chip">SCSS</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">REST</span>
                <span class="chip-chip">WebSocket</span>
                <span class="chip-chip">Socket.IO</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">GSAP</span>
              </div>
            </div>
          </div>

          <!-- Tools & Others -->
          <div class="tech-category">
            <h3 class="text-xl font-semibold mb-4 flex items-center" style="color: #1F2937 !important;">
              <svg class="w-6 h-6 mr-2" style="color: #f97316 !important;" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
              {{ t('technologies.tools') }}
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div class="tech-item">
                <span class="chip-chip">ClickUp</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Jira</span>
                <span class="chip-chip">Kanban</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Atlassian</span>
                <span class="chip-chip">Confluence</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">Grafana</span>
              </div>
              <div class="tech-item">
                <span class="chip-chip">ElasticSearch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career timeline -->
    <section id="career" class="dark-section py-16 border-t" v-reveal-group="'ol li, h2'" data-reveal-preset="up" data-reveal-step="300" style="background-color: #1F2937 !important;">
      <div class="container mx-auto px-4">
        <div class="space-y-6">
          <h2 class="h2-accent" style="color: #FFF !important;">{{ t('career.title') }}</h2>
           <ol class="relative border-l border-gray-300" v-reveal-group="'.timeline-dot'" data-reveal-preset="scale" data-reveal-step="200">
           <li v-for="item in timeline" :key="item.year" class="mb-12 ml-6">
             <div class="timeline-dot absolute -left-8 top-2 h-4 w-4 rounded-full border-2 border-white" style="background-color: #f97316 !important;"></div>
             <div class="space-y-3">
               <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                 <time class="text-sm font-medium" style="color: #f97316 !important;">{{ item.year }}</time>
                 <span class="text-sm font-semibold" style="color: #d1d5db !important;">{{ item.company }}</span>
               </div>
               <h3 class="text-lg font-semibold" style="color: #FFF !important;">{{ item.title }}</h3>
               <p class="text-sm leading-relaxed" style="color: #d1d5db !important;">{{ item.description }}</p>
               <div class="mt-3">
                 <span class="text-xs font-medium uppercase tracking-wide" style="color: #9ca3af !important;">Технологии:</span>
                 <div class="mt-2 flex flex-wrap gap-1">
                   <span v-for="tech in item.stack.split(', ')" :key="tech" class="px-2 py-1 rounded text-xs font-medium" style="background-color: #374151 !important; color: #d1d5db !important;">
                     {{ tech }}
                   </span>
                 </div>
               </div>
             </div>
           </li>
           </ol>
        </div>
      </div>
    </section>

    <!-- Education & Achievements -->
    <section id="education" class="py-16 border-t" v-reveal-group="'.achievement-item, h2'" data-reveal-preset="up" data-reveal-step="150" style="background-color: #FFF !important;">
      <div class="container mx-auto px-4">
        <div class="space-y-8">
          <h2 class="h2-accent text-center" style="color: #1F2937 !important;">{{ t('education.title') }}</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Education -->
            <div class="achievement-item">
              <div class="flex items-center mb-4">
                <svg class="w-8 h-8 mr-3" style="color: #f97316 !important;" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.114 11.114 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                <h3 class="text-xl font-semibold" style="color: #1F2937 !important;">{{ t('education.education') }}</h3>
              </div>
              <div class="space-y-3">
                <div class="p-4 rounded-lg" style="background-color: #f8fafc !important; border: 1px solid #e2e8f0 !important;">
                  <h4 class="font-semibold mb-2" style="color: #1F2937 !important;">{{ t('education.degree.title') }}</h4>
                  <p class="text-sm" style="color: #6b7280 !important;">{{ t('education.degree.specialty') }}</p>
                  <p class="text-sm mt-1" style="color: #374151 !important;">{{ t('education.degree.department') }}</p>
                </div>
              </div>
            </div>

            <!-- Achievements -->
            <div class="achievement-item">
              <div class="flex items-center mb-4">
                <svg class="w-8 h-8 mr-3" style="color: #f97316 !important;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <h3 class="text-xl font-semibold" style="color: #1F2937 !important;">{{ t('education.achievements') }}</h3>
              </div>
              <div class="space-y-3">
                <div class="p-4 rounded-lg" style="background-color: #f8fafc !important; border: 1px solid #e2e8f0 !important;">
                  <h4 class="font-semibold mb-2" style="color: #1F2937 !important;">{{ t('education.acm.title') }}</h4>
                  <p class="text-sm" style="color: #374151 !important;">{{ t('education.acm.description') }}</p>
                </div>
                <div class="p-4 rounded-lg" style="background-color: #f8fafc !important; border: 1px solid #e2e8f0 !important;">
                  <h4 class="font-semibold mb-2" style="color: #1F2937 !important;">{{ t('education.codeQuality.title') }}</h4>
                  <p class="text-sm" style="color: #374151 !important;">{{ t('education.codeQuality.description') }}</p>
                </div>
                <div class="p-4 rounded-lg" style="background-color: #f8fafc !important; border: 1px solid #e2e8f0 !important;">
                  <h4 class="font-semibold mb-2" style="color: #1F2937 !important;">{{ t('education.bestStudent.title') }}</h4>
                  <p class="text-sm" style="color: #374151 !important;">{{ t('education.bestStudent.description') }}</p>
                </div>
                <div class="p-4 rounded-lg" style="background-color: #f8fafc !important; border: 1px solid #e2e8f0 !important;">
                  <h4 class="font-semibold mb-2" style="color: #1F2937 !important;">{{ t('education.rectorAward.title') }}</h4>
                  <p class="text-sm" style="color: #374151 !important;">{{ t('education.rectorAward.description') }}</p>
                </div>
              </div>
        </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Tech categories -->
    <section id="tech" class="py-16 border-t" v-reveal-group="'.card, h2'" data-reveal-preset="up" data-reveal-step="200" style="background-color: #FFF !important;" v-if="false">
      <div class="container mx-auto px-4">
        <div class="space-y-6">
        <h2 class="h2-accent" style="color: #1F2937 !important;">Технологии</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="cat in techCategories" :key="cat.title" class="card p-6">
            <h3 class="h3-accent">{{ cat.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="item in cat.items" :key="item.name" class="flex items-start gap-3">
                <div class="mt-1 h-2 w-2 rounded-full flex-shrink-0" style="background-color: #f97316 !important;"></div>
              <div>
                <div class="font-medium">{{ item.name }}</div>
                  <div class="text-sm text-gray-500">{{ item.note }}</div>
              </div>
            </li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Offers -->
    <section id="offers" class="dark-section py-16 border-t" v-reveal-group="'.card, h2'" data-reveal-preset="up" data-reveal-step="150" style="background-color: #1F2937 !important;" v-if="false">
      <div class="container mx-auto px-4">
        <div class="space-y-6">
        <h2 class="h2-accent" style="color: #FFF !important;">Варианты работы со мной</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">Трудоустройство</h3>
            <p class="mt-2" style="color: #FFF !important;">Официальное трудоустройство на полную или частичную занятость.</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">Договор подряда</h3>
            <p class="mt-2" style="color: #FFF !important;">Гражданско-правовой договор на конкретную работу или на постоянное сотрудничество.</p>
          </div>
          <div class="card p-6">
            <h3 class="h3-accent" style="color: #FFF !important;">B2B</h3>
            <p class="mt-2" style="color: #FFF !important;">Работа в формате B2B с выставлением счета на оплату.</p>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- Cases categories -->
    <section id="cases" class="py-16 border-t" v-reveal-group="'.card, h2'" data-reveal-preset="up" data-reveal-step="200" style="background-color: #FFF !important;" v-if="false">
      <div class="container mx-auto px-4">
        <div class="space-y-6">
        <h2 class="h2-accent" style="color: #1F2937 !important;">Кейсы</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="cat in techCategories" :key="cat.title" class="card p-6">
            <h3 class="h3-accent">{{ cat.title }}</h3>
            <ul class="mt-4 space-y-3">
              <li v-for="item in cat.items" :key="item.name" class="flex items-start gap-3">
                <div class="mt-1 h-2 w-2 rounded-full flex-shrink-0" style="background-color: #f97316 !important;"></div>
                <div>
                  <div class="font-medium">{{ item.name }}</div>
                  <div class="text-sm text-gray-500">{{ item.note }}</div>
          </div>
        </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

