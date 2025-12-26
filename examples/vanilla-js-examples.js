/**
 * 原生 JavaScript 集成示例
 * 
 * 最简单的集成方式，无需任何框架
 */

// ============================================
// 基础示例
// ============================================

// 创建控制器实例
const emotionEyes = new EmotionController('.face', {
    emotionDir: './emotions/',
    transitionTime: 300,
    autoLoadCSS: true
});

// 设置情感
async function setupBasicControls() {
    const buttons = document.querySelectorAll('button[data-emotion]');
    
    buttons.forEach(button => {
        button.addEventListener('click', async (e) => {
            const emotion = e.target.dataset.emotion;
            await emotionEyes.setEmotion(emotion);
        });
    });
}

// ============================================
// 高级示例 - 事件监听
// ============================================

function setupEventListeners() {
    // 监听情感变化
    emotionEyes.on('emotionChanged', (newEmotion, oldEmotion) => {
        console.log(`情感从 ${oldEmotion} 变更为 ${newEmotion}`);
        
        // 更新 UI
        document.getElementById('current-emotion').textContent = newEmotion;
    });

    // 监听过渡开始
    emotionEyes.on('transitionStart', (emotion) => {
        document.getElementById('status').textContent = `正在过渡到 ${emotion}...`;
    });

    // 监听过渡完成
    emotionEyes.on('transitionEnd', (emotion) => {
        document.getElementById('status').textContent = `过渡完成: ${emotion}`;
    });

    // 监听 CSS 加载
    emotionEyes.on('cssLoaded', (emotion) => {
        console.log(`${emotion} 样式已加载`);
    });
}

// ============================================
// 动画序列示例
// ============================================

async function playEmotionStory() {
    const story = [
        { emotion: 'thinking', delay: 1000, text: '思考中...' },
        { emotion: 'surprised', delay: 1500, text: '哇！' },
        { emotion: 'happy', delay: 1500, text: '太好了！' },
        { emotion: 'love', delay: 2000, text: '我喜欢' },
        { emotion: 'happy', delay: 1500, text: '欢呼雀跃' }
    ];

    for (let step of story) {
        await emotionEyes.setEmotion(step.emotion);
        document.getElementById('story').textContent = step.text;
        await new Promise(resolve => setTimeout(resolve, step.delay));
    }
}

// ============================================
// 键盘快捷键示例
// ============================================

function setupKeyboardShortcuts() {
    const emotionMap = {
        '1': 'natural',
        '2': 'happy',
        '3': 'sad',
        '4': 'angry',
        '5': 'surprised',
        '6': 'thinking',
        '7': 'touched',
        '8': 'love',
        '9': 'crying',
        '0': 'disappointed'
    };

    document.addEventListener('keydown', (e) => {
        // 按 1-0 切换情感
        if (emotionMap[e.key]) {
            emotionEyes.setEmotion(emotionMap[e.key]);
        }

        // 按 R 随机情感
        if (e.key.toLowerCase() === 'r') {
            emotionEyes.randomEmotion();
        }

        // 按 Space 播放故事
        if (e.key === ' ') {
            playEmotionStory();
        }

        // 按 Delete 重置
        if (e.key === 'Delete') {
            emotionEyes.setEmotion('natural');
        }
    });

    console.log('快捷键: 1-0 切换情感 | R 随机 | Space 故事 | Delete 重置');
}

// ============================================
// 条件触发示例
// ============================================

class ChatBot {
    constructor(emotionEyes) {
        this.emotionEyes = emotionEyes;
    }

    async processInput(userMessage) {
        // 根据用户输入设置情感
        const lowerMsg = userMessage.toLowerCase();

        if (lowerMsg.includes('你好') || lowerMsg.includes('hi')) {
            await this.emotionEyes.setEmotion('happy');
            return '你好！很高兴认识你！😊';
        }

        if (lowerMsg.includes('难过') || lowerMsg.includes('悲伤')) {
            await this.emotionEyes.setEmotion('sad');
            return '我很遗憾听到这个消息... 😢';
        }

        if (lowerMsg.includes('?') || lowerMsg.includes('？')) {
            await this.emotionEyes.setEmotion('thinking');
            return '让我想想... 🤔';
        }

        if (lowerMsg.includes('!') || lowerMsg.includes('！')) {
            await this.emotionEyes.setEmotion('surprised');
            return '哇！这太棒了！😲';
        }

        if (lowerMsg.includes('爱') || lowerMsg.includes('喜欢')) {
            await this.emotionEyes.setEmotion('love');
            return '这让我感到特别呢... 💕';
        }

        // 默认表情
        await this.emotionEyes.setEmotion('natural');
        return '请继续...';
    }
}

// 使用
const chatBot = new ChatBot(emotionEyes);

async function sendMessage() {
    const input = document.getElementById('user-input');
    const response = await chatBot.processInput(input.value);
    console.log(response);
    input.value = '';
}

// ============================================
// 定时表情变化示例
// ============================================

function startIdleAnimation() {
    setInterval(async () => {
        // 随机切换表情（排除 glitch）
        const emotions = ['natural', 'happy', 'thinking', 'surprised'];
        const random = emotions[Math.floor(Math.random() * emotions.length)];
        
        await emotionEyes.setEmotion(random);
    }, 5000); // 每 5 秒变化一次
}

// ============================================
// WebSocket 示例
// ============================================

function setupWebSocketControl(wsUrl) {
    const socket = new WebSocket(wsUrl);

    socket.onopen = () => {
        console.log('WebSocket 已连接');
        emotionEyes.setEmotion('happy');
    };

    socket.onmessage = async (event) => {
        try {
            const data = JSON.parse(event.data);
            
            if (data.emotion) {
                await emotionEyes.setEmotion(data.emotion);
            }

            if (data.text) {
                console.log('收到消息:', data.text);
            }
        } catch (e) {
            console.error('解析消息失败:', e);
        }
    };

    socket.onerror = (error) => {
        console.error('WebSocket 错误:', error);
        emotionEyes.setEmotion('sad');
    };

    socket.onclose = () => {
        console.log('WebSocket 已关闭');
        emotionEyes.setEmotion('natural');
    };

    return socket;
}

// 导出函数供外部使用
window.EmotionDemos = {
    setupBasicControls,
    setupEventListeners,
    setupKeyboardShortcuts,
    playEmotionStory,
    ChatBot,
    sendMessage,
    startIdleAnimation,
    setupWebSocketControl,
    emotionEyes
};
