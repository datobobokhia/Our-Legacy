import "./HomeMainContent.css";
import HorizontalScroll from "react-horizontal-scrolling";

export default function HomeMainContent() {
  return (
    <HorizontalScroll>
      <section className="homeMainContent">
        <div className="sectionContent">
          <div className="introduction">
            <p className="headline">Timeline</p>
            <p className="description">
              We are proud to present you some of the highlights which shaped
              the history of the brand. The timeline is split into decades which
              consist of some of the most important events.
            </p>
          </div>
          <div className="allCards">
            <div className="cardBox">
              <img
                src="/assets/photo/SD_Timeline_80scard.png"
                alt="80's Movies"
                className="card"
              />
            </div>
            <div className="cardBox">
              <img
                src="/assets/photo/SD_Timeline_90scard.png"
                alt="90's Movies"
                className="card"
              />
            </div>
            <div className="cardBox">
              <img
                src="/assets/photo/SD_Timeline_00scard.png"
                alt="2000's Movies"
                className="card"
              />
            </div>
            <div className="cardBox">
              <img
                src="/assets/photo/SD_Timeline_10scard.png"
                alt="2010's Movies"
                className="card"
              />
            </div>
            <div className="cardBox">
              <img
                src="/assets/photo/SD_Timeline_20scard.png"
                alt="2020's Movies"
                className="card"
              />
            </div>
          </div>
        </div>
      </section>
    </HorizontalScroll>
  );
}
