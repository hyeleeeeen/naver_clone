const Footer = () => {
  const pList = [
    "프로젝트 꽃",
    "네이버 비즈니스",
    "네이버 비즈니스 스쿨",
    "네이버 광고",
    "스토어 개설",
    "지역업체 등록",
    "엑스퍼트 등록",
  ];

  const dList = [
    "네이버 개발자 센터",
    "오픈 API",
    "오픈소스",
    "네이버 D2",
    "네이버 D2SF",
    "네이버 랩스",
  ];

  const fNav = [
    "회사소개",
    "인재채용",
    "제휴제안",
    "이용약관",
    "개인정보처리방침",
    "청소년보호정책",
    "네이버 정책",
    "고객센터",
  ];

  const adData = [
    {
      imgUrl:
        "https://ssl.pstatic.net/melona/libs/1491/1491395/6069dc2b72fd352f47f8_20240412111637949.jpg",
      sponsor: "메리츠화재",
      title: "펫보험 펫퍼민트 다이렉트",
      description: (
        <>
          자주 아픈 우리집 막내를 위해 <br />
          펫퍼민트 보험료 확인해요!
        </>
      ),
    },
    {
      imgUrl:
        "https://ssl.pstatic.net/melona/libs/1493/1493751/7453c12d2cf84b01a390_20240415100902843.png",
      sponsor: "네이버 커넥트재단",
      title: "무료 온라인 코칭스터디",
      description: (
        <>
          코치 및 팀원과 함께
          <br />
          인공지능 기본 개념 익히기
        </>
      ),
    },
    {
      imgUrl:
        "https://ssl.pstatic.net/melona/libs/1493/1493250/0bdf132fd393418a2f56_20240320095127382.png",
      sponsor: "쥬니버스쿨",
      title: "유아기 사회성 학습 노하우",
      description: (
        <>
          쥬니버스쿨과 함께 알아보고
          <br />
          아이 발달점검 기회도 가져보세요
        </>
      ),
    },
  ];

  const serviceList = [
    {
      title: "웨일 브라우저",
      text: "이용안내",
      icon: "assets/img/whale.png",
    },
    {
      title: "기업 사이트",
      text: "바로가기",
      icon: "assets/img/black_logo.png",
    },
  ];

  const mapping = (v) => {
    return v.map((item, index) => {
      const firstIndex = index === 0;
      return (
        <a
          key={index}
          href="#"
          className={`${firstIndex ? " " : "before:inline-block hover:underline before:w-px before:h-3 before:bg-color_dot_divider before:mx-[10px] before:align-px"} hover:underline `}
        >
          {item}
        </a>
      );
    });
  };

  return (
    <footer className="bg-[#f5f6f7]">
      <div className="w-[1280px] flex flex-col text-[13.5px] leading-[20px] text-color_caption1 pb-[78px] mx-auto">
        <div className="flex justify-between py-[30px] border-b border-b-color_border_in_divider text-[#545454]">
          {adData.map((item) => {
            return (
              <div
                key={item.sponsor}
                className="flex tracking-[-.25px] w-[410px] h-[100px] cursor-pointer"
              >
                <img
                  src={item.imgUrl}
                  alt="광고이미지"
                  className="w-40 h-[100px] border border-[rgba(0, 0, 0, 0.06)] rounded-md"
                />
                <div className="flex flex-col truncate pl-[18.5px] pt-1 pr-[3px] text-left text-[14px] relative">
                  <strong className="inline-block h-[20px] absolute max-w-[141px] px-[6px] rounded text-[13px] mt-[3px] text-white bg-[#a0adb2]">
                    {item.sponsor}
                  </strong>
                  <strong className="mt-[31px] text-[#222122] hover:underline">
                    {item.title}
                  </strong>
                  <div className="mt-1 relative">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between py-[21px] leading-[17px] border-b border-b-color_border_in_divider ">
          <a href="#" className="text-color_body font-bold">
            공지사항
          </a>
          <a
            href="#"
            className="text-color_body font-bold after:inline-block after:bg-naver after:bg-[length:444px_434px] after:bg-[left_calc(-323px)_top_calc(-223px)] after:w-2 after:h-3 after:m-[3px] after:ml-[10px] after:align-top"
          >
            서비스 전체보기
          </a>
        </div>
        <div className="flex justify-between py-[21px] border-b border-b-color_border_in_divider">
          <div className="font-medium">
            <div className="flex">
              <strong className="w-[87px] mr-[9px] text-left text-color_body">
                Partners
              </strong>
              {mapping(pList)}
            </div>
            <div className="flex mt-[10px]">
              <strong className="w-[87px] mr-[9px] text-left text-color_body ">
                Developers
              </strong>
              {mapping(dList)}
            </div>
          </div>
          <div className="flex">
            {serviceList.map((item, index) => {
              return (
                <div
                  key={item.title}
                  className={`${index === 1 ? " ml-[30px]" : ""} flex`}
                >
                  <div className="flex flex-col">
                    <strong className="pt-[5px] text-color_body">
                      {item.title}
                    </strong>
                    <a href="#" className="text-left pt-[3px] font-medium">
                      {item.text}
                    </a>
                  </div>
                  <a href="#" className="ml-[11px]">
                    <img src={item.icon} className="w-12 h-12" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pt-5 font-medium">
          {mapping(fNav)}
          <a
            href="#"
            className="ml-[17px] font-extrabold hover:underline text-color_body"
          >
            ⓒ NAVER Corp.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
