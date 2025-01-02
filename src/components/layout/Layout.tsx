import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Tech Hive - Premium Electronics for Your Lifestyle</title>
        <meta name="description" content="Discover top-of-the-line electronics at Tech Hive, from laptops to gadgets." />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 px-4 py-8" aria-label="Main Content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;



/*
DETAILED EXPLANATION

1. Imports:
   - `React`: Core library for building the React component.
   - `Header`: A reusable component that renders the site's header.
   - `Footer`: A reusable component that renders the site's footer.

2. Component Definition:
   - `Layout`: A functional component written in TypeScript using the `React.FC` type.
   - The `React.FC` type ensures the component adheres to React's functional component structure and supports TypeScript type checking.
   - Props:
     - `{ children: React.ReactNode }`: Expects a `children` prop, which can be any valid React node. This allows the component to wrap its content dynamically.

3. Component Structure:
   - `<>` and `</>`: React fragments used to group multiple elements without adding an extra node to the DOM.
   - `Header` Component: Rendered at the top of the layout to display the site's navigation and branding.
   - `<main>`:
     - Semantic HTML element used to designate the primary content area of the page.
     - `className="min-h-screen bg-gray-50"`:
       - `min-h-screen`: Ensures the main content takes at least the full height of the viewport.
       - `bg-gray-50`: Light gray background for better visual distinction.
     - `aria-label="Main Content"`:
       - Improves accessibility by explicitly labeling the section as the main content for screen readers.
   - `{children}`: Renders the content passed to the `Layout` component.
   - `Footer` Component: Rendered at the bottom to display the site's footer.

4. Props Destructure:
   - `({ children })`: Destructures the `children` prop directly in the function signature for cleaner code.

5. Return Statement:
   - Combines the `Header`, `main`, and `Footer` components in a single layout structure.

6. Tailwind CSS Properties:
   - `min-h-screen`: Ensures the main content covers at least the height of the viewport.
   - `bg-gray-50`: Sets a light gray background color.

7. Usage Example:
   - The `Layout` component is designed to wrap the main content of a page, ensuring consistent structure across the application. Example usage:
     ```tsx
     import Layout from "./Layout";

     const HomePage: React.FC = () => {
       return (
         <Layout>
           <h1>Welcome to the Home Page</h1>
           <p>This is the main content of the page.</p>
         </Layout>
       );
     };

     export default HomePage;
     ```

8. Accessibility:
   - The `aria-label="Main Content"` attribute improves accessibility by clearly indicating the purpose of the `<main>` section for screen readers.

By using this `Layout` component, you create a consistent and reusable structure for your application, making it easier to manage headers, footers, and dynamic content.
*/
