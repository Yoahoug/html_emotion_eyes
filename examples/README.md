# HTML Emotion Eyes - 集成示例

本目录包含多个框架和环境的集成示例。

## 📋 目录

1. **vanilla-js-examples.js** - 原生 JavaScript 示例
2. **react-example.jsx** - React 框架集成
3. **flask_integration.py** - Flask 后端集成

---

## 🟡 原生 JavaScript 示例

### 文件: `vanilla-js-examples.js`

包含以下功能演示：

- ✅ 基础控制
- ✅ 事件监听
- ✅ 动画序列
- ✅ 键盘快捷键
- ✅ 聊天机器人集成
- ✅ 定时变化
- ✅ WebSocket 实时控制

### 使用

```html
<script src="js/emotion-controller.js"></script>
<script src="examples/vanilla-js-examples.js"></script>

<script>
    // 初始化控制器
    const emotionEyes = window.EmotionDemos.emotionEyes;
    
    // 设置事件监听
    window.EmotionDemos.setupEventListeners();
    
    // 启用键盘快捷键
    window.EmotionDemos.setupKeyboardShortcuts();
    
    // 播放情感故事
    window.EmotionDemos.playEmotionStory();
</script>
```

### 快捷键

| 按键 | 功能 |
|------|------|
| 1-0 | 切换对应情感 |
| R | 随机情感 |
| Space | 播放故事 |
| Delete | 重置为自然 |

---

## ⚛️ React 示例

### 文件: `react-example.jsx`

提供 React 组件用于集成 Emotion Eyes。

### 基本用法

```jsx
import { EmotionEyes } from './examples/react-example';

function App() {
    return (
        <EmotionEyes emotion="happy" variant={1} />
    );
}
```

### 高级用法

```jsx
import { EmotionEyesWithControls } from './examples/react-example';

function App() {
    return (
        <EmotionEyesWithControls />
    );
}
```

### Props

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `emotion` | string | 'natural' | 情感名称 |
| `variant` | number | 1 | 变体编号 (1-3) |

---

## 🐍 Flask 示例

### 文件: `flask_integration.py`

包含完整的 Flask 后端集成示例。

### 安装依赖

```bash
pip install flask
```

### 运行

```bash
python examples/flask_integration.py
```

访问: http://localhost:5000

### API 端点

#### GET /api/emotions
获取所有情感信息

```bash
curl http://localhost:5000/api/emotions
```

响应：
```json
{
    "emotions": {
        "happy": {
            "name": "开心",
            "description": "充满喜悦和快乐",
            "color": "#FFD700",
            "icon": "😊"
        },
        ...
    },
    "count": 7
}
```

#### GET /api/emotion/<emotion_name>
获取特定情感信息

```bash
curl http://localhost:5000/api/emotion/happy
```

#### GET /api/random-emotion
获取随机情感

```bash
curl http://localhost:5000/api/random-emotion
```

#### POST /api/process-message
处理用户消息并分析情感

```bash
curl -X POST http://localhost:5000/api/process-message \
  -H "Content-Type: application/json" \
  -d '{"message": "我很开心"}'
```

#### GET /api/story
获取情感故事序列

```bash
curl http://localhost:5000/api/story
```

---

## 🌐 集成步骤

### 1. 复制文件

将 `emotions/`, `css/`, `js/` 目录复制到你的项目中。

### 2. 包含核心文件

```html
<link rel="stylesheet" href="path/to/css/core.css">
<script src="path/to/js/emotion-controller.js"></script>
```

### 3. 创建 HTML 结构

```html
<div class="face natural" id="face">
    <div class="eye-wrapper left">
        <div class="eye"></div>
        <div class="cheek"></div>
    </div>
    <div class="eye-wrapper right">
        <div class="eye"></div>
        <div class="cheek"></div>
    </div>
</div>
```

### 4. 初始化控制器

```javascript
const emotionEyes = new EmotionController('#face', {
    emotionDir: 'path/to/emotions/',
    autoLoadCSS: true
});
```

### 5. 使用 API

```javascript
// 设置情感
await emotionEyes.setEmotion('happy');

// 随机情感
await emotionEyes.randomEmotion();

// 播放序列
await emotionEyes.playSequence(['happy', 'sad', 'thinking']);

// 监听事件
emotionEyes.on('emotionChanged', (newEmotion) => {
    console.log('情感已改变:', newEmotion);
});
```

---

## 🛠️ 常见问题

### Q: 如何在 Vue 中使用？

**A:** 使用方式与 React 类似：

```vue
<template>
    <div :class="['face', emotion]">
        <!-- 面部结构 -->
    </div>
    <button @click="emotion = 'happy'">Happy</button>
</template>

<script>
export default {
    data() {
        return { emotion: 'natural' };
    },
    mounted() {
        this.controller = new EmotionController(this.$el.querySelector('.face'));
    }
};
</script>
```

### Q: 如何与 Node.js 后端通信？

**A:** 使用 WebSocket 或 HTTP 请求：

```javascript
// WebSocket
const ws = new WebSocket('ws://localhost:8000');
ws.onmessage = (e) => {
    const emotion = JSON.parse(e.data).emotion;
    emotionEyes.setEmotion(emotion);
};

// HTTP
fetch('/api/emotion', {
    method: 'POST',
    body: JSON.stringify({ mood: 'happy' })
}).then(r => r.json()).then(data => {
    emotionEyes.setEmotion(data.emotion);
});
```

### Q: 如何性能优化？

**A:** 

1. 预加载常用情感
```javascript
emotionEyes.preloadEmotions(['happy', 'sad', 'thinking']);
```

2. 使用 CDN 加载静态资源
3. 启用浏览器缓存
4. 压缩 CSS 和 JavaScript 文件

---

## 📚 更多资源

- [主 README](../README.md)
- [快速开始](../QUICKSTART.md)
- [情感详细说明](../emotions/README.md)

---

## 📞 支持

遇到问题？需要帮助？

📧 **联系**: yoahoug@gmail.com

---

**Happy Coding!** 🚀
