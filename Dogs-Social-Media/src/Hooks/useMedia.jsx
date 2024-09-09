import { useState, useEffect } from 'react'

function useMedia(media) {
  const [match, setMatch] = useState(null)

  useEffect(() => {
    function changeMatch() {
      const {matches} = window.matchMedia(media)
      setMatch(matches)
      // if (media.matches !== match) {
      //   setMatch(media.matches)
      // }
      // const listener = () => setMatch(media.matches)
      // media.addEventListener('change', listener)
      // return () => media.removeEventListener('change', listener)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => window.removeEventListener('resize', changeMatch)
  }, [media])

  return match
}

export default useMedia