import { useCallback, useRef } from 'react'

export const useDoubleTap = (delay = 300) => {
  const lastTap = useRef<number>(0)

  return useCallback(
    (callback: () => void) => {
      const now = Date.now()
      const timeDiff = now - lastTap.current

      if (timeDiff < delay && timeDiff > 0) {
        callback()
      }

      lastTap.current = now
    },
    [delay]
  )
}
