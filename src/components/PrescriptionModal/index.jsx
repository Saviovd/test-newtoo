import React, { useRef } from "react";
import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import { FiPrinter } from "react-icons/fi";
import { motion } from "framer-motion";

const PrescriptionModal = ({ onClose }) => {
	const textareaRef = useRef(null);

	const handlePrint = () => {
		const content = textareaRef.current.value;
		const printWindow = window.open("", "_blank");
		printWindow.document.write(`
			<html>
				<head>
					<title>Prescrição Médica</title>
					<style>
						body { font-family: Arial, sans-serif; padding: 20px; }
						h2 { text-align: center; }
						.prescription { 
							border: 1px solid #000; 
							padding: 10px; 
							margin-top: 20px; 
							font-size: 16px;
						}
					</style>
				</head>
				<body>
					<h2>Prescrição Médica</h2>
					<p><strong>Data:</strong> ${new Date().toLocaleDateString("pt-BR")}</p>
					<div class="prescription">${content.replace(/\n/g, "<br>")}</div>
					<script>
						window.onload = function() {
							window.print();
							window.close();
						}
					</script>
				</body>
			</html>
		`);
		printWindow.document.close();
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="outside"
			onClick={onClose}
		>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<div className="content">
					<h2 className="title">
						Prescrição <IoCloseOutline onClick={onClose} className="close" />
					</h2>
					<div className="input-group">
						<div>
							<label htmlFor="date">Data</label>
							<input
								type="date"
								id="date"
								defaultValue={new Date().toISOString().split("T")[0]}
								className="input"
							/>
						</div>
					</div>
					<textarea
						ref={textareaRef}
						placeholder="Digite a prescrição aqui..."
						className="textarea"
					/>
				</div>
				<div className="buttons">
					<Button content={"Imprimir"} icon={<FiPrinter />} action={handlePrint} size={2} />
				</div>
			</div>
		</motion.div>
	);
};

export default PrescriptionModal;
