import abs from "../../public/partrners/abs.png";
import aden from "../../public/partrners/aden.png";
import adra from "../../public/partrners/adra.png";
import fmfcr from "../../public/partrners/fmfcr.png";
import ithad from "../../public/partrners/ithad.png";
import msahah from "../../public/partrners/msahah.png";
import nahdah from "../../public/partrners/abs.png";


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
  ]
  return (
    <div className="my-7">
      <p className="text-[#b2904c] font-[Harmattan] text-[32px] text-center">شركاء مداد</p>
      <div className="parnters">
        {imags.map((img) => (
          <img key={img.id} src={img.img} alt="" />
        ))}
      </div>
    </div>
  )
}
