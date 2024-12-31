<script setup lang="ts">
import { filesList } from '../../store/files';
import FilesCard from './FilesCard.vue';
</script>

<template>
  <div class="mx-a">
    <h3 style="margin: 0;" class="border-0 px-2 pb-6 border-default border-1px tracking-0.2em">Blog | 博客</h3>
    <div class="flex flex-col gap-2">
      <FilesCard class="overflow-hidden truncate p-2 op-80 hover:op-100" v-for="(p, i) in filesList" :key="i" :data="p">
        <template #icon>
          <strong class="text-4 transition-font-size icon">{{ p.icon }}</strong>
        </template>
      </FilesCard>
    </div>
  </div>
</template>
