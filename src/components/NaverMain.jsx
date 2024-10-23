import title from "../../public/assets/titleData.json";
import MainShop from "./main_shop.jsx";
import { Link } from "react-router-dom";
import TextSlider from "./TextSlider.jsx"


const Main = () => {
  const adImg =
    "https://s.pstatic.net/static/www/mobile/edit/20240403_1095/upload_17121373593144MzTJ.png";
  return (
    <main className="flex justify-center mt-[47px] mb-[60px]">
      <div className="w-[830px]">
        <aside className="h-[134.5px] bg-ad box-outline mt-0"></aside>
        <section className="h-[426px] box-outline flex flex-col ">
          <div>
            <header className="news-header-style">
              <a href="#" className="text-color_title hover:underline">
                뉴스스탠드
              </a>
              <a
                href="#"
                className="news-header-text pl-[18px] before:w-1 before:h-1 before:bg-color_dot_divider before:inline-block before:absolute before:border-1/2 before:mx-[7px] before:mt-[9px] before:rounded-full before:left-0"
              >
                언론사편집
              </a>
              {["엔터", "스포츠", "경제"].map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="news-header-text new-header-before"
                >
                  {category}
                </a>
              ))}
            </header>
            <div className="flex justify-between bg-color_option_bg px-[20px] py-3 mx-[20px] leading-[26px] text-[14.7px] rounded">
              <div className="flex">
                <a
                  href="#"
                  className="font-medium text-color_caption1 hover:underline"
                >
                  전체언론사
                </a>
                <div className="h-[26px] relative overflow-hidden w-[400px] text-left">
                  <i className="bg-naver bg-[length:444px_434px] bg-[left_calc(-123px)_top_calc(-272px)] w-[9px] h-[6px] inline-block mt-[10px] ml-[5px] align-top"></i>
                  <a
                    href="#"
                    className="relative pl-[25px] font-medium align-top hover:underline before:absolute before:w-px before:h-3 before:bg-color_dot_divider before:top-[2px] before:left-3 after:absolute after:w-[3px] after:h-[3px] after:bg-color_dot_divider after:mx-[6px] after:mt-3 after:rounded-full"
                  >
                    연합뉴스
                  </a>
                 <TextSlider />
                </div>
              </div>
              <div className="flex">
                <a href="#" className="font-medium hover:underline">
                  뉴스스탠드
                </a>
                <a
                  href="#"
                  className="hover:underline font-bold pl-[25px] relative before:w-px before:h-3 before:block before:absolute before:bg-color_dot_divider before:top-[7px] before:left-[12px]"
                >
                  뉴스홈
                </a>
              </div>
            </div>
            <div className="grid grid-rows-4 grid-cols-6 gap-px bg-color_border_in w-[790px] h-[224px] justify-center items-center mx-[20px] my-[18px] border border-color_border_in rounded">
              {title.map((item) => {
                return (
                  <a
                    key={item.id}
                    href="#"
                    className="bg-white h-full flex justify-center items-center py-[18px]"
                  >
                    <img
                      src={item.imgUrl}
                      alt="newTitle"
                      className="h-[20px]"
                    ></img>
                  </a>
                );
              })}
            </div>
          </div>
          <footer className="flex justify-center border-t pt-[10px] pb-[11px] relative">
            <button className="news-footer-btn before:rotate-[180deg]">
              <span className="blind">이전</span>
            </button>
            <div className="px-4 leading-[35px] text-[14px] font-semibold text-color_caption2">
              <span className="text-color_news">언론사</span> 더보기
            </div>
            <button className="news-footer-btn">
              <span className="blind">다음</span>
            </button>
            <div className="flex absolute right-0 w-[98px] justify-evenly pt-2">
              <button className=" news-footer-right bg-[left_calc(-391px)_top_calc(-204px)] hover:bg-[left_calc(-391px)_top_calc(-183px)]">
                <span className="blind">리스트형</span>
              </button>
              <button className="news-footer-right bg-[left_calc(-197px)_top_calc(-299px)] hover:bg-[left_calc(-176px)_top_calc(-299px)]">
                <span className="blind">썸네일형</span>
              </button>
            </div>
          </footer>
        </section>
        <MainShop />
      </div>
      <div className="w-[420px] ml-[30px]">
        <section className="flex flex-col h-[164px] box-outline mt-0 pt-[21px] pb-[18px] px-[20px] text-[14.7px] font-medium leading-5">
          <p className="text-color_body ">
            네이버를 더 안전하고 편리하게 이용하세요
          </p>
          <Link
            to="/login"
            className="bg-[#03c75a] w-[380px] h-[56px] mt-[13px] py-[17px] px-0 text-white border rounded border-[rgba(0,0,0,.06)] shadow-[0_2px_4px_0_rgba(3,199,90,.1)] hover:bg-[#17b75e]"
          >
            <i className="bg-naver bg-[length:444px_434px] bg-[left_calc(-55px)_top_calc(-166px)] w-[72px] h-[14px] m-0 mt-[3px] mr-2 inline-block align-top">
              <span className="blind">naver</span>
            </i>
            로그인
          </Link>
          <div className="text-[13.7px] text-color_caption2 mt-[14px]">
            <a href="#" className="hover:underline">
              아이디 찾기
            </a>
            <a href="#" className="hover:underline login-line ">
              비밀번호 찾기
            </a>
            <a href="#" className="hover:underline login-line">
              회원가입
            </a>
          </div>
        </section>
        <aside className="h-60 box-outline bg-side_ad bg-contain"></aside>
        <section className="h-[236px] box-outline px-[18px]">
          <header className="box-header text-left text-[16px] font-extrabold py-4">
            날씨
          </header>
          <img src="assets/img/weather.png" alt="날씨"></img>
        </section>
        <section className="h-[236px] box-outline px-[18px]">
          <header className="box-header text-left text-[16px] font-extrabold py-4">
            증시
          </header>
          <img src="assets/img/stock.png" alt="증시"></img>
        </section>
        <section className="h-[80px] box-outline ">
          <img src={adImg} alt="광고이미지" className=""></img>
        </section>
      </div>
    </main>
  );
};

export default Main;
