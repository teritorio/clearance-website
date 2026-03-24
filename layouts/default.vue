<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-gray-200 dark:border-gray-800">
      <UContainer>
        <nav class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="text-xl font-bold">
            Clearance
          </NuxtLink>
        </nav>
      </UContainer>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800">
      <UContainer>
        <div class="py-8 text-center text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Teritorio. Open source under MIT License.
        </div>
      </UContainer>
    </footer>
  </div>
</template>
