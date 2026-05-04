import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const content = `# Afilmory - Meng小羽 的摄影画廊

> 记录生活中的美好瞬间，通过我的镜头记录的温暖和情感。

## 简介

Afilmory 是一个现代化的摄影画廊 Web 应用，由 Meng小羽 (@idebuginn) 搭建。采用混合 SPA + SSR 架构，支持照片展示、EXIF 信息、地图定位和社交分享。

- 站点: https://photo.debuginn.com
- 作者: Meng小羽 (https://debuginn.com/)
- GitHub: https://github.com/debuginn/afilmory

## 核心特性

- WebGL 高性能照片查看器
- 动态 OG 图片生成（每张照片独立社交预览图）
- EXIF 元数据展示（相机、镜头、拍摄参数）
- 地图视图（MapLibre + OpenFreeMap）
- Live Photo 支持
- Fujifilm 胶片模拟配方展示
- 响应式设计，移动端适配
- 暗色/亮色主题

## 技术栈

- 前端: React 19, TypeScript, Vite, Tailwind CSS, Jotai
- SSR: Next.js 15 (SPA 托管 + 动态 SEO/OG)
- 图片处理: Sharp, exiftool-vendored, HEIC 转换, blurhash
- 存储: Cloudflare R2 (S3 兼容)
- 数据库: PostgreSQL + Drizzle ORM
- 构建: pnpm workspaces

## 站点配置

- 名称: Debug客栈
- 主题: light mode
- 地图: MapLibre + OpenFreeMap
- 存储: Cloudflare R2
- RSS: 未启用
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
