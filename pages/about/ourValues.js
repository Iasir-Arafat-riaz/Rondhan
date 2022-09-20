import CultureDetails from "Components/About/CultureDetails";
import BrandsServed from "Components/Home/BrandsServed/BrandsServed";
import CommonBanner from "Components/sustainability/CommonBanner";
import CultureBanner from "public/Images/about/culture.png"

const OurValues = () => {
    return ( <>
    <CommonBanner headerBanner={CultureBanner} title={"OUR VALUES"}/>
    <CultureDetails/>
    <BrandsServed/>
    </> );
}
 
export default OurValues;