import "./audioPlayer.css";
import track from "../assets/track1.mp3";


const AudioPlayer = () => {
  return (
    <div className="playArea">
      <p>Audio Sample</p>
      <audio controls>
        <source src={track} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
