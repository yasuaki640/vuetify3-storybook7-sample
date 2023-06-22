import { Meta, StoryObj } from "@storybook/vue3";
import HelloWorld from "./HelloWorld.vue";

const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HelloWorld>;

export const Default: Story = {};
