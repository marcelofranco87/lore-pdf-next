// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function criaPaciente(nome: string) {
//   const paciente = await prisma.paciente.create({
//     data: {
//       nome,
//     },
//   })
//   return paciente
// }

// async function criaPrescricao(pacienteId: string) {
//   const prescricao = await prisma.prescricao.create({
//     data: {
//       pacienteId,
//     },
//   })
//   return prescricao
// }

// async function obterPacientes() {
//   const pacientes = await prisma.paciente.findMany({
//     include: {
//       prescricoes: true,
//     },
//   })
//   return pacientes
// }

// async function pacientePorId(id: string) {
//   const paciente = await prisma.paciente.findUnique({
//     where: {
//       id,
//     },
//     include: {
//       prescricoes: true,
//     },
//   })
//   return paciente
// }

// async function alteraPaciente(id: string, nome: string) {
//   const paciente = await prisma.paciente.update({
//     where: {
//       id,
//     },
//     data: {
//       nome,
//     },
//   })
//   return paciente
// }

// async function excluiPaciente(id: string) {
//   const paciente = await prisma.paciente.delete({
//     where: {
//       id,
//     },
//   })
//   return paciente
// }
