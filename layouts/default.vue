<template>
  <main>
    <TheHeader />
    <slot />
    <Transition>
      <ErrorMessage v-if="apiErrorCode" :code="apiErrorCode" />
    </Transition>
  </main>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store'
import { storeToRefs } from '#imports'

const store = useAppStore()

const { apiErrorCode } = storeToRefs(store)
</script>
