# Component Library - Lab 1

A reusable React TypeScript component library showcasing best practices for component creation, props handling, and type safety.

## Project Overview

This project demonstrates the creation of three reusable UI components:

- **AlertBox**: A customizable alert component for displaying messages
- **UserProfileCard**: A user profile display component with editable fields
- **ProductDisplay**: A product showcase component with cart functionality

## Features

✅ Type-safe React components with TypeScript interfaces  
✅ Reusable and composable component architecture  
✅ Proper prop handling with optional parameters  
✅ Component composition with children support  
✅ Interactive demo application  
✅ Tailwind CSS styling

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ervinbani/component-library.git
cd component-library
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  components/
    AlertBox/
      AlertBox.tsx          # Alert component implementation
      AlertBox.test.tsx     # Alert component tests
    UserProfileCard/
      UserProfileCard.tsx   # User profile component
      UserProfileCard.test.tsx
    ProductDisplay/
      ProductDisplay.tsx    # Product display component
      ProductDisplay.test.tsx
  types/
    index.ts               # TypeScript interfaces and types
  App.tsx                  # Main application with component demos
  main.tsx                 # Application entry point
```

## Components Documentation

### 1. AlertBox Component

Displays different types of alerts with customizable messages.

**Props:**

- `type`: `'success' | 'error' | 'warning' | 'info'` - Alert type
- `message`: `string` - Alert message to display
- `onClose?`: `() => void` - Optional close handler
- `children?`: `React.ReactNode` - Optional additional content

**Example:**

```tsx
<AlertBox
  type="success"
  message="User profile updated successfully!"
  onClose={() => setShowAlert(false)}
>
  <p className="text-sm mt-2">All changes have been saved.</p>
</AlertBox>
```

### 2. UserProfileCard Component

Displays user profile information with optional edit functionality.

**Props:**

- `user`: `User` - User object containing id, name, email, role, avatarUrl
- `showEmail?`: `boolean` - Show/hide email (default: true)
- `showRole?`: `boolean` - Show/hide role (default: true)
- `onEdit?`: `(userId: string) => void` - Optional edit handler
- `children?`: `React.ReactNode` - Optional additional content

**Example:**

```tsx
<UserProfileCard
  user={user}
  showEmail={true}
  showRole={true}
  onEdit={(userId) => handleEdit(userId)}
>
  <div className="text-sm text-gray-500">Last login: 2 hours ago</div>
</UserProfileCard>
```

### 3. ProductDisplay Component

Displays product information with add-to-cart functionality.

**Props:**

- `product`: `Product` - Product object with id, name, price, description, imageUrl, inStock
- `showDescription?`: `boolean` - Show/hide description (default: true)
- `showStockStatus?`: `boolean` - Show/hide stock status (default: true)
- `onAddToCart?`: `(productId: string) => void` - Optional cart handler
- `children?`: `React.ReactNode` - Optional additional content

**Example:**

```tsx
<ProductDisplay
  product={product}
  showDescription={true}
  showStockStatus={true}
  onAddToCart={(productId) => handleAddToCart(productId)}
>
  <div className="text-sm text-gray-500">Free shipping available</div>
</ProductDisplay>
```

## TypeScript Interfaces

All type definitions are located in `src/types/index.ts`:

```typescript
// Alert types
export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

// Product types
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}
```

## How to Use the Components

### In the Demo App

The application includes a navigation menu to explore each component:

1. **Home**: Welcome page with project overview
2. **User Profile**: Demonstrates UserProfileCard with edit functionality
3. **Products**: Demonstrates ProductDisplay with add-to-cart functionality

### In Your Own Project

Import the components and types:

```tsx
import { AlertBox } from "./components/AlertBox/AlertBox";
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
import type { User, Product } from "./types/index";
```

## Key Features Demonstrated

- **Type Safety**: All components use TypeScript interfaces for props
- **Optional Props**: Components support optional configuration via props
- **Component Composition**: All components support children for extensibility
- **Event Handling**: Proper callback prop handling for user interactions
- **Conditional Rendering**: Components conditionally render based on props
- **State Management**: Demo app shows state management with alerts and navigation

## Technologies Used

- **React 18**: UI library
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Author

Ervin Bani

## License

MIT
