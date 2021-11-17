import React, { useState, useEffect } from "react";

import axios from "axios";
import ReactAudioPlayer from "react-audio-player";

function Home() {
  const [value, setValue] = useState([
    {
      text: "chào bạn mình là ban mai",
      count: 0,
      audio: null,
      isPlaying: false,
    },
    {
      text: "chào bạn mình là anh duy",
      count: 0,
      audio: null,
      isPlaying: false,
    },
  ]);

  const handleClick = (index) => {
    if (value[index].count === 0) {
      const voiceFemale = "banmai"
      const voiceMale = "giahuy"
      setValue(
        value.map((item, i) => {
          if (i === index) {
            item.count = 1;
            let config = {
              headers: {
                voice: voiceFemale,
                "api-key": "wUxwjHNn8gitLn2Vt48dWWG3op5Ydoel",
              },
            };
            axios
              .post("https://api.fpt.ai/hmi/tts/v5", item.text, config)
              .then((res) => {
                item.audio = new Audio(res.data.async);
                item.isPlaying = true;
              })
              .catch((err) => {
                console.log(err);
              });
            return item;
          }
          return item;
        })
      );
    }
    
  };

  useEffect(() => {
    value.forEach((item) => {
      item.isPlaying ? item.audio?.play() : item.audio?.pause();
      
    });
    setValue(value.map((item) => {
      item.isPlaying = !item.isPlaying;
      return item;
    }))
  }, []);



  return (
    <div>
      {value.map((item, index) => {
        item.isPlaying ? item.audio?.play() : item.audio?.pause()
        return (
          <div key={index}>
            <button onClick={() => handleClick(index)}>Click me to hear</button>
            {item.audio}
          </div>
        );
      })}
    </div>
  );
}

export default Home;
