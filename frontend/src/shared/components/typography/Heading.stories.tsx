import type { Meta, StoryObj } from "@storybook/react";
import { H1, H2, H3 } from "./Heading";

/**
 * Heading components provide semantic headings with consistent styling from the design system.
 * Available variants: H1 (page heading), H2 (section heading), H3 (subsection heading).
 */
const meta = {
  title: "Shared/Typography/Heading",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic heading components (H1, H2, H3) with consistent styling from design tokens. Use these for structuring content hierarchy in your application.",
      },
    },
  },
} satisfies Meta;

export default meta;

// H1 Stories
type H1Story = StoryObj<typeof H1>;

export const H1Default: H1Story = {
  name: "H1 - Default",
  render: () => <H1>Page Title Heading</H1>,
  parameters: {
    docs: {
      description: {
        story: "Primary page heading. Use once per page for the main title.",
      },
    },
  },
};

export const H1WithCustomClass: H1Story = {
  name: "H1 - With Custom Class",
  render: () => <H1 className="mb-6">Page Title with Margin</H1>,
  parameters: {
    docs: {
      description: {
        story: "H1 with custom Tailwind classes for additional spacing.",
      },
    },
  },
};

export const H1Example: H1Story = {
  name: "H1 - In Context",
  render: () => (
    <div>
      <H1 className="mb-4">SDSU Parking Locator</H1>
      <p className="text-[var(--component-typography-color-secondary)]">
        Find available parking spots across campus in real-time
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H1 used as a page header with supporting text.",
      },
    },
  },
};

// H2 Stories
type H2Story = StoryObj<typeof H2>;

export const H2Default: H2Story = {
  name: "H2 - Default",
  render: () => <H2>Section Heading</H2>,
  parameters: {
    docs: {
      description: {
        story: "Section heading for major content areas within a page.",
      },
    },
  },
};

export const H2Example: H2Story = {
  name: "H2 - In Context",
  render: () => (
    <section>
      <H2 className="mb-4">Available Parking Lots</H2>
      <p className="text-[var(--component-typography-color-secondary)]">
        View current availability across all SDSU parking facilities
      </p>
    </section>
  ),
  parameters: {
    docs: {
      description: {
        story: "H2 used as a section header.",
      },
    },
  },
};

// H3 Stories
type H3Story = StoryObj<typeof H3>;

export const H3Default: H3Story = {
  name: "H3 - Default",
  render: () => <H3>Subsection Heading</H3>,
  parameters: {
    docs: {
      description: {
        story: "Subsection heading for content organization within sections.",
      },
    },
  },
};

export const H3Example: H3Story = {
  name: "H3 - In Context",
  render: () => (
    <div>
      <H3 className="mb-2">Lot 7A Details</H3>
      <p className="text-[var(--component-typography-color-secondary)] text-sm">
        Last updated: 5 minutes ago
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "H3 used for subsection content.",
      },
    },
  },
};

// Combined Examples
export const HeadingHierarchy: StoryObj = {
  name: "All Headings - Hierarchy",
  render: () => (
    <div className="space-y-6">
      <div>
        <H1>Main Page Title (H1)</H1>
        <p className="text-[var(--component-typography-color-secondary)] mt-2">
          This is the primary page heading
        </p>
      </div>
      <div>
        <H2>Section Title (H2)</H2>
        <p className="text-[var(--component-typography-color-secondary)] mt-2">
          This is a major section heading
        </p>
      </div>
      <div>
        <H3>Subsection Title (H3)</H3>
        <p className="text-[var(--component-typography-color-secondary)] mt-2">
          This is a subsection heading
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Visual comparison of all heading levels showing the proper hierarchy and sizing.",
      },
    },
  },
};

export const RealWorldExample: StoryObj = {
  name: "Real World - Parking Page",
  render: () => (
    <article className="max-w-4xl space-y-6">
      <header>
        <H1 className="mb-2">Parking Status</H1>
        <p className="text-[var(--component-typography-color-secondary)]">
          Real-time availability across all SDSU parking facilities
        </p>
      </header>

      <section className="space-y-4">
        <H2>North Campus</H2>
        <div className="space-y-3">
          <div>
            <H3 className="mb-1">Structure 7A</H3>
            <p className="text-sm text-[var(--component-typography-color-secondary)]">
              234 spots available
            </p>
          </div>
          <div>
            <H3 className="mb-1">Lot 12</H3>
            <p className="text-sm text-[var(--component-typography-color-secondary)]">
              12 spots available
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <H2>South Campus</H2>
        <div className="space-y-3">
          <div>
            <H3 className="mb-1">Structure 5</H3>
            <p className="text-sm text-[var(--component-typography-color-secondary)]">
              Full - 0 spots available
            </p>
          </div>
        </div>
      </section>
    </article>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete example showing proper heading hierarchy in a parking information page.",
      },
    },
  },
};
