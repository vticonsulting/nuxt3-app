import { ref, onMounted } from "vue";

export function useAutoCount(startAt: number) {
  const count = ref(startAt);

  onMounted(() => {
    setInterval(() => (count.value += 1), 1000);
  });

  return count;
}
