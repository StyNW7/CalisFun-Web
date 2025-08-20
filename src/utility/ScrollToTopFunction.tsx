import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTopFunction() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname])

  return null
}
