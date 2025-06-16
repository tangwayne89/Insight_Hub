// Newsletter Platform JavaScript

// Application data
const appData = {
  "articles": [
    {
      "id": 1,
      "title": "The Future of AI in Content Creation",
      "excerpt": "探索人工智慧如何革命性地改變內容創作領域，從自動化寫作到個人化推薦系統。",
      "date": "2025-06-14",
      "topic": "AI",
      "author": "Dr. Sarah Chen",
      "readTime": "5 min read"
    },
    {
      "id": 2,
      "title": "Blockchain Technology Revolutionizing Supply Chain",
      "excerpt": "深入了解區塊鏈技術如何提高供應鏈透明度和效率，創造更可信賴的商業環境。",
      "date": "2025-06-13",
      "topic": "Blockchain",
      "author": "Mike Johnson",
      "readTime": "7 min read"
    },
    {
      "id": 3,
      "title": "ESG Investment Trends in 2025",
      "excerpt": "分析ESG投資的最新趨勢，探討可持續發展如何成為企業成功的關鍵因素。",
      "date": "2025-06-12",
      "topic": "ESG",
      "author": "Lisa Wang",
      "readTime": "6 min read"
    },
    {
      "id": 4,
      "title": "Machine Learning in Financial Services",
      "excerpt": "了解機器學習如何改變金融服務業，從風險評估到客戶服務的全面革新。",
      "date": "2025-06-11",
      "topic": "AI",
      "author": "Robert Kim",
      "readTime": "8 min read"
    },
    {
      "id": 5,
      "title": "Decentralized Finance (DeFi) Explained",
      "excerpt": "深入探討去中心化金融的概念、優勢和挑戰，以及它對傳統金融系統的影響。",
      "date": "2025-06-10",
      "topic": "Blockchain",
      "author": "Alex Thompson",
      "readTime": "9 min read"
    },
    {
      "id": 6,
      "title": "Corporate Sustainability Reporting Standards",
      "excerpt": "解析最新的企業永續發展報告標準，幫助企業建立透明的ESG績效指標。",
      "date": "2025-06-09",
      "topic": "ESG",
      "author": "Emma Martinez",
      "readTime": "5 min read"
    }
  ],
  "topics": [
    {
      "name": "AI",
      "displayName": "人工智慧",
      "description": "最新的AI技術趨勢、應用案例和未來發展",
      "color": "#4F46E5",
      "subscribers": 12500
    },
    {
      "name": "Blockchain",
      "displayName": "區塊鏈",
      "description": "區塊鏈技術、加密貨幣和去中心化應用",
      "color": "#059669",
      "subscribers": 8900
    },
    {
      "name": "ESG",
      "displayName": "永續發展",
      "description": "環境、社會和治理相關的商業實踐",
      "color": "#DC2626",
      "subscribers": 15200
    },
    {
      "name": "Technology",
      "displayName": "科技趨勢",
      "description": "最新科技發展和創新應用",
      "color": "#7C2D12",
      "subscribers": 10800
    }
  ],
  "newsletterFrequencies": [
    {"value": "daily", "label": "每日", "description": "每天接收最新文章"},
    {"value": "weekly", "label": "每週", "description": "每週精選重點文章"},
    {"value": "monthly", "label": "每月", "description": "每月深度分析報告"}
  ],
  "sampleNewsletter": {
    "subject": "本週AI與區塊鏈精選 - InsightHub Newsletter",
    "date": "2025年6月15日",
    "personalizedIntro": "Hi Sarah, 基於您對AI和區塊鏈的興趣，我們為您精選了本週最值得關注的文章。",
    "featuredArticles": [
      {
        "title": "The Future of AI in Content Creation",
        "excerpt": "探索人工智慧如何革命性地改變內容創作領域...",
        "link": "#"
      },
      {
        "title": "Decentralized Finance (DeFi) Explained",
        "excerpt": "深入探討去中心化金融的概念、優勢和挑戰...",
        "link": "#"
      }
    ]
  }
};

// State management
let currentUser = null;
let currentFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    renderArticles();
    renderTopics();
    renderSubscriptionForm();
    setupEventListeners();
    
    // Load user data from memory (simulating persistence)
    const savedUser = getCurrentUser();
    if (savedUser) {
        currentUser = savedUser;
        renderDashboard();
    }
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            scrollToSection(target);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Article rendering and filtering
function renderArticles(filterTopic = 'all') {
    const articlesGrid = document.getElementById('articles-grid');
    const filteredArticles = filterTopic === 'all' 
        ? appData.articles 
        : appData.articles.filter(article => article.topic === filterTopic);
    
    articlesGrid.innerHTML = filteredArticles.map(article => {
        const topic = appData.topics.find(t => t.name === article.topic);
        return `
            <div class="article-card" data-topic="${article.topic}">
                <div class="article-topic" style="background-color: ${topic.color}15; color: ${topic.color}">
                    ${topic.displayName}
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <div class="article-author">${article.author}</div>
                    <div class="article-read-time">${article.readTime}</div>
                </div>
            </div>
        `;
    }).join('');
}

function setupArticleFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current filter and render articles
            currentFilter = filter;
            renderArticles(filter);
        });
    });
}

// Topic display
function renderTopics() {
    const topicsList = document.getElementById('topics-list');
    const topicCheckboxes = document.getElementById('topic-checkboxes');
    
    // Render topics preview
    topicsList.innerHTML = appData.topics.map(topic => `
        <div class="topic-preview">
            <div class="topic-color" style="background-color: ${topic.color}"></div>
            <div class="topic-info">
                <div class="topic-name">${topic.displayName}</div>
                <div class="topic-description">${topic.description}</div>
            </div>
            <div class="topic-subscribers">${topic.subscribers.toLocaleString()} 訂閱者</div>
        </div>
    `).join('');
    
    // Render topic checkboxes
    topicCheckboxes.innerHTML = appData.topics.map(topic => `
        <div class="checkbox-item">
            <input type="checkbox" id="topic-${topic.name}" name="topics" value="${topic.name}">
            <label for="topic-${topic.name}" class="checkbox-label">
                <div class="checkbox-name">${topic.displayName}</div>
                <div class="checkbox-description">${topic.description}</div>
            </label>
        </div>
    `).join('');
}

// Subscription form
function renderSubscriptionForm() {
    const form = document.getElementById('subscribe-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSubscription();
    });
}

function handleSubscription() {
    const form = document.getElementById('subscribe-form');
    const formData = new FormData(form);
    
    const email = formData.get('email');
    const frequency = formData.get('frequency');
    const selectedTopics = formData.getAll('topics');
    
    // Validate form
    if (!email || selectedTopics.length === 0) {
        alert('請填寫所有必填欄位');
        return;
    }
    
    // Create user subscription
    currentUser = {
        email: email,
        frequency: frequency,
        topics: selectedTopics,
        subscriptionDate: new Date().toISOString().split('T')[0],
        status: 'active'
    };
    
    // Save user (simulate persistence)
    saveCurrentUser(currentUser);

    // 新增：送資料到 n8n webhook
    fetch('https://waynetang.zeabur.app/webhook/7f609c50-3951-4b65-897d-3c4b020b9701', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            topics: selectedTopics,
            frequency: frequency,
            subscriptionDate: new Date().toISOString(),
            source: 'insight_hub_web'
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Webhook 發送失敗');
        // 可在這裡加上額外的 UI 提示
    })
    .catch(error => {
        alert('Webhook 發送失敗: ' + error.message);
    });
    
    // Show success message
    showSuccessToast();
    
    // Update dashboard
    renderDashboard();
    
    // Scroll to dashboard
    setTimeout(() => {
        scrollToSection('dashboard');
    }, 1000);
}

// Dashboard functionality
function renderDashboard() {
    const dashboardContent = document.getElementById('dashboard-content');
    
    if (!currentUser) {
        dashboardContent.innerHTML = `
            <div class="dashboard-placeholder">
                <p>請先完成訂閱以查看管理面板</p>
                <button class="btn btn--outline" onclick="scrollToSection('subscribe')">
                    前往訂閱
                </button>
            </div>
        `;
        return;
    }
    
    const frequencyLabel = appData.newsletterFrequencies.find(f => f.value === currentUser.frequency)?.label || currentUser.frequency;
    const subscribedTopicsInfo = currentUser.topics.map(topicName => {
        const topic = appData.topics.find(t => t.name === topicName);
        return topic ? { name: topic.displayName, color: topic.color } : null;
    }).filter(Boolean);
    
    dashboardContent.innerHTML = `
        <div class="dashboard-active">
            <div class="dashboard-card">
                <h3>訂閱資訊</h3>
                <div class="subscription-info">
                    <div class="info-item">
                        <span class="info-label">電子郵件</span>
                        <span class="info-value">${currentUser.email}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">接收頻率</span>
                        <span class="info-value">${frequencyLabel}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">訂閱日期</span>
                        <span class="info-value">${currentUser.subscriptionDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">狀態</span>
                        <span class="status status--success">活躍</span>
                    </div>
                </div>
                <div class="dashboard-actions">
                    <button class="btn btn--outline btn--sm" onclick="showNewsletterPreview()">
                        預覽電子報
                    </button>
                    <button class="btn btn--outline btn--sm" onclick="modifySubscription()">
                        修改設定
                    </button>
                </div>
            </div>
            
            <div class="dashboard-card">
                <h3>訂閱議題</h3>
                <div class="subscribed-topics">
                    ${subscribedTopicsInfo.map(topic => `
                        <span class="subscribed-topic" style="background-color: ${topic.color}15; color: ${topic.color}">
                            ${topic.name}
                        </span>
                    `).join('')}
                </div>
                <div class="dashboard-actions">
                    <button class="btn btn--secondary btn--sm" onclick="unsubscribe()">
                        取消訂閱
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Newsletter preview modal
function showNewsletterPreview() {
    const modal = document.getElementById('newsletter-modal');
    const preview = document.getElementById('newsletter-preview');
    
    // Generate personalized newsletter content
    const userTopics = currentUser.topics;
    const relevantArticles = appData.articles.filter(article => 
        userTopics.includes(article.topic)
    ).slice(0, 3);
    
    const topicNames = userTopics.map(topicName => {
        const topic = appData.topics.find(t => t.name === topicName);
        return topic ? topic.displayName : topicName;
    }).join('與');
    
    preview.innerHTML = `
        <div class="newsletter-header">
            <div class="newsletter-subject">本週${topicNames}精選 - InsightHub Newsletter</div>
            <div class="newsletter-date">${new Date().toLocaleDateString('zh-TW')}</div>
        </div>
        
        <div class="newsletter-intro">
            Hi ${currentUser.email.split('@')[0]}, 基於您對${topicNames}的興趣，我們為您精選了本週最值得關注的文章。
        </div>
        
        <div class="newsletter-articles">
            ${relevantArticles.map(article => `
                <div class="newsletter-article">
                    <h4>${article.title}</h4>
                    <p>${article.excerpt}</p>
                    <small>作者: ${article.author} | ${article.readTime}</small>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('newsletter-modal');
    modal.classList.remove('active');
}

// Utility functions
function modifySubscription() {
    scrollToSection('subscribe');
    
    // Pre-fill form with current data
    document.getElementById('email').value = currentUser.email;
    document.getElementById('frequency').value = currentUser.frequency;
    
    // Check current topics
    currentUser.topics.forEach(topicName => {
        const checkbox = document.getElementById(`topic-${topicName}`);
        if (checkbox) {
            checkbox.checked = true;
        }
    });
}

function unsubscribe() {
    if (confirm('確定要取消訂閱嗎？')) {
        currentUser = null;
        clearCurrentUser();
        renderDashboard();
        showToast('已成功取消訂閱', 'info');
    }
}

function showSuccessToast() {
    const toast = document.getElementById('success-toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('success-toast');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Simulated persistence (in real app, this would use a backend)
function saveCurrentUser(user) {
    // In a real application, this would save to a database
    window.newsletterUser = user;
}

function getCurrentUser() {
    // In a real application, this would load from a database
    return window.newsletterUser || null;
}

function clearCurrentUser() {
    // In a real application, this would clear from database
    delete window.newsletterUser;
}

// Setup all event listeners
function setupEventListeners() {
    setupArticleFilters();
    
    // Modal close on overlay click
    document.getElementById('newsletter-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scrolling for internal links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = e.target.getAttribute('href').substring(1);
            scrollToSection(target);
        }
    });
}