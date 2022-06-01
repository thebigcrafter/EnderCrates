import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import "bulma/css/bulma.min.css";

const Account = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Menu />
      <div className="hero has-background-light">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-3">
              <div className="avatar has-text-centered">
                <figure className="image">
                  <Image
                    className="is-rounded"
                    src={
                      session.data?.user?.image
                        ? session.data.user.image
                        : "https://via.placeholder.com/256"
                    }
                    alt="avatar"
                    width={256}
                    height={256}
                  />
                </figure>
              </div>
              <div className="mt-3">
                <aside className="menu">
                  <p className="menu-label">Social Media</p>
                  <ul className="menu-list">
                    <li>
                      <Link
                        href={`https://github.com/${session.data?.user?.name}`}
                      >
                        <a className="icon-text">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </aside>
                <button
                  onClick={() => signOut()}
                  className="button is-danger is-fullwidth mt-4"
                >
                  Sign Out
                </button>
              </div>
            </div>

            <div className="column is-9">
              <h1 className="title">Hello, {session.data?.user?.name}</h1>

              <div className="tile is-ancestor has-text-centered mt-3">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">0</p>
                    <p className="subtitle">Published Plugins</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">0</p>
                    <p className="subtitle">Total Downloads</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">0</p>
                    <p className="subtitle">Total Stars</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
