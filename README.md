# Shelton Scaffold

## 项目概述

- 项目使用`pnpm workspace`多包管理, 和 `Turborepo` 搭配使用
- apps/next-app：Next.js 15 前端，tRPC 客户端集成
- apps/fastify-api：Fastify 后端服务，tRPC 服务端实现
- packages下多模块共享, `api-types`：共享 zod schema 和类型定义
- prisma：PostgreSQL schema 初始化
- Dockerfile 和 docker-compose.yml：用于部署后端 + 数据库
- `dev`支持热更新, 默认使用`ts-node-dev --respawn --transpile-only -r tsconfig-paths/register src/index.ts`

## Run

### 1. install

```shell
pnpm install
```

### 2. Next-app

```shell
# dev
pnpm --filter next-app run dev

# build
pnpm --filter next-app run build
```

### 3. fastify-api

```shell
# dev
pnpm --filter fastify-api dev

# build
pnpm --filter fastify-api build
```

### 4. run-all

```shell
pnpm run dev
pnpm run build
```
