<template>
  <component :is="data.link ?  'a': 'div' " :href="data.link" target="_blank" class="card-default ">
    <slot name="icon">
      <img :src="data.icon" :alt="data.icon">
    </slot>
    <div class="right">
      <slot name="name">
        <h4>{{ data.title }}</h4>
        <span v-if="data.active" class="active-dot"></span>
      </slot>
      <slot name="name">
        <small style="opacity: 0.8;">{{ data.details }}</small>
      </slot>
    </div>
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
.card-default {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.2em;
  background: #8d8d8d09;
  border: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px, rgba(0, 0, 0, 0.2) 0px 7px 13px -3px, rgba(0, 0, 0, 0.12) 0px -3px 0px inset;
  border-radius: 10px;
  z-index: 1;
  transition: all 0.2s ease-in-out 0s;

  &:hover,
  &:active {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0 0, rgba(0, 0, 0, 0.2) 0px 0 0 1px, rgba(0, 0, 0, 0.12) 0px 0 0px inset;
  }

  .active-dot {
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: var(--vp-c-indigo-3);
  }
  a {
    text-decoration: none !important;
    color: inherit;
  }

  img {
    width: 3em;
    height: 3em;
    object-fit: contain;
  }

  small {
    display: inline-block;
    height: 3em;
    text-overflow: ellipsis;
  }
}
</style>