import "./index.css";
import Header from "../../components/header";
import HomepageMain from "../../components/homepage_main";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <HomepageMain />
    </div>
  );
}
