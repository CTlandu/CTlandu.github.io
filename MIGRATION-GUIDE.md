# 从 Jekyll 迁移到 React + TailwindCSS 指南

## 概述

这个项目已经从 Jekyll 重构为基于 React + TailwindCSS 的现代前端应用。

## GitHub Pages 支持情况

✅ **完全支持！** GitHub Pages 可以托管任何静态网站，包括 React 构建后的静态文件。

### 部署方式

1. **GitHub Actions（推荐）**：已配置自动部署工作流
2. **手动部署**：使用 `gh-pages` 包手动部署

## 项目结构对比

### Jekyll 结构
```
_pages/
_projects/
_posts/
_includes/
_layouts/
_config.yml
```

### React 结构
```
src/
  components/    # React 组件
  pages/         # 页面组件
  data/          # 数据文件（JSON）
public/          # 静态资源
```

## 迁移步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 迁移静态资源

将 `assets/` 目录移动到 `public/assets/`，确保所有图片、PDF 等资源都在 `public/` 目录下。

### 3. 迁移内容数据

- **项目数据**：已创建 `src/data/projects.json`，需要从 `_projects/*.md` 文件中提取内容
- **配置文件**：`_config.yml` 中的配置可以转换为 React 的配置文件或环境变量

### 4. 迁移页面内容

- ✅ **About 页面**：已迁移到 `src/pages/Home.jsx`
- ✅ **Photography 页面**：已创建框架，需要完善项目详情
- ✅ **Publications 页面**：已迁移

### 5. 待完成的工作

#### 项目详情页面

需要为每个项目创建详情页面，从 Jekyll markdown 文件迁移内容：

```jsx
// src/pages/ProjectDetail.jsx
// 需要从 _projects/*.md 文件中提取：
// - 图片轮播数据
// - 描述文本
// - 元数据（日期、类别等）
```

#### 图片轮播组件

替代 Bootstrap carousel，可以使用：
- [Swiper.js](https://swiperjs.com/)
- [Embla Carousel](https://www.embla-carousel.com/)
- 或自定义 React 组件

#### 博客功能（如果需要）

如果保留博客功能，需要：
- 创建博客列表页面
- 创建博客详情页面
- 将 `_posts/*.md` 转换为 JSON 或使用 markdown 解析器

## 优势对比

### Jekyll
- ✅ 简单的内容管理
- ✅ 内置博客支持
- ✅ 学术功能（BibTeX）
- ❌ 构建速度较慢
- ❌ 需要 Ruby 环境
- ❌ 模板系统较复杂

### React + TailwindCSS
- ✅ 更快的构建速度（Vite）
- ✅ 更好的开发体验
- ✅ 更灵活的组件化
- ✅ 更好的性能优化
- ✅ 现代化的 UI 框架
- ❌ 需要手动管理内容（或使用 CMS）

## 部署配置

### GitHub Pages 设置

1. 进入仓库 Settings → Pages
2. Source 选择 "GitHub Actions"
3. 推送代码到 `main` 分支，自动部署

### 自定义域名

如果需要自定义域名，在 `public/` 目录下创建 `CNAME` 文件：

```
yourdomain.com
```

## 路由说明

当前使用 `HashRouter`，URL 格式为：
- `https://ctlandu.github.io/#/`
- `https://ctlandu.github.io/#/photography`
- `https://ctlandu.github.io/#/publications`

如果想使用干净的 URL（BrowserRouter），需要：
1. 配置 `vite.config.js` 的 `base` 路径
2. 确保 `public/404.html` 正确配置
3. 在 GitHub Pages 设置中启用重定向

## 下一步

1. 完善项目详情页面
2. 迁移所有项目内容
3. 优化图片加载（懒加载、响应式图片）
4. 添加动画效果
5. 优化 SEO（meta 标签、结构化数据）

## 问题排查

### 构建失败
- 检查 Node.js 版本（需要 18+）
- 清除 `node_modules` 和 `package-lock.json`，重新安装

### 部署后页面空白
- 检查 `vite.config.js` 的 `base` 配置
- 检查资源路径是否正确
- 查看浏览器控制台错误

### 路由不工作
- 确保使用 `HashRouter` 或正确配置 `404.html`
- 检查 GitHub Pages 设置

