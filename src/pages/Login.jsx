// 무한루프를 피하기위해 useEffect를 이용해서 기존의 스토리지 정보 불러오기 window.localStorage.getItem()
// window.localStorage.getItem()은 객체를 가져오기 때문에 JSON.stringify() 로 객체->문자열 변환
import Header from "../components/login_header.jsx";
import Main from "../components/login_main.jsx";
import Footer from "../components/login_footer.jsx";

const LoginPage = () => {
  return (
    <div className="flex items-center flex-col h-full ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default LoginPage;
