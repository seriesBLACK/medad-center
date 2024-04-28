
export default function ServiceCard({ items }) {
  return (

    <div className="h-[452px] w-[314px] bg-[#5f1d1d11]  rounded-[14px] flex flex-col justify-between p-[8px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-3">


      <img loading="lazy" className="rounded-[14px] h-[299px] w-[298px]" key={items.id} src={items.img} alt="" />
      <h4 key={items.desc} className=" font-[Cairo] text-end text-white text-[24px] font-medium">{items.desc}</h4>
      <p key={items.text} className="text-gray-400 text-end text-[14px] font-[Cairo]">{items.text}</p>
      <button key={items.img} className="text-black bg-white rounded-[14px] font-[Cairo] font-bold w-[298px] h-[36px]">أطلب الخدمة</button>


    </div>

  )
}
