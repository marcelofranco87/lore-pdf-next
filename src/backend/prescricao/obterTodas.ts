'use server'
import RepositorioPrescricao from './RepositorioPrescricao'

export default async function obterTodas() {
  return RepositorioPrescricao.obterTodas()
}
