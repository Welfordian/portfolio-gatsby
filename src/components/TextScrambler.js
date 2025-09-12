import React from 'react'

export default function TextScrambler({ phrases = [], speed = 20, pauseTime = 1500 }) {
  const [index, setIndex] = React.useState(0)
  const [display, setDisplay] = React.useState('')

  React.useEffect(() => {
    let isMounted = true
    let frame = 0
    const target = phrases[index % phrases.length] || ''
    const chars = '!<>-_\/[]{}—=+*^?#________'

    const scramble = () => {
      if (!isMounted) return
      const progress = Math.min(1, frame / (target.length + 5))
      const out = target
        .split('')
        .map((ch, i) => (i / target.length < progress ? ch : chars[Math.floor(Math.random() * chars.length)]))
        .join('')
      setDisplay(out)
      frame += 1
      if (progress < 1) {
        timeout = setTimeout(scramble, speed)
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => (i + 1) % phrases.length)
        }, pauseTime)
      }
    }

    let timeout = setTimeout(scramble, speed)
    return () => {
      isMounted = false
      clearTimeout(timeout)
    }
  }, [index, phrases, speed, pauseTime])

  return <span>{display}</span>
}
