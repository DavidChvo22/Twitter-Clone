import InputField from "../InputField/InputField.jsx";
import TweetShower from "../TweetShower/TweetShower.jsx";
import { useState } from "react";

export default function Home() {
  
  
  const [tweet, setTweet] = useState("");
  return (
    <>
      <InputField
        tweet={tweet}
        setTweet={setTweet}
      ></InputField>
      <TweetShower
        tweet={tweet}
        setTweet={setTweet}

      ></TweetShower>
    </>
  );
}
