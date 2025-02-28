export default function useNavbarHeight() {
  const navbar = useTemplateRef<HTMLElement>('navbar');

  const navbarHeight = useState<number>('navbarHeight', () => 0);

  onMounted(() => {
    navbarHeight.value = navbar.value?.clientHeight ?? 0;
  });

  return {
    navbarHeight,
    remainingHeight: `calc(100dvh - ${navbarHeight.value}px)`
  };
}
