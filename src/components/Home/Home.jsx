import InputField from "../InputField/InputField.jsx";
import TweetShower from "../TweetShower/TweetShower.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function handleLogOut(){
    navigate("/");
  }
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
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
}
