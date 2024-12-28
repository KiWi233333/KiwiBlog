<template>
  <component :is="data.link ? 'a' : 'div'" :href="data.link" :target="data.linkTarget || '_self'" class="card-default"
    :title="data.title + '-' + data.details" :class="{ 'no-link': !data.link }">
    <slot name="icon">
      <div class="icon" v-if="data.icon?.startsWith('i-')" :class="data.icon" />
      <img class="icon" v-else :src="data.icon" :alt="data.icon">
    </slot>
    <div class="right">
      <slot name="right">
        <strong class="!mt-0 block overflow-hidden truncate">{{ typeof data.title === 'function' ? data.title() :
          data.title
          }}</strong>
        <span v-if="data.active" class=" active-dot"></span>
      </slot>
      <slot name="details">
        <div class="mt-2 op-60 text-truncate-2 leading-1.5em text-sm">{{ data.details }}</div>
      </slot>
    </div>
  </component>
</template>
<script setup lang="ts">
import { CardItem } from '../store/files';


withDefaults(defineProps<{
  data: CardItem
}>(), {
});
</script>
<style scoped lang="scss">
.card-default {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 1.4em;
  border: 0;
  border-radius: 10px;
  z-index: 1;
  transition: all 0.2s ease-in-out 0s;
  text-decoration: none !important;
  color: inherit;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px, rgba(0, 0, 0, 0.2) 0px 7px 13px -3px, rgba(0, 0, 0, 0.12) 0px -3px 0px inset;

  &.no-link {
    transform: translateY(2px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px, rgba(0, 0, 0, 0.12) 0px 0 0px inset;
  }

  .active-dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: var(--vp-c-indigo-3);
  }


  &:hover,
  &:active {
    transform: translateY(2px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px, rgba(0, 0, 0, 0.12) 0px 0 0px inset;
  }

  .icon,
  img {
    width: 3.2em;
    height: 3.2em;
    object-fit: contain;
  }

  small {
    display: inline-block;
    height: 3.2em;
    text-overflow: ellipsis;
  }
}

.dark .card-default {
  box-shadow: rgba(24, 24, 24, 0.1) 0px 2px 2px, rgba(29, 29, 29, 0.2) 0px 6px 8px -3px, rgba(39, 39, 39, 0.12) 0px -3px 0px inset;

  &.no-link {
      transform: translateY(2px);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px, rgba(0, 0, 0, 0.12) 0px 0 0px inset;
    }

  &:hover,
  &:active {
    transform: translateY(2px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px, rgba(0, 0, 0, 0.12) 0px 0 0px inset;
  }

}
</style>
