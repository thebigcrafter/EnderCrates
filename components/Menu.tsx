import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

import getAdmins from "../utils/admins";

import LogoImage from "../assets/logo.svg";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const { data: session } = useSession();

  const menuItems = {
    left: [
      { name: "Home", path: "/" },
      { name: "Plugins", path: "/plugins" },
    ],
  };

  if (session?.user?.name) {
    if (getAdmins().includes(session.user.name)) {
      menuItems.left.push({ name: "Dashboard", path: "/dashboard" });
    }
  }

  return (
    <nav
      className="navbar has-background-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <Image src={LogoImage} alt="image" />
            <span className="ml-1">EnderCrates</span>
          </a>
        </Link>

        <a
          role="button"
          className={[
            true ? "navbar-burger" : null,
            isActive ? "is-active" : null,
          ].join(" ")}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={[
          true ? "navbar-menu" : null,
          isActive ? "is-active" : null,
        ].join(" ")}
      >
        <div className="navbar-start">
          {menuItems.left.map((item, index) => (
            <Link href={item.path} key={index}>
              <a className="navbar-item">{item.name}</a>
            </Link>
          ))}
        </div>

        {session ? (
          <div className="navbar-end">
            <Link href="account">
              <a className="navbar-item">
                <figure className="image">
                  <Image
                    src={session.user?.image as string}
                    alt="image"
                    width="29px"
                    height="29px"
                    className="is-rounded"
                  />
                </figure>
                <span className="ml-1">{session.user?.name}</span>
              </a>
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <a className="navbar-item" onClick={() => signIn()}>
              Sign in
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Menu;
