import { useState, useRef } from "react";

const Main = () => {
  const [isIdInput, setIsIdInput] = useState("");
  const [isPwInput, setIsPwInput] = useState("");
  const [isIdDelete, setIsIdDelete] = useState(false);
  const [isPwDelete, setIsPwDelete] = useState(false);
  const [isLoginChecked, setIsLoginChecked] = useState(false);
  const [isIdFocus, setIsIdFocus] = useState(false);
  const [isPwFocus, setIsPwFocus] = useState(false);
  const adImg = "https://ssl.pstatic.net/melona/libs/1378/1378592/b96ed7146a112e87d6ea_20240423164744254.png";

  // useRef 사용해서 dom 선택한후 focus잡기

  const refId = useRef(null);

  const refPw = useRef(null);

  const handleIdFocus = () => {
    setIsIdFocus(!isIdFocus);
    if (isPwFocus) setIsPwFocus(false);
    console.log("Id!");
  };
  const handlePwFocus = () => {
    setIsPwFocus(!isPwFocus);
    if (isIdFocus) setIsIdFocus(false);
    console.log("Pw!");
  };

  const handleIdChange = (e) => {
    setIsIdInput(e.target.value);
    setIsIdDelete(e.target.value !== ""); // 입력값이 존재하면 true
    console.log(isIdInput);
  };

  const handlePwChange = (e) => {
    setIsPwInput(e.target.value);
    setIsPwDelete(e.target.value !== ""); // 입력값이 존재하면 true
    console.log(isPwInput);
  };

  const handleIdDelete = () => {
    if (refId.current) {
      refId.current.value = ""; // 입력값을 공백으로 설정하여 삭제
      setIsIdDelete(false);
    }
    console.log("지워");
  };

  const handlePwDelete = () => {
    if (refPw.current) {
      refPw.current.value = ""; // 입력값을 공백으로 설정하여 삭제
      setIsPwDelete(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인");
  };

  const handleCheck = () => {
    setIsLoginChecked(!isLoginChecked);
    console.log("checked!");
  };

  return (
    <>
      <section className="w-[460px] relative text-[14px] tracking-[-.5px] my-0 mx-auto">
        <div className="flex w-full">
          <a
            href="#"
            className="flex-1 relative m-0 p-0 border border-[#c6c6c6] bg-white border-r-0 border-b-0 rounded-tl-md rounded-tr-md h-[61px] block pt-[17px] z-[5] after:absolute after:bg-login_img after:bg-[length:290px_275px] after:bg-[left_calc(-225px)_top_0px] after:w-[15px] after:h-[62px] after:top-[-1px] after:right-[-8px]"
          >
            <span className="login-nav-btn text-[#333] left-[33px] before:bg-[left_calc(-192px)_top_calc(-255px)]">
              ID 로그인
            </span>
          </a>
          <a
            href="#"
            className="flex-1 relative border pt-[17px] bg-[#f8f9fa] border-[#e3e3e3] border-r-0 border-b-0 z-[2] h-[61px]"
          >
            <span className="login-nav-btn left-[27px] before:bg-[left_calc(-208px)_top_calc(-234px)] ">
              일회용 번호
            </span>
          </a>
          <a
            href="#"
            className="flex-1 relative border pt-[17px] bg-[#f8f9fa] border-[#e3e3e3] border-b-0 z-[2] h-[61px] rounded-tr-md"
          >
            <span className="login-nav-btn left-[38px] before:bg-[left_calc(-244px)_top_calc(-234px)] ">
              QR코드
            </span>
          </a>
        </div>
        <div className="block p-0 relative z-[3] mt-[-8px] border rounded-md border-[#c6c6c6] shadow-login_outline bg-white">
          <form className="py-5 px-6 block" onSubmit={handleSubmit}>
            <div>
              <div
                className={`relative text-left border ${isIdFocus ? "border-[#09aa5c]" : "border-[#dadada]"} rounded-tl-md rounded-tr-md w-full h-12 pt-[14px] pb-[13px] px-[17px]`}
              >
                <div
                  className={`bg-login_img bg-[length:290px_275px] left-[18px] top-[15px] w-4 h-4 absolute ${isIdFocus ? "bg-[left_calc(-156px)_top_calc(-255px)]" : "bg-[left_calc(-175px)_top_calc(-255px)]"}`}
                >
                  <span className="blind">아이디</span>
                </div>
                <input
                  type="text"
                  placeholder="아이디"
                  title="아이디"
                  maxLength="41"
                  ref={refId}
                  onClick={handleIdFocus}
                  onChange={handleIdChange}
                  className="outline-none pr-[30px] ps-0.5 pe-0.5 left-[22px] relative w-[350px] text-[16px] text-[#222] z-[4] leading-[19px] cursor-pointer"
                />
                <span
                  className={`absolute w-[18px] ${isIdDelete ? "inline-block" : "hidden"} h-[18px] top-[6px] right-2 z-[5] mt-2 ml-2 bg-login_img bg-[length:290px_275px] bg-[left_calc(-179px)_top_calc(-182px)]`}
                  onClick={handleIdDelete}
                >
                  <span className="blind">삭제</span>
                </span>
              </div>
              <div
                className={`relative text-left border ${isPwFocus ? "border-[#09aa5c]" : "border-[#dadada]"} rounded-bl-md rounded-br-md w-full h-12 pt-[14px] pb-[13px] px-[17px]`}
              >
                <div
                  className={`bg-login_img bg-[length:290px_275px] left-[17px] top-[15px] w-4 h-4 absolute ${isPwFocus ? "bg-[left_calc(-210px)_top_calc(-255px)]" : "bg-[left_calc(-66px)_top_calc(-255px)]"}`}
                >
                  <span className="blind">비밀번호</span>
                </div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  title="비밀번호"
                  onChange={handlePwChange}
                  onClick={handlePwFocus}
                  ref={refPw}
                  className="outline-none pr-[30px] ps-0.5 pe-0.5 left-[22px] relative w-[350px] text-[16px] text-[#222] z-[4] leading-[19px] cursor-pointer"
                />
                <span
                  className={`${isPwDelete ? "inline-block" : "hidden"} absolute w-[18px] h-[18px] top-[6px] right-2 z-[5] mt-2 ml-2 bg-login_img bg-[length:290px_275px] bg-[left_calc(-179px)_top_calc(-182px)]`}
                  onClick={handlePwDelete}
                >
                  <span className="blind">삭제</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-[13px] relative text-[#777] font-medium leading-[17px]">
              <div className="">
                <input
                  type="checkbox"
                  value="off"
                  id="keep"
                  className="absolute top-[2px] left-[2px] w-[15px] h-[15px] appearance-none"
                />
                <label
                  htmlFor="keep"
                  className={`inline-block cursor-pointer pl-[23px] before:bg-login_img before:absolute before:top-0 before:left-0 before:bg-[length:290px_275px] ${isLoginChecked ? "before:bg-[left_calc(-23px)_top_calc(-256px)]" : "before:bg-[left_calc(-32px)_top_calc(-234px)]"} before:w-[18px] before:h-[18px]`}
                  onClick={handleCheck}
                >
                  로그인 상태 유지
                </label>
              </div>
              <div className="flex relative">
                <a href="#">IP보안</a>
                <span>
                  <input
                    type="checkbox"
                    id="switch"
                    value="off"
                    className="hidden"
                  />
                  <label
                    htmlFor="switch"
                    className="block relative w-[33px] h-[18px] rounded-xl bg-[#c3c8c9] my-0 ml-[5px]  before:block before:absolute before:top-1/2 before:left-[2px] before:w-[14px] before:h-[14px] before:mt-[-7px] before:rounded-full before:bg-white"
                  >
                    <span className="blind">off</span>
                  </label>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="mt-[36px] w-full py-[13px] border border-[rgba(0,0,0,.15)] rounded-md bg-[#09aa5c]"
            >
              <span className="text-white font-bold leading-6 text-[20px]">
                로그인
              </span>
            </button>
          </form>
        </div>
      </section>
      <div className="leading-[17px] text-[14px] text-[#888] block pt-5 pb-[35px] tracking-[-.5px] m-0 px-0 w-full text-center">
        <a href="#" className="inline-block">비밀번호 찾기</a>
        <a href="#" className="inline-block relative pl-7 before:absolute before:w-px before:h-3 before:bg-[#dadada] before:top-[3px] before:left-3">아이디 찾기</a>
        <a href="#" className="inline-block relative pl-7 before:absolute before:w-px before:h-3 before:bg-[#dadada] before:top-[3px] before:left-3">회원가입</a>
      </div>
      <aside className="w-[460px] block"><img src={adImg}></img></aside>
    </>
  );
};

export default Main;
