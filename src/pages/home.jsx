import Header from "../components/header.jsx";
import Search from "../components/search.jsx";
import Nav from "../components/nav.jsx";
import Main from "../components/naverMain.jsx";
import Footer from "../components/footer.jsx";



const Home = () => {
  return (
    <>
      <div className="text-center min-w-[1340px]">
        <div className="inline-block w-[1280px]">
          <Header />
          <Search />
          <Nav />
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Home;
