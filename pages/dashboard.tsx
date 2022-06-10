import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { GetServerSideProps } from "next";

import Link from "next/link";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import UserList from "../components/UserList";

import getAdmins from "../utils/admins"
import prisma from "../prisma/prisma"

import "bulma/css/bulma.css";

const Dashboard = ({usersData}: {usersData: any}) => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (
            session.status === "unauthenticated" ||
            !getAdmins().includes(session?.data?.user?.name!)
        ) {
            router.push("/");
        }
    }, [router, session?.data?.user?.name, session.status]);

    const [breadcrumb, setBreadcrumb] = useState("general");

    return (
        <>
            <Menu />
            <div className="container-fluid">
                <div className="columns">
                    <div className="column is-3">
                        <div>
                            <h1 className="is-size-4 has-text-centered py-3">
                                Dashboard
                            </h1>
                        </div>
                        <aside className="menu ml-3">
                            <p className="menu-label">General</p>
                            <ul className="menu-list">
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "general"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() => setBreadcrumb("general")}
                                    >
                                        General
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "analytics"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("analytics")
                                        }
                                    >
                                        Analytics
                                    </a>
                                </li>
                            </ul>
                            <p className="menu-label">Plugin</p>
                            <ul className="menu-list">
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "add-plugin"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("add-plugin")
                                        }
                                    >
                                        Add plugin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "remove-plugin"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("remove-plugin")
                                        }
                                    >
                                        Remove plugin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "update-plugin"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("update-plugin")
                                        }
                                    >
                                        Update plugin
                                    </a>
                                </li>
                            </ul>
                            <p className="menu-label">User</p>
                            <ul className="menu-list">
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "user-list"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("user-list")
                                        }
                                    >
                                        User list
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "remove-user"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("remove-user")
                                        }
                                    >
                                        Remove user
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={
                                            breadcrumb == "update-user"
                                                ? "is-active"
                                                : undefined
                                        }
                                        onClick={() =>
                                            setBreadcrumb("update-user")
                                        }
                                    >
                                        Update user
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-9 has-background-light">
                        <nav
                            className="breadcrumb py-3 is-hidden-mobile"
                            aria-label="breadcrumbs"
                        >
                            <ul>
                                <li>
                                    <Link href="/dashboard">
                                        <a href="">Dashboard</a>
                                    </Link>
                                </li>

                                <li className="is-active">
                                    <a aria-current="page">
                                        {breadcrumb == "general"
                                            ? "General"
                                            : breadcrumb == "analytics"
                                            ? "Analytics"
                                            : breadcrumb == "add-plugin"
                                            ? "Add plugin"
                                            : breadcrumb == "remove-plugin"
                                            ? "Remove plugin"
                                            : breadcrumb == "update-plugin"
                                            ? "Update plugin"
                                            : breadcrumb == "user-list"
                                            ? "User list"
                                            : breadcrumb == "remove-user"
                                            ? "Remove user"
                                            : breadcrumb == "update-user"
                                            ? "Update user"
                                            : "Unknown"}
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="container">
                            {breadcrumb == "general"
                                ? "General"
                                : breadcrumb == "analytics"
                                ? "Analytics"
                                : breadcrumb == "add-plugin"
                                ? "Add plugin"
                                : breadcrumb == "remove-plugin"
                                ? "Remove plugin"
                                : breadcrumb == "update-plugin"
                                ? "Update plugin"
                                : breadcrumb == "user-list"
                                ? <UserList users={usersData}/>
                                : breadcrumb == "remove-user"
                                ? "Remove user"
                                : breadcrumb == "update-user"
                                ? "Update user"
                                : "Unknown"}
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    await prisma.$connect();

    const users = await prisma.user.findMany();

    const usersData: any[] = [];

    users.forEach(user => {
        usersData.push({id: user.id.toString(), name: user.name, email: user.email});
    });

    return {
      props: {
          usersData
      }, 
    }
  }

export default Dashboard;