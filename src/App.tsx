import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Photography from './pages/Photography'
import CV from './pages/CV'
import Publications from './pages/Publications'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

