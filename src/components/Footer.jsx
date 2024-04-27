import { FaFacebookF, FaLocationDot, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa6"
import "../css/footer.css"
import { MdAlternateEmail } from "react-icons/md"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="footer" className='w-full h-[40vh] flex items-center justify-center flex-col'>
      <div className=" w-[80%] h-[60%] flex justify-between items-center topSection">

        <div className=" w-[60%] h-[100%] flex flex-col justify-center gap-7">

          <div className="flex gap-4 items-center">
            <FaLocationDot />
            <p>عدن – المعلا- خلف مطعم حلب</p>
          </div>


          <div className="flex">

            <div className="flex gap-4 items-center">
              <FaPhone />
              <p>967-733079244 – 02-226445</p>
            </div>


            <div className="flex gap-4 items-center ml-6">
              <MdAlternateEmail />
              <p>info@medad-center.com</p>
            </div>

          </div>


          <div className="flex items-center gap-[27px]">

            <FaWhatsapp />
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <p>:مواقع التواصل</p>
          </div>

        </div>

        <div className="flex items-center gap-2 h-[60px] button">
          <FaWhatsapp />
          <button>راسلنا على واتساب</button>
        </div>

      </div>
      <div className="w-[60%] h-[1px] bg-[#9797978c] mt-5"></div>
      <p className=" text-[17px] text-gray-400">جميع الحقوق محفوظة لمركز مداد للطباعة والإعلان 2024</p>
    </footer>
  )
}
