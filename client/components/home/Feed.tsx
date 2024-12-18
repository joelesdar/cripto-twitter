import { BsStars } from "react-icons/bs"
import TweetBox from "./TweetBox"
import Post from "../Post"

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`
}

const tweets = [
  {
    displayName: 'Joelesdar',
    userName: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    avatar: 'https://avatars.githubusercontent.com/u/23407649?v=4',
    text: 'Mango Mango Mango',
    isProfileImageNFT: false,
    timestamp: '2024-12-16T12:00:00.000Z'
  },
  {
    displayName: 'Joelesdar',
    userName: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    avatar: 'https://avatars.githubusercontent.com/u/23407649?v=4',
    text: 'Mango Mango Mango',
    isProfileImageNFT: false,
    timestamp: '2024-12-16T12:00:00.000Z'
  },
  {
    displayName: 'Joelesdar',
    userName: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    avatar: 'https://avatars.githubusercontent.com/u/23407649?v=4',
    text: 'Mango Mango Mango',
    isProfileImageNFT: false,
    timestamp: '2024-12-16T12:00:00.000Z'
  },
  {
    displayName: 'Joelesdar',
    userName: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    avatar: 'https://avatars.githubusercontent.com/u/23407649?v=4',
    text: 'Mango Mango Mango',
    isProfileImageNFT: false,
    timestamp: '2024-12-16T12:00:00.000Z'
  },
  {
    displayName: 'Joelesdar',
    userName: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    avatar: 'https://avatars.githubusercontent.com/u/23407649?v=4',
    text: 'Mango Mango Mango',
    isProfileImageNFT: false,
    timestamp: '2024-12-16T12:00:00.000Z'
  },
]

const Feed = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {
        tweets.map((tweet, index) => (
          <Post 
            key={index}
            displayName={tweet.displayName}
            userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
            avatar={tweet.avatar}
            text={tweet.text}
            isProfileImageNFT={true}
            timestamp={tweet.timestamp}
          />
        ))
      }
    </div>
  );
}

export default Feed