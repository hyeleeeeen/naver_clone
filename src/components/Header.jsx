const Header = () => {
  return (
    <header className="text-left relative h-[64px]">
      <button className="left-[-10px] header-btn">
        <div className="bg-naver header-btn2 bg-[left_calc(-314px)_top_calc(-330px)]"></div>
        <span className="blind">확장 영역</span>
      </button>
      <a className="header-btn p-[7px] left-[43px] ">
        <div className="bg-naver header-btn2 w-[32px] h-[32px]  bg-[left_calc(-295px)_top_calc(-177px)] "></div>
        <span className="blind">네이버 페이</span>
      </a>
      <button className="right-[40px] w-[46px] header-btn">
        <div className="bg-naver header-btn2 bg-[left_calc(-364px)_top_calc(-81px)]"></div>
        <span className="blind">네이버톡</span>
      </button>
      <button className="right-[-10px] w-[46px] header-btn">
        <div className="bg-naver header-btn2  bg-[left_calc(-364px)_top_calc(-27px)]"></div>
        <span className="blind">알림-혜택</span>
      </button>
    </header>
  );
};

export default Header;
