// PrimaryButton.stories.ts
import { Meta, StoryObj } from "@storybook/vue3";
import PrimaryButton from "@/components/PrimaryButton.vue";

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  argTypes: {
    text: { control: "text" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    text: "Button",
    loading: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
