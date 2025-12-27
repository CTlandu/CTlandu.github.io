// 使用 HashRouter 以避免 GitHub Pages 路由问题
// 如果使用 BrowserRouter，需要配置 404.html 重定向
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Photography from './pages/Photography'
import Publications from './pages/Publications'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

