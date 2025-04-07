# Shelton Scaffold

## 项目包含

- pnpm workspace 多包管理
- packages/trpc-types：共享 zod schema 和类型定义
- apps/web：Next.js 15 前端，tRPC 客户端集成
- apps/api：Hono.js 后端服务，tRPC 服务端实现
- prisma：PostgreSQL schema 初始化
- Dockerfile 和 docker-compose.yml：用于部署后端 + 数据库
