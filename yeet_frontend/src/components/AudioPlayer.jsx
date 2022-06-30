import React, { useState, useEffect } from 'react'

const useAudio = audioType => {
  const audioList = {"Menu": "/METATRON _SHIKI.mp3"}
  console.log(audioList[audioType])
  const [audio] = useState(new Audio(audioList[audioType]))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
      playing ? audio.play() : audio.pause()
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

const Player = ({ audioType }) => {
  const [playing, toggle] = useAudio(audioType)

  return (
    <div>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  )
}

export default Player