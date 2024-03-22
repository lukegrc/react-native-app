# After School Lessons App

A NativeScript-Vue mobile application for booking after-school activities and classes.

## Features

- **Browse Classes**: View available lessons with detailed information
- **Shopping Cart**: Add/remove lessons with quantity controls
- **Order Management**: Complete checkout process with contact information
- **Booking History**: View past orders and their status
- **Responsive UI**: Modern, intuitive interface with proper styling

## Technology Stack

- **NativeScript 6.5.0** - Cross-platform mobile development
- **Vue.js 2.6.12** - Frontend framework
- **TypeScript 4.0+** - Type safety and better development experience
- **Vue Property Decorator** - Class-based Vue components

## Project Structure

```
app/
├── components/
│   ├── App.vue          # Main application component
│   ├── LessonList.vue   # Browse available classes
│   ├── Checkout.vue     # Shopping cart and checkout
│   └── BookingsList.vue # Order history
├── types/
│   └── index.ts         # TypeScript interfaces
├── images/              # Lesson images
└── app.js              # Application entry point
```

## Key Improvements Made

### 1. TypeScript Integration

- Added proper type definitions for all data structures
- Implemented interfaces for Lesson, CartItem, UserInfo, and Order
- Enhanced type safety across the application

### 2. Enhanced UI/UX

- Modern card-based design for lessons and cart items
- Better visual hierarchy with proper spacing and typography
- Color-coded status indicators and availability warnings
- Responsive grid layouts for better information display

### 3. Improved Functionality

- Quantity controls for cart items
- Real-time cart total calculations
- Order status tracking (pending, confirmed, cancelled)
- Contact information validation
- Order history with sorting and filtering

### 4. Better Code Structure

- Class-based Vue components using decorators
- Proper separation of concerns
- Reusable components and consistent styling
- Better error handling and user feedback

## Available Classes

1. **Football Training** - Ta Qali National Stadium
2. **Drama & Acting** - Pieta Arts Centre
3. **Art & Craft** - Rabat Community Hall
4. **Music & Piano** - Iklin Music School
5. **Basketball Skills** - Swieqi Sports Complex

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run on Android:

   ```bash
   ns run android
   ```

3. Run on iOS:

   ```bash
   ns run ios
   ```

## Development

The app uses TypeScript for better development experience. Key features:

- **Type Safety**: All components and data structures are properly typed
- **Modern Syntax**: ES6+ features with proper transpilation
- **Component Architecture**: Modular, reusable components
- **State Management**: Vue's reactive data system with proper typing

## Styling

The app uses a consistent design system with:

- Primary color: #2E7D32 (Green)
- Secondary colors: #4CAF50, #FF9800, #F44336
- Consistent spacing and typography
- Material Design-inspired components
- Responsive layouts for different screen sizes

## Contributing

This project follows conventional commit standards. Please use appropriate commit types:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring

## Development Workflow

1. **Feature Development**: Create feature branches from main
2. **Code Review**: Submit pull requests for review
3. **Testing**: Ensure all tests pass before merging
4. **Documentation**: Update docs for any API changes
