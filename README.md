# 🎭 HTML Emotion Eyes - Standalone Edition

> 一个强大的模块化情感表情库，为虚拟角色提供丰富的面部表情动画

[English](./README_EN.md) | **中文**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Commercial License](https://img.shields.io/badge/commercial%20use-available-orange.svg)

## ✨ 快速预览

HTML Emotion Eyes 是一个零依赖的纯 CSS 情感表情库，支持 12 种基础情感，每种情感包含 3 种不同的动画风格。

```
自然 🙂 | 开心 😊 | 伤心 😢 | 愤怒 😠 | 惊讶 😲 | 思考 🤔
害羞 😳 | 爱慕 💕 | 哭泣 😭 | 失望 😞 | 拒绝 😒 | 故障 🔌
```

---

## 🚀 特性亮点

### 📦 零依赖设计
- 纯 HTML + CSS 实现
- 无需 JavaScript 框架
- 可与任何前端框架集成
- 轻量级，性能优异

### 🎨 丰富的表情库
- 12 种基础情感类型
- 每种情感 3 种动画风格
- 共计 36 种独特表现
- 还可自定义扩展

### ⚡ 高性能动画
- CSS3 原生动画
- GPU 加速支持
- 60fps 流畅效果
- 完美的过渡动画

### 🔌 易于集成
- 模块化 CSS 文件
- 即插即用
- 支持 CDN 加载
- 框架无关

### 📱 全浏览器支持
- 桌面浏览器 ✅
- 移动浏览器 ✅
- 跨平台兼容 ✅

---

## 📂 项目结构

```
html_emotion_eyes/
├── emotions/                  # 情感模块库
│   ├── angry/                # 愤怒情感 (3 个变体)
│   ├── crying/               # 哭泣情感 (3 个变体)
│   ├── disappointed/         # 失望情感 (3 个变体)
│   ├── glitch/              # 故障情感 (3 个变体)
│   ├── happy/               # 开心情感 (3 个变体)
│   ├── love/                # 爱慕情感 (3 个变体)
│   ├── natural/             # 自然情感 (3 个变体)
│   ├── reject/              # 拒绝情感 (3 个变体)
│   ├── sad/                 # 伤心情感 (3 个变体)
│   ├── surprised/           # 惊讶情感 (3 个变体)
│   ├── thinking/            # 思考情感 (3 个变体)
│   ├── touched/             # 害羞情感 (3 个变体)
│   └── README.md            # 详细文档
├── css/
│   └── core.css             # 核心样式
├── demo/
│   ├── index.html           # 完整演示页面
│   ├── simple.html          # 简单示例
│   ├── api-demo.html        # API 使用示例
│   └── websocket-demo.html  # WebSocket 集成示例
├── js/
│   ├── emotion-controller.js # 核心控制器
│   └── utils.js             # 工具函数
├── examples/
│   ├── flask-integration/   # Flask 集成示例
│   ├── react-integration/   # React 集成示例
│   ├── vanilla-js/          # 原生 JavaScript 示例
│   └── websocket-server/    # WebSocket 服务器示例
├── LICENSE                  # MIT 许可证
├── package.json             # NPM 配置文件
└── README.md                # 本文档
```

---

## 🎯 快速开始

### 方法 1：直接使用 HTML

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Echo Eyes Demo</title>
    
    <!-- 引入核心样式 -->
    <link rel="stylesheet" href="css/core.css">
    
    <!-- 选择一个情感模块 -->
    <link rel="stylesheet" href="emotions/happy/happy_1.css">
</head>
<body>
    <!-- 面部结构 -->
    <div class="face happy">
        <div class="eye-wrapper left">
            <div class="eye"></div>
            <div class="cheek"></div>
        </div>
        <div class="eye-wrapper right">
            <div class="eye"></div>
            <div class="cheek"></div>
        </div>
    </div>

    <!-- 控制按钮 -->
    <div class="controls">
        <button onclick="switchEmotion('happy')">Happy</button>
        <button onclick="switchEmotion('sad')">Sad</button>
        <button onclick="switchEmotion('thinking')">Thinking</button>
    </div>

    <script src="js/emotion-controller.js"></script>
    <script>
        function switchEmotion(emotion) {
            const face = document.querySelector('.face');
            // 移除所有情感类
            Array.from(face.classList).forEach(cls => {
                if (cls !== 'face') face.classList.remove(cls);
            });
            // 添加新情感类
            face.classList.add(emotion);
            // 加载对应的 CSS 文件
            loadEmotionStyle(emotion);
        }
    </script>
</body>
</html>
```

### 方法 2：NPM 安装

```bash
npm install html-emotion-eyes
```

```javascript
import { EmotionController } from 'html-emotion-eyes';

const controller = new EmotionController({
    faceElement: document.querySelector('.face'),
    emotionDir: '/path/to/emotions'
});

controller.setEmotion('happy');
controller.randomEmotion();
```

### 方法 3：CDN 引入

```html
<!-- CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-emotion-eyes/css/core.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-emotion-eyes/emotions/happy/happy_1.css">

<!-- JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/html-emotion-eyes/js/emotion-controller.js"></script>
```

---

## 🎬 使用示例

### 基础示例

```javascript
// 创建控制器实例
const emotionEyes = new EmotionController('.face');

// 设置特定情感
emotionEyes.setEmotion('happy');

// 随机情感
emotionEyes.randomEmotion();

// 序列播放
emotionEyes.playSequence(['happy', 'thinking', 'surprised'], 1000);

// 获取当前情感
console.log(emotionEyes.getCurrentEmotion()); // 'happy'
```

### 高级用法

```javascript
// 自定义配置
const emotionEyes = new EmotionController('.face', {
    emotionDir: './emotions/',
    transitionTime: 300,
    autoLoadCSS: true,
    randomExclude: ['glitch']
});

// 监听情感变化
emotionEyes.on('emotionChanged', (newEmotion, oldEmotion) => {
    console.log(`从 ${oldEmotion} 变更为 ${newEmotion}`);
});

// 设置情感回调
emotionEyes.setEmotionCallback('happy', () => {
    console.log('现在很开心！');
});

// 条件切换
if (isUserHappy) {
    emotionEyes.setEmotion('happy');
} else if (isUserThinking) {
    emotionEyes.setEmotion('thinking');
}
```

### React 集成

```jsx
import React, { useEffect, useRef } from 'react';
import { EmotionController } from 'html-emotion-eyes';

function EmotionEyes({ emotion }) {
    const faceRef = useRef(null);
    const controllerRef = useRef(null);

    useEffect(() => {
        controllerRef.current = new EmotionController(faceRef.current);
    }, []);

    useEffect(() => {
        if (controllerRef.current) {
            controllerRef.current.setEmotion(emotion);
        }
    }, [emotion]);

    return (
        <div className="face" ref={faceRef}>
            <div className="eye-wrapper left">
                <div className="eye"></div>
                <div className="cheek"></div>
            </div>
            <div className="eye-wrapper right">
                <div className="eye"></div>
                <div className="cheek"></div>
            </div>
        </div>
    );
}

export default EmotionEyes;
```

### Vue 集成

```vue
<template>
    <div class="face" ref="faceElement">
        <div class="eye-wrapper left">
            <div class="eye"></div>
            <div class="cheek"></div>
        </div>
        <div class="eye-wrapper right">
            <div class="eye"></div>
            <div class="cheek"></div>
        </div>
    </div>
</template>

<script>
import { EmotionController } from 'html-emotion-eyes';

export default {
    props: {
        emotion: String
    },
    data() {
        return {
            controller: null
        };
    },
    mounted() {
        this.controller = new EmotionController(this.$refs.faceElement);
    },
    watch: {
        emotion(newEmotion) {
            this.controller.setEmotion(newEmotion);
        }
    }
};
</script>
```

---

## 📚 情感详解

### 😊 **happy** - 开心/高兴

**特点**：眼睛放大，充满活力

- **happy_1** - 弹跳：上下跳跃，欢快跳舞感
- **happy_2** - 微笑：眯眼合并，温暖微笑感
- **happy_3** - 发光：脉冲闪耀，极度开心感

**应用场景**：成功事件、正面反馈、用户达成目标

### 😢 **sad** - 伤心/难过

**特点**：眼睛向下，配合脸部效果表现悲伤

- **sad_1** - 滑落：眼睛向下滑落，眼泪感
- **sad_2** - 颤抖：眼睛半闭颤抖，内心悲痛
- **sad_3** - 紧闭：眼睛完全闭合，深度悲伤

**应用场景**：错误提示、失败反馈、悲伤故事情节

### 😠 **angry** - 愤怒/生气

**特点**：眼睛倾斜，呈现怒视状态

- **angry_1** - 怒视：眼睛倾斜角度小
- **angry_2** - 凶狠：眼睛倾斜更大，缩小放大
- **angry_3** - 暴怒：眼睛瞇起，脸红扩大

**应用场景**：警告信息、冲突对话、负面反应

### 😲 **surprised** - 惊讶/震惊

**特点**：眼睛圆睁放大，表现震惊

- **surprised_1** - 基础：眼睛简单放大
- **surprised_2** - 弹出：眼睛爆炸式放大
- **surprised_3** - 闪烁：眼睛闪烁扩张，强调震惊

**应用场景**：意外事件、惊喜揭露、突发信息

### 🤔 **thinking** - 思考/思索

**特点**：眼睛移动，表现思考状态

- **thinking_1** - 看上：眼睛向上扫，思考天空
- **thinking_2** - 旋转：眼睛缓慢旋转，深度思考
- **thinking_3** - 远视：眼睛注视远方，茫然思索

**应用场景**：加载中、处理中、AI 思考动画

### 😳 **touched** - 害羞/感动

**特点**：眼睛躲闪，脸部泛红

- **touched_1** - 侧视：眼睛看向一侧，轻微害羞
- **touched_2** - 躲闪：眼睛快速躲闪，脸红加强
- **touched_3** - 低头：眼睛向下，极度害羞脸红

**应用场景**：赞美反应、受感动、亲密互动

### 💕 **love** - 爱慕/陶醉

**特点**：眼睛呈心形，充满爱意

- **love_1** - 心眼：眼睛变心形，经典爱心
- **love_2** - 陶醉：眼睛闭合，脸红扩大，沉浸感
- **love_3** - 闪耀：眼睛旋转闪光，被吸引感

**应用场景**：表达喜爱、陶醉表情、情感场景

### 😭 **crying** - 哭泣/悲伤

**特点**：眼泪效果，传达深度悲伤

- **crying_1** - 眼泪：水滴不断下滑
- **crying_2** - 紧闭：眼睛紧闭，肩膀颤抖
- **crying_3** - 喷涌：眼泪喷涌，全身颤抖

**应用场景**：极度悲伤、失去、悲剧情节

### 😞 **disappointed** - 失望/沮丧

**特点**：无神的眼睛，表现失望

- **disappointed_1** - 半睁：眼睛半睁不睁，无神感
- **disappointed_2** - 向下：眼睛向下，脸部松弛
- **disappointed_3** - 闭合：眼睛闭合，脸部沉重

**应用场景**：期望未满足、失望反馈、沮丧情绪

### 😒 **reject** - 拒绝/厌恶

**特点**：眼睛瞄向一侧，表现厌恶

- **reject_1** - 侧瞄：眼睛瞄向一侧，拒绝正视
- **reject_2** - 眯起：眼睛眯起，嘴角下压，厌恶感
- **reject_3** - 转向：眼睛转向反向，强烈拒绝

**应用场景**：反对态度、拒绝请求、厌恶反应

### 🔌 **glitch** - 故障/异常

**特点**：闪烁变形，表现系统故障

- **glitch_1** - 闪烁：眼睛闪烁不定，颜色变化
- **glitch_2** - 错位：左右眼不同步，位置跳动
- **glitch_3** - 扭曲：眼睛扭曲变形，崩溃感强

**应用场景**：系统错误、故障动画、特殊效果

### 😐 **natural** - 自然/平静

**特点**：静止或缓慢动画，自然表现

- **natural_1** - 静止：完全无动画，自然睁眼
- **natural_2** - 眨眼：缓慢眨眼，呼吸感
- **natural_3** - 扫动：微微扫动，放松自然

**应用场景**：待机状态、默认表情、自然交互

---

## 🛠️ API 参考

### EmotionController 类

#### 构造函数

```javascript
new EmotionController(selector, options)
```

**参数**：
- `selector` (string|element) - 面部 DOM 元素或选择器
- `options` (object) - 可选配置对象

**选项**：
```javascript
{
    emotionDir: './emotions/',      // 情感文件夹路径
    transitionTime: 300,             // 过渡动画时长(ms)
    autoLoadCSS: true,               // 是否自动加载 CSS 文件
    randomExclude: [],               // 随机时排除的情感
    defaultEmotion: 'natural'        // 默认情感
}
```

#### 方法

| 方法 | 描述 | 参数 | 返回值 |
|------|------|------|--------|
| `setEmotion(emotion)` | 设置特定情感 | emotion (string) | void |
| `getEmotion()` | 获取当前情感 | - | string |
| `randomEmotion()` | 随机切换情感 | - | string |
| `playSequence(emotions, delay)` | 按顺序播放情感序列 | emotions (array), delay (number) | Promise |
| `loadCSS(emotion, variant)` | 加载情感 CSS 文件 | emotion (string), variant (number) | Promise |
| `on(event, callback)` | 监听事件 | event (string), callback (function) | void |
| `off(event, callback)` | 取消监听事件 | event (string), callback (function) | void |

#### 事件

```javascript
// 情感改变
emotionEyes.on('emotionChanged', (newEmotion, oldEmotion) => {
    console.log(`从 ${oldEmotion} 变为 ${newEmotion}`);
});

// 开始过渡
emotionEyes.on('transitionStart', (emotion) => {
    console.log(`开始过渡到 ${emotion}`);
});

// 过渡完成
emotionEyes.on('transitionEnd', (emotion) => {
    console.log(`完成过渡到 ${emotion}`);
});

// CSS 加载完成
emotionEyes.on('cssLoaded', (emotion) => {
    console.log(`${emotion} CSS 已加载`);
});
```

---

## 🎨 自定义情感

### 创建新情感步骤

#### 1. 创建文件夹
```
emotions/excited/
```

#### 2. 编写 CSS 文件 (excited_1.css)

```css
/* Excited: 激动 - 眼睛放大，上下跳动 */
.face.excited { --eye-color: #ffaa00; }

.face.excited .eye {
    height: 140px;
    width: 120px;
    border-radius: 50%;
    animation: excited-jump 0.4s infinite ease-in-out;
}

.face.excited .cheek {
    opacity: 0.8;
    background: #ffccaa;
    transform: scale(1.8);
    filter: blur(12px);
}

@keyframes excited-jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px) scale(1.1); }
}
```

#### 3. 动态加载

```javascript
emotionEyes.setEmotion('excited');
```

---

## 📊 浏览器兼容性

| 特性 | Chrome | Firefox | Safari | Edge | IE 11 |
|------|--------|---------|--------|------|-------|
| CSS Animation | ✅ | ✅ | ✅ | ✅ | ✅ |
| CSS Transform | ✅ | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | ✅ | ✅ | ✅ | ✅ | ❌ |
| Box Shadow | ✅ | ✅ | ✅ | ✅ | ✅ |
| Clip Path | ✅ | ✅ | ✅ | ✅ | ❌ |
| Filter | ✅ | ✅ | ✅ | ✅ | ❌ |

**注**：IE 11 需要额外的 polyfill 支持。

---

## ⚙️ 性能优化

### 1. CSS 代码最小化

```bash
npm run build
```

### 2. 批量加载

```javascript
// 预加载常用情感
Promise.all([
    emotionEyes.loadCSS('happy', 1),
    emotionEyes.loadCSS('sad', 1),
    emotionEyes.loadCSS('thinking', 1)
]).then(() => {
    console.log('常用情感已加载');
});
```

### 3. 使用 CDN

推荐使用 CDN 加速静态资源：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-emotion-eyes/css/core.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html-emotion-eyes/emotions/happy/happy_1.css">
<script src="https://cdn.jsdelivr.net/npm/html-emotion-eyes/js/emotion-controller.js"></script>
```

---

## 📦 部署指南

### 使用 Vercel

```bash
vercel
```

### 使用 Netlify

```bash
netlify deploy
```

### 使用 Docker

```dockerfile
FROM node:16

WORKDIR /app

COPY . .

EXPOSE 3000

CMD ["npx", "http-server", "-p", "3000"]
```

---

## 🔒 商用授权

本项目提供商用许可。

### 免费版本
- 非商业使用
- 开源社区使用
- 教育和研究使用

### 商用
需要商用授权，请联系：

📧 **yoahoug@gmail.com**

---

## 📝 许可证

本项目采用 **MIT 许可证**。

**重要提示**：
- 商业用途需要获得授权许可
- 请在使用本项目前阅读完整的 [LICENSE](./LICENSE) 文件
- 商用授权请联系 yoahoug@gmail.com

---

## 🤝 贡献指南

欢迎贡献新的情感表达模块和改进建议！

### 提交流程

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/new-emotion`)
3. 提交你的改动 (`git commit -am 'Add new emotion'`)
4. 推送到分支 (`git push origin feature/new-emotion`)
5. 创建一个 Pull Request

### 质量要求

- ✅ CSS 代码规范，注释完整
- ✅ 动画平滑流畅，60fps 性能
- ✅ 通过浏览器兼容性测试
- ✅ 包含详细的中英文文档

---

## 🐛 问题反馈

遇到问题或有建议？

1. 📧 邮件：yoahoug@gmail.com
2. 🐙 GitHub Issues：提交详细的问题描述
3. 💬 讨论区：分享你的想法和建议

---


## 🙏 致谢

感谢所有贡献者和使用者的支持与反馈！

---

**项目信息**

- **版本**：v1.0.0
- **作者**：Echo Team
- **最后更新**：2025 年 12 月 26 日
- **维护者**：yoahoug@gmail.com

---

<div align="center">

**Made with ❤️ by Echo Team**

[⭐ Star us on GitHub](https://github.com/your-repo/html-emotion-eyes) | [📧 联系我们](mailto:yoahoug@gmail.com)

</div>
