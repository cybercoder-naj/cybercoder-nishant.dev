export default function useNavbarHeight() {
  const navbar = useTemplateRef<HTMLElement>('navbar');

  const navbarHeight = useState<number>('navbarHeight', () => 0);
  const remainingHeight = computed(
    () => `calc(100dvh - ${navbarHeight.value}px)`
  );

  onMounted(() => {
    navbarHeight.value = navbar.value?.clientHeight ?? 0;
  });

  return {
    navbarHeight,
    remainingHeight
  };
}
