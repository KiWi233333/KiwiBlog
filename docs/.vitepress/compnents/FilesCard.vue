<template>
  <component :is="data.link ? 'a' : 'div'" :href="data.link"
    class="group truncate backdrop-blur-2 transition-all rounded-2  p-4 flex items-center gap-4 link-cark"
    :class="{ 'hover:(border-default)': data.link }">
    <slot name="icon">
      <div class="icon" v-if="data.icon?.startsWith('i-')" :class="data.icon" />
    </slot>
    <div class="flex flex-col gap-2">
      <slot name="name">
        <h4 overflow-hidden truncate >{{ data.title }}</h4>
        <span v-if="data.active" class=" active-dot"></span>
      </slot>
      <slot name="name">
        <small style="opacity: 0.8;">{{ data.details }}</small>
      </slot>
    </div>
    <span class="text-1em ml-a  op-0 transition-opacity transition-200 group-hover:(op-100 animate-fade-in-left)"
      style="animation-duration: .1s;" i-solar:alt-arrow-right-line-duotone v-if="data.link"></span>
  </component>
</template>
<script setup lang="ts">
export interface CardItem {
  icon?: string;
  link?: boolean | string;
  title?: string;
  details?: string;
  active?: boolean;
}
withDefaults(defineProps<{
  data: CardItem
}>(), {
});
</script>
<style scoped lang="scss">
.link-cark {
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  color: inherit;

  &:hover {
    .icon {
        background-color: aqua;
      }
    background-color: #7c7c7c15;
  }
}
</style>
