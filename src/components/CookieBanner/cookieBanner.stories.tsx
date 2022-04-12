import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CookieBanner from "./CookieBanner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CookieConsent/CookieBanner",
  component: CookieBanner,
} as ComponentMeta<typeof CookieBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CookieBanner> = (args) => (
  <CookieBanner {...args} />
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
