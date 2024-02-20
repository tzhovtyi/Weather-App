<template>
  <div class="searchbar" :class="{ searchbar_centered: centered }">
    <div class="searchbar__inner">
      <div class="searchbar__container">
        <input v-model="model" class="searchbar__input" placeholder="Search location..." />
      </div>
      <button class="searchbar__search-btn" @click="$emit('submit')">
        <IconsSearchIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  centered: boolean
}>()

defineEmits<{
  (event: 'submit'): void
}>()

// vue 3.4+ only
const model = defineModel()
</script>

<style lang="scss" src="@/assets/styles/components/SearchBar.scss" scoped></style>
