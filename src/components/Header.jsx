import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className={`px-8 border border-x-black border-b-black flex justify-center items-center rounded-md shadow-[5px_5px_0px_#000]`}
    >
      <Link
        to={`/`}
        className="text-2xl md:text-4xl font-bold py-8 cursor-pointer"
      >
        FakeUser
      </Link>
    </header>
  );
};

export default Header;
