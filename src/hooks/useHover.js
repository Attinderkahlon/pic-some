import { useState, useEffect, useRef } from 'react'

const useHover = () => {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)

  const enter = () => {
    setHovered(true)
  }
  const leave = () => {
    setHovered(false)
  }

  useEffect(() => {
    const myRef = ref.current
    if (myRef) {
      myRef.addEventListener('mouseenter', enter)
      myRef.addEventListener('mouseleave', leave)
    }
    return () => {
      myRef.removeEventListener('mouseenter', enter)
      myRef.removeEventListener('mouseleave', leave)
    }
  }, [ref])

  return [hovered, ref]
}

export default useHover
