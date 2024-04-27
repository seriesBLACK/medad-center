import "../css/imgSlider.scss"
import aden from "/featured-work/aden.jpg";
import akimore from "/featured-work/akimore.jpg";
import alFaqih from "/featured-work/al-faqih.jpg";
import AO from "/featured-work/AO.jpg";
import hadara from "/featured-work/hadara.jpg";
import himam from "/featured-work/himam.jpg";
import tent from "/featured-work/tent.jpg"


export default function FeaturedWork() {
  const imags = [
    {
      id: 1,
      img: akimore
    },
    {
      id: 2,
      img: aden
    },
    {
      id: 3,
      img: AO
    },
    {
      id: 4,
      img: hadara
    },
    {
      id: 5,
      img: himam
    },
    {
      id: 6,
      img: tent
    },
    {
      id: 8,
      img: alFaqih
    }
  ];



  return (
    <div className='flex overflow-hidden relative'>
      <div className="h-[100%] w-[250px] absolute right-0 top-0 z-10 bg-gradient-to-r from-[#00000000] to-white"></div>
      <div className='gallery'>
        {imags.map((img) => (
          <div className="logos-slide">
            <img className="" src={img.img} key={img.id} />
          </div >
        ))}
      </div>
      <div className='gallery'>
        {imags.map((img) => (
          <div className="logos-slide">
            <img className="" src={img.img} key={img.id} />
          </div >
        ))}
      </div>
      <div className="h-[100%] w-[250px] absolute top-0 bg-gradient-to-l from-[#00000000] to-white"></div>
    </div>
  )
}
