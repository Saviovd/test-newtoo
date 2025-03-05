"use client";
import React from "react";
import "./styles.css";
import { FiHome } from "react-icons/fi";
import { MdList } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
	const pathname = usePathname();
	const [activePage, setActivePage] = useState(pathname);

	return (
		<nav>
			<ul>
				<li className={activePage === "/" ? "active" : ""}>
					<Link href="/">
						<FiHome className="icon" />
					</Link>
				</li>
				<li className={activePage === "/list" ? "active" : ""}>
					<Link href="/">
						<MdList className="icon" />
					</Link>
				</li>
				<li className={activePage === "/calendar" ? "active" : ""}>
					<Link href="/">
						<CiCalendar className="icon" />
					</Link>
				</li>
				<li className={activePage === "/group" ? "active" : ""}>
					<Link href="/">
						<GrGroup className="icon" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
