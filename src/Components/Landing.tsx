import img1 from "../Img/img1.jpg";
import Nav from "./Nav";

const Landing = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-[center_right_20%] sm:bg-[center_right_35%] md:bg-[center_right_25%] lg:bg-center text-white relative flex flex-col sm:justify-end"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <Nav />

      {/* Centered Content */}
      <div className="flex-1 flex items-center justify-center lg:justify-start sm:pr-0 text-center lg:text-left lg:pl-40">
        <div>
          <p className="text-[50px] md:text-[70px] font-light tracking-wide text-center">IT</p>
          <p className="text-[60px] md:text-[80px] font-extrabold leading-tight">LIBRARY</p>
          
          {/* Get Started Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => scrollToSection("download")}
              className="px-6 py-3 text-lg border-2 border-white  rounded-full hover:bg-white hover:text-black transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
