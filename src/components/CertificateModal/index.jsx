import React from "react";
import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FiPrinter } from "react-icons/fi";
import Button from "../Button";
import ThinButton from "../ThinButton";
import { motion } from "framer-motion";

const CertificateModal = ({ onClose }) => {
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
								defaultValue={new Date().toLocaleDateString("pt-BR")}
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
						placeholder="Digite a prescrição aqui..."
						className="textarea"
					/>
				</div>
				<div className="certificate-buttons">
					<div className="buttons-group">
						<ThinButton
							content="Enviar por E-mail"
							icon={<IoIosMail className="icon" />}
						/>
						<ThinButton
							content="Imprimir"
							icon={<FiPrinter style={{ fontSize: "20px" }} />}
						/>
					</div>
					<div className="buttons-group">
						<Button content={"Salvar e adicionar outro"} fill={false} />
						<Button content={"Salvar"} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CertificateModal;
