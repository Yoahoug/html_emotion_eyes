# 🎭 Echo Eyes 情感表情系统

## 📖 项目介绍

Echo Eyes 情感表情系统是一个强大而灵活的 **模块化情感表情库**，通过 CSS 动画为虚拟角色的眼睛和面部表情提供丰富的情感表现。本系统支持 **12 种基础情感**，每种情感包含 **3 种不同的表现风格**，共计 36 种独特的表情动画。

该系统采用模块化设计，易于扩展和定制，是构建虚拟助手、AI 角色、聊天机器人等应用的理想解决方案。

---

## ✨ 核心特性

### 1. **丰富的情感表现**
- 🟠 **12 种基础情感类型**
  - `natural` - 自然/平静
  - `happy` - 开心/高兴
  - `sad` - 伤心/难过
  - `angry` - 愤怒/生气
  - `surprised` - 惊讶/震惊
  - `thinking` - 思考/思索
  - `touched` - 害羞/感动
  - `love` - 爱慕/陶醉
  - `crying` - 哭泣/悲伤
  - `disappointed` - 失望/沮丧
  - `reject` - 拒绝/厌恶
  - `glitch` - 故障/异常

### 2. **多样化表达风格**
- 每种情感包含 **3 种不同的 CSS 动画风格**
- 例如：`happy_1.css`、`happy_2.css`、`happy_3.css`
- 提供不同的动画速度、轨迹和视觉效果

### 3. **模块化架构**
- 完全独立的 CSS 模块
- 易于添加新情感
- 支持动态加载和切换
- 无需修改核心代码即可扩展

### 4. **高性能动画**
- 使用 CSS3 动画和 Transform
- GPU 加速，性能优异
- 流畅的过渡效果
- 可定制的动画时长和缓动函数

### 5. **可视化控制**
- 实时情感切换按钮
- 随机表情选择
- 支持编程方式调用
- Web Socket 实时交互

---

## 📁 目录结构

```
emotions/
├── angry/              # 愤怒情感集
│   ├── angry_1.css     # 样式 1：眼睛倾斜，张开
│   ├── angry_2.css     # 样式 2：眼睛怒视，缩小
│   └── angry_3.css     # 样式 3：眼睛瞇起，脸红
├── crying/             # 哭泣情感集
│   ├── crying_1.css
│   ├── crying_2.css
│   └── crying_3.css
├── disappointed/       # 失望情感集
│   ├── disappointed_1.css
│   ├── disappointed_2.css
│   └── disappointed_3.css
├── glitch/             # 故障情感集
│   ├── glitch_1.css    # 样式：闪烁、错位效果
│   ├── glitch_2.css
│   └── glitch_3.css
├── happy/              # 开心情感集
│   ├── happy_1.css     # 样式 1：弹跳跳跃
│   ├── happy_2.css     # 样式 2：眯眼微笑
│   └── happy_3.css     # 样式 3：眼睛闪闪发光
├── love/               # 爱慕情感集
│   ├── love_1.css      # 样式 1：眼睛变心形
│   ├── love_2.css      # 样式 2：眼睛闭合，脸红
│   └── love_3.css      # 样式 3：眼睛旋转闪耀
├── natural/            # 自然平静情感集
│   ├── natural_1.css   # 样式 1：正常睁眼，无动画
│   ├── natural_2.css   # 样式 2：缓慢眨眼
│   └── natural_3.css   # 样式 3：微微扫动
├── reject/             # 拒绝厌恶情感集
│   ├── reject_1.css
│   ├── reject_2.css
│   └── reject_3.css
├── sad/                # 伤心情感集
│   ├── sad_1.css       # 样式 1：眼睛向下，滑落
│   ├── sad_2.css       # 样式 2：眼睛半闭，颤抖
│   └── sad_3.css       # 样式 3：眼睛紧闭
├── surprised/          # 惊讶情感集
│   ├── surprised_1.css # 样式 1：眼睛圆睁，张开
│   ├── surprised_2.css # 样式 2：眼睛弹出放大
│   └── surprised_3.css # 样式 3：眼睛闪烁扩张
├── thinking/           # 思考情感集
│   ├── thinking_1.css  # 样式 1：眼睛向上，思索
│   ├── thinking_2.css  # 样式 2：眼睛旋转
│   └── thinking_3.css  # 样式 3：眼睛注视远方
├── touched/            # 害羞感动情感集
│   ├── touched_1.css   # 样式 1：眼睛看向一侧
│   ├── touched_2.css   # 样式 2：眼睛躲闪，脸红
│   └── touched_3.css   # 样式 3：害羞低头，脸红
└── README.md           # 本文档
```

---

## 🎨 样式基础知识

### CSS 变量（自定义属性）

所有情感模块都建立在以下 CSS 自定义属性的基础上：

```css
:root {
    --eye-color: #00e5ff;        /* 眼睛颜色 */
    --eye-bg: #050505;           /* 背景颜色 */
    --eye-w: 100px;              /* 眼睛宽度 */
    --eye-h: 130px;              /* 眼睛高度 */
    --eye-radius: 50%;           /* 眼睛边框半径 */
}
```

### 核心 CSS 结构

```html
<div class="face [emotion-name]">
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

### 常见动画属性

```css
.face.happy {
    animation: happy-bounce 0.6s infinite alternate ease-in-out;
}

@keyframes happy-bounce {
    from { transform: translateY(-12px); }
    to { transform: translateY(-22px); }
}
```

---

## 🚀 快速开始

### 1. 基础 HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Echo Eyes</title>
    
    <!-- 核心样式 -->
    <link rel="stylesheet" href="css/core.css">
    
    <!-- 加载情感模块（选择一个） -->
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
</body>
</html>
```

### 2. 切换情感表情

```javascript
function setEmotion(emotionName) {
    const face = document.getElementById('face');
    
    // 移除所有情感类
    face.classList.forEach(cls => {
        if (cls !== 'face') face.classList.remove(cls);
    });
    
    // 添加新情感类
    face.classList.add(emotionName);
}

// 使用示例
setEmotion('happy');    // 开心
setEmotion('sad');      // 伤心
setEmotion('thinking');  // 思考
```

### 3. Flask 集成示例

```python
from flask import Flask, render_template
import os
import random

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    emotions_dir = os.path.join(app.static_folder, 'emotions')
    registered_emotions = []
    
    for folder in os.listdir(emotions_dir):
        folder_path = os.path.join(emotions_dir, folder)
        if os.path.isdir(folder_path):
            css_files = [f for f in os.listdir(folder_path) if f.endswith('.css')]
            if css_files:
                chosen_file = random.choice(css_files)
                registered_emotions.append({
                    'id': folder,
                    'name': folder.capitalize(),
                    'file': f"{folder}/{chosen_file}"
                })
    
    return render_template('base.html', emotions=registered_emotions)

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 📚 详细情感说明

### 😊 **happy** - 开心/高兴
- **happy_1**: 弹跳动画，从下向上来回跳跃，传达欢快的跳舞感
- **happy_2**: 眯眼微笑，眼睛高度降低，呈现合眼微笑的效果
- **happy_3**: 眼睛闪闪发光，脉冲发光效果，表达极端开心

### 😢 **sad** - 伤心/难过
- **sad_1**: 眼睛向下滑落，配合脸红效果，表现哭泣前的悲伤
- **sad_2**: 眼睛半闭颤抖，传达内心的悲痛
- **sad_3**: 眼睛紧闭，配合脸部扭曲效果，表现深度悲伤

### 😠 **angry** - 愤怒/生气
- **angry_1**: 眼睛倾斜，呈现怒视的样子
- **angry_2**: 眼睛怒视缩小，传达极度生气
- **angry_3**: 眼睛瞇起，脸红扩大，表现最大愤怒

### 😲 **surprised** - 惊讶/震惊
- **surprised_1**: 眼睛圆睁张开，基础惊讶表现
- **surprised_2**: 眼睛弹出放大，动画感强
- **surprised_3**: 眼睛闪烁扩张，强调震惊程度

### 🤔 **thinking** - 思考/思索
- **thinking_1**: 眼睛向上扫动，表现看向上方思考
- **thinking_2**: 眼睛旋转缓慢，传达不断思考的感觉
- **thinking_3**: 眼睛注视远方，呆呆思考的样子

### 😳 **touched** - 害羞/感动
- **touched_1**: 眼睛看向一侧，配合脸红，害羞的样子
- **touched_2**: 眼睛躲闪移动，脸红加强，不敢对视
- **touched_3**: 害羞低头，眼睛向下，脸红最强，表现极度害羞

### 💕 **love** - 爱慕/陶醉
- **love_1**: 眼睛变心形，经典爱心眼表现
- **love_2**: 眼睛闭合，脸红扩大，陶醉在爱中的样子
- **love_3**: 眼睛旋转闪耀，配合荧光效果，表现被吸引

### 😭 **crying** - 哭泣/悲伤
- **crying_1**: 眼泪下滑动画，水滴效果，深度哭泣
- **crying_2**: 眼睛紧闭，肩膀颤抖，尽力哭泣
- **crying_3**: 眼泪喷涌，全身颤抖，极度悲伤

### 😞 **disappointed** - 失望/沮丧
- **disappointed_1**: 眼睛半睁，无神的样子，失望表现
- **disappointed_2**: 眼睛向下，脸部松弛，表现心灰意冷
- **disappointed_3**: 眼睛闭合，脸部沉重，极度失望

### 😒 **reject** - 拒绝/厌恶
- **reject_1**: 眼睛瞄向一侧，拒绝正视对方
- **reject_2**: 眼睛眯起，嘴角下压，表现厌恶
- **reject_3**: 眼睛转向反向，配合脸部扭曲，强烈拒绝

### 🔌 **glitch** - 故障/异常
- **glitch_1**: 眼睛闪烁不定，颜色变化，表现故障状态
- **glitch_2**: 左右眼不同步闪动，错位效果，传达系统故障
- **glitch_3**: 眼睛扭曲变形，位置跳动，崩溃感强烈

### 😐 **natural** - 自然/平静
- **natural_1**: 完全静止，无动画，睁眼状态
- **natural_2**: 缓慢眨眼，节奏均匀，自然呼吸感
- **natural_3**: 微微扫动，眼光不定，放松自然的样子

---

## 🔧 创建自定义情感

### 步骤 1：创建新文件夹

在 `emotions` 目录中创建新的文件夹，例如：
```
emotions/excited/
```

### 步骤 2：编写 CSS 文件

创建 `excited_1.css`：

```css
/* Excited 1: 激动 - 眼睛放大，上下跳动 */
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

### 步骤 3：动态加载

系统会自动扫描 `emotions` 文件夹并加载所有情感模块。无需修改其他文件！

---

## 🎯 应用场景

### 1. **AI 聊天助手**
- 根据对话内容动态调整表情
- 增强用户交互体验
- 提供更自然的对话环境

### 2. **虚拟主播/直播**
- 实时表情反馈
- 多种情感表现丰富内容
- 提高观众参与度

### 3. **教育应用**
- 表情示范教学
- 情感认知培训
- 儿童交互学习

### 4. **游戏角色**
- NPC 表情反馈
- 剧情表现力增强
- 沉浸式游戏体验

### 5. **心理疏导应用**
- 虚拟心理咨询师
- 情感陪伴机器人
- 心理健康辅助

---

## ⚙️ 高级用法

### 动态样式切换

```javascript
// 通过 JavaScript 动态改变眼睛颜色
function changeEyeColor(emotion, color) {
    const face = document.querySelector('.face');
    const style = document.createElement('style');
    style.textContent = `.face.${emotion} { --eye-color: ${color}; }`;
    document.head.appendChild(style);
}

changeEyeColor('happy', '#ff0000');
```

### 批量情感切换

```javascript
const emotionSequence = ['happy', 'sad', 'thinking', 'surprised'];
let currentIndex = 0;

setInterval(() => {
    setEmotion(emotionSequence[currentIndex]);
    currentIndex = (currentIndex + 1) % emotionSequence.length;
}, 2000);  // 每 2 秒切换一次
```

### Web Socket 实时控制

```javascript
const socket = new WebSocket('ws://localhost:8000');

socket.onmessage = (event) => {
    const emotion = JSON.parse(event.data).emotion;
    setEmotion(emotion);
};

// 发送情感更新
socket.send(JSON.stringify({ emotion: 'thinking' }));
```

---

## 🎬 CSS 动画技巧

### 1. Transform 变换

```css
/* 位置移动 */
transform: translateY(-20px);

/* 缩放 */
transform: scale(1.2);

/* 旋转 */
transform: rotate(15deg);

/* 组合 */
transform: translateY(-20px) scale(1.1) rotate(5deg);
```

### 2. 动画关键帧

```css
@keyframes custom-animation {
    0% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(-20px); opacity: 0.8; }
    100% { transform: translateY(0); opacity: 1; }
}

animation: custom-animation 1s infinite ease-in-out;
```

### 3. 发光效果

```css
box-shadow: 
    0 0 10px rgba(0, 229, 255, 1),    /* 内发光 */
    0 0 30px rgba(0, 229, 255, 0.8),  /* 中发光 */
    0 0 80px rgba(0, 229, 255, 0.2);  /* 外发光 */
```

---

## 📊 性能优化

### 1. GPU 加速

```css
/* 启用 GPU 加速 */
will-change: transform;
transform: translate3d(0, 0, 0);
```

### 2. 减少重排

```css
/* 使用 transform 而不是 left/top */
/* ❌ 避免 */
animation: slide {
    from { left: 0; }
    to { left: 100px; }
}

/* ✅ 推荐 */
animation: slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
}
```

### 3. 代码分割

```html
<!-- 只加载需要的情感模块 -->
<link rel="stylesheet" href="emotions/happy/happy_1.css">
<link rel="stylesheet" href="emotions/sad/sad_1.css">
```

---

## 🌐 浏览器兼容性

| 功能 | Chrome | Firefox | Safari | Edge |
|------|--------|---------|--------|------|
| CSS Animation | ✅ | ✅ | ✅ | ✅ |
| CSS Transform | ✅ | ✅ | ✅ | ✅ |
| CSS Variables | ✅ | ✅ | ✅ | ✅ |
| Box Shadow | ✅ | ✅ | ✅ | ✅ |
| Clip Path | ✅ | ✅ | ✅ (11.1+) | ✅ |

---

## 📝 文件命名规范

- **文件夹名**：小写英文，单数形式，例如 `happy`, `sad`, `thinking`
- **CSS 文件名**：`{emotion}_{number}.css`，例如 `happy_1.css`, `sad_2.css`
- **类名**：`.face.{emotion}`，例如 `.face.happy`, `.face.sad`

---

## 🔐 商用授权

本项目提供商用支持，需要进一步的商用授权、定制服务或技术支持，请联系：

📧 **商用联系邮箱**：yoahoug@gmail.com

服务内容包括：
- 专属定制情感模块
- 技术集成支持
- 长期维护和更新
- API 接口开发
- 性能优化方案

---

## 📄 开源协议

本项目采用 MIT 许可证。在遵守许可证的前提下，可自由使用、修改和分发。

**重要提示**：
- 商业用途需获得授权许可
- 请在使用前联系 yoahoug@gmail.com 获取商用许可

---

## 🤝 贡献指南

欢迎提交新的情感表达样式！

### 提交流程

1. 创建新的情感文件夹
2. 编写 CSS 动画文件（建议 3 个版本）
3. 在本 README 中添加详细说明
4. 提交 Pull Request 或通过邮件提交

### 质量要求

- ✅ CSS 代码简洁可读
- ✅ 动画平滑流畅
- ✅ 性能优异（60fps）
- ✅ 包含详细注释
- ✅ 测试兼容性

---

## 🐛 问题反馈

遇到问题或有建议？

- 📧 邮件：yoahoug@gmail.com
- 💬 提交问题描述和复现步骤
- 📸 附带截图或视频演示

---

## 📚 相关资源

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [MDN - CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [Can I Use](https://caniuse.com/) - 兼容性查询

---

## 🎉 致谢

感谢所有贡献者和使用者的支持！

---

**最后更新**：2025 年 12 月 26 日

**项目版本**：v1.0.0

---

*Happy Coding! 🚀*
