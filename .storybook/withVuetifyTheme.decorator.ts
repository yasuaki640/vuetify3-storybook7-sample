import { VApp } from "vuetify/components";
import { Decorator, StoryContext } from "@storybook/vue3";

export const withVuetifyTheme: Decorator = (story, context: StoryContext) => {
  return {
    components: { story, VApp },
    template: `
      <v-app>
          <story/>
      </v-app>
    `,
  };
};
