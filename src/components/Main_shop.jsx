import React from "react";
import cardImg from "../../public/assets/shop_card.json";

const shopData = [
  {
    groupId: "1",
    shops: ["쿠팡", "G마켓", "옥션", "11번가"],
  },
  {
    groupId: "2",
    shops: ["SSG닷컴", "올리브영", "CJ온스타일", "위메프"],
  },
  {
    groupId: "3",
    shops: ["GS SHOP", "하프클럽", "패션플러스"],
  },
];

function ShopList() {
  return (
    <div className="bg-[rgba(245,248,251,.6)] border border-[rgba(0,0,0,.05)] rounded relative px-[11px] pt-[9px] pb-1 text-[13px] leading-[20px] text-color_caption1">
      {shopData.map((group) => (
        <div key={group.groupId} className="flex justify-between pb-[5px]">
          {group.shops.map((shop, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <DotDivider />}
              <a
                href="#"
                className={`hover:underline ${index === 1 || index === 3 ? "font-bold" : ""}`}
              >
                {shop}
              </a>
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

function DotDivider() {
  return (
    <span className="w-[3px] h-[3px] bg-color_dot_divider inline-block mt-[9px] rounded"></span>
  );
}

const MainShop = () => {
  const shopNav = [
    {
      text: "쇼핑홈",
      class: "before:bg-[left_calc(-34px)_top_0] before:right-0",
    },
    {
      text: "리뷰적립",
      class: "before:bg-[left_calc(-68px)_top_calc(-34px)] before:left-0",
    },
    {
      text: "주문",
      class: "before:bg-[left_calc(-34px)_top_calc(-34px)] before:right-0",
    },
    {
      text: "장바구니",
      class:
        "before:bg-[left_calc(-19px)_top_calc(-121px)] before:w-[17px] before:h-4 before:top-2 before:left-[6px]",
    },
  ];

  return (
    <section className="h-[560px] box-outline">
      <header className="flex justify-between news-header-style pt-[19px] pb-4">
        <div>
          {["쇼핑", "맨즈", "원쁠딜", "쇼핑라이브"].map((item, index) => {
            const firstIndex = index === 0;
            return (
              <a
                href="#"
                key={index}
                className={`${firstIndex ? "text-color_title hover:underline" : "news-header-text new-header-before"}`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </header>
      <div className="grid grid-flow-col grid-rows-[90px_95px_185px] grid-cols-[250px_1fr_1fr_1fr_1fr_1fr] gap-x-3 h-[376px] px-[20px] pb-px font-medium">
        <ShopList />

        <div className="flex justify-between h-[74px] bg-[rgba(245,248,251,.6)] border border-[rgba(0,0,0,.05)] rounded mt-3 px-[20px] pt-[10px] text-[13px] text-color_caption1">
          {shopNav.map((item) => {
            return (
              <a key={item.text} href="#" className="hover:underline">
                <div className={`shop-menu-btn ${item.class}`}></div>
                <div className="relative bottom-1">{item.text}</div>
              </a>
            );
          })}
        </div>
        <div className=" mt-3 hover:underline">
          <aside className="bg-shop_ad bg-[length:248px_146px] w-62 h-[146px] border border-[rgba(0,0,0,.05)] rounded block"></aside>
          <div className="mt-2 text-[14px] leading-[19px] text-color_caption1">
            봄 세일 페스타! 최대 ~80%
          </div>
        </div>
        {cardImg.map((item, index) => {
          return (
            <a
              href="#"
              key={index}
              className={`${(index + 1) % 2 === 1 ? "row-span-2 " : "pb-[14px] mt-3"} w-[98px] text-[13px] leading-[19px]`}
            >
              <img
                src={item.imgUrl}
                className="block w-[98px] h-[126px] border border-[rgba(0,0,0,.06)] rounded"
              ></img>
              <div className="pt-2 text-left">{item.mention}</div>
            </a>
          );
        })}
      </div>
      <div className="text-left mx-5 mb-[12px] mt-[6px] px-5 pt-[15px] pb-[14px] bg-color_option_bg leading-[21px] text-[15px] font-medium rounded">
        <span className="font-bold relative pr-[19px] after:block after:absolute after:w-[3px] after:h-[3px] after:bg-color_dot_divider after:rounded after:top-2 after:right-2">
          오늘의 혜택
        </span>
        <div className="bg-shop_logo bg-[length:70px_13px] inline-block bg-no-repeat w-[70px] h-[13px]"></div>
        <span className="text-color_caption1 ml-2">
          내가 제일 좋아하는 음식? 소곱창 엽떡 우리엄마김찌
        </span>
        <span className="text-[#9858f5]"> 무료 이벤트</span>
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
