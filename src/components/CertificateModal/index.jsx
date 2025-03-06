import React, { useRef } from "react";
import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import Button from "../Button";
import ThinButton from "../ThinButton";
import { motion } from "framer-motion";

const CertificateModal = ({ onClose }) => {
	const textareaRef = useRef(null);

	const handlePrint = () => {
		const content = textareaRef.current.value;
		const printWindow = window.open("", "_blank");
		printWindow.document.write(`
			<html>
				<head>
					<title>Documentação</title>
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
					<h2>Documentação</h2>
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
						Documentação <IoCloseOutline onClick={onClose} className="close" />
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
						<div>
							<label htmlFor="model">Modelo do Documento</label>
							<select id="model" className="input">
								<option value="model1">Modelo 1</option>
								<option value="model2">Modelo 2</option>
								<option value="model3">Modelo 3</option>
							</select>
						</div>
					</div>
					<textarea
						ref={textareaRef}
						placeholder="Digite a prescrição aqui..."
						className="textarea"
					/>
				</div>
				<div className="certificate-buttons">
					<div className="buttons-group">
						<ThinButton
							content="Enviar por E-mail"
							icon={<IoIosMail className="icon" />}
							action={() => console.log('Enviado para o e-mail do paciente')}
							size={2}
						/>
						<ThinButton
							content="Imprimir"
							icon={<FiPrinter style={{ fontSize: "20px" }} />}
							action={handlePrint}
							size={2}
						/>
					</div>
					<div className="buttons-group">
						<Button content={"Salvar e adicionar outro"} fill={false} action={() => console.log('Salvo no histórico do paciente.')} size={2}/>
						<Button content={"Salvar"} action={() => console.log('Salvo no histórico do paciente.')} size={2}/>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CertificateModal;
