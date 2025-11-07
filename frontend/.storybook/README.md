# Storybook Configuration

This directory contains Storybook configuration for the SDSU Parking Locator frontend.

## Configuration Files

- `main.ts` - Main Storybook configuration
  - Defines story locations
  - Configures addons
  - Framework settings (React + Vite)

- `preview.ts` - Global story settings
  - Default parameters
  - Global decorators
  - Theme configuration

- `vitest.setup.ts` - Vitest integration
  - Component testing setup
  - Browser testing with Playwright

## Installed Addons

1. **@storybook/addon-essentials** - Core addons bundle
   - Controls - Interactive prop controls
   - Actions - Event handling
   - Backgrounds - Background color variations
   - Viewport - Responsive testing
   - Toolbars - Custom toolbars

2. **@storybook/addon-a11y** - Accessibility testing
   - Automatic a11y checks
   - WCAG compliance validation

3. **@storybook/addon-vitest** - Component testing
   - Run tests in Storybook
   - Browser-based testing with Playwright
   - Coverage reporting with V8

## Usage

### Running Storybook
```bash
npm run storybook
```
Opens at `http://localhost:6006`

### Building Static Storybook
```bash
npm run build-storybook
```
Output: `storybook-static/`

### Running Component Tests
```bash
npx vitest --project=storybook
```

## Creating Stories

Place stories in `src/stories/` or alongside components:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    // Define prop controls
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    // Default props
  },
};

export const Variant: Story = {
  args: {
    // Variant props
  },
};
```

## Best Practices

1. **Organize by Category**
   - `Components/` - Reusable UI components
   - `Pages/` - Full page components
   - `Features/` - Feature-specific components

2. **Use autodocs Tag**
   - Automatically generates documentation
   - Shows prop types and descriptions

3. **Write Multiple Stories**
   - Default state
   - Loading state
   - Error state
   - Edge cases

4. **Add Interactions**
   - Test user interactions
   - Verify component behavior

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Testing with Vitest](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon)
