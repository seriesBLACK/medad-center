import abs from "/partrners/abs.png";
import aden from "/partrners/aden.png";
import adra from "/partrners/adra.png";
import fmfcr from "/partrners/fmfcr.png";
import ithad from "/partrners/ithad.png";
import msahah from "/partrners/msahah.png";
import nahdah from "/partrners/abs.png";


export default function Partenrs() {
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
  ];



  return (
    <div className="my-[100px]">
      <p className="text-[#b2904c] font-[Harmattan] text-[32px] text-center">شركاء مداد</p>
      <div className="parnters">
        {/* css in hero.css file */}
        {imags.map((img) => (
          <img key={img.id} src={img.img} alt="" />
        ))}
      </div>
    </div>
  )
}
