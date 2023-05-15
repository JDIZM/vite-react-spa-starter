import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import Layout from "./base-layout";
// import { userEvent } from "@storybook/testing-library";

// for updated CSF 3.0 syntax
// see https://storybook.js.org/blog/component-story-format-3-0/
// more on writing stories: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layout",
  component: Layout
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => (
    <BrowserRouter>
      <Layout {...args} />
    </BrowserRouter>
  ),
  args: {
    layout: "default",
    children: [
      <div className="container" key={1}>
        <li>hello i&apos;m a child</li>
        <li>hello i&apos;m a child</li>
        <li>hello i&apos;m a child</li>
      </div>
    ]
  }
};
