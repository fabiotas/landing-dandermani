import { PrismaClient } from '@prisma/client'

// Reaproveita a instância entre recompilações do next dev para não esgotar conexões.
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
