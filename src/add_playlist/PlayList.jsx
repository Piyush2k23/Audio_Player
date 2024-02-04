import { useState } from "react";
import { FiMusic } from "react-icons/fi";
import "./playList.css";

const PlayList = () => {
   
  const [audio, setAudio] = useState("");

  let selectedFile = [];

  const handleAudio = (e) => {
     
      selectedFile = [...selectedFile, e.target.files[0]];

    //  if (selectedFile) {
    //   const reader = new FileReader();
    //   reader.onload = function (fileLoadedEvent) {
    //     const audioDataURL = fileLoadedEvent.target.result;
    //     setAudio(audioDataURL);
    //   };
    //   reader.readAsDataURL(selectedFile);
    // }
     console.log(selectedFile)
     console.log(selectedFile[0].name);
  };

  return (
    <div className="playList">
      {/* <h2>Hello</h2> */}
      <div className="addAudio">
        <label htmlFor="audio-input">Upload an audio file:</label>
        <input id="audio-input" type="file" name="audio" accept=".mp3, .wav"  onChange={handleAudio} />
      </div>
      {
        selectedFile && 
        
        <div className="select-audio">
          {selectedFile.map((select)=>{
             <div className="select">
                  <FiMusic />
                   {selectedFile[0]?.name}
              </div>
            
          }) 
       }

        </div>
      }
      <div className="line" />
    </div>
  );
};

export default PlayList;
