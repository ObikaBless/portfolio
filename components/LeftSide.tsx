import {TbBrandGithub } from "react-icons/tb";
import {TbBrandGoogle } from "react-icons/tb";
import {SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4
     text-textLight">
      <div className="flex flex-col gap-4">

        <a href="https://github.com/ObikaBless" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <TbBrandGoogle />
          </span>
        </a>
        <a href="https://github.com/ObikaBless" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/bless-obika-ba96b5221/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <a href="https://twitter.com/BlessObika" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
          items-center justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300">
            <SlSocialTwitter />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide
