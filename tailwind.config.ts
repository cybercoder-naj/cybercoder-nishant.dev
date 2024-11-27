import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      'sans-serif': ['Tomorrow', 'sans-serif']
    }
  },
  plugins: [daisyui],

  daisyui: {
    themes: ['forest']
  }
};
