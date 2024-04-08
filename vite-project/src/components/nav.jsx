const Nav = () => {
  const naverLogo =
    "https://s.pstatic.net/static/www/mobile/edit/20240112_1095/upload_1705057885416AaxUM.png";
  return (
    <ul className="flex justify-center mt-[11px]">
      <li className="ml-0 w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b"></div>
          <span className="nav-text">메일</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-250px)_top_calc(0px)]"></div>
          <span className="nav-text">카페</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-200px)_top_calc(-98px)]"></div>
          <span className="nav-text">블로그</span>
        </a>
      </li>
      <li className="ml-[-2px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-90px)_top_calc(-209px)]"></div>
          <span className="nav-text">쇼핑</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(0px)_top_calc(-209px)]"></div>
          <span className="nav-text">뉴스</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-180px)_top_calc(-209px)]"></div>
          <span className="nav-text">증권</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-45px)_top_calc(-209px)]"></div>
          <span className="nav-text">부동산</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-201px)_top_calc(0px)] after:w-12 after:h-12 before:left-[1px] top-[-2px]"></div>
          <span className="nav-text top-[-8px]">지도</span>
        </a>
      </li>
      <li className="ml-[-2px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-225px)_top_calc(-209px)]"></div>
          <span className="nav-text"> 웹툰</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-b before:left-[-5px] after:block after:relative top-[1px] ">
            <img
              src={naverLogo}
              alt="치지직"
              className="w-[44px] h-[44px] relative top-[3px]"
            />
          </div>
          <span className="nav-text mt-[15px]">치지직</span>
        </a>
      </li>
      <li className="ml-[-3px] w-16 flex justify-center">
        <a href="#" className="inline-block">
          <div className="nav-img-a nav-img-b after:bg-[left_calc(-250px)_top_calc(-135px)]"></div>
          <span className="blind">더보기</span>
        </a>
      </li>
    </ul>
  );
};

export default Nav;
