'use server'

import RepositorioPaciente from './RepositorioPaciente'

export default async function obterTodos() {
  return RepositorioPaciente.obterTodos()
}
