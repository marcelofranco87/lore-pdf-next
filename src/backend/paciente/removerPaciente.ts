'use server'

import RepositorioPaciente from './RepositorioPaciente'

export default async function removerPaciente(id: string) {
  return RepositorioPaciente.removerPaciente(id)
}
