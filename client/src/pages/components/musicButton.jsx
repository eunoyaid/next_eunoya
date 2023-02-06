import Image from "next/image";
import React, { useRef, useState } from "react";
import icMusicOn from "../../assets/icMusicOn.svg";
import icMusicOff from "../../assets/icMusicOff.svg";
import useSound from "use-sound";
import music from "../../assets/music/music.mp3";

const MusicButton = ({}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(music);
  console.log(music);

  function playSong() {
    setIsPlaying(true);
    play();
    console.log("music on");
  }

  function stopSong() {
    setIsPlaying(false);
    stop();
    console.log("music off");
  }

  return (
    <div>
      <button onClick={isPlaying ? stopSong : playSong}>🎺</button>
      {/* {music ? (
        <Image
          src={icMusicOn}
          onClick={onClick}
          className="cursor-pointer"
          alt="icMusicOn"
        />
      ) : (
        <Image
          src={icMusicOff}
          onClick={onClick}
          className="cursor-pointer"
          alt="icMusicOff"
        />
      )} */}
    </div>
  );
};

export default MusicButton;
