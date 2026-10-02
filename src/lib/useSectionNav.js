import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function useGoToSection() {
  const location = useLocation()
  const navigate = useNavigate()

  return (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }
}

export function useScrollToRequestedSection() {
  const { state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) document.getElementById(state.scrollTo)?.scrollIntoView()
  }, [state])
}
