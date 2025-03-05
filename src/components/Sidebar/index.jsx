"use client";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { RiNotification3Line } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import useWindowSize from "@/hooks/useWindowSize";

const Sidebar = () => {
	const { width } = useWindowSize();
	const [isMobile, setIsMobile] = useState(width <= 768);
	const [notificationCount, setNotificationCount] = useState(5);
	const [sidebarHidden, setSidebarHidden] = useState(true);

	useEffect(() => {
		setIsMobile(width < 768);
	}, [width]);

	return (
		<>
			<AnimatePresence>
				{isMobile && (
					<motion.div
						initial={{ left: sidebarHidden ? 10 : 100 }}
						animate={{ left: sidebarHidden ? 10 : 100 }}
						exit={{ left: sidebarHidden ? 10 : 100 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						onClick={() => setSidebarHidden(!sidebarHidden)}
						className="toggle-sidebar"
					>
						{sidebarHidden ? (
							<GoSidebarCollapse className="icon" />
						) : (
							<GoSidebarExpand className="icon" />
						)}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isMobile && !sidebarHidden && (
					<motion.div
						initial={isMobile ? { height: 0, opacity: 0 } : {}}
						animate={isMobile ? { height: "100vh", opacity: 1 } : {}}
						exit={isMobile ? { height: 0, opacity: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						onClick={() => setSidebarHidden(true)}
						className="outside"
					></motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{(!isMobile || (isMobile && !sidebarHidden)) && (
					<motion.div
						initial={isMobile ? { width: 0, opacity: 0 } : {}}
						animate={isMobile ? { width: "100px", opacity: 1 } : {}}
						exit={isMobile ? { width: 0, opacity: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="sidebar"
					>
						<h1>
							<Image
								alt="company logo"
								src={"/img/company-logo-frame.svg"}
								width={60}
								height={60}
								className="logo"
							/>
						</h1>
						<div className="menu-options">
							<Navigation />
							<ul className="information">
								<li className="notification">
									<span className="notification-count">
										{notificationCount}
									</span>
									<RiNotification3Line className="icon" />
								</li>
								<li>
									<CiCircleQuestion className="icon" />
								</li>
							</ul>
							<div className="profile">
								<Image
									alt="user profile picture"
									src={"/img/profile-picturejpeg.jpeg"}
									width={33}
									height={33}
									className="profile-picture"
								/>
								<IoSettingsOutline className="icon" />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Sidebar;
