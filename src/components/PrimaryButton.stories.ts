// PrimaryButton.stories.ts
import { Meta, StoryObj } from "@storybook/vue3";
import PrimaryButton from "@/components/PrimaryButton.vue";

const meta: Meta<typeof PrimaryButton> = {
  title: "Example/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  args: {
    loading: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {
  render: () => ({
    components: { PrimaryButton },
    template: "<PrimaryButton>Default</PrimaryButton>",
  }),
};
