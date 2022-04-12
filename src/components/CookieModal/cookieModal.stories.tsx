import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CookieModal from "./CookieModal";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CookieConsent/CookieModal",
  component: CookieModal,
} as ComponentMeta<typeof CookieModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CookieModal> = (args) => (
  <CookieModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  enableManagement: true,
  cookieCategories: ["analytics", "advertisement", "social media"],
  onAccept: (cookies) => {
    console.log(cookies);
  },
};
