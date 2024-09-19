import obterTodos from "./paciente/obterTodos";
import removerPaciente from "./paciente/removerPaciente";
import salvarPaciente from "./paciente/salvarPaciente";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Backend {
	static readonly pacientes = {
		onSave: salvarPaciente,
		showAll: obterTodos,
		remover: removerPaciente,
	};
}
