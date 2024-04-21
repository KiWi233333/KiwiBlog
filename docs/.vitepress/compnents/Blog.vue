<script setup lang="ts">
import { filesList } from '../store/files';
import FilesCard from './FilesCard.vue';
// @unocss-include
</script>

<template>
  <div data-fades class="sm:w-2/3 mx-a">
    <h1 my-2em tracking-0.2em>Blog | 博客 </h1>
    <div data-fades class=" flex flex-col  gap-4">
      <FilesCard class="overflow-hidden truncate w-full " :data="p" v-for="(p, i) in filesList" :key="i">
        <template #icon>
          <strong text-2rem class="icon">{{ p.icon }}</strong>
        </template>
      </FilesCard>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
