import Aboutme from "./Aboutme";
import Touch from "./touch";
import Recent from "../Home/Recent";
import Footer from "../Home/footer";

export default function First({ onContactClick }) {
  return (
    <>
      <Aboutme />
      <Touch onContactClick={onContactClick} />
      <Recent />
      <Footer />
    </>
  );
}
