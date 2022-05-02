import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"
import SaleBannerCaption from "./SaleBannerCaption"

const SaleBanner = () => {
    const [showBannerCaption, setShowBannerCaption] = useState(false)
    const onShow = () => {
        setShowBannerCaption(!showBannerCaption)
        console.log(showBannerCaption)
    }
    return (
        <section className="flex justify-center">
            <div className=" grid grid-flow-col justify-items-stretch align-items-center" style={{ width: '90rem' }}>
                <img className={showBannerCaption ? " h-12 w-12 sm:h-32 sm:w-32 justify-self-end col-span-12" : "h-12 w-12 justify-self-end col-span-12"} src="https://www.funko.com/craftmin/products/61126_DSMM_ChristinePalmer_POP_GLAM-WEB-fb6ebd12b29f446f57a5148e2699911a.png" alt="" />
                <div className="banner-caption">
                    <div className="text-2xl fw-bold text-center sm:text-justify ff-norms-black"> NEW EXCLUSIVE: CHRISTINE PALMER-DOCTOR STRANGE</div>
                    {showBannerCaption && <SaleBannerCaption />}
                </div>

                <button className="bg-black text-white rounded-full h-6 w-6 flex justify-center align-items-center justify-self-end col-span-12 hover:bg-white" onClick={onShow}>{showBannerCaption ? <FaAngleUp /> : <FaAngleDown />}</button>
            </div>
        </section>
    )
}

export default SaleBanner