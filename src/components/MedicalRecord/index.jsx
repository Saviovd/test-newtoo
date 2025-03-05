"use client";
import React, { useState } from "react";
import "./styles.css";
import { LuAlarmClock } from "react-icons/lu";
import { IoPlayOutline, IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import PrescriptionModal from "../PrescriptionModal";
import CertificateModal from "../CertificateModal";

const MedicalRecord = () => {
	const [time, setTime] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
	const [showCertificateModal, setShowCertificateModal] = useState(false);

	const startTimer = () => setIsActive(true);
	const stopTimer = () => setIsActive(false);

	React.useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else if (!isActive && time !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, time]);

	const formatTime = (seconds) => {
		const hours = Math.floor(seconds / 3600);
		const minutes = Math.floor((seconds % 3600) / 60);
		const secs = seconds % 60;
		return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
			2,
			"0"
		)}:${String(secs).padStart(2, "0")}`;
	};

	return (
		<div className="medical-record">
			<div className="header">
				<h2 className="title">Prontuário</h2>
				<div className="timer">
					<p>Duração da consulta</p>
					<div>
						<LuAlarmClock className="icon" />
						{formatTime(time)}
					</div>
				</div>
				{isActive ? (
					<Button
						action={stopTimer}
						content={"Encerrar atendimento"}
						icon={<IoCloseOutline className="icon" />}
					/>
				) : (
					<Button
						action={startTimer}
						content={"Iniciar atendimento"}
						icon={<IoPlayOutline className="icon" />}
					/>
				)}
			</div>
			<div className="buttons">
				<Button
					action={() => setShowPrescriptionModal(true)}
					content={"Prescrição"}
				/>
				<Button
					action={() => setShowCertificateModal(true)}
					content={"Certificado/Documentação"}
				/>
			</div>

			{showPrescriptionModal && (
				<PrescriptionModal onClose={() => setShowPrescriptionModal(false)} />
			)}

			{showCertificateModal && (
				<CertificateModal onClose={() => setShowCertificateModal(false)} />
			)}
		</div>
	);
};

export default MedicalRecord;
