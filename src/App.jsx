// HashRouter: GitHub Pages has no server-side rewrites, so deep links live after the '#'.
import { lazy, Suspense } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { LangProvider } from './lib/i18n'

const Photography = lazy(() => import('./pages/Photography'))
const PhotoGallery = lazy(() => import('./pages/PhotoGallery'))
const Archive = lazy(() => import('./pages/Archive'))

export default function App() {
  return (
    <LangProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/photography/:projectId" element={<PhotoGallery />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/publications" element={<Navigate to="/" state={{ scrollTo: 'research' }} replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </LangProvider>
  )
}
