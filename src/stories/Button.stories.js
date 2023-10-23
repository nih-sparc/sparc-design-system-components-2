import { ElButton } from 'element-plus';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: ElButton,
  tags: ['autodocs'],
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ElButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<el-button v-bind="args">Button</el-button>',
});

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = Template.bind({
  primary: true
});

export const Secondary = Template.bind({
  secondary: true
});
