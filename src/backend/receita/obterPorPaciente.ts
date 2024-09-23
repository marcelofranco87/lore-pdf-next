'use server'
import RepositorioReceita from './RepositorioReceita'

export default async function obterPorPaciente(pacienteId: string) {
  return RepositorioReceita.obterPorPaciente(pacienteId)
}
