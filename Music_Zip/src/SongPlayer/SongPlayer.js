import React, {useState, useRef} from 'react'
import PreviousIcon from './sources/assets/PreviousIcon.png';
import PlayIcon from './sources/assets/PlayIcon.png';
import PauseIcon from './sources/assets/PauseIcon.png';
import NextIcon from './sources/assets/NextIcon.png';
import SeparatorIconLight from './sources/assets/SeparatorIconLight.png';
import AddSongIconLight from './sources/assets/AddSongIconLight.png';
import ShuffleIconLight from './sources/assets/ShuffleIconLight.png';
import SoundIconLight from './sources/assets/SoundIconLight.png';
import './Style/SongPlayer.css';
import Slider from './components/slider/Slider';
import data from   '../Additional/data.json';
import {TextStyled} from '../Styled/CommonStyled';
import {Player} from './Style/SongPlayerStyled';


export default function SongPlayer (value){
 

    // state
    const [id,setId] = useState(0);       // state for manage nextSong and PrevSong
    const [percentage, setPercentage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);   // state for playing music
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);    // state for kepping track for current time
    const audioPlayer = useRef();  // reference for audio

    const track = new Audio(data.FeaturedMusic[id].Link);

    const onChangeEvent = (event) => {
        const audio = audioPlayer.current;  
        audio.currentTime = (audio.duration / 100) * event.target.value; // slider to move fast or to do forward and backward on slider
        setPercentage(event.target.value);
    }

    
         // playing previous song
    const PreviousSongPlay = () => {
       !data.FeaturedMusic[id -1] ? setId(data.FeaturedMusic.length  -1) : setId(id -1);
       track.src = data.FeaturedMusic[id].Link;
       track.load();
       setIsPlaying(false);

       }


       // playing next Song 
    const NextSongPlay = () => {
         !data.FeaturedMusic[id +1] ? setId(0) : setId(id + 1);
         track.src = data.FeaturedMusic[id].Link;
         track.load();
         setIsPlaying(false);
         
         if(!isPlaying){
             setIsPlaying(true);
             track.play();
             

         }else if(isPlaying){
           if(track.pause()){
            setIsPlaying(false);

           }
            
             
         }

    }

    const toggleNext = () => {
        if(NextSongPlay === true){
         togglePlayPause((musicData) => {
             const audio = audioPlayer.current;
             audio.volume=1;
             if(musicData === "play"){
                 setIsPlaying(true);
                 audio.play();
                 
             }else if(!isPlaying){
                 setIsPlaying(false);
             }else if(isPlaying){
                 setIsPlaying(false);
                 audio.pause();
             }


         })


        }
    }
    //       // play and pause setIsPlaying true if playing else false

    const togglePlayPause = (musicData) => {
        if(value.CurrentMusic.Link !== undefined){
            const audio = audioPlayer.current;
            audio.volume = 1;

            if(musicData === "play"){
                setIsPlaying(true);
                audio.play();
            }else {
                if (!isPlaying) {
                    setIsPlaying(true);
                    audio.play();
                }
                if (isPlaying) {
                    setIsPlaying(false);
                    audio.pause();
                }
            }
        }
       
    }

    const CurrentDuration = (event) => {
        const percent = ((event.currentTarget.currentTime / event.currentTarget.duration) * 100).toFixed(2)
        const time = event.currentTarget.currentTime;

        setPercentage(+percent);
        setCurrentTime(time.toFixed(2));
    }

    const sliderTimeDuration =  (seconds) => {
        if (!seconds) return '00:00';
        let duration = seconds;
        let hours = duration / 3600;
        duration = duration % 3600;
        let min = parseInt(duration / 60);
        duration = duration % 60;
        let sec = parseInt(duration);

        if(sec < 10){
            sec = `0${sec}`;
        }
        if(min < 10){
            min = `0${min}`;
        }
        

        if(parseInt(hours, 10) > 0){
            return `${parseInt(hours, 10)}:${min}:${sec}`;
        }else if(min === 0){
            return `00:${sec}`;
        }else{
            return `${min}:${sec}`;
        }
    }

    return(
        <Player>
            <audio
                autoPlay={true} ref={audioPlayer} onTimeUpdate={CurrentDuration} onLoadedData={(event) => { 
                    togglePlayPause();
                    setDuration(event.currentTarget.duration.toFixed(2));
                }} src={value.CurrentMusic.Link}
            />
            <table className="FooterTable"><tbody>
                <tr>
                    <td className="FooterTableIconAlbum"><img src={value.CurrentMusic.img ? value.CurrentMusic.img : ("https://i.ibb.co/GCCdy8t/womens.png")} className={isPlaying ? "FooterAlbumIconPlaying" : "FooterAlbumIconNotPlaying"} alt=""/></td>
                    <td className="FooterTableMusicName">
                        <TextStyled className="footerHeader">{value.CurrentMusic === "Not Playing" ? "Not Playing" : value.CurrentMusic.Name}</TextStyled>
                        <div className="FooterSongDiscription" style={{paddingTop:2}}>{value.CurrentMusic === "Not Playing" ? "..." : value.CurrentMusic.Discription}</div>
                    </td>
                    <td className="FooterTableIcon"><img src={ SeparatorIconLight} className="FooterLeftIcon" alt="SeparateIcon"/></td>
                    <td className="FooterTableIcon"><img src={PreviousIcon} className="FooterLeftIcon" onClick={PreviousSongPlay} alt="PreviousIcon"/></td>
                    <td className="FooterTableIcon"><img src={isPlaying ? PauseIcon : PlayIcon} onClick={togglePlayPause} className="FooterLeftIcon" alt="PlayIcon"/></td>
                    <td className="FooterTableIcon"><img src={NextIcon} className="FooterLeftIcon" onClick={NextSongPlay } alt="NextIcon"/></td>
                    <td className="FooterTableTime" style={{paddingRight:10}}><TextStyled>{sliderTimeDuration(currentTime)}</TextStyled></td>
                    <td className="FooterTableSlider"><Slider percentage={percentage} onChange={onChangeEvent} /></td>
                    <td className="FooterTableTime" style={{paddingRight:40}}><TextStyled>{sliderTimeDuration(duration)}</TextStyled></td>
                    <td className="FooterTableIcon" style={{paddingRight:40}}><img src={ AddSongIconLight} className="FooterRightIcon" alt="" /></td>
                    <td className="FooterTableIcon" style={{paddingRight:40}}><img src={ ShuffleIconLight} className="FooterRightIcon" alt=""/></td>
                    <td className="FooterTableIcon" style={{paddingRight:40}}><img src={ SoundIconLight} className="FooterRightIcon" alt=""/></td>
                </tr>
            </tbody></table>
        </Player>
    );
    }
   
    
    


