import { useData } from "vitepress";
import { nextTick, onMounted, provide, ref } from "vue";

const enableTransitions = () =>
  "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

export function useToggleTheme() {
  const isToggleLoading = ref(false);
  const { isDark } = useData();

  function keyToggleTheme(e: KeyboardEvent) {
    if (e?.altKey && e?.key && e?.key === "k") {
      // 获取
      const dom = document.querySelector(".VPSwitch.VPSwitchAppearance");
      // 计算屏幕中心坐标
      const centerY = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
      const xy = dom?.getBoundingClientRect();

      toggleTheme((dom && xy
        ? {
          // 按钮 x y 坐标、
          clientX: xy.x + 10,
          clientY: xy.y + 10,
        }
        : {
          clientX: 40,
          clientY: +centerY - 40,
        }) as MouseEvent);
    }
  }
  provide("toggle-appearance", toggleTheme);
  /**
   * 动画切换主题
   * @param event 事件参数
   */
  async function toggleTheme({ clientX: x, clientY: y }: MouseEvent) {
    if (isToggleLoading.value) {
      return;
    }
    if (!enableTransitions()) {
      isDark.value = !isDark.value;
      return;
    }
    isToggleLoading.value = true;
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
    ];
    document.documentElement.classList.add("stop-transition");
    // @ts-ignore
    await document.startViewTransition(async () => {
      // 关闭所有渐变（优化性能）
      isDark.value = !isDark.value;
      await nextTick();
    }).ready;

    const anima = document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 800,
        easing: "ease-in-out",
        pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
      }
    );
    anima.addEventListener("finish", () => {
      // 结束动画
      document.documentElement.classList.remove("stop-transition");
      isToggleLoading.value = false;
    });
  }

  onMounted(() => {
    window.addEventListener("keydown", keyToggleTheme);
  });

  return {
    isToggleLoading,
    isDark,
  };
}
