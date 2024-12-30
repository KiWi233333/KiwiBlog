<script setup lang="ts">
import UserInfoCard from "./UserInfoCard.vue";
import Container from "./Container.vue";
import Catalog from "./Catalog.vue";
import Other from "./Other.vue";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_7fr_2fr] gap-10 items-start main">
    <!-- 左侧 -->
    <UserInfoCard style="--delay: 40ms;--lv: 0;" class="md:hidden lg:block md:sticky top-6rem left-0" />
    <!-- 内容 -->
    <main style="--delay: 60ms;--lv: 2;" class="mb-20 grid gap-4 cols-1 p-0 sm:p-8">
      <Container />
      <Other />
    </main>
    <!-- 右侧 -->
    <Catalog style="--delay: 40ms;--lv: 0;" class="md:sticky top-6rem left-0 w-full  hidden lg:block" />
  </div>
</template>
<style scoped lang="scss"></style>
