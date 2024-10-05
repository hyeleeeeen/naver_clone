import  { useState } from "react";

const Main = () => {
  const [loginInput, setLoginInput] = useState({ id: "", password: "" });
  const [isLoginChecked, setIsLoginChecked] = useState(false);
  const [focusField, setFocusField] = useState(null);
  const adImg = "https://ssl.pstatic.net/melona/libs/1378/1378592/b96ed7146a112e87d6ea_20240423164744254.png";

  localStorage.setItem("id1", "aass2296");
  localStorage.setItem("pw1", "aass9087");
  const localStorageId = localStorage.getItem("id1");
  const localStoragePw = localStorage.getItem("pw1");

  const handleFocus = (field) => {
    setFocusField(field);
  };

  const handleInputChange = (field, value) => {
    setLoginInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDelete = (field) => {
    setLoginInput((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoginRight();
  };

  const handleCheck = () => {
    setIsLoginChecked(!isLoginChecked);
  };

  const isLoginRight = () => {
    if (loginInput.id === "" || loginInput.password === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
    } else if (
      localStorageId === loginInput.id &&
      localStoragePw === loginInput.password
    ) {
      alert("로그인 성공");
    } else {
      alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <>
      <section className="w-[460px] relative text-[14px] tracking-[-.5px] my-0 mx-auto">
        <div className="flex w-full">
          <a href="#" className="flex-1 relative m-0 p-0 border border-[#c6c6c6] bg-white border-r-0 border-b-0 rounded-tl-md rounded-tr-md h-[61px] block pt-[17px] z-[5] after:absolute after:bg-login_img after:bg-[length:290px_275px] after:bg-[left_calc(-225px)_top_0px] after:w-[15px] after:h-[62px] after:top-[-1px] after:right-[-8px]">
            <span className="login-nav-btn text-[#333] left-[33px] before:bg-[left_calc(-192px)_top_calc(-255px)]">
              ID 로그인
            </span>
          </a>
          <a href="#" className="login-nav-a border-r-0">
            <span className="login-nav-btn left-[27px] before:bg-[left_calc(-208px)_top_calc(-234px)] ">
              일회용 번호
            </span>
          </a>
          <a href="#" className="login-nav-a rounded-tr-md">
            <span className="login-nav-btn left-[38px] before:bg-[left_calc(-244px)_top_calc(-234px)] ">
              QR코드
            </span>
          </a>
        </div>
        <div className="block p-0 relative z-[3] mt-[-8px] border rounded-md border-[#c6c6c6] shadow-login_outline bg-white">
          <form className="py-5 px-6 block" onSubmit={handleSubmit}>
            <div>
              <div
                className={`login-input-box ${
                  focusField === "id"
                    ? "border-[#09aa5c]"
                    : "border-[#dadada]"
                } rounded-tl-md rounded-tr-md `}
              >
                <div
                  className={`login-input-icon ${
                    focusField === "id"
                      ? "bg-[left_calc(-156px)_top_calc(-255px)]"
                      : "bg-[left_calc(-175px)_top_calc(-255px)]"
                  }`}
                >
                  <span className="blind">아이디</span>
                </div>
                <input
                  type="text"
                  placeholder="아이디"
                  title="id"
                  maxLength="41"
                  onFocus={() => handleFocus("id")}
                  onChange={(e) => handleInputChange("id", e.target.value)}
                  value={loginInput.id}
                  className="login-input"
                />
                <span
                  className={`login-input-delete ${
                    loginInput.id !== "" ? "inline-block" : "hidden"
                  }`}
                  onClick={() => handleDelete("id")}
                >
                  <span className="blind">삭제</span>
                </span>
              </div>
              <div
                className={`login-input-box ${
                  focusField === "password"
                    ? "border-[#09aa5c]"
                    : "border-[#dadada]"
                } rounded-bl-md rounded-br-md `}
              >
                <div
                  className={`login-input-icon ${
                    focusField === "password"
                      ? "bg-[left_calc(-210px)_top_calc(-255px)]"
                      : "bg-[left_calc(-66px)_top_calc(-255px)]"
                  }`}
                >
                  <span className="blind">비밀번호</span>
                </div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  title="비밀번호"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  value={loginInput.password}
                  onFocus={() => handleFocus("password")}
                  className="login-input"
                />
                <span
                  className={`login-input-delete ${
                    loginInput.password !== "" ? "inline-block" : "hidden"
                  }`}
                  onClick={() => handleDelete("password")}
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
                  className={`inline-block cursor-pointer pl-[23px] before:bg-login_img before:absolute before:top-0 before:left-0 before:bg-[length:290px_275px] ${
                    isLoginChecked
                      ? "before:bg-[left_calc(-23px)_top_calc(-256px)]"
                      : "before:bg-[left_calc(-32px)_top_calc(-234px)]"
                  } before:w-[18px] before:h-[18px]`}
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
                    className="block relative w-[33px] h-[18px] rounded-xl bg-[#c3c8c9] my-0 ml-[5px] before:block before:absolute before:top-1/2 before:left-[2px] before:w-[14px] before:h-[14px] before:mt-[-7px] before:rounded-full before:bg-white"
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
        <a href="#" className="inline-block">
          비밀번호 찾기
        </a>
        <a href="#" className="login-find">
          아이디 찾기
        </a>
        <a href="#" className="login-find">
          회원가입
        </a>
      </div>
      <aside className="w-[460px] block">
        <img src={adImg} alt="ad" />
      </aside>
    </>
  );
};

export default Main;