import React from "react";
import "./styles.css";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Button";
import { FiPrinter } from "react-icons/fi";
import { motion } from "framer-motion";

const PrescriptionModal = ({ onClose }) => {
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
					</div>
					<textarea
						placeholder="Digite a prescrição aqui..."
						className="textarea"
					/>
				</div>
				<div className="buttons">
					<Button
						content={"Imprimir"}
						icon={<FiPrinter />}
						action={() => console.log("print document")}
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default PrescriptionModal;
