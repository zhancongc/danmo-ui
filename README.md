# @danmo/ui — 澹墨设计系统

跨项目共享的轻量 React 组件库：设计令牌 + 原子组件，纯 UI 无业务耦合。

## 原则

- 遵循澹墨设计令牌（`#D63031` 红 / `#FFFBF5` 米白 / 浅色页头），禁止强对比营销大卡
- 零运行时依赖，仅 peer deps `react` / `react-dom`；不用 Tailwind，纯 CSS 自定义属性
- 类名统一 `dm-` 前缀，不与宿主应用样式冲突
- 组件不引入登录态、i18n、路由等业务逻辑（区别于 AutoOverview `@danmo/shared-ui` 中耦合应用层的 WorkspaceHeader/EditorShell 等）

## 安装（git 依赖）

```bash
npm i github:zhancongc/danmo-ui
# 或固定 tag
npm i github:zhancongc/danmo-ui#v0.1.0
```

## 使用

```tsx
import { Button, Card, StatusBadge } from "@danmo/ui";
import "@danmo/ui/styles.css";
```

## 组件（v0.1）

| 组件 | 说明 |
|------|------|
| Button | variant: primary / secondary / tertiary，size sm/md，isLoading |
| Card | 白底描边卡片，padding none/sm/md |
| StatusBadge | 胶囊状态徽章，tone: red / green / orange / gray |
| Input / Select | 受控表单件，label / error / hint |
| Checkbox | 受控勾选 |
| Modal | open/onClose/title/footer，size sm/md/lg，Esc 与遮罩关闭 |
| Toast | 顶部浮动提示，tone: info / success / error，自动关闭 |
| Alert | 行内提示块，tone: info / success / warning / danger |
| Loading | 加载圈，size sm/md/lg，block 居中 |

## 设计令牌

`tokens.css` 定义 `--dm-*` 变量（品牌红/中性色/语义色/圆角/阴影/字体）。宿主项目可通过覆盖变量做主题微调，不改组件代码。

## 构建

```bash
npm install
npm run build   # 产出 dist/danmo-ui.js（ESM）+ dist/danmo-ui.css + dist/types（d.ts）
```
