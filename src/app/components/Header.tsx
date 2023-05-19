import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full py-5 p-5 md:px-15 shadow-md">
      <div className="flex-col lg:flex-row flex gap-2">
        <div className="justify-between items-center space-x-5 flex w-full">
          {/* logo */}
          <div className="relative w-28 h-10 lg:w-32 lg:h-12">
            <Image
              src="/images/logo.png"
              alt="logo"
              fill
              //width={140}
              //height={140}
              className="object-contain"
            />
          </div>

          {/* search button */}
          <div className="w-full hidden lg:block">
            <form className="flex">
              <input
                type="text"
                className="w-full border rounded-l-xl py-2 px-4 outline-none focus:border-[#ff9900]"
                placeholder="Search..."
              />
              <button className="text-3xl bg-[#ff9900] px-2 rounded-r-xl">
                <AiOutlineSearch />
              </button>
            </form>
          </div>

          {/* cart and profile image*/}
          <div className="items-center flex space-x-4">
            <Link href="/cart">
              <button className="text-[26px] bg-[#ff9900] p-2 rounded-md relative">
                <FaShoppingCart />
                <span className="absolute text-sm bg-black text-white px-2 py-1 rounded-full -top-4 -right-3">
                  0
                </span>
              </button>
            </Link>
            <button>
              <div className="relative w-12 h-12">
                <Image
                  src="/images/blank-profile.png"
                  alt="logo"
                  fill
                  className="object-contain"
                  //width={66}
                  //height={66}
                />
              </div>
            </button>
          </div>
        </div>
        {/* search button */}
        <div className="w-full block lg:hidden">
          <form className="flex">
            <input
              type="text"
              className="w-full border rounded-l-xl py-2 px-4 outline-none focus:border-[#ff9900]"
              placeholder="Search..."
            />
            <button className="text-3xl bg-[#ff9900] px-2 rounded-r-xl">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
