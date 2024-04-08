import Header from "./components/header.jsx";
import Search from "./components/search.jsx";
import Nav from "./components/nav.jsx";
import Main from "./components/naverMain.jsx";


function App() {
  return (
    <>
      <div className="text-center">
        <div className="w-[1280px] inline-block">
          <Header />
          <Search />
          <Nav />
          </div>
          <Main />
      </div>
    </>
  );
}

export default App;
