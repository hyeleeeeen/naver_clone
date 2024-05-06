const Footer = () => {
  const menuList = [
    "개인정보처리방침",
    "책임의 한계와 법적고지",
    "회원정보 고객센터",
  ];


  return (
    <footer className="pt-[63px] pb-8 text-[#888] text-[12px] w-full text-center">
      <div>
        <a href="#">이용약관</a>
        {menuList.map((item, index) => {
          return (
            <a href="#" key={index} className={`${index== 0 ? 'font-bold' : ""} relative pl-4 before:absolute before:bg-[#dadada] before:w-px before:h-[11px] before:top-px before:left-2`}>
              {item}
            </a>
          );
        })}
      </div>
      <div className="leading-4 mt-2 font-sans">
        <a>
          <span className="bg-logo bg-[length:244px_107px] bg-[left_calc(-157px)_top_calc(-51px)] w-[70px] h-[15px] inline-block align-top cursor-pointer">
            <span className="blind">네이버</span>
          </span>
        </a>
        <span className=""> Copyright</span>
        <span className="px-[5px] font-medium text-black">© NAVER Corp.</span>
        <span className="">All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
