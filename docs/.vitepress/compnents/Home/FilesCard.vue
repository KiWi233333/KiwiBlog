<template>
  <component :is="data.link ? 'a' : 'div'" :href="data.link" :target="data.linkTarget"
    class="group truncate backdrop-blur-2 transition-all  rounded-2 flex items-center gap-3 link-cark"
    :class="{ 'hover:(border-default)': data.link }">
    <slot name="icon">
      <div class="icon" v-if="data.icon?.startsWith('i-')" :class="data.icon" />
    </slot>
    <div class="flex flex-col flex-1">
      <slot name="name">
        <strong class="!mt-0 overflow-hidden truncate">{{ data.title }}</strong>
        <span v-if="data.active" class=" active-dot"></span>
      </slot>
    </div>
    <span class="text-1em ml-a op-0 transition-opacity transition-200 group-hover:(op-100 animate-fade-in-left)"
      style="animation-duration: .1s;" i-solar:alt-arrow-right-line-duotone v-if="data.link"></span>
  </component>
</template>
<script setup lang="ts">
import { CardItem } from '../../store/files';

withDefaults(defineProps<{
  data: CardItem
}>(), {
});
</script>
<style scoped lang="scss">
.link-cark {
  display: flex;
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
