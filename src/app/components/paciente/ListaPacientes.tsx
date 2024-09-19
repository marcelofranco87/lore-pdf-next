import LinhaPaciente from "./LinhaPaciente";
import type { Paciente } from "@/core/model/Paciente";

export interface ListaPacientesProps {
	pacientes: Paciente[];
	onClick?: (paciente: Paciente) => void;
	onKeyDown?: (paciente: Paciente) => void;
}

export default function ListaPacientes(props: ListaPacientesProps) {
	return (
		<div className="flex flex-col gap-4">
			{props.pacientes.map((paciente: Paciente) => {
				return (
					<LinhaPaciente
						key={paciente.id}
						paciente={paciente}
						onClick={props.onClick}
						onKeyDown={props.onKeyDown}
					/>
				);
			})}
		</div>
	);
}
