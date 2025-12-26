"""
Flask 集成示例
==============

这个示例展示如何在 Flask 应用中整合 HTML Emotion Eyes

安装依赖:
    pip install flask

运行:
    python flask_integration.py

访问: http://localhost:5000
"""

from flask import Flask, render_template, jsonify, request
import os
import random

app = Flask(__name__, 
            static_folder='../../',  # 调整为实际的 emotions 文件夹位置
            static_url_path='/static')

# ============================================
# 情感数据库
# ============================================

EMOTIONS_DB = {
    'happy': {
        'name': '开心',
        'description': '充满喜悦和快乐',
        'color': '#FFD700',
        'icon': '😊'
    },
    'sad': {
        'name': '伤心',
        'description': '感到沮丧和难过',
        'color': '#4169E1',
        'icon': '😢'
    },
    'thinking': {
        'name': '思考',
        'description': '正在思考问题',
        'color': '#FFB6C1',
        'icon': '🤔'
    },
    'angry': {
        'name': '愤怒',
        'description': '感到生气和不满',
        'color': '#FF4500',
        'icon': '😠'
    },
    'surprised': {
        'name': '惊讶',
        'description': '感到震惊和意外',
        'color': '#FF69B4',
        'icon': '😲'
    },
    'love': {
        'name': '爱慕',
        'description': '充满爱意和陶醉',
        'color': '#FF1493',
        'icon': '💕'
    },
    'natural': {
        'name': '自然',
        'description': '平静和放松的状态',
        'color': '#00CED1',
        'icon': '😐'
    }
}

# ============================================
# 路由
# ============================================

@app.route('/')
def index():
    """主页 - 演示页面"""
    emotions = list(EMOTIONS_DB.keys())
    return render_template('chat.html', emotions=emotions)


@app.route('/api/emotions', methods=['GET'])
def get_emotions():
    """获取所有可用情感"""
    return jsonify({
        'emotions': EMOTIONS_DB,
        'count': len(EMOTIONS_DB)
    })


@app.route('/api/emotion/<emotion_name>', methods=['GET'])
def get_emotion_info(emotion_name):
    """获取特定情感的信息"""
    if emotion_name in EMOTIONS_DB:
        return jsonify(EMOTIONS_DB[emotion_name])
    return jsonify({'error': 'Emotion not found'}), 404


@app.route('/api/random-emotion', methods=['GET'])
def get_random_emotion():
    """获取随机情感"""
    emotion = random.choice(list(EMOTIONS_DB.keys()))
    return jsonify({
        'emotion': emotion,
        'info': EMOTIONS_DB[emotion]
    })


@app.route('/api/process-message', methods=['POST'])
def process_message():
    """处理用户消息并返回相应情感"""
    data = request.json
    message = data.get('message', '').lower()
    
    # 简单的情感分析
    emotion = analyze_sentiment(message)
    
    return jsonify({
        'emotion': emotion,
        'info': EMOTIONS_DB.get(emotion, {})
    })


@app.route('/api/story', methods=['GET'])
def get_emotion_story():
    """获取情感故事序列"""
    story_sequence = [
        {'emotion': 'thinking', 'text': '思考中...', 'duration': 1000},
        {'emotion': 'surprised', 'text': '哇！', 'duration': 1500},
        {'emotion': 'happy', 'text': '太好了！', 'duration': 1500},
        {'emotion': 'love', 'text': '我喜欢', 'duration': 2000},
        {'emotion': 'happy', 'text': '欢呼雀跃', 'duration': 1500},
        {'emotion': 'natural', 'text': '完成', 'duration': 1000}
    ]
    
    return jsonify({'story': story_sequence})


# ============================================
# 辅助函数
# ============================================

def analyze_sentiment(text):
    """简单的情感分析"""
    happy_words = ['好', '棒', '太好', '开心', '快乐', '喜欢', 'good', 'great', 'excellent']
    sad_words = ['坏', '难过', '伤心', '失望', '讨厌', 'bad', 'sad', 'terrible']
    angry_words = ['气', '怒', '讨厌', 'angry', 'hate', 'mad']
    surprise_words = ['哇', '天哪', '真的', 'wow', 'really', 'omg']
    
    if any(word in text for word in happy_words):
        return 'happy'
    elif any(word in text for word in sad_words):
        return 'sad'
    elif any(word in text for word in angry_words):
        return 'angry'
    elif any(word in text for word in surprise_words):
        return 'surprised'
    elif '?' in text or '？' in text:
        return 'thinking'
    else:
        return 'natural'


# ============================================
# 错误处理
# ============================================

@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Not Found'}), 404


@app.errorhandler(500)
def server_error(e):
    return jsonify({'error': 'Server Error'}), 500


# ============================================
# 主程序
# ============================================

if __name__ == '__main__':
    print("""
    ╔════════════════════════════════════════╗
    ║   Flask Emotion Eyes Integration       ║
    ║   http://localhost:5000                ║
    ╚════════════════════════════════════════╝
    """)
    app.run(debug=True, port=5000)
