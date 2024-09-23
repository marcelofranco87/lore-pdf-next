'use server'

import RepositorioReceita from './RepositorioReceita'

export default async function removerReceita(id: string) {
  return RepositorioReceita.removerReceita(id)
}
