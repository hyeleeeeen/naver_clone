import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center relative w-[743px] pb-12 tracking-[-.5px] text-[14px] text-[#333]">
      <div className="absolute top-5 right-0 after:absolute after:top-2 after:right-2 after:bg-login_img after:bg-[length:290px_275px] after:bg-[left_calc(-264px)_top_calc(-255px)] after:w-4 after:h-[14px] after:z-0 after:inline-block">
      <select className=" inline-block  text-[12px] outline-none leading-[18px] min-w-[95px] h-[30px] pt-1 pr-[10px] pb-[6px] pl-2 border text-[#333] border-[#ccc] bg-white appearance-none">
        <option>한국어</option>
        <option>English</option>
        <option>中文(简体)</option>
        <option>中文(台灣)</option>
      </select>
      </div>
      <Link
        to="/"
        className="bg-logo bg-[length:244px_107px] bg-[left_0_top_calc(-51px)] w-[155px] h-[30px] inline-block mt-[108px]"
      >
        <span className="blind">naver</span>
      </Link>
    </header>
  );
};

export default Header;
