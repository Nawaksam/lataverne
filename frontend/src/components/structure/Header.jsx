import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-primary flex items-center justify-between h-[10vh] font-lobster text-white lg:text-5xl text-3xl p-2 lg:rounded-b-xl">
      <img
        src="/src/assets/tender.svg"
        alt="logo la taverne"
        className="h-[8vh]"
      />
      <h2 className="">La Taverne</h2>
      <div className="hidden lg:flex gap-6 mr-6 text-3xl">
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45px"
            height="45px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#FAC150"
          >
            <path
              stroke="#FAC150"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 13v8M8 13v8M16 13v8M12 13v8M20 13v8M2 21h20M2 13h20M18 10V3.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V10"
            />
          </svg>
          <Link to="/comptoir">Le Comptoir</Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45px"
            height="45px"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            color="#FAC150"
          >
            <path
              stroke="#FAC150"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0 0 12 22Z"
            />
          </svg>
          <Link to="/table">La Table</Link>
        </div>
      </div>
      <details className="dropdown dropdown-end lg:hidden">
        <summary className="btn btn-secondary font-poppins text-accent">
          Menu
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-secondary rounded-box w-52 mt-6 text-xl text-accent">
          <li>
            <Link to="/comptoir">Le Comptoir</Link>
          </li>
          <li>
            <Link to="/table">La Table</Link>
          </li>
        </ul>
      </details>
    </div>
  );
}

export default Header;
