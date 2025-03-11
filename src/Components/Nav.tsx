const Nav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLink =
    "relative text-lg hover:text-blue-400 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-blue-500 before:blur-lg before:opacity-0 hover:before:opacity-100 hover:before:scale-110 cursor-pointer";

  return (
    <nav className="w-full flex justify-center text-center lg:pl-16 lg:justify-start">
      <ul className="flex gap-4 sm:gap-16 pt-10">
        <li>
          <a href="#" className={navLink}>
            Home
          </a>
        </li>
        <li>
          <button onClick={() => scrollToSection("download")} className={navLink}>
            Courses
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection("about")} className={navLink}>
            About us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
