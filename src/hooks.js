import { useEffect } from 'react'

export const useHashChange = (callback) => {
  useEffect(() => {
    window.addEventListener('hashchange', callback)
    return () => window.removeEventListener('hashchange', callback)
  })
}
