const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = () => prisma.user.findMany();

exports.create = (data) => prisma.user.create({data});