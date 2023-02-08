import Image from "next/image";
import useSound from "use-sound";
import icMusicOn from "../../assets/icMusicOn.svg";
import icMusicOff from "../../assets/icMusicOff.svg";
import music from "../../assets/music/music.mp3";
import { useEffect, useState } from "react";

const MusicButton = ({}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(music);
  function playSong() {
    setIsPlaying(true);
    play();
  }

  function stopSong() {
    setIsPlaying(false);
    stop();
  }

  return (
    <div className="fixed right-6 top-6 ">
      {/* <button
        data-aos="zoom-in"
        data-aos-offset="100"
        onClick={isPlaying ? stopSong : playSong}
      >
        play
      </button> */}
      {isPlaying ? (
        <Image
          src={icMusicOn}
          onClick={isPlaying ? stopSong : playSong}
          className="cursor-pointer"
          alt="icMusicOn"
        />
      ) : (
        <Image
          src={icMusicOff}
          onClick={isPlaying ? stopSong : playSong}
          className="cursor-pointer"
          alt="icMusicOff"
        />
      )}
    </div>
  );
};

export default MusicButton;
