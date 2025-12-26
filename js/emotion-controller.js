/**
 * Emotion Controller - 情感表情控制器
 * 
 * 一个强大的 JavaScript 控制器，用于管理和切换虚拟角色的情感表达
 * 
 * @version 1.0.0
 * @author Echo Team
 * @email yoahoug@gmail.com
 */

class EmotionController {
    constructor(faceSelector, options = {}) {
        // 解析目标元素
        this.faceElement = typeof faceSelector === 'string'
            ? document.querySelector(faceSelector)
            : faceSelector;

        if (!this.faceElement) {
            console.error('Face element not found:', faceSelector);
            return;
        }

        // 默认配置
        this.config = {
            emotionDir: './emotions/',
            transitionTime: 300,
            autoLoadCSS: true,
            randomExclude: [],
            defaultEmotion: 'natural',
            ...options
        };

        // 状态管理
        this.currentEmotion = this.config.defaultEmotion;
        this.isTransitioning = false;
        this.loadedStyles = new Set();
        this.eventListeners = {};

        // 预定义的情感列表
        this.emotions = [
            'natural', 'happy', 'sad', 'angry', 'surprised',
            'thinking', 'touched', 'love', 'crying', 'disappointed',
            'reject', 'glitch'
        ];

        // 初始化
        this.init();
    }

    /**
     * 初始化控制器
     */
    async init() {
        // 设置初始情感
        if (this.config.autoLoadCSS) {
            await this.loadEmotionCSS(this.config.defaultEmotion);
        }
        this.faceElement.classList.add(this.config.defaultEmotion);
    }

    /**
     * 设置情感表达
     * @param {string} emotion - 情感名称
     * @param {number} variant - 变体编号 (1-3)
     */
    async setEmotion(emotion, variant = 1) {
        if (this.isTransitioning) return;

        // 验证情感名称
        if (!this.emotions.includes(emotion)) {
            console.warn(`Unknown emotion: ${emotion}`);
            return;
        }

        // 触发过渡开始事件
        this.emit('transitionStart', emotion);

        this.isTransitioning = true;

        // 移除旧情感类名
        const oldEmotion = this.currentEmotion;
        Array.from(this.faceElement.classList).forEach(cls => {
            if (cls !== 'face' && this.emotions.includes(cls)) {
                this.faceElement.classList.remove(cls);
            }
        });

        // 加载新情感 CSS
        if (this.config.autoLoadCSS) {
            await this.loadEmotionCSS(emotion, variant);
        }

        // 添加新情感类名
        this.faceElement.classList.add(emotion);

        // 更新状态
        this.currentEmotion = emotion;

        // 模拟过渡时间
        await new Promise(resolve => setTimeout(resolve, this.config.transitionTime));

        this.isTransitioning = false;

        // 触发事件
        this.emit('emotionChanged', emotion, oldEmotion);
        this.emit('transitionEnd', emotion);
    }

    /**
     * 获取当前情感
     */
    getEmotion() {
        return this.currentEmotion;
    }

    /**
     * 随机切换情感
     */
    async randomEmotion() {
        let availableEmotions = this.emotions.filter(
            e => !this.config.randomExclude.includes(e)
        );
        const randomEmotion = availableEmotions[
            Math.floor(Math.random() * availableEmotions.length)
        ];
        const randomVariant = Math.ceil(Math.random() * 3);
        await this.setEmotion(randomEmotion, randomVariant);
        return randomEmotion;
    }

    /**
     * 按顺序播放情感序列
     * @param {Array} emotions - 情感名称数组
     * @param {number} delay - 延迟时间 (ms)
     */
    async playSequence(emotions, delay = 1000) {
        for (let emotion of emotions) {
            await this.setEmotion(emotion);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    /**
     * 加载情感 CSS 文件
     * @param {string} emotion - 情感名称
     * @param {number} variant - 变体编号
     */
    async loadEmotionCSS(emotion, variant = 1) {
        const styleId = `emotion-${emotion}-${variant}`;

        // 避免重复加载
        if (this.loadedStyles.has(styleId)) {
            this.emit('cssLoaded', emotion);
            return;
        }

        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `${this.config.emotionDir}${emotion}/${emotion}_${variant}.css`;
            link.id = styleId;

            link.onload = () => {
                this.loadedStyles.add(styleId);
                this.emit('cssLoaded', emotion);
                resolve();
            };

            link.onerror = () => {
                console.warn(`Failed to load: ${link.href}`);
                reject(new Error(`Failed to load emotion CSS: ${emotion}`));
            };

            document.head.appendChild(link);
        });
    }

    /**
     * 设置情感回调
     * @param {string} emotion - 情感名称
     * @param {Function} callback - 回调函数
     */
    setEmotionCallback(emotion, callback) {
        this.on('emotionChanged', (newEmotion, oldEmotion) => {
            if (newEmotion === emotion) {
                callback();
            }
        });
    }

    /**
     * 监听事件
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     */
    on(event, callback) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(callback);
    }

    /**
     * 取消监听事件
     * @param {string} event - 事件名称
     * @param {Function} callback - 回调函数
     */
    off(event, callback) {
        if (!this.eventListeners[event]) return;
        this.eventListeners[event] = this.eventListeners[event].filter(
            cb => cb !== callback
        );
    }

    /**
     * 触发事件
     * @param {string} event - 事件名称
     * @param {...any} args - 参数
     */
    emit(event, ...args) {
        if (!this.eventListeners[event]) return;
        this.eventListeners[event].forEach(callback => {
            callback(...args);
        });
    }

    /**
     * 获取所有可用情感
     */
    getAvailableEmotions() {
        return [...this.emotions];
    }

    /**
     * 预加载常用情感
     * @param {Array} emotionsList - 情感列表
     */
    async preloadEmotions(emotionsList = ['happy', 'sad', 'thinking']) {
        return Promise.all(
            emotionsList.map(emotion => this.loadEmotionCSS(emotion, 1))
        );
    }

    /**
     * 销毁控制器
     */
    destroy() {
        // 移除已加载的样式
        this.loadedStyles.forEach(styleId => {
            const element = document.getElementById(styleId);
            if (element) element.remove();
        });

        // 清空事件监听
        this.eventListeners = {};

        // 移除面部类名
        Array.from(this.faceElement.classList).forEach(cls => {
            if (cls !== 'face') {
                this.faceElement.classList.remove(cls);
            }
        });
    }

    /**
     * 获取统计信息
     */
    getStats() {
        return {
            currentEmotion: this.currentEmotion,
            isTransitioning: this.isTransitioning,
            loadedStylesCount: this.loadedStyles.size,
            availableEmotionsCount: this.emotions.length,
            config: this.config
        };
    }
}

// 导出到全局作用域（用于浏览器）
if (typeof window !== 'undefined') {
    window.EmotionController = EmotionController;
}

// 导出到 Node.js（用于模块化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmotionController;
}
