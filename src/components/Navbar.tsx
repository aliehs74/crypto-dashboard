import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme } from "../store/reducers/themeSlice";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <nav
      className="bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50
 p-4 flex justify-between items-center text-lg font-bold"
    >
      <div className="flex items-center space-x-4">
        <div>Logo</div>
        <a href="#markets" className="hover:text-orange-400">
          Markets
        </a>
        <a href="#trade" className="hover:text-orange-400">
          Trade
        </a>
        <a href="#derivatives" className="hover:text-orange-400">
          Derivatives
        </a>
        <a href="#more" className="hover:text-orange-400">
          More
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:text-orange-400">Log In</button>
        <button className="hover:text-orange-400">Register</button>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="text-gray-300 hover:text-white"
        >
          {theme === "light" ? <>🌙</> : <> ☀ </>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
