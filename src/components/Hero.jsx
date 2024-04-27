import { useState } from "react";
import "../css/hero.css";
import Partenrs from "./Partenrs";


export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth)



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

              <a href={width > 600 ? '#services' : '#footer'}><button className="hero-button">{width > 600 ? "أبرز خدماتنـا" : "تواصل معنا"}</button></a>
            </div>

          </div>
        </div>

        <Partenrs />
      </main>

    </>
  )
}
