import { FaRegEye } from "react-icons/fa"
import "../css/about.css"
import { GoGoal } from "react-icons/go"

export default function About() {
  return (
    <section id='about' className='h-[50vh] relative'>
      <div className="about-img">
      </div>


      <div className="absolute w-full h-full">


        <div className="text-center">
          <h1 className="">مركز مداد للطباعة والإعلان</h1>
          <p className="">تأسس مركز مداد في مدينة عدن عام 2012 ونتميز بخبرتنا الطويلة في مجال المطبوعات ويقع المركز في مديرية المعلا خلف مطعم حلب</p>
        </div>


        <div className="">

          <div className="text-end w-[80%]">
            <div className="flex justify-end items-center gap-3">
              <h3>رسالتنا</h3>
              <GoGoal className="text-white w-[32px] h-[32px]" />

            </div>
            <p>العمل على مواكبة تطورات وإبداعات عالم الإعلان وتقديمها لعملائنا بما يتناسب مع متطلباتهم وإقامة علاقة شراكة إستراتيجية طويلة المدى من خلال تلبية كافة احتياجاتهم بأعلى درجات الإحترافية.</p>
            <div className="flex justify-end items-center gap-3">
              <h3>رؤيتنا</h3>
              <FaRegEye className="text-white w-[32px] h-[32px]" />
            </div>
            <p>أن يكون المركز الأول على مستوى اليمن في مجال المطبوعات من خلال تقديم خدمات تفوق التطلعات.</p>
          </div>

        </div>
      </div>

    </section>
  )
}
