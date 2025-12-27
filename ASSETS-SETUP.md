# 静态资源设置说明

## 问题原因

在 Vite 项目中，只有 `public/` 目录下的文件会被自动复制到构建产物 `dist/` 目录中。

如果你的图片等静态资源放在项目根目录的 `assets/` 文件夹，部署到 GitHub Pages 后这些资源将无法访问。

## 解决方案

**已解决**：已将 `assets/` 文件夹复制到 `public/assets/` 目录。

现在所有静态资源（图片、PDF、视频等）都应该放在 `public/assets/` 目录下：

```
public/
  assets/
    img/              # 图片文件
    github_projects/  # 项目缩略图
    pdf/              # PDF 文件
    video/            # 视频文件
    ...
```

## 引用方式

在代码中使用绝对路径引用（以 `/` 开头）：

```jsx
// ✅ 正确
<img src="/assets/img/prof_pic_2.jpg" />
<a href="/assets/pdf/resume.pdf">Resume</a>

// ❌ 错误（不会工作）
<img src="../assets/img/prof_pic_2.jpg" />
<img src="assets/img/prof_pic_2.jpg" />
```

## 注意事项

1. **文件同步**：如果修改了根目录的 `assets/` 文件夹，记得同步更新 `public/assets/` 文件夹
2. **Git 提交**：确保 `public/assets/` 被提交到 Git（没有被 .gitignore 忽略）
3. **文件大小**：大文件（如视频）建议使用 CDN 或外部存储

## 自动化方案（可选）

如果需要自动同步，可以：

1. **使用符号链接**（macOS/Linux）：
   ```bash
   ln -s ../assets public/assets
   ```

2. **修改 package.json 添加构建脚本**：
   ```json
   {
     "scripts": {
       "prebuild": "cp -r assets public/assets",
       "build": "vite build"
     }
   }
   ```

3. **使用 Vite 插件**：配置 `vite-plugin-static-copy` 自动复制文件

