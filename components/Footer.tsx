import { TbBrandGithub } from "react-icons/tb";
import { TbBrandGoogle } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

const Footer = () => {
  return (
    <div
      className="hidden sm:inline-flex mdl:hidden xl:hidden items-center justify-center
    w-full py-6 gap-4"
    >
      <a href="https://github.com/ObikaBless/" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
        >
          <TbBrandGoogle />
        </span>
      </a>
      <a href="https://github.com/ObikaBless/" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
        >
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/bless-obika-ba96b5221/"
        target="_blank"
      >
        <span
          className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
        >
          <SlSocialLinkedin />
        </span>
      </a>
      <a href="https://twitter.com/BlessObika/" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-bodyColor border-[1px] border-zinc-700
          hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center
          justify-center hover:text-textGreen cursor-pointer
          hover:-translate-y-2 transition-all duration-300"
        >
          <SlSocialTwitter />
        </span>
      </a>
    </div>
  );
};

export default Footer;
