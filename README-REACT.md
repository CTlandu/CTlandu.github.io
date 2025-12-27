# React + TailwindCSS Portfolio

这是从 Jekyll 重构为 React + TailwindCSS 的个人作品集网站。

## 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **TailwindCSS** - 样式框架
- **React Router** - 路由管理
- **GitHub Pages** - 部署平台

## 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

构建产物在 `dist/` 目录

### 预览生产构建

```bash
npm run preview
```

## 部署到 GitHub Pages

### 方法一：使用 GitHub Actions（推荐）

1. 在 GitHub 仓库设置中：
   - 进入 Settings → Pages
   - Source 选择 "GitHub Actions"

2. 推送代码到 `main` 分支，GitHub Actions 会自动构建和部署

### 方法二：手动部署

```bash
npm run deploy
```

这会构建项目并将 `dist/` 目录推送到 `gh-pages` 分支。

## 项目结构

```
src/
├── components/     # React 组件
│   └── Layout.jsx  # 布局组件（导航栏、页脚等）
├── pages/          # 页面组件
│   ├── Home.jsx           # 首页
│   ├── Photography.jsx    # 摄影作品页面
│   └── Publications.jsx    # 出版物页面
├── data/           # 数据文件
│   └── projects.json      # 项目数据
├── App.jsx         # 主应用组件
├── main.jsx        # 入口文件
└── index.css       # 全局样式
```

## 迁移说明

### 已完成迁移

- ✅ 基础项目结构
- ✅ 导航栏和布局
- ✅ 首页（About）内容
- ✅ 摄影作品页面框架
- ✅ 出版物页面
- ✅ 深色模式支持
- ✅ GitHub Actions 自动部署配置

### 待完成

- ⏳ 完整的项目详情页面（需要从 Jekyll markdown 文件迁移内容）
- ⏳ 博客功能（如果需要）
- ⏳ 图片轮播组件（替代 Bootstrap carousel）
- ⏳ 响应式图片优化

## 注意事项

1. **路由配置**：由于 GitHub Pages 不支持服务端路由，如果使用 `BrowserRouter`，需要在仓库设置中添加 404.html 重定向。或者使用 `HashRouter`。

2. **图片路径**：确保所有图片路径正确，建议将图片放在 `public/assets/img/` 目录下。

3. **Base URL**：如果部署在项目页面（非用户页面），需要在 `vite.config.js` 中设置正确的 `base` 路径。

## 从 Jekyll 迁移的改进

- ✅ 更快的构建速度（Vite vs Jekyll）
- ✅ 更好的开发体验（热重载、现代工具链）
- ✅ 更灵活的组件化开发
- ✅ 更好的性能（代码分割、懒加载）
- ✅ 现代化的 UI（TailwindCSS）

