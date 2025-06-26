import { useState /* useEffect*/ } from "react";
import "./TweetShower.css";

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

  function handleAddTweet() {
    if (tweet.trim() !== "") {
      const newTweets = [tweet, ...tweets];
      localStorage.setItem("tweets", JSON.stringify(newTweets));
      setTweets(newTweets);
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
      <button type="button" onClick={handleAddTweet}>
        Add Tweet
      </button>
      <br />
      <ul>
        {tweets.length === 0 ? (
          <li>No Tweets yet</li>
        ) : (
          tweets.map((tweet, index) => (
            <li key={index}>
              {tweet}
              <button type="button" onClick={() => handleDeleteTweet(index)}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}
