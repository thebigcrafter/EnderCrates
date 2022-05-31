import Link from "next/link";

function Footer() {
    return (
        <footer className="hero has-background-light">
            <nav className="level hero-body">
                <div className="level-left">
                    <div className="level-item has-text-centered">
                        <Link href="terms-of-service">
                            <a>Terms of Service</a>
                        </Link>
                    </div>
                    <div className="level-item ">
                        <Link href="https://discord.gg/xfTeF6aMhp">
                            <a target="_blank">Contact</a>
                        </Link>
                    </div>
                    <div className="level-item ">
                        <Link href="faq">
                            <a>FAQ</a>
                        </Link>
                    </div>
                </div>
                <div className="level-right">
                    <p className="has-text-centered">
                        © {new Date().getFullYear()}{" "}
                        <Link href="https://github.com/thebigcrafter">
                            <a target="_blank">thebigcrafter</a>
                        </Link>
                    </p>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;