import { useState } from "react";
import Modal, { useModalState } from "react-simple-modal-provider";
import ModalBody from "./ModalBody";

export default ({ children }) => {
	const { isOpen, setOpen } = useModalState();
	const [data, setData] = useState(null);

	const asyncOpen = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
		const json = await response.json();
		setData(json);
	};

	return (
		<Modal
			id={"AsyncModal"}
			consumer={children}
			isOpen={isOpen}
			setOpen={setOpen}
			asyncOpen={asyncOpen}
		>
			<ModalBody data={data} />
		</Modal>
	);
};
