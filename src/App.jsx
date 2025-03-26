
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Hero />
          <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
            <About />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default App;
