import "../css/hero.css";

import abs from "/partrners/abs.png";
import aden from "/partrners/aden.png";
import adra from "/partrners/adra.png";
import fmfcr from "/partrners/fmfcr.png";
import ithad from "/partrners/ithad.png";
import msahah from "/partrners/msahah.png";
import nahdah from "/partrners/abs.png";
import Partenrs from "./Partenrs";

export default function Hero() {

  const imags = [
    {
      id: 1,
      img: abs
    },
    {
      id: 2,
      img: aden
    },
    {
      id: 3,
      img: adra
    },
    {
      id: 4,
      img: fmfcr
    },
    {
      id: 5,
      img: ithad
    },
    {
      id: 6,
      img: msahah
    },
    {
      id: 7,
      img: nahdah
    }
  ]


  return (
    <>

      <main>
        <div className="hero-container">


          <div className="imageContainer">
            <img src="offers.png" alt="" />
          </div>

          <div className="hero-wrapper">
            <p className="">في مركز<span style={{ color: "#fbbf5f" }}> مداد</span></p>
            <h2>كل ماتحتاجه في عالم الاعلان والمطبوعات</h2>
            <h6>بفريق من خبراء التصميم نحرص على دقة وجودة منجاتنا</h6>
            <div className="buttons">

              <a href="#projects"><button className="button">أبرز خدماتنـا</button></a>
            </div>

          </div>
        </div>


      </main>
      <Partenrs imags={imags} />
    </>
  )
}
