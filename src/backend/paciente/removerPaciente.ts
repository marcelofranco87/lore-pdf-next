"use server";

import RepositorioPaciente from "./RepositorioPaciente";

export default async function removerPaciente(id: string) {
	return RepositorioPaciente.remover(id);
}
