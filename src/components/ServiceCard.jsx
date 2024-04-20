
export default function ServiceCard({ items }) {
  return (
    <div className="h-[452px] w-[314px] bg-[#D9D9D9] rounded-[14px] flex flex-col justify-between p-[8px]">
      {items.map((item) => (
        <>
          <img className="rounded-[14px] h-[299px] w-[298px]" key={item.id} src={item.img} alt="" />
          <h4 className=" font-[Cairo] text-end text-black text-[24px] font-medium">{item.desc}</h4>
          <p className="text-[#575454] text-end text-[14px] font-[Cairo]">{item.text}</p>
          <button className="text-[#D5D7DC] bg-black rounded-[14px] font-[Cairo] font-bold w-[298px] h-[36px]">أطلب الخدمة</button>
        </>



      ))}
    </div>
  )
}
