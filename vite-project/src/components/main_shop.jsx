const MainShop = () => {
  return (
    <section className="h-[560px] box-outline">
      <header className="flex justify-between news-header-style pt-[19px] pb-4">
        <div>
          <a href="#" className="text-color_title hover:underline">
            쇼핑
          </a>
          <a href="#" className="news-header-text new-header-before">
            맨즈
          </a>
          <a href="#" className="news-header-text new-header-before">
            원쁠딜
          </a>
          <a href="#" className="news-header-text new-header-before">
            쇼핑라이브
          </a>
        </div>
        <div>
          <span>1</span>
          <span>13</span>
          <button className="shop-header-btn rounded-l before:w-[5px] before:h-[5px] before:border-l-2 before:border-b-2 before:border-[#80868c] before:ml-px before:rotate-[45deg] before:translate-y-1/2 before:translate-x-1/2">
            <span className="blind">이전</span>
          </button>
          <button className="shop-header-btn rounded-r ">
            <span className="blind">다음</span>
          </button>
        </div>
      </header>
      <div className="grid grid-flow-col grid-rows-[90px_95px_185px] grid-cols-[250px_1fr_1fr_1fr_1fr_1fr] gap-x-5 h-[376px] px-[20px] pb-px">
        <div className="bg-[rgba(245,248,251,.6)] shadow-outline rounded relative px-[11px] pt-[9px] pb-1">
          {/* <a href="#">쿠팡</a>
          <a href="#">G마켓</a>
          <a href="#">옥션</a>
          <a href="#">11번가</a>
          <a href="#">SSG닷컴</a>
          <a href="#">올리브영</a>
          <a href="#">CJ온스타일</a>
          <a href="#">위메프</a>
          <a href="#">GS SHOP</a>
          <a href="#">하프클럽</a>
          <a href="#">패션플러스</a> */}
        </div>
        <div className="bg-[rgba(245,248,251,.6)] shadow-outline rounded mt-3 p-[9px] ">
          {/* <a href="#">
            <div></div>
            <div>쇼핑홈</div>
          </a>
          <a href="#">
            <div></div>
            <div>리뷰적립</div>
          </a>
          <a href="#">
            <div></div>
            <div>주문</div>
          </a>
          <a href="#">
            <div></div>
            <div>장바구니</div>
          </a> */}
        </div>
        <div className=" mt-3">
          <aside className="w-62 h-[146px] bg-[rgba(245,248,251,.6)] shadow-outline rounded"></aside>
          <div className="mt-2">광고메세지</div>
        </div>

        <div className="row-span-2">1</div>
        <div className="">2</div>
        <div className="row-span-2">3</div>
        <div>4</div>
        <div className="row-span-2">5</div>
        <div>6</div>
        <div className="row-span-2">7</div>
        <div>8</div>
        <div className="row-span-2">9</div>
        <div>10</div>

      </div>
      <div className="mx-5 mb-[18px] px-5 pt-[15px] pb-[14px] bg-color_option_bg">
        <span>오늘의 혜택</span>
      </div>
      <footer className="flex justify-center border-t pt-[10px] pb-[11px] relative">
        <button className="news-footer-btn before:rotate-[180deg]">
          <span className="blind">이전</span>
        </button>
        <div className="px-4 leading-[35px] text-[14px] font-semibold text-color_caption2">
          <span className="text-[#9858f5;]">쇼핑아이템</span> 더보기
        </div>
        <button className="news-footer-btn">
          <span className="blind">다음</span>
        </button>
      </footer>
    </section>
  );
};

export default MainShop;
