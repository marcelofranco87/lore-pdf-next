'use server'
import RepositorioReceita from './RepositorioReceita'

export default async function obterTodas() {
  return RepositorioReceita.obterTodas()
}
