import Link from "../Link/Link";

const NavBar = () => {

  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFount", path: "*" }
  ];

  return (
    <nav>
      <ul className="md:flex">
        {
          routes.map((route, index) => <Link key={index} route={route}></Link>)
        }
      </ul>

    </nav>

  );
};

export default NavBar;