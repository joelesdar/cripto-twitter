import { BsFillPatchCheckFill } from "react-icons/bs"
import { format } from 'timeago.js'

const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage:`rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6]`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`
}

interface PostProps {
  key: number,
  displayName: string,
  userName: string,
  avatar: string,
  text: string,
  isProfileImageNFT: boolean,
  timestamp: string,
}

const Post: React.FC<PostProps> = ({ key, displayName, userName, avatar, text, isProfileImageNFT, timestamp }) => {
  return (
    <div className={style.wrapper}>
      <div>
        <img
          src={avatar}
          alt={userName}
          className={
            isProfileImageNFT ? `${style.profileImage} smallHex` : style.profileImage
          }  
        />
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>{displayName}</span>
            {isProfileImageNFT && (
              <span className={style.verified}>
                <BsFillPatchCheckFill />
              </span>
            )}
          </span>
          <span className={style.handleAndTimeAgo}>
            @{userName} • {format(new Date(timestamp).getTime())}
          </span>
        </div>
      </div>
    </div>
  )
}
 
export default Post