import pic from "../images/services.jpg"
export default function Header(){
     return<>
    <div
          className="w-full h-[150px] sm:h-[180px] md:h-[200px] mt-3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${pic})`,
          }}
        >
          <div className="p-4 md:p-8">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold capitalize text-white leading-tight">
          My Freelance Development Services
            </h1>
            <h2 className="text-center w-full md:w-3/4 lg:w-1/2 mx-auto capitalize text-sm sm:text-lg md:text-xl border-b-2 border-b-amber-900 border-dashed text-white leading-relaxed mt-2">
           I have a well-rounded skillset, from design and development to SEO and digital marketing
            </h2>
          </div>
        </div>
    </>
}