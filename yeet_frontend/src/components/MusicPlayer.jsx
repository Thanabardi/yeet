import React, { useRef, useEffect } from 'react';


const MusicPlayer = ({ audioType }) => {
    const audioList =   {"menu": {
                                "path": "/music/METATRON _SHIKI.mp3", 
                                "musicName": "METATRON", 
                                "composer": "_shiki"
                                },
                        "play": {
                                "path": "/music/Bring_Back_The_Beat _Lunatic_Sounds.mp3", 
                                "musicName": "Bring Back The Beat", 
                                "composer": "Lunatic Sounds"
                                },
                        "rank": {
                                "path": "/music/Liquid_DnB_Divergence_Nego_tiator.mp3", 
                                "musicName": "Liquid DnB Divergence", 
                                "composer": "Nego_tiator"
                                },
                        "profile": {
                                "path": "/music/Liquid_DnB_Divergence_Nego_tiator.mp3", 
                                "musicName": "Liquid DnB Divergence", 
                                "composer": "Nego_tiator"
                                },
                        "auth": {
                                "path": "/music/Q.E.F._【落選供養】_k.key.mp3", 
                                "musicName": "Q.E.F.【落選供養】", 
                                "composer": "k.key.mp3"
                                },
                        "count":{
                                "path": "/music/count.mp4",
                                "musicName": "count",
                                "composer": "Lunatic Sounds"
                        },
                        "smash":{
                            "path":"/music/smash.mp3",
                            "musicName": "smash",
                            "composer":"Lunaric Sounds"
                        }
                        }
    let audio = useRef();

    useEffect(() => {
        // console.log(audioList[audioType])
        const musicPath = audioList[audioType].path
        audio.current = new Audio(musicPath)
        if(audio.current.paused) {
            const timer = setTimeout(() => {
                audio.current.play()
                // set initial music volume (min 0, max 1)
                audio.current.volume = 0.5
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [])

    useEffect(() => {
        // looping music
        audio.current.addEventListener('ended', () => {
            audio.current.currentTime = 0
            audio.current.play()
        })
    }, [])

    useEffect(() => {
        // clear music on redirect
        return () => {
            // audio.current.pause()
            fade()
            // console.log("clear")
        }
    }, [])

    function fade(){
        if (audio.current.volume > 0){
            audio.current.volume = Math.max(0, audio.current.volume - 0.01);
            const timer = setTimeout(() => {
                fade()
              }, 10);
              return () => clearTimeout(timer);
        } else {
            audio.current.pause();
        }
    }
    if(audioList[audioType].musicName!="smash"){
    return (
        
        <div >
           Now playing {audioList[audioType].musicName} by {audioList[audioType].composer}
        </div>
        
    )
}else{
    return(
        <div></div>
    )
}
}
export default MusicPlayer;
