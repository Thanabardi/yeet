import React, { useState, useEffect } from 'react'

const useAudio = audioPath => {
  const [audio] = useState(new Audio(audioPath))
  const [playing, setPlaying] = useState(true)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      playing ? audio.play() : audio.mute()
    },
    [playing, audio]
  )

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
      audio.play()
      setPlaying(true)
    })
  }, [audio])

  return [playing, toggle]
}

const Player = ({ audioPath }) => {
  const [playing, toggle] = useAudio(audioPath)

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default Player