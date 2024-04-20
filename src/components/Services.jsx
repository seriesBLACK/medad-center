import "../css/services.scss";
import { FaArrowLeft } from "react-icons/fa"
import medalWood from "/services/medal.png";
import medal from "/services/medal2.png";
import cup from "/services/cup.png";
import magic from "/services/cup2.png";
import card from "/services/card.jpg";
import stamp from "/services/stamp.png";
import bag from "/services/bag.jpg";
import board from "/services/lighting-board.png"
import ServiceCard from "./ServiceCard";




const Services = () => {
  const items = [
    {
      id: 1,
      img: medal,
      desc: "النحت على الميداليات",
      text: "بجميع انواعها الخشبية والفضيه",
    },
    {
      id: 1,
      img: medal,
      desc: "النحت على الميداليات",
      text: "بجميع انواعها الخشبية والفضيه",
    },
    {
      id: 1,
      img: medal,
      desc: "النحت على الميداليات",
      text: "بجميع انواعها الخشبية والفضيه",
    },
    {
      id: 1,
      img: medal,
      desc: "النحت على الميداليات",
      text: "بجميع انواعها الخشبية والفضيه",
    },
  ]



  return (
    <section className="services h-[100vh] flex flex-nowrap">
      <div className="left-side">
        <ServiceCard items={items} />

      </div>


      <div className="right-side">
        <h2>أبرز خدماتنا</h2>
        <p>يتميز معملنا بأحدث الآلآت والطابعات المخصصة في الطباعة والنحت</p>
        <div className=" relative">
          <button>أطلب خدمتك الان</button>
          <FaArrowLeft className=" absolute top-[0.5rem] left-2 h-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Services;
