import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  //  apply react query in whole application
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
