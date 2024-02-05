// Import the createRoot function from react-dom/client
import { createRoot } from "react-dom/client";

// Import the main App component
import App from "./App";

// Create a root using the createRoot function and target the "root" element in the document
const root = createRoot(document.getElementById("root"));

// Render the App component within the root
root.render(<App />);