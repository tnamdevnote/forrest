import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Card from "./components/Card";
import About from "./pages/About";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <About />
    </QueryClientProvider>
  );
}

export default App;
