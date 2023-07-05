import {TbBrandGithub } from "react-icons/tb";
import {TbBrandGoogle } from "react-icons/tb";
import {SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:blesschinedumobika@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">Send Quick Mail</p>
      </a>
      <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
    </div>
  )
}

export default RightSide
