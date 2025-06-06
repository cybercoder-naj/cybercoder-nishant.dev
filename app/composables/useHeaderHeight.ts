export const HEADER_REF_STRING = 'headerRef';
const DEFAULT_HEADER_HEIGHT = 88;

export default function useHeaderHeight() {
  const headerHeight = useState<number>(
    'headerHeight',
    () => DEFAULT_HEADER_HEIGHT
  );
  const headerEl = useTemplateRef<HTMLElement>(HEADER_REF_STRING);
  const headerHeightPx = computed<string>(() => `${headerHeight.value}px`);

  onMounted(() => {
    if (headerEl.value) {
      headerHeight.value = headerEl.value.clientHeight;
    }
  });

  return {
    headerHeightPx
  };
}
