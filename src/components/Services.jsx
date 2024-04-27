import "../css/services.scss";
import medal from "/services/medal2.png";
import cup from "/services/cup.png";
import card from "/services/card.jpg";
import stamp from "/services/stamp.jpg";
import bag from "/services/bag.jpg";
import board from "/services/lighting-board.png";
import ServiceCard from "./ServiceCard";
import smallBoard from "/services/board.png"




const Services = () => {
  const items = [
    {
      id: 1,
      img: medal,
      desc: "النحت على الميداليات",
      text: "بجميع انواعها الخشبية والفضيه",
    },
    {
      id: 2,
      img: card,
      desc: "الكروت التعريفيه",
      text: "",
    },
    {
      id: 3,
      img: cup,
      desc: "الطباعه على الاكواب",
      text: "بانواعها السحرية العاديه",
    },
    {
      id: 4,
      img: board,
      desc: "لوحات ضوئية متكاملة",
      text: "",
    },
    {
      id: 5,
      img: bag,
      desc: "الطباعة على الاكياس",
      text: "البلاستيكية والكرتونيه",
    },
    {
      id: 6,
      img: stamp,
      desc: "تنفيد الاختام بجميع انواعها",
      text: "",
    },
    {
      id: 7,
      img: smallBoard,
      desc: "لوحات ارشاديه",
      text: "",
    },

  ]



  return (
    <section id="services" className="services">

      <div className="right-side">
        <h2>أبرز الخدمات</h2>
        <p>يتميز معمل <span style={{ color: "#fbbf5f" }}> مداد</span> بأحدث الآلآت والطابعات المخصصة في الطباعة والنحت</p>
      </div>

      <div className="flex gap-4 flex-wrap justify-around">
        {items.map((item) => (
          <ServiceCard items={item} />
        ))}
      </div>

    </section>
  );
};

export default Services;
