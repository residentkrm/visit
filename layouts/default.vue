<template>
  <div class="min-h-screen bg-background">
    <header class="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60" style="background-color: #1F2937 !important;">
      <div class="container mx-auto px-4 flex h-14 max-w-screen-2xl items-center justify-between">
        <!-- Logo -->
        <a href="#about" class="flex items-center space-x-2">
          <svg class="logo h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color: #FFF !important;">
            <path d="M8 7 L4 12 L8 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 7 L14 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
            <path d="M16 7 L20 12 L16 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="hidden font-bold sm:inline-block" style="color: #FFF !important;">residentkrm</span>
        </a>
        
        <!-- Navigation -->
        <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#about" class="nav-link">{{ $t('nav.about') }}</a>
          <a href="#strengths" class="nav-link">{{ $t('nav.strengths') }}</a>
          <a href="#stack" class="nav-link">{{ $t('nav.technologies') }}</a>
          <a href="#career" class="nav-link">{{ $t('nav.career') }}</a>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t py-12" style="background-color: #1F2937 !important;">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <!-- Brand -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <svg class="logo h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true" style="color: #FFF !important;">
                <path d="M8 7 L4 12 L8 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7 L14 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
                <path d="M16 7 L20 12 L16 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-xl font-bold" style="color: #FFF !important;">residentkrm</span>
            </div>
            <p class="text-sm" style="color: #d1d5db !important;">
              {{ $t('footer.description') }}
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold" style="color: #FFF !important;">{{ $t('footer.navigation') }}</h3>
            <ul class="space-y-2">
              <li><a href="#about" class="text-sm hover:underline" style="color: #d1d5db !important;">{{ $t('nav.about') }}</a></li>
              <li><a href="#strengths" class="text-sm hover:underline" style="color: #d1d5db !important;">{{ $t('nav.strengths') }}</a></li>
              <li><a href="#stack" class="text-sm hover:underline" style="color: #d1d5db !important;">{{ $t('nav.technologies') }}</a></li>
              <li><a href="#career" class="text-sm hover:underline" style="color: #d1d5db !important;">{{ $t('nav.career') }}</a></li>
            </ul>
          </div>

          <!-- Language Switcher -->
          <div class="space-y-4">
            <h3 class="text-lg font-semibold" style="color: #FFF !important;">Язык</h3>
            <div class="flex flex-wrap gap-2">
              <a href="/" class="px-2 py-1 rounded text-xs font-medium transition-all duration-200 chip-active">Русский</a>
              <a href="/en" class="px-2 py-1 rounded text-xs font-medium transition-all duration-200 chip-inactive">English</a>
              <a href="/pl" class="px-2 py-1 rounded text-xs font-medium transition-all duration-200 chip-inactive">Polski</a>
            </div>
          </div>
        </div>

        <!-- Bottom -->
        <div class="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm" style="color: #9ca3af !important;">
            © {{ new Date().getFullYear() }} residentkrm {{ $t('footer.copyright') }}
          </p>
          <div class="flex items-center space-x-4">
            <span class="text-xs" style="color: #6b7280 !important;">{{ $t('footer.madeWith') }}</span>
            <span class="text-xs font-medium" style="color: #f97316 !important;">♥</span>
            <span class="text-xs" style="color: #6b7280 !important;">{{ $t('footer.on') }}</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

