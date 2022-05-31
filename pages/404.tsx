import Link from "next/link";

import "bulma/css/bulma.min.css";

const Custom404 = () => {
    return (
        <div className="hero">
            <div className="hero-body">
                <p className="title has-text-centered is-size-2 has-text-weight-light">
                    404
                </p>
                <p className="title has-text-centered is-size-4 has-text-weight-light">
                    This page could not be found.
                </p>
            </div>
            <div className="hero-body has-text-centered">
                <Link href="/">
                    <a className="is-size-5">Go Home</a>
                </Link>
            </div>
        </div>
    );
};

export default Custom404;