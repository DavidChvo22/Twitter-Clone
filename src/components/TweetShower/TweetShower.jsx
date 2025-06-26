import "./TweetShower.css";

export default function TweetShower({ tweets, setTweets}) {

  function handleDeleteTweet(indexToRemove) {
    const newTweets = tweets.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("tweets", JSON.stringify(newTweets));
    setTweets(newTweets);
  }

  return (
    <>
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
