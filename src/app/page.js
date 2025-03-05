import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar";
import MedicalRecord from "@/components/MedicalRecord";

export default function Home() {
	return (
		<div className={styles.page}>
			<Sidebar />
			<main className={styles.main}>
				<MedicalRecord />
			</main>
		</div>
	);
}
