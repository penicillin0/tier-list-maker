import { useCallback, useRef } from 'react'

export const useDoubleTap = (delay = 300) => {
  const lastTap = useRef<number>(0)
  const timer = useRef<NodeJS.Timeout>()

  return useCallback(
    (callback: () => void, event?: React.TouchEvent | React.MouseEvent) => {
      if (event) {
        event.preventDefault() // Prevent default touch behavior
      }

      const now = Date.now()
      const timeDiff = now - lastTap.current

      if (timeDiff < delay && timeDiff > 0) {
        if (timer.current) {
          clearTimeout(timer.current)
        }
        callback()
        lastTap.current = 0 // Reset after successful double tap
      } else {
        lastTap.current = now
        // Clear previous timer
        if (timer.current) {
          clearTimeout(timer.current)
        }
        // Reset after delay
        timer.current = setTimeout(() => {
          lastTap.current = 0
        }, delay)
      }
    },
    [delay]
  )
}
