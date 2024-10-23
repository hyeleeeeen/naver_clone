const Nav = () => {
  const navData = [
    { text: "메일", imgPos: "after:bg-[left_calc(-250px)_top_calc(-90px)]" },
    { text: "카페", imgPos: "after:bg-[left_calc(-250px)_top_calc(0px)]" },
    { text: "블로그", imgPos: "after:bg-[left_calc(-200px)_top_calc(-98px)]" },
    { text: "쇼핑", imgPos: "after:bg-[left_calc(-90px)_top_calc(-209px)]" },
    { text: "뉴스", imgPos: "after:bg-[left_calc(0px)_top_calc(-209px)]" },
    { text: "증권", imgPos: "after:bg-[left_calc(-180px)_top_calc(-209px)]" },
    { text: "부동산", imgPos: "after:bg-[left_calc(-45px)_top_calc(-209px)]" },
    {
      text: "지도",
      imgPos: "after:bg-[left_calc(-201px)_top_calc(0px)]",
      size: "after:w-12 after:h-12 before:left-[1px]",
    },
    { text: "웹툰", imgPos: "after:bg-[left_calc(-225px)_top_calc(-209px)]" },
    {
      text: "치지직",
    },
    { text: "더보기", imgPos: "after:bg-[left_calc(-250px)_top_calc(-135px)]" },
  ];

  return (
    <nav>
    <ul className="flex justify-center mt-3">
      {navData.map((item, index) => {
        const firstItem = index === 0;
        const lastItem = index === navData.length - 1;
        const mapItem = item.text === "지도";

        return (
          <li
            key={index}
            className={`${firstItem ? "ml-0" : "ml-[-3px]"} w-16 flex justify-center`}
          >
            <a href="#" className="inline-block">
              <div
                className={`${index === 9 ? "after:bg-navIcon after:w-[44px] after:h-[44px] after:bg-[length:44px_44px] after:inline-block after:relative after:m-1" : `nav-img-a ${item.imgPos}`} nav-img-b ${item.text === "지도" ? `${item.size}` : " "} `}
              ></div>
              <span
                className={`nav-text ${mapItem ? "mt-[-1px]" : "mt-[3px]"} ${lastItem ? "blind" : " "}`}
              >
                {item.text}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
    </nav>
  );
};

export default Nav;
