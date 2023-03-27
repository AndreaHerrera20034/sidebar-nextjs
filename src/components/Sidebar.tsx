import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDashboard } from 'react-icons/md';
import router, { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import { useContext } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { SidebarContext } from "./SidebarContext";

const sidebarItems = [
    {
        name: "Home",
        href: "/",
        icon: AiOutlineHome,
    },
    {
        name: "About",
        href: "/about",
        icon: BsPeople,
    },
    {
        name: "Mails",
        href: "/mail",
        icon: FiMail,
    },
    {
        name: "Contact",
        href: "/contact",
        icon: TiContacts,
    },
];

export default function Sidebar() {

    const {isCollapsedSidebar, tooggleSidebarCollapseHandler} = useContext(SidebarContext);

    return (
        <div className="sidebar_wrapper">
            <button className="btn" onClick={tooggleSidebarCollapseHandler}>
                <MdKeyboardArrowLeft />
            </button>
            <aside className="sidebar" data-collapse={isCollapsedSidebar}>
                <div className="sidebar_top">
                    <Image 
                    src="/logo.jpg" 
                    width={80}
                    height={80}
                    className="sidebar_logo"
                    alt="logo"
                    />
                    <p className="sidebar_logo-name">Connected</p>
                </div>
                <ul className="sidebar_list">
                {sidebarItems.map(({ name, href, icon: Icon }) => {
                    return (
                    <li className="sidebar__item" key={name}>
                        <Link className="sidebar_link" href={href}>
                            <span className="sidebar_icon">
                                <Icon />
                            </span>
                            <span className="sidebar_name">{name}</span>
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </aside>
        </div>
    );
}