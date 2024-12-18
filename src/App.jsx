import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Discord from "./pages/Discord";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <PageLayout>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conciertos" element={<Concerts />} />
              <Route path="/discordia" element={<Discord />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </PageLayout>
      </div>
    </Router>
  );
}

export default App;
