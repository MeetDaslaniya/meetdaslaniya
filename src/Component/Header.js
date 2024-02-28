import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header class="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <h1 className="font-bold text-4xl text-center text-blue-400">
          Meet Daslaniya
        </h1>
        <div class="flex flex-wrap items-center justify-between gap-5 relative">
          <div class="flex lg:order-1 max-sm:ml-auto">
            <button
              id="toggle"
              class="lg:hidden ml-7"
              onClick={() => {
                var collapseMenu = document.getElementById("collapseMenu");
                if (collapseMenu.style.display === "block") {
                  collapseMenu.style.display = "none";
                } else {
                  collapseMenu.style.display = "block";
                }
              }}
            >
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            id="collapseMenu"
            class="lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full"
          >
            <li class="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/"
                class="lg:hover:text-[#007bff] text-[#007bff] max-lg:text-white block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/blog"
                class="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </Link>
            </li>
            <li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/image"
                class="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Image
              </Link>
            </li>
            <li class="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to="/contact"
                class="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default Header;
