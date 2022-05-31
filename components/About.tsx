import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFingerprint,
  faPuzzlePiece,
  faMoneyBillAlt,
  faVirusSlash,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import Link from "next/link";

import SafeImage from "../assets/svg/safe.svg";

function About() {
  const columnItems = {
    left: [
      { name: "Secure", icon: <FontAwesomeIcon icon={faFingerprint} /> },
      {
        name: "Easy to use",
        icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
      },
    ],
    right: [
      { name: "Free", icon: <FontAwesomeIcon icon={faMoneyBillAlt} /> },
      {
        name: "No malware",
        icon: <FontAwesomeIcon icon={faVirusSlash} />,
      },
    ],
  };

  return (
    <div className="hero">
      <div className="hero-body">
        <div className="columns is-gapless">
          <div className="column is-5">
            <div className="container">
              <h1 className="is-size-3 mt-3 has-text-weight-light">
                What is EnderCrates?
              </h1>
              <p className="mt-3 has-text-weight-light">
              EnderCrates is a{" "}
                <Link href="https://pmmp.io">
                  <a target="_blank">PocketMine</a>
                </Link>{" "}
                plugin repository. You can publish your plugins to this website, where
                everyone can download it. With us, you just submit your plugin, wait for a malware check from us and it will be published if it doesn't contain any malware.
              </p>
              <div className="container mt-3">
                <div className="columns mt-2 is-vcentered">
                  <div className="column">
                    <ul>
                      {columnItems.left.map((item, index) => (
                        <li
                          key={index}
                          className="subtitle has-text-weight-light is-size-6"
                        >
                          <span className="icon-text">
                            <span className="icon">{item.icon}</span>
                            <span>{item.name}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="column">
                    <ul>
                      {columnItems.right.map((item, index) => (
                        <li
                          key={index}
                          className="subtitle has-text-weight-light is-size-6"
                        >
                          <span className="icon-text">
                            <span className="icon">{item.icon}</span>
                            <span>{item.name}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-7 is-hidden-mobile">
            <div className="container">
              <Image src={SafeImage} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
