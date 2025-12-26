# HTML Emotion Eyes - 快速开始指南

## 📦 安装方式

### 1️⃣ 直接使用文件

最简单的方式 - 直接复制相关文件到你的项目中：

```bash
# 复制以下目录到项目根目录
- emotions/
- css/
- js/
```

### 2️⃣ NPM 安装

```bash
npm install html-emotion-eyes
```

### 3️⃣ CDN 引入

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-emotion-eyes/css/core.css">
<script src="https://cdn.jsdelivr.net/npm/html-emotion-eyes/js/emotion-controller.js"></script>
```

---

## 🎯 5 分钟快速开始

### 步骤 1：创建 HTML

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Emotion Eyes Demo</title>
    <link rel="stylesheet" href="css/core.css">
    <link rel="stylesheet" href="emotions/happy/happy_1.css">
</head>
<body>
    <div class="face happy" id="face">
        <div class="eye-wrapper left">
            <div class="eye"></div>
            <div class="cheek"></div>
        </div>
        <div class="eye-wrapper right">
            <div class="eye"></div>
            <div class="cheek"></div>
        </div>
    </div>

    <div class="controls">
        <button onclick="changeEmotion('happy')">😊 Happy</button>
        <button onclick="changeEmotion('sad')">😢 Sad</button>
        <button onclick="changeEmotion('thinking')">🤔 Thinking</button>
        <button onclick="changeEmotion('surprised')">😲 Surprised</button>
    </div>

    <script src="js/emotion-controller.js"></script>
    <script>
        function changeEmotion(emotion) {
            const face = document.getElementById('face');
            // 移除旧类名
            Array.from(face.classList).forEach(cls => {
                if (cls !== 'face') face.classList.remove(cls);
            });
            // 添加新类名
            face.classList.add(emotion);
        }
    </script>
</body>
</html>
```

### 步骤 2：在浏览器中打开

就这么简单！现在你可以看到：
- 一对动画眼睛 👀
- 四个切换按钮
- 流畅的表情动画

---

## 🎨 12 种情感一览

| 情感 | 文件夹 | 描述 | 用途 |
|------|--------|------|------|
| 😊 Happy | `happy/` | 开心、欢快 | 成功、好消息、完成任务 |
| 😢 Sad | `sad/` | 伤心、难过 | 错误、失败、悲伤内容 |
| 😠 Angry | `angry/` | 愤怒、生气 | 警告、冲突、危险 |
| 😲 Surprised | `surprised/` | 惊讶、震惊 | 意外事件、惊喜 |
| 🤔 Thinking | `thinking/` | 思考、思索 | 加载中、处理中 |
| 😳 Touched | `touched/` | 害羞、感动 | 赞美、亲密 |
| 💕 Love | `love/` | 爱慕、陶醉 | 表达喜爱、欣赏 |
| 😭 Crying | `crying/` | 哭泣、悲伤 | 极度悲伤、失去 |
| 😞 Disappointed | `disappointed/` | 失望、沮丧 | 期望未满足 |
| 😒 Reject | `reject/` | 拒绝、厌恶 | 反对、拒绝请求 |
| 🔌 Glitch | `glitch/` | 故障、异常 | 系统错误、特殊效果 |
| 😐 Natural | `natural/` | 自然、平静 | 默认状态、待机 |

---

## 💡 常用代码片段

### 随机情感

```javascript
const emotions = ['happy', 'sad', 'thinking', 'surprised', 'love', 'angry'];
const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
changeEmotion(randomEmotion);
```

### 情感序列

```javascript
async function playEmotionSequence() {
    const sequence = ['thinking', 'surprised', 'happy'];
    
    for (let emotion of sequence) {
        changeEmotion(emotion);
        await new Promise(resolve => setTimeout(resolve, 2000)); // 等待 2 秒
    }
}

playEmotionSequence();
```

### 根据时间变化

```javascript
function updateEmotionByTime() {
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 12) {
        changeEmotion('happy');  // 早上开心
    } else if (hour >= 12 && hour < 17) {
        changeEmotion('thinking');  // 下午思考
    } else {
        changeEmotion('natural');  // 晚上平静
    }
}

// 每小时更新一次
setInterval(updateEmotionByTime, 3600000);
updateEmotionByTime(); // 立即执行
```

### 键盘控制

```javascript
document.addEventListener('keydown', (e) => {
    const emotionMap = {
        '1': 'happy',
        '2': 'sad',
        '3': 'thinking',
        '4': 'surprised',
        '5': 'angry',
        '6': 'love'
    };
    
    if (emotionMap[e.key]) {
        changeEmotion(emotionMap[e.key]);
    }
});
```

---

## 🔧 定制化

### 改变眼睛颜色

编辑 `css/core.css`：

```css
:root {
    --eye-color: #ff6b9d;  /* 改为粉红色 */
    --eye-bg: #000000;     /* 背景色 */
    --eye-w: 100px;        /* 宽度 */
    --eye-h: 130px;        /* 高度 */
    --eye-radius: 50%;     /* 圆度 */
}
```

### 创建自定义情感

在 `emotions/` 中创建新文件夹，例如 `excited/`：

```
emotions/
├── excited/
│   ├── excited_1.css
│   ├── excited_2.css
│   └── excited_3.css
```

编写 `excited_1.css`：

```css
.face.excited {
    --eye-color: #ffaa00;  /* 橙色眼睛 */
    animation: excited-bounce 0.3s infinite ease-in-out;
}

.face.excited .eye {
    height: 140px;
    width: 120px;
    border-radius: 50%;
}

.face.excited .cheek {
    opacity: 0.8;
    background: #ffccaa;
    transform: scale(1.8);
    filter: blur(12px);
}

@keyframes excited-bounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.15); }
}
```

现在可以使用：

```javascript
changeEmotion('excited');
```

---

## 📱 响应式设计

添加到 HTML 的 `<style>` 中：

```css
/* 平板设备 */
@media (max-width: 768px) {
    :root {
        --eye-w: 70px;
        --eye-h: 90px;
    }
    
    .face {
        gap: 40px;
    }
}

/* 手机设备 */
@media (max-width: 480px) {
    :root {
        --eye-w: 50px;
        --eye-h: 70px;
    }
    
    .face {
        gap: 30px;
    }
    
    .controls {
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .controls button {
        padding: 8px 12px;
        font-size: 12px;
    }
}
```

---

## 🌐 集成框架

### ✨ React

```jsx
import React, { useState } from 'react';
import './css/core.css';
import './emotions/happy/happy_1.css';

export function EmotionEyes() {
    const [emotion, setEmotion] = useState('happy');

    return (
        <div>
            <div className={`face ${emotion}`}>
                <div className="eye-wrapper left">
                    <div className="eye"></div>
                    <div className="cheek"></div>
                </div>
                <div className="eye-wrapper right">
                    <div className="eye"></div>
                    <div className="cheek"></div>
                </div>
            </div>

            <button onClick={() => setEmotion('happy')}>Happy</button>
            <button onClick={() => setEmotion('sad')}>Sad</button>
        </div>
    );
}
```

### 🍃 Vue

```vue
<template>
    <div>
        <div :class="['face', emotion]">
            <div class="eye-wrapper left">
                <div class="eye"></div>
                <div class="cheek"></div>
            </div>
            <div class="eye-wrapper right">
                <div class="eye"></div>
                <div class="cheek"></div>
            </div>
        </div>

        <button @click="emotion = 'happy'">Happy</button>
        <button @click="emotion = 'sad'">Sad</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            emotion: 'happy'
        };
    }
};
</script>

<style>
@import './css/core.css';
@import './emotions/happy/happy_1.css';
</style>
```

### ⚛️ Angular

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'app-emotion-eyes',
    template: `
        <div [class]="'face ' + emotion">
            <div class="eye-wrapper left">
                <div class="eye"></div>
                <div class="cheek"></div>
            </div>
            <div class="eye-wrapper right">
                <div class="eye"></div>
                <div class="cheek"></div>
            </div>
        </div>

        <button (click)="setEmotion('happy')">Happy</button>
        <button (click)="setEmotion('sad')">Sad</button>
    `,
    styles: [`
        @import './css/core.css';
        @import './emotions/happy/happy_1.css';
    `]
})
export class EmotionEyesComponent {
    emotion = 'happy';

    setEmotion(e: string) {
        this.emotion = e;
    }
}
```

---

## ⚡ 性能优化

### 1. CSS 预加载

```html
<link rel="prefetch" href="emotions/sad/sad_1.css">
<link rel="prefetch" href="emotions/thinking/thinking_1.css">
```

### 2. 使用 CSS 变量减少文件大小

不要在每个情感文件中重复定义眼睛尺寸，使用 CSS 变量覆盖：

```css
.face.excited {
    --eye-color: #ffaa00;
    /* 重用其他默认样式 */
}
```

### 3. 压缩 CSS 文件

使用在线工具或命令行工具压缩 CSS：

```bash
npm install -g cleancss-cli
cleancss -o emotions/happy/happy_1.min.css emotions/happy/happy_1.css
```

---

## 🐛 常见问题

### Q: 眼睛不显示？
**A:** 检查 CSS 文件路径是否正确，确保 `core.css` 在前，情感 CSS 在后。

### Q: 动画很卡顿？
**A:** 
- 启用硬件加速：在 CSS 中添加 `will-change: transform`
- 减少同时运行的动画
- 在旧设备上降低动画帧率

### Q: 如何改变眼睛形状？
**A:** 编辑 `css/core.css` 中的 `--eye-radius` 变量或修改具体情感的 `border-radius` 属性。

### Q: 支持哪些浏览器？
**A:** 现代浏览器都支持（Chrome, Firefox, Safari, Edge）。不支持 IE 11（需要 polyfills）。

---

## 📚 进阶学习

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Can I Use](https://caniuse.com/) - 浏览器兼容性

---

## 📞 获取帮助

遇到问题？需要商用授权？

📧 **联系邮箱**：yoahoug@gmail.com

---

**Happy Coding!** 🚀
