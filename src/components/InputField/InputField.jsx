export default function InputField({ tweet, setTweet, tweets, setTweets }) {
  function handleAddTweet() {
    if (tweet.trim() !== "") {
      const newTweets = [tweet, ...tweets];
      localStorage.setItem("tweets", JSON.stringify(newTweets));
      setTweets(newTweets);
      setTweet("");
    }
  }

  function handleInputBox(event) {
    setTweet(event.target.value);
  }

  return (
    <form onSubmit={handleAddTweet}>
      <input
        placeholder="Please enter your tweet"
        onChange={handleInputBox}
        value={tweet}
      />
      <button>Add tweet</button>
    </form>
  );
}
