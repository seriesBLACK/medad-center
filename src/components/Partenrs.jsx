

export default function Partenrs({ imags }) {
  return (
    <div className="bg-slate-200">
      <p className="text-[#fbbf5f] font-[Harmattan] text-[25px]">شركاء مداد</p>
      <div className="parnters">
        {imags.map((img) => (
          <img key={img.id} src={img.img} alt="" />
        ))}
      </div>
    </div>
  )
}
