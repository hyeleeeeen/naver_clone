const Search = () => {
  return (
    <form
      action=""
      className="w-[708px] h-[60px] rounded-[33px] border-color_main border inline-flex bg-white hover:shadow-[0_2px_4px_0_rgba(0,0,0,.12)] relative top-[6px]"
    >
      <a href="#" className="w-[68px] h-full p-[17px] pr-4 pl-[27px] mr-0">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 fill-color_main"
        >
          <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path>
        </svg>
      </a>
      <label htmlFor="search-input" className="blind">
        검색어 입력
      </label>
      <input
        id="search-input"
        type="text"
        className="w-[480px] pt-[17px] pb-[17px] text-[21px] font-bold leading-6 outline-none text-color_search placeholder-[white] focus:placeholder-[#e4e4e4] focus:placeholder:font-normal"
        placeholder="검색어를 입력해 주세요."
      />
      <div className="flex pl-[50px]">
        <button className="pl-[3px] pr-[3px] pt-[22px] pb-[22px]">
          <div className="bg-naver block bg-[length:444px_434px] bg-[left_calc(-199px)_top_calc(-254px)] w-6 h-3.5 hover:brightness-[0.8]"></div>
          <span className="blind">입력도구</span>
        </button>
        <button className="pl-[6px] pr-[6px] pt-[26px] pb-[26px]">
          <div className="bg-naver block bg-[length:444px_434px] bg-[left_calc(-102px)_top_calc(-272px)] w-2.5 h-1.5"></div>
          <span className="blind">자동완성/최근검색어펼치기</span>
        </button>
        <button className="w-[62px] pl-[10px] pr-[27px] pt-[17px] pb-[16px]">
          <div className="block bg-[length:422px_405px] bg-[left_calc(-364px)_top_calc(-106px)] w-[25px] h-[25px]">
            <svg
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-color_main"
            >
              {" "}
              <path d="M22.13.5c11.378 0 20.632 9.256 20.632 20.63 0 4.699-1.566 9.155-4.439 12.782l10.164 10.165a2.41 2.41 0 0 1-1.706 4.115 2.412 2.412 0 0 1-1.706-.705L33.31 35.719a2.41 2.41 0 0 1 0-3.41 15.71 15.71 0 0 0 4.628-11.178c0-8.718-7.09-15.808-15.807-15.808-8.718 0-15.808 7.09-15.808 15.808 0 7.15 4.817 13.43 11.714 15.273a2.41 2.41 0 0 1 1.705 2.954 2.41 2.41 0 0 1-2.95 1.705C7.788 38.658 1.5 30.46 1.5 21.131 1.5 9.756 10.756.5 22.13.5zm4.716 34.746a3.483 3.483 0 1 1 0 6.966 3.483 3.483 0 0 1 0-6.966z"></path>{" "}
            </svg>
          </div>
          <span className="blind">검색</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
