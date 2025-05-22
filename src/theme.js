import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        bg: {
          primary: '#e9f4f0',
        },
        content: {
          primary: '#757070',
          secondary: '#aeabab',
          red: '#ff6666',
          tint1: '#44a6bd',
          tint2: '#9ccdd9',
          tint3: '#c5dee4'
        }
      },
      space: { 
      },
    },
  },
});

const system = createSystem(defaultConfig, customConfig);

export default system;
