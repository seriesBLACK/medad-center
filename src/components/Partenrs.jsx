

export default function Partenrs({ imags }) {
  return (
    <div className="">
      <p className="text-[#fbbf5f] font-[Harmattan] text-[32px] text-center">شركاء مداد</p>
      <div className="parnters">
        {imags.map((img) => (
          <img key={img.id} src={img.img} alt="" />
        ))}
      </div>
    </div>
  )
}
