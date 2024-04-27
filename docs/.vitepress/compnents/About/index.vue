<script setup lang="ts">
import UserInfoCard from './UserInfoCard.vue';
import Container from './Container.vue';
import Catalog from './Catalog.vue';
import Other from './Other.vue';

</script>

<template>
  <div class="grid mb-20 grid-cols-1  md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr_1fr] gap-8 items-start">
    <!-- 左侧 -->
    <UserInfoCard class="md:sticky top-6rem left-0 " />
    <!-- 内容 -->
    <main class="flex flex-col gap-8">
      <Container />
      <Other />
    </main>
    <!-- 右侧 -->
    <Catalog class="md:sticky top-6rem left-0 w-full" />
  </div>
</template>
