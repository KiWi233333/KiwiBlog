<script setup lang="ts">
import DefaultCard from '../DefaultCard.vue';
import { ref } from 'vue';
import { projectList } from '../../store/files'

const version = ref("0.0.0")

fetch('https://api.github.com/repos/KiWi233333/KiwiBlog/releases/latest').then((res) => {
  res.json().then((data) => {
    version.value = data.tag_name || "0.0.0"
  }).catch((err) => { })
})

const doingList = [
  {
    title: "Web Developer",
    icon: "i-solar:code-2-bold-duotone",
    details: "A Developer with a passion for creating innovative and user-friendly web applications."
  },
  {
    title: 'v' + version.value,
    icon: "i-solar:atom-linear",
    details: "The blog is being updated to a new version, with a more modern and responsive design."
  },
]


</script>

<template>
  <div data-fades data-fade style="--delay: 60ms;" class="p-6 border-default card-df-br rounded-3 sm:p-8 right">
    <!-- Other -->
    <h3 style="margin-top: 0;" mb-2>Other</h3>

  </div>
</template>
<style scoped lang="scss">
.project-list {
  --at-apply: "grid sm:grid-cols-2 gap-4 grid-cols-1"
}
</style>
