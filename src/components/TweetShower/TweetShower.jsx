import { useState,/* useEffect*/ } from "react";

export default function TweetShower({ tweet, setTweet }) {
  const [tweets, setTweets] = useState(() => {
    const savedTweets = localStorage.getItem("tweets");
    return savedTweets ? JSON.parse(savedTweets) : [];
  });

 //Pre ukladanie priebezne bez specialneho tlacidla
  /*useEffect(() => {
    if (tweets.length > 0 ) {
      localStorage.setItem("tweets", JSON.stringify(tweets));
    }
  }, [tweets]);*/

  function handleSaveTweets(){
      localStorage.setItem("tweets", JSON.stringify(tweets));
}
  
  function handleAddTweet() {
    if (tweet.trim() !== "") {
      setTweets([tweet, ...tweets]);
      setTweet("");
    }
  }

  function handleDeleteTweet(indexToRemove) {
    const newTweets = tweets.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("tweets", JSON.stringify(newTweets));
    setTweets(newTweets);
  }

  return (
    <>
      <button onClick={handleAddTweet}>Add Tweet</button>
      <button onClick={handleSaveTweets}>Save Tweets</button>
      <br />
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>
            {tweet}
            <button onClick={() => handleDeleteTweet(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
