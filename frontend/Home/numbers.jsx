import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFolderOpen,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

function Numbers() {
  return (
    <>
      <div className="bg-[#F5F5F5] grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 p-4 gap-10">
        <div className="flex flex-row ">
          <div className="m-5">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-[#41A5B0] "
              size="3x"
            />
          </div>
          <div className="m-5 ml-0">
            <p className=" capitalize text-lg">
            
              <span className="text-2xl ">100+</span>
              <br />
              happy customers
            </p>
          </div>
        </div>
        <div className="flex flex-row   ">
          <div className="m-5">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="text-[#41A5B0]"
              size="3x"
            />
          </div>
          <div className="m-5 ml-0 ">
            <p className=" capitalize text-lg">
           
              <span className="text-2xl">200+</span>
              <br />
              Websites and apps
            </p>
          </div>
        </div>
        <div className="flex flex-row  ">
          <div className="m-5">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-[#41A5B0]"
              size="3x"
            />
          </div>
          <div className="m-5 ml-0">
            <p className=" capitalize text-lg">
             
              <span className="text-2xl">2 years</span>
              <br />
              Experience
            </p>
          </div>
        </div>
        <div className="flex flex-row  ">
          <div className="m-5 ">
            <FontAwesomeIcon
              icon={faCode}
              className="text-[#41A5B0]"
              size="3x"
            />
          </div>
          <div className="m-5 ml-0">
            <p className=" capitalize text-lg">
              
              <span className="text-2xl">20 above </span>
              <br />
              Languages, Software & Technologies
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Numbers;
