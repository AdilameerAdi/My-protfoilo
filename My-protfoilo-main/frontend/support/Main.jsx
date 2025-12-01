import Header from "./header";
import Boxes from "./boxes";
import Footer from "../Home/footer";
import ContactHeader from "../Home/contactHeader";
import Navbar from "../../src/components/Navbar";
import { useState } from "react";

export default function Main(){
   const [active, setActive] = useState("Services");
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
     <>
       <ContactHeader />
       <Navbar 
         active={active}
         setActive={setActive}
         mobileMenuOpen={mobileMenuOpen}
         setMobileMenuOpen={setMobileMenuOpen}
       />
       <Header />
       <Boxes />
       <Footer />
     </>
   );
}