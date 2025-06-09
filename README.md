# Dynamic Rendering UI with React

This project provides a **dynamic UI renderer** in React, where the interface is defined via **JSON schemas** and components are rendered accordingly. It supports reusable UI elements such as buttons, inputs, lists, list items and composed panels with search and filtering functionality.

---

## Project Structure

```
src/
├── components/
│   ├── base/
│   │   ├── button/
│   │   ├── error-message/
│   │   ├── input/
│   │   ├── list/
│   │   ├── list-item/
│   │   └── title/
│   ├── composed/
│   │   └── CheckboxListPanel/
│   └── icons/
├── renderer/
│   ├── componentRegistry.ts
│   ├── Renderer.tsx
│   └── renderer.types.ts
└── schemas/
```

---

## Features

- Schema-based component rendering
- Modular and reusable base components
- SCSS Modules support for scoped styling
- Dynamic page title setting
- Custom SVG icon support
- Filtering and checkbox logic with state management
- Extensible architecture to support more schema component types

---

## Setup

### 1. Install dependencies

```bash
npm install
```

## Dynamic Renderer Example

### `Renderer.tsx`

```tsx
import { Suspense } from "react";
import { COMPONENT_MAP } from "../registry/componentRegistry";
import { RendererProps } from "./renderer.types";
import { ErrorMessage } from "../components/base";

export const Renderer = ({ schema }: RendererProps) => {
  return (
    <Suspense fallback={<div>Loading UI...</div>}>
      {schema.components.map((component, index) => {
        if (!schema || typeof schema !== "object") {
          return (
            <ErrorMessage
              title="Invalid schema"
              description="Schema is missing or not an object."
            />
          );
        }

        if (!component.type || typeof component.type !== "string") {
          return (
            <ErrorMessage
              key={index}
              title={`Missing "type" for component at index ${index}`}
              description="Each component must have a valid 'type' string."
            />
          );
        }

        const Component = COMPONENT_MAP[component.type];

        if (!Component) {
          return (
            <ErrorMessage
              key={index}
              title={`Unknown component: "${component.type}"`}
              description="Please check the schema or register the component."
            />
          );
        }

        return <Component key={index} {...component} />;
      })}
    </Suspense>
  );
};
```

---

## Component Notes

### Button

- Props: `children`, `onClick`, `color` (default: `primary`), `variant` (default: `contained`)
- Usage: Primary and secondary variants styled via SCSS modules

```tsx
<Button onClick={handleClick} color="secondary" variant="outlined">
  Click Me
</Button>
```

### ErrorMessage

- Used to display errors from invalid schemas or runtime issues
- Props: `title` (string), `description?` (optional string)

```tsx
<ErrorMessage
  title="Invalid schema"
  description="Schema must be an object with a components array."
/>
```

### Input

- Accepts a search icon imported from `components/icons/search.svg`
- Supports SCSS modules with custom styles

### List

- Maps an array of items to `ListItem` components
- Props: `items`, `onToggle`
- Shows fallback text when empty

```tsx
<List items={options} onToggle={handleToggle} />
```

### ListItem

- Accepts `checked`, `disabled`, `title`, `subtitle`, `imageUrl`
- When checked, background turns green, tick turns white

### PageTitle

- Automatically sets `document.title`
- Renders an `<h1>` with provided label

```tsx
<PageTitle label="My Dynamic Page" />
```

### CheckboxListPanel

- Renders a searchable, filterable list of checkboxes
- Includes reset and submit buttons
- Submits data to `console.log` if `onSubmit === "logToConsole"`

---

## JSON Schema Example

```json
{
  "components": [
    {
      "type": "page-title",
      "title": "Select your preferences"
    },
    {
      "type": "checkbox-list-panel",
      "options": [
        {
          "value": "paypal",
          "title": "PayPal",
          "subtitle": "Use your PayPal balance",
          "checked": true
        }
      ],
      "onSubmit": "logToConsole"
    }
  ]
}
```
