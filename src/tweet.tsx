// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

type TweetProps = {
  tweet: {
    id: number;
    username: string;
    content: string;
    likes: number;
    timestamp: string;
  };
};



function Tweet(props: TweetProps) {
    const username = props.tweet.username;
    const content = props.tweet.content;
    const likes = props.tweet.likes;
    const timestamp = props.tweet.timestamp;

    const [likesCount, setLikesCount] = useState(props.tweet.likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <div className = "tweet">
            <h3> @ {username }</h3>
            <p>{content}</p>
            <p>{timestamp} ago</p>
            
            <div onClick={handleLike} style={{ cursor: 'pointer', userSelect: 'none' }}>
                <span>{isLiked ? '❤️' : '🤍'}</span>
                <span> {likesCount} Likes</span>
            </div>

        </div>
    )
} 

// export default Tweet;
export default Tweet;
