import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import { nextTick, onMounted, watch } from "vue";


export function useImageView() {
  const route = useRoute();
  const initZoom = () => {
    mediumZoom(".VPContent .content-container img:not(.disabled-img-view)", {
      background: "rgba(0, 0, 0, 0.35)",
      container: document.body,
    });
  };
  onMounted(() => {
    initZoom();
  });
  watch(
    () => route.path,
    () => {
      if (route && route.path !== "/") nextTick(() => initZoom());
    }
  );
}
