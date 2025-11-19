import type { Meta, StoryObj } from "@storybook/react";
import { Container, type ContainerMaxWidth, type ContainerMinWidth, type ContainerGap, type ContainerRadius } from "./Container";

const MAX_WIDTH_OPTIONS: ContainerMaxWidth[] = ["full"];
const MIN_WIDTH_OPTIONS: ContainerMinWidth[] = ["sm", "md", "lg", "xl", "full"];
const GAP_OPTIONS: ContainerGap[] = ["tight", "compact", "default", "comfortable", "loose", "spacious"];
const RADIUS_OPTIONS: ContainerRadius[] = ["none", "sm", "md", "lg"];

const meta = {
  title: "UI/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A responsive Container component using design system tokens from `globals.css`. Provides consistent max-widths, padding, and centering across the application.",
      },
    },
  },
  args: {
    maxWidth: "full",
    minWidth: "lg",
    radius: "none",
    withPadding: true,
    centered: true,
    asStack: false,
    gap: "default",
  },
  argTypes: {
    maxWidth: {
      control: "select",
      options: MAX_WIDTH_OPTIONS,
      description: "Maximum width of the container",
      table: {
        type: { summary: "ContainerMaxWidth" },
        defaultValue: { summary: "full" },
      },
    },
    minWidth: {
      control: "select",
      options: MIN_WIDTH_OPTIONS,
      description: "Minimum width of the container",
      table: {
        type: { summary: "ContainerMinWidth" },
        defaultValue: { summary: "lg" },
      },
    },
    radius: {
      control: "select",
      options: RADIUS_OPTIONS,
      description: "Border radius of the container",
      table: {
        type: { summary: "ContainerRadius" },
        defaultValue: { summary: "none" },
      },
    },
    withPadding: {
      control: "boolean",
      description: "Applies horizontal padding (responsive for mobile/desktop)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    centered: {
      control: "boolean",
      description: "Centers the container horizontally",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    asStack: {
      control: "boolean",
      description: "Enables flex column layout for stacking children with gap",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    gap: {
      control: "select",
      options: GAP_OPTIONS,
      description: "Gap between children when asStack is true",
      table: {
        type: { summary: "ContainerGap" },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: "text",
      description: "Content to be contained",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

// Demo content component for visualization
const DemoContent = ({ height = "200px" }: { height?: string }) => (
  <div
    style={{
      backgroundColor: "#f3f4f6",
      border: "2px dashed #9ca3af",
      borderRadius: "8px",
      padding: "24px",
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#6b7280",
      fontWeight: "500",
    }}
  >
    Container Content
  </div>
);

/**
 * Default playground story for interactive testing
 * 
 * Use Cases:
 * - Testing different prop combinations interactively
 * - Experimenting with container configurations before implementation
 * - Demonstrating container capabilities to stakeholders
 * - Prototyping layout variations quickly
 */
export const Playground: Story = {
  args: {
    children: <DemoContent />,
  },
};

/**
 * Small container - ideal for focused content or narrow forms
 * 
 * Use Cases:
 * - Login/signup forms
 * - Password reset pages
 * - Single-field search interfaces
 * - Compact settings panels
 * - Mobile-first narrow content
 * - Confirmation dialogs
 */
export const Small: Story = {
  args: {
    minWidth: "sm",
    children: <DemoContent />,
  },
};

/**
 * Medium container - suitable for article content or moderate-width layouts
 * 
 * Use Cases:
 * - Blog posts and articles
 * - Documentation pages
 * - Product descriptions
 * - Multi-step forms
 * - Email templates
 * - Terms of service/privacy policy pages
 */
export const Medium: Story = {
  args: {
    minWidth: "md",
    children: <DemoContent />,
  },
};

/**
 * Large container - default size, good for most page content
 * 
 * Use Cases:
 * - Standard page layouts
 * - Content management pages
 * - User profiles
 * - Settings pages
 * - Team/organization pages
 * - General application content
 */
export const Large: Story = {
  args: {
    minWidth: "lg",
    children: <DemoContent />,
  },
};

/**
 * Extra large container - for wide layouts and dashboards
 * 
 * Use Cases:
 * - Analytics dashboards
 * - Data tables and grids
 * - Admin panels
 * - Multi-column layouts
 * - Complex forms with side-by-side sections
 * - Project management interfaces
 */
export const ExtraLarge: Story = {
  args: {
    minWidth: "xl",
    children: <DemoContent />,
  },
};

/**
 * Full width container - spans entire viewport width
 * 
 * Use Cases:
 * - Hero sections
 * - Full-width headers/footers
 * - Image galleries
 * - Promotional banners
 * - Video players
 * - Maps and data visualizations
 */
export const FullWidth: Story = {
  args: {
    minWidth: "full",
    children: <DemoContent />,
  },
};

/**
 * Container without padding - useful when child components handle their own spacing
 * 
 * Use Cases:
 * - Wrapping components with built-in padding (cards, tables)
 * - Full-bleed images or backgrounds
 * - Custom spacing requirements
 * - Grid layouts where items have their own padding
 * - Nested containers to avoid double padding
 */
export const NoPadding: Story = {
  args: {
    minWidth: "lg",
    withPadding: false,
    children: <DemoContent />,
  },
};

/**
 * Container not centered - aligns to the left
 * 
 * Use Cases:
 * - Sidebar layouts
 * - Left-aligned navigation menus
 * - Document editors
 * - Code editors
 * - Chat interfaces
 * - Custom alignment requirements
 */
export const NotCentered: Story = {
  args: {
    minWidth: "lg",
    centered: false,
    children: <DemoContent />,
  },
};

/**
 * Container with custom className - demonstrates extensibility
 * 
 * Use Cases:
 * - Adding custom background colors
 * - Applying shadows or borders
 * - Custom animations or transitions
 * - Theme-specific styling
 * - One-off design variations
 * - Utility class combinations
 */
export const WithCustomClassName: Story = {
  args: {
    minWidth: "lg",
    className: "bg-blue-50 py-8",
    children: <DemoContent />,
  },
};

/**
 * All min-width sizes comparison
 * 
 * Use Cases:
 * - Design system documentation
 * - Choosing appropriate container size
 * - Training new team members
 * - Comparing layout widths side-by-side
 * - Style guide demonstrations
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "600" }}>
        Container Min-Width Comparison
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Small (sm)
          </p>
          <Container minWidth="sm">
            <DemoContent height="80px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Medium (md)
          </p>
          <Container minWidth="md">
            <DemoContent height="80px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Large (lg)
          </p>
          <Container minWidth="lg">
            <DemoContent height="80px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Extra Large (xl)
          </p>
          <Container minWidth="xl">
            <DemoContent height="80px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Full Width (full)
          </p>
          <Container minWidth="full">
            <DemoContent height="80px" />
          </Container>
        </div>
      </div>
    </div>
  ),
};

/**
 * Nested containers - demonstrates composition
 * 
 * Use Cases:
 * - Progressive content narrowing
 * - Highlighted sections within pages
 * - Callouts or featured content
 * - Multi-level layouts
 * - Responsive content hierarchies
 * - Complex page structures
 */
export const NestedContainers: Story = {
  render: () => (
    <Container minWidth="xl" className="bg-gray-50 py-8">
      <div style={{ marginBottom: "16px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
          Outer Container (xl)
        </h3>
        <Container minWidth="lg" className="bg-white py-6">
          <div style={{ marginBottom: "16px" }}>
            <h4 style={{ fontSize: "16px", fontWeight: "500", marginBottom: "8px" }}>
              Inner Container (lg)
            </h4>
            <Container minWidth="md" className="bg-blue-50 py-4">
              <p style={{ fontSize: "14px", color: "#6b7280" }}>
                Nested Container (md)
              </p>
            </Container>
          </div>
        </Container>
      </div>
    </Container>
  ),
};

/**
 * Real-world example: Article layout
 * 
 * Use Cases:
 * - Blog posts
 * - News articles
 * - Documentation content
 * - Help center articles
 * - Long-form content
 * - Press releases
 * - Case studies
 */
export const ArticleLayout: Story = {
  render: () => (
    <Container minWidth="md">
      <article style={{ padding: "40px 0" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
          Understanding Container Components
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "24px" }}>
          Published on November 16, 2025
        </p>
        <div style={{ lineHeight: "1.7", color: "#374151" }}>
          <p style={{ marginBottom: "16px" }}>
            Container components are essential building blocks in modern web design.
            They provide consistent spacing, max-widths, and alignment across your
            application, ensuring a cohesive user experience.
          </p>
          <p style={{ marginBottom: "16px" }}>
            This container uses the "md" max-width, which is ideal for readable
            article content. The responsive padding ensures proper spacing on both
            mobile and desktop devices.
          </p>
          <p>
            By using design system tokens, we maintain consistency and make global
            style updates easy to manage.
          </p>
        </div>
      </article>
    </Container>
  ),
};

/**
 * Real-world example: Form layout
 * 
 * Use Cases:
 * - Authentication forms (login/signup)
 * - Contact forms
 * - Feedback forms
 * - Newsletter subscriptions
 * - Password reset flows
 * - Profile creation
 * - Payment forms
 */
export const FormLayout: Story = {
  render: () => (
    <Container minWidth="sm" className="py-12">
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "32px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px" }}>
          Sign in to your account
        </h2>
        <p style={{ color: "#6b7280", marginBottom: "24px" }}>
          Welcome back! Please enter your details.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "6px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: "500",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              fontWeight: "500",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </Container>
  ),
};

/**
 * Real-world example: Dashboard layout
 * 
 * Use Cases:
 * - Analytics dashboards
 * - Admin control panels
 * - User dashboards
 * - KPI overviews
 * - Monitoring interfaces
 * - Reporting pages
 * - Statistics displays
 */
export const DashboardLayout: Story = {
  render: () => (
    <Container minWidth="xl" className="py-8">
      <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "24px" }}>
        Dashboard Overview
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <h3 style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
              Metric {i}
            </h3>
            <p style={{ fontSize: "32px", fontWeight: "600" }}>
              {Math.floor(Math.random() * 1000)}
            </p>
          </div>
        ))}
      </div>
    </Container>
  ),
};

/**
 * Container as stack - demonstrates gap functionality
 * 
 * Use Cases:
 * - Vertically stacked cards
 * - List of items with consistent spacing
 * - Form sections
 * - Timeline components
 * - Comment threads
 * - Activity feeds
 * - Accordion panels
 */
export const AsStack: Story = {
  args: {
    minWidth: "md",
    asStack: true,
    gap: "default",
  },
  render: (args) => (
    <Container {...args}>
      <DemoContent height="100px" />
      <DemoContent height="100px" />
      <DemoContent height="100px" />
    </Container>
  ),
};

/**
 * Stack with different gap sizes
 * 
 * Use Cases:
 * - Design system documentation
 * - Choosing appropriate gap size
 * - Comparing spacing options
 * - Training developers on spacing tokens
 * - Visual spacing hierarchy
 */
export const StackGapVariations: Story = {
  render: () => (
    <div style={{ padding: "20px", backgroundColor: "#fff" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "20px", fontWeight: "600" }}>
        Container Stack Gap Variations
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Tight Gap
          </p>
          <Container minWidth="md" asStack gap="tight">
            <DemoContent height="60px" />
            <DemoContent height="60px" />
            <DemoContent height="60px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Compact Gap
          </p>
          <Container minWidth="md" asStack gap="compact">
            <DemoContent height="60px" />
            <DemoContent height="60px" />
            <DemoContent height="60px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Default Gap
          </p>
          <Container minWidth="md" asStack gap="default">
            <DemoContent height="60px" />
            <DemoContent height="60px" />
            <DemoContent height="60px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Comfortable Gap
          </p>
          <Container minWidth="md" asStack gap="comfortable">
            <DemoContent height="60px" />
            <DemoContent height="60px" />
            <DemoContent height="60px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Loose Gap
          </p>
          <Container minWidth="md" asStack gap="loose">
            <DemoContent height="60px" />
            <DemoContent height="60px" />
            <DemoContent height="60px" />
          </Container>
        </div>
        <div>
          <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
            Spacious Gap
          </p>
          <Container minWidth="md" asStack gap="spacious">
            <DemoContent height="60px" />
            <DemoContent height="60px" />
            <DemoContent height="60px" />
          </Container>
        </div>
      </div>
    </div>
  ),
};

/**
 * Real-world example: Stacked content sections
 * 
 * Use Cases:
 * - Multi-section landing pages
 * - Feature showcases
 * - Step-by-step guides
 * - FAQ sections
 * - Product feature lists
 * - Pricing tiers
 * - Team member profiles
 */
export const StackedSections: Story = {
  render: () => (
    <Container minWidth="lg" asStack gap="spacious" className="py-8">
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
          Section 1: Overview
        </h2>
        <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
          This demonstrates using Container with asStack and spacious gap to create
          well-separated content sections.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
          Section 2: Features
        </h2>
        <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
          The gap tokens provide consistent spacing that matches your design system,
          ensuring harmony across the application.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
        }}
      >
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
          Section 3: Benefits
        </h2>
        <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
          Using the Container component reduces boilerplate and maintains consistency
          throughout your application's layout.
        </p>
      </div>
    </Container>
  ),
};

/**
 * Radius variants - demonstrates all border radius options
 * 
 * Use Cases:
 * - Design system documentation
 * - Comparing radius options
 * - Choosing appropriate corner style
 * - Visual design guidelines
 * - Brand style consistency checks
 */
export const AllRadii: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
          No Radius
        </p>
        <Container minWidth="md" radius="none" className="bg-[#f3f4f6]">
          <DemoContent height="120px" />
        </Container>
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
          Small Radius
        </p>
        <Container minWidth="md" radius="sm" className="bg-[#f3f4f6]">
          <DemoContent height="120px" />
        </Container>
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
          Medium Radius (Default)
        </p>
        <Container minWidth="md" radius="md" className="bg-[#f3f4f6]">
          <DemoContent height="120px" />
        </Container>
      </div>
      <div>
        <p style={{ marginBottom: "8px", color: "#6b7280", fontSize: "14px" }}>
          Large Radius
        </p>
        <Container minWidth="md" radius="lg" className="bg-[#f3f4f6]">
          <DemoContent height="120px" />
        </Container>
      </div>
    </div>
  ),
};

/**
 * Radius with content - demonstrates radius with real content
 * 
 * Use Cases:
 * - Card components
 * - Modal dialogs
 * - Notification panels
 * - Product cards
 * - Profile cards
 * - Content blocks with distinct visual separation
 * - Elevated UI elements
 */
export const RadiusWithContent: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <Container
        minWidth="lg"
        radius="lg"
        className="bg-white border border-[#e5e7eb] shadow-sm"
      >
        <div style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>
            Card with Large Radius
          </h2>
          <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "16px" }}>
            This container uses a large border radius (lg) which creates smooth, prominent
            rounded corners. Perfect for card-like components and modal dialogs.
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "16px",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
            }}
          >
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#0ea5e9" }}>
                24
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>Projects</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#0ea5e9" }}>
                156
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>Tasks</div>
            </div>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: "700", color: "#0ea5e9" }}>
                92%
              </div>
              <div style={{ fontSize: "14px", color: "#6b7280" }}>Complete</div>
            </div>
          </div>
        </div>
      </Container>

      <Container
        minWidth="lg"
        radius="sm"
        className="bg-white border border-[#e5e7eb]"
      >
        <div style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>
            Card with Small Radius
          </h2>
          <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
            This container uses a small border radius (sm) which creates subtle rounded
            corners. Ideal for a more minimal, refined aesthetic.
          </p>
        </div>
      </Container>

      <Container minWidth="lg" radius="none" className="bg-white border border-[#e5e7eb]">
        <div style={{ padding: "24px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "12px" }}>
            Card with No Radius
          </h2>
          <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
            This container has no border radius, creating sharp corners. Use this for a
            more traditional, structured look.
          </p>
        </div>
      </Container>
    </div>
  ),
};
