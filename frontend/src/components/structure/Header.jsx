import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

function Header() {
  const { user } = useUserContext();

  return (
    <div className="w-full bg-primary flex items-center justify-between h-[10vh] font-lobster text-white lg:text-5xl text-3xl p-2 lg:rounded-b-xl">
      <img
        src="/src/assets/tender.svg"
        alt="logo la taverne"
        className="h-[8vh]"
      />
      <h2 className="mr-6">La Taverne</h2>
      <div className="hidden lg:flex gap-6 mr-6 text-2xl">
        {Boolean(user !== null) && (
          <>
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
            <Link
              to="/profil"
              className="flex flex-col justify-center items-center"
            >
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
                  d="M2 20v-1a7 7 0 0 1 7-7v0"
                />
                <path
                  stroke="#FAC150"
                  strokeWidth="1.5"
                  d="M15.804 12.313a1.618 1.618 0 0 1 2.392 0c.325.357.79.55 1.272.527a1.618 1.618 0 0 1 1.692 1.692c-.023.481.17.947.526 1.272.705.642.705 1.75 0 2.392-.356.325-.549.79-.526 1.272a1.618 1.618 0 0 1-1.692 1.692 1.618 1.618 0 0 0-1.272.526 1.618 1.618 0 0 1-2.392 0 1.618 1.618 0 0 0-1.272-.526 1.618 1.618 0 0 1-1.692-1.692 1.618 1.618 0 0 0-.527-1.272 1.618 1.618 0 0 1 0-2.392c.357-.325.55-.79.527-1.272a1.618 1.618 0 0 1 1.692-1.692c.481.023.947-.17 1.272-.527Z"
                />
                <path
                  stroke="#FAC150"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.364 17 1.09 1.09 2.182-2.18M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                />
              </svg>
              Profil
            </Link>
            {Boolean(user.roles.includes("admin")) && (
              <Link
                to="/admin"
                className="flex flex-col justify-center items-center"
              >
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
                    d="M18 19v3M18 16c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V8.5A2.5 2.5 0 0 1 13.5 6v0h.5M22 16c0-4.5-2-5.5-4-6 2-.5 4-1 4-4s-2.5-4-4-4M22 19v3"
                  />
                  <rect
                    width="12"
                    height="3"
                    x="2"
                    y="19"
                    stroke="#FAC150"
                    strokeWidth="1.5"
                    rx="0.6"
                  />
                </svg>
                Admin
              </Link>
            )}
          </>
        )}
      </div>
      {Boolean(user !== null) && (
        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn btn-secondary font-poppins text-accent">
            Menu
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-secondary rounded-box w-52 mt-6 text-xl text-accent">
            <li>
              <Link to="/comptoir" className="flex gap-6 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  color="#1E698A"
                >
                  <path
                    stroke="#1E698A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 13v8M8 13v8M16 13v8M12 13v8M20 13v8M2 21h20M2 13h20M18 10V3.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V10"
                  />
                </svg>
                Le Comptoir
              </Link>
            </li>
            <li>
              <Link to="/table" className="flex gap-6 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  color="#1E698A"
                >
                  <path
                    stroke="#1E698A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h8M8 14h4M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0 0 12 22Z"
                  />
                </svg>
                La Table
              </Link>
            </li>
            <li>
              <Link to="/profil" className="flex gap-6 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  color="#1E698A"
                >
                  <path
                    stroke="#1E698A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 20v-1a7 7 0 0 1 7-7v0"
                  />
                  <path
                    stroke="#1E698A"
                    strokeWidth="1.5"
                    d="M15.804 12.313a1.618 1.618 0 0 1 2.392 0c.325.357.79.55 1.272.527a1.618 1.618 0 0 1 1.692 1.692c-.023.481.17.947.526 1.272.705.642.705 1.75 0 2.392-.356.325-.549.79-.526 1.272a1.618 1.618 0 0 1-1.692 1.692 1.618 1.618 0 0 0-1.272.526 1.618 1.618 0 0 1-2.392 0 1.618 1.618 0 0 0-1.272-.526 1.618 1.618 0 0 1-1.692-1.692 1.618 1.618 0 0 0-.527-1.272 1.618 1.618 0 0 1 0-2.392c.357-.325.55-.79.527-1.272a1.618 1.618 0 0 1 1.692-1.692c.481.023.947-.17 1.272-.527Z"
                  />
                  <path
                    stroke="#1E698A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15.364 17 1.09 1.09 2.182-2.18M9 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  />
                </svg>
                Profil
              </Link>
            </li>
            <li>
              {Boolean(user.roles.includes("admin")) && (
                <Link to="/admin" className="flex gap-6 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    color="#1E698A"
                  >
                    <path
                      stroke="#1E698A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 19v3M18 16c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V8.5A2.5 2.5 0 0 1 13.5 6v0h.5M22 16c0-4.5-2-5.5-4-6 2-.5 4-1 4-4s-2.5-4-4-4M22 19v3"
                    />
                    <rect
                      width="12"
                      height="3"
                      x="2"
                      y="19"
                      stroke="#1E698A"
                      strokeWidth="1.5"
                      rx="0.6"
                    />
                  </svg>
                  Administration
                </Link>
              )}
            </li>
          </ul>
        </details>
      )}
    </div>
  );
}

export default Header;
