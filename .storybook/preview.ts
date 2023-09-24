import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import { registerPlugins } from "../src/plugins";
import { DEFAULT_THEME, withVuetifyTheme } from "./withVuetifyTheme.decorator";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ScreenshotOptions } from "storycap/lib/shared/types";
import { withScreenshot } from "storycap";

setup((app) => {
  // Registers your app's plugins into Storybook
  registerPlugins(app);
});

const screenshot: ScreenshotOptions = {
  viewports: {
    mobile: {
      width: 428,
      height: 926,
    },
    tablet: {
      width: 768,
      height: 1024,
    },
    desktop: {
      width: 1440,
      height: 1024,
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    viewport: { viewports: INITIAL_VIEWPORTS },
    screenshot,
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: DEFAULT_THEME,
      toolbar: {
        icon: "paintbrush",
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { value: "light", title: "Light", left: "🌞" },
          { value: "dark", title: "Dark", left: "🌛" },
        ],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [withVuetifyTheme, withScreenshot],
};

export default preview;
