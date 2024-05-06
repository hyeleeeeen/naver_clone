import SearchIcon from "../assets/searchIcon";
import SearchBtnIcon from "../assets/searchBtnIcon";

const Search = () => {
  return (
    <form
      action=""
      className="w-[708px] h-[60px] rounded-[33px] border-color_main border inline-flex bg-white hover:shadow-[0_2px_4px_0_rgba(0,0,0,.12)] relative top-[6px]"
    >
      <a href="#" className="w-[68px] h-full p-[17px] pr-4 pl-[27px] mr-0">
        <SearchIcon />
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
            <SearchBtnIcon />
          </div>
          <span className="blind">검색</span>
        </button>
      </div>
    </form>
  );
};

export default Search;
