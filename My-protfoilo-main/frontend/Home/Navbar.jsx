import logo from "../images/log.jpg";
function Navbar() {
  return (
    <>
      <div className=" flex  ">
        <div className="w-1/3">
          <img className="w-full h-[200px] object-cover pt-5" src={logo} alt="logo" />
        </div>
        <div className="">
          <ul className=" flex gap-20 [&>li]:uppercase  [&>li]:hover:border-b-3 [&>li]:hover:border-b-teal-500 [&>li]:hover:cursor-pointer [&>li]:mt-10 [&>li]:pb-5">
            <li>Home</li>
            <li>About</li>
            <li className="group relative ">
              services
              <ul className="hidden absolute group-hover:flex  top-full flex-col  z-10 [&>li]:text-sm shadow-lg [&>li]:hover:text-base [&>li]:hover:font-semibold  [&>li]:hover:text-black  [&>li]:capitalize w-80 pl-5">
                <li>Website Development</li>
                <li>WordPress Development</li>
                <li>Shopify Store Development</li>
                <li> Logo Designing</li>
                <li>Graphic Designing</li>
                <li>Android / iOS Application</li>
                <li>SEO / Digital Marketing</li>
                <li>Monthly Maintenance of Websites</li>
              </ul>
            </li>
            <li>Portfolio</li>
            <li className="group relative">
              support
              <ul className="hidden absolute group-hover:flex  top-full flex-col  z-10 [&>li]:text-sm shadow-lg [&>li]:hover:text-base [&>li]:hover:font-semibold  [&>li]:hover:text-black  [&>li]:capitalize w-80 pl-5">
                <li>Frequently Asked Questions</li>
                <li>Website Pricing</li>
                <li>Buy Domain & Web Hosting</li>
                <li>Client Testimonials</li>
                <li>Get a Custom Quote</li>
              </ul>
            </li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
