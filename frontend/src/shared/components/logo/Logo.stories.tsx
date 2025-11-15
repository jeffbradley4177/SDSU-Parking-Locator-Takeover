import type { Meta, StoryObj } from "@storybook/react";
import { Logo, Monogram } from "./index";

// Logo Stories
const logoMeta = {
  title: "UI/Logo/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "white", value: "#ffffff" },
        { name: "black", value: "#000000" },
        { name: "red", value: "#D41735" },
      ],
    },
  },
} satisfies Meta<typeof Logo>;

export default logoMeta;
type LogoStory = StoryObj<typeof Logo>;

export const PrimaryRed: LogoStory = {
  args: {
    variant: "primary-red",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "white" },
  },
};

export const PrimaryBlack: LogoStory = {
  args: {
    variant: "primary-black",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "white" },
  },
};

export const PrimaryWhite: LogoStory = {
  args: {
    variant: "primary-white",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "black" },
  },
};

export const SizeXSmall: LogoStory = {
  args: {
    variant: "primary-red",
    size: "xs",
  },
};

export const SizeSmall: LogoStory = {
  args: {
    variant: "primary-red",
    size: "sm",
  },
};

export const SizeMedium: LogoStory = {
  args: {
    variant: "primary-red",
    size: "md",
  },
};

export const SizeLarge: LogoStory = {
  args: {
    variant: "primary-red",
    size: "lg",
  },
};

export const SizeXLarge: LogoStory = {
  args: {
    variant: "primary-red",
    size: "xl",
  },
};

// Monogram Stories
const monogramMeta = {
  title: "UI/Logo/Monogram",
  component: Monogram,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      values: [
        { name: "white", value: "#ffffff" },
        { name: "black", value: "#000000" },
        { name: "red", value: "#D41735" },
      ],
    },
  },
} satisfies Meta<typeof Monogram>;

export const MonogramRed: StoryObj<typeof Monogram> = {
  args: {
    variant: "red",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "white" },
  },
};

export const MonogramBlack: StoryObj<typeof Monogram> = {
  args: {
    variant: "black",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "white" },
  },
};

export const MonogramWhite: StoryObj<typeof Monogram> = {
  args: {
    variant: "white",
    size: "md",
  },
  parameters: {
    backgrounds: { default: "black" },
  },
};

export const MonogramSizes: StoryObj<typeof Monogram> = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "flex-end" }}>
      <Monogram variant="red" size="xs" />
      <Monogram variant="red" size="sm" />
      <Monogram variant="red" size="md" />
      <Monogram variant="red" size="lg" />
      <Monogram variant="red" size="xl" />
    </div>
  ),
  parameters: {
    backgrounds: { default: "white" },
  },
};
