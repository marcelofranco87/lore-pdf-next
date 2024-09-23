'use server'

import RepositorioPaciente from './RepositorioPaciente'

export default async function obterPorId(id: string) {
  return RepositorioPaciente.obterPorId(id)
}
