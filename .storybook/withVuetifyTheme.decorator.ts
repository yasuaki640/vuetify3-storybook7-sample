import { VApp } from "vuetify/components";
import { Decorator } from "@storybook/vue3";

export const DEFAULT_THEME = "light";

export const withVuetifyTheme: Decorator = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  return {
    components: { story, VApp },
    template: `
      <v-app theme="${globalTheme}">
        <story/>
      </v-app>
    `,
  };
};
