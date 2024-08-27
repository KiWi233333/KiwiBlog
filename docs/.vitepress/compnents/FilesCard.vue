<script setup lang="ts">
import { CardItem } from '../store/files';

withDefaults(defineProps<{
  data: CardItem
}>(), {
});
</script>
<template>
  <component :is="data.link ? 'a' : 'div'" :href="data.link" :target="data.linkTarget || '_self'"
    class="group  truncate backdrop-blur-2 transition-all rounded-2  p-4 flex items-center gap-4 link-cark"
    :class="{ 'hover:(border-default)': data.link }">
    <slot name="icon">
      <div class="icon shrink-0" v-if="data.icon?.startsWith('i-')" :class="data.icon" />
    </slot>
    <div class="flex flex-col gap-2">
      <slot name="name">
        <strong class="!mt-0 inline-block overflow-hidden truncate">{{ data.title }}</strong>
        <span v-if="data.active" class="inline-block active-dot"></span>
      </slot>
      <slot name="detail">
        <small class="op-80 block truncate sm:max-w-full max-w-20em">{{ data.details }}</small>
      </slot>
    </div>
    <span class="text-1em ml-a  op-0 transition-opacity transition-200 group-hover:(op-100 animate-fade-in-left)"
      style="animation-duration: .1s;" i-solar:alt-arrow-right-line-duotone v-if="data.link"></span>
  </component>
</template>
<style scoped lang="scss">
.link-cark {
  border: 1px solid transparent;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  color: inherit;

  &:hover {
    background-color: #9b9b9b15;
    backdrop-filter: blur(10px);
  }
}
</style>
