export default function InputField({ tweet, setTweet }){
    

    function handleInputBox(event){
        setTweet(event.target.value)
    }

    return(
        <input  placeholder =  "Please enter your tweet" onChange={handleInputBox} value={tweet} />
    )
}