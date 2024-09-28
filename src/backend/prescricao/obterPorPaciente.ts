'use server'
import RepositorioPrescricao from './RepositorioPrescricao'

export default async function obterPorPaciente(pacienteId: string) {
  return RepositorioPrescricao.obterPorPaciente(pacienteId)
}
