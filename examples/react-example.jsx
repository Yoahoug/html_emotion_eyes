import React, { useEffect, useRef } from 'react';
import '../../css/core.css';
import '../../emotions/happy/happy_1.css';

/**
 * React 集成示例
 * 
 * 使用方式：
 * <EmotionEyes emotion="happy" />
 */

export function EmotionEyes({ emotion = 'natural', variant = 1 }) {
    const faceRef = useRef(null);
    const controllerRef = useRef(null);

    useEffect(() => {
        // 导入控制器（需要在项目中安装）
        const EmotionController = window.EmotionController;
        
        if (!EmotionController) {
            console.error('EmotionController not found. Please include emotion-controller.js');
            return;
        }

        // 创建控制器实例
        controllerRef.current = new EmotionController(faceRef.current, {
            emotionDir: '/emotions/',
            autoLoadCSS: true
        });

        return () => {
            // 清理
            if (controllerRef.current) {
                controllerRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        // 当 emotion prop 改变时更新表情
        if (controllerRef.current) {
            controllerRef.current.setEmotion(emotion, variant);
        }
    }, [emotion, variant]);

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

/**
 * 高级用法示例 - 包含按钮控制
 */
export function EmotionEyesWithControls() {
    const [emotion, setEmotion] = React.useState('natural');

    const emotions = ['natural', 'happy', 'sad', 'angry', 'surprised', 'thinking'];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <EmotionEyes emotion={emotion} />
            
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {emotions.map(e => (
                    <button
                        key={e}
                        onClick={() => setEmotion(e)}
                        style={{
                            padding: '10px 15px',
                            background: emotion === e ? '#667eea' : '#ccc',
                            color: emotion === e ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            textTransform: 'capitalize'
                        }}
                    >
                        {e}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default EmotionEyes;
