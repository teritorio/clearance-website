export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
      secondary: 'red',
      neutral: 'zinc',
    },
    contentSurround: {
      slots: {
        linkTitle: 'font-medium text-[15px] text-highlighted mb-1',
      },
    },
  },
})
