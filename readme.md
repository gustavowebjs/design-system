# Design System Library

A design system library built with React, Rollup, TypeScript, and Stitches UI.

## Installation

1. **Build and Link the Design System Package:**

   ```bash
   npm run build
   npm link
   ```

2. **Link the Design System in Your Project:**

   In your project directory, run:

   ```bash
   npm link design-system
   ```

## Usage

Import and use the components in your project:

```jsx
import { Button } from "design-system";

const App = () => (
  <div>
    <Button>Click Me</Button>
  </div>
);

export default App;
```

## Development

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gustavowebjs/design-system.git
   cd design-system
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Development Server:**

   ```bash
   npm start
   ```

## Building

To build the library, run:

```bash
npm run build
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
