// Newsletter Platform JavaScript

// Application data
const appData = {
  "articles": [
    {
      "id": 1,
      "title": "全球企業轉守為攻，AI 變現能力成生存關鍵",
      "excerpt": "根據 BCG 和 Bloomberg 的「CEO Radar Q4 2025」報告，企業領導層正在進行決定性的戰略轉向。在經歷數月的防禦姿態後，CEO 們現在轉向以增長為重點的進攻策略。",
      "date": "2025-06-14",
      "topic": "AI",
      "author": "Jocelyn",
      "readTime": "8 min read",
      "fullContent": {
        "source": "https://sponsored.bloomberg.com/immersive-story/bcg/the-ceo-radar-q4-2025",
        "sections": [
          {
            "title": "一、新聞快讀 (What Happened)",
            "content": "Global CEOs Shift Strategy: Prioritizing Growth Amidst Uncertainty\n\nAccording to the \"CEO Radar Q4 2025\" report released by Boston Consulting Group (BCG) and Bloomberg, corporate leadership is undergoing a decisive strategic pivot. After months of adopting a defensive posture due to tariff volatility and recession concerns, CEOs are now shifting towards an offensive strategy focused on growth.\n\nWhile trade uncertainties persist, mentions of defensive topics like \"Economic Slowdown\" have dropped significantly. Instead, discussions on earnings calls are increasingly centered on internal performance drivers, with mentions of Artificial Intelligence (AI) reaching historical highs. However, the report identifies a widening \"AI value gap.\" Only 5% of companies are classified as \"AI-Future Built,\" effectively scaling technology to achieve measurable Return on Investment (ROI). The majority of firms remain in the pilot phase, facing pressure from analysts to demonstrate how their tech investments are optimizing operations and supply chains."
          },
          {
            "title": "二、關鍵字小百科 (Vibin Dictionary)",
            "content": "1. AI Value Gap (AI 價值鴻溝)\n• English Definition: The strategic disparity between companies that have successfully scaled AI integration to generate tangible business value and those that have stalled at the experimental stage.\n• 解釋：指企業在 AI 應用上的效益落差。領先企業已將 AI 整合進核心業務流程（如動態定價、供應鏈預測）並產生獲利；而落後企業仍停留在測試階段，尚未能透過 AI 創造實質的營收增長或成本優化。\n\n2. ROI - Return on Investment (投資報酬率)\n• English Definition: A key performance metric used to evaluate the efficiency of an investment. In the context of AI, it refers to the quantifiable financial gain relative to the cost of technology implementation.\n• 解釋：衡量投資效益的關鍵指標。在 AI 領域，市場已不再滿足於技術的創新性，轉而嚴格審視投入的資金是否能轉化為具體的財務回報（如節省多少工時、增加多少營收）。\n\n3. Tariff Policy (關稅政策)\n• English Definition: Government-imposed taxes on imported goods. The report notes a decline in mentions of this topic, suggesting that businesses have incorporated trade volatility into their standard risk models rather than viewing it as an unforeseen shock.\n• 解釋：政府對進口貨品徵收的稅金。雖然貿易壁壘依然存在，但企業提及頻率下降，顯示企業已將「關稅變動」視為營運成本結構的一部分，並透過多元化供應鏈等策略進行了風險對沖。"
          },
          {
            "title": "三、團隊洞察 (Vibin Insight)",
            "content": "(1) AI 專家 (The AI Expert) 解析：\n從「技術驗證」走向「營運規模化」\n\n「報告中提到的『只有 5% 企業屬於 AI-Future Built』，反映了 AI 發展已進入深水區（Deep Water Zone）。前兩年，企業多處於 Proof of Concept (PoC，概念驗證) 階段，重點在於測試技術可行性。然而，2025 年 Q4 的數據顯示，資本市場的評估標準已發生質變。\n\n目前的產業痛點在於『規模化難題 (Scalability Challenge)』。許多 AI 模型在實驗室環境表現優異，但要部署到複雜的供應鏈或即時生產線時，面臨了資料治理（Data Governance）不全、算力成本過高以及與舊系統整合困難等問題。\n\n這對台灣科技產業的啟示是：未來的競爭力將取決於『AI 工程化能力』。意即，如何將一個 AI 模型轉化為穩定、可維護且具備正向 ROI 的軟體產品。懂模型架構只是基礎，能解決算力優化、資料管線（Data Pipeline）自動化的人才，才是縮小價值鴻溝的關鍵。」\n\n(2) 外交官 (The Diplomat) 解析：\n風險定價後的「戰略常態化」\n\n「報告指出北美企業對『關稅政策』的提及率下降 32%，這不應被解讀為地緣政治風險的消失，而是風險的『內部化 (Internalization)』與『定價 (Pricing-in)』。\n\n美國於 2025 年通過的《One Big Beautiful Bill Act》等法案，顯示保護主義已成結構性現實。CEO 們不再將每次的關稅變動視為突發危機，而是將其納入常態性的營運風險評估模型中。企業的戰略重心已從『預測政治動向』轉移至『建立韌性供應鏈』。\n\n對於台灣供應鏈而言，這意味著客戶將提出更嚴格的『供應鏈多元化』與『產地合規』要求。台灣企業必須具備更靈活的全球佈局能力，並能利用數據證明其供應鏈在極端地緣政治情境下，仍具備不中斷的交付韌性。」"
          },
          {
            "title": "四、給讀者的思考 (Takeaway)",
            "content": "不要花時間焦慮那些你無法改變的大環境（如關稅、經濟衰退），去精進那些你能控制的技能（如 AI 應用、跨領域整合）。未來的職場，不獎勵「擔憂的人」，只獎勵「在混亂中還能交出成績單的人」。"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": "Machine Learning in Financial Services",
      "excerpt": "了解機器學習如何改變金融服務業，從風險評估到客戶服務的全面革新。",
      "date": "2025-06-11",
      "topic": "AI",
      "author": "Robert Kim",
      "readTime": "8 min read"
    },
    {
      "id": 3,
      "title": "AI-Powered Healthcare Innovations",
      "excerpt": "探討人工智慧在醫療領域的最新應用，從診斷輔助到藥物研發的突破性進展。",
      "date": "2025-06-10",
      "topic": "AI",
      "author": "Dr. James Lee",
      "readTime": "6 min read"
    },
    {
      "id": 4,
      "title": "新加坡2025年經濟展望",
      "excerpt": "分析新加坡經濟發展趨勢，探討數位轉型和綠色經濟對未來成長的影響。",
      "date": "2025-06-13",
      "topic": "Singapore",
      "author": "陳文華",
      "readTime": "7 min read"
    },
    {
      "id": 5,
      "title": "新加坡智慧城市發展新動向",
      "excerpt": "深入了解新加坡如何運用科技打造更智慧、更宜居的城市環境，從交通到能源管理的創新應用。",
      "date": "2025-06-12",
      "topic": "Singapore",
      "author": "林美玲",
      "readTime": "5 min read"
    },
    {
      "id": 6,
      "title": "新加坡教育政策最新調整",
      "excerpt": "解析新加坡教育體系的最新改革，探討如何培養適應未來社會的人才。",
      "date": "2025-06-09",
      "topic": "Singapore",
      "author": "王建國",
      "readTime": "6 min read"
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
      "name": "Singapore",
      "displayName": "新加坡新聞",
      "description": "新加坡最新時事、政策動態和社會發展",
      "color": "#059669",
      "subscribers": 8900
    }
  ],
  "newsletterFrequencies": [
    {"value": "daily", "label": "每日", "description": "每天接收最新文章"},
    {"value": "weekly", "label": "每週", "description": "每週精選重點文章"},
    {"value": "monthly", "label": "每月", "description": "每月深度分析報告"}
  ],
  "sampleNewsletter": {
    "subject": "本週AI與新加坡新聞精選 - VibinNews Newsletter",
    "date": "2025年6月15日",
    "personalizedIntro": "Hi Sarah, 基於您對AI和新加坡新聞的興趣，我們為您精選了本週最值得關注的文章。",
    "featuredArticles": [
      {
        "title": "The Future of AI in Content Creation",
        "excerpt": "探索人工智慧如何革命性地改變內容創作領域...",
        "link": "#"
      },
      {
        "title": "新加坡2025年經濟展望",
        "excerpt": "分析新加坡經濟發展趨勢，探討數位轉型和綠色經濟...",
        "link": "#"
      }
    ]
  }
};

// State management
let currentUser = null;
let currentFilter = 'all';

// Utility functions for detecting platform and country
function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }
    if (/android/i.test(userAgent)) {
        return 'Android';
    }
    if (/Mac/.test(navigator.platform)) {
        return 'macOS';
    }
    if (/Win/.test(navigator.platform)) {
        return 'Windows';
    }
    if (/Linux/.test(navigator.platform)) {
        return 'Linux';
    }
    return 'Unknown';
}

function detectCountry() {
    // Try to get country from browser language/locale
    const locale = navigator.language || navigator.userLanguage || 'en-US';
    const countryCode = locale.split('-')[1] || locale.split('_')[1] || '';
    
    // Map common country codes
    const countryMap = {
        'TW': 'TW', 'SG': 'SG', 'HK': 'HK', 'CN': 'CN',
        'US': 'US', 'JP': 'JP', 'KR': 'KR', 'MY': 'MY',
        'TH': 'TH', 'VN': 'VN', 'PH': 'PH', 'ID': 'ID',
        'AU': 'AU', 'NZ': 'NZ', 'GB': 'GB', 'CA': 'CA'
    };
    
    return countryMap[countryCode] || countryCode || 'Unknown';
}

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
        const hasFullContent = article.fullContent ? 'data-has-content="true"' : '';
        const clickHandler = article.fullContent ? `onclick="showArticleModal(${article.id})"` : '';
        return `
            <div class="article-card" data-topic="${article.topic}" data-article-id="${article.id}" ${hasFullContent} ${clickHandler}>
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
    
    // Render topics preview (不再需要 checkbox，因為是固定訂閱兩個主題)
    topicsList.innerHTML = appData.topics.map(topic => `
        <div class="topic-card" style="border-color: ${topic.color}40;">
            <div class="topic-card-header" style="background-color: ${topic.color}15;">
                <div class="topic-color" style="background-color: ${topic.color}"></div>
                <div class="topic-name">${topic.displayName}</div>
            </div>
            <div class="topic-card-body">
                <p class="topic-description">${topic.description}</p>
            </div>
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
    const frequency = 'weekly'; // 固定為每週
    // 自動檢測平台和國家
    const platform = detectPlatform();
    const country = detectCountry();
    // 自動訂閱 AI 和新加坡新聞兩個主題
    const selectedTopics = ['AI', 'Singapore'];
    
    // Validate form
    if (!email) {
        alert('請填寫電子郵件地址');
        return;
    }
    
    // Create user subscription
    currentUser = {
        email: email,
        frequency: frequency,
        platform: platform,
        country: country,
        topics: selectedTopics,
        subscriptionDate: new Date().toISOString().split('T')[0],
        status: 'active'
    };
    
    // Save user (simulate persistence)
    saveCurrentUser(currentUser);

    // 新增：送資料到 n8n webhook
    // 注意：platform 和 country 同時放在 body 和 headers 中
    // - body 中的用於 n8n 配置從 body 讀取的情況
    // - headers 中的用於 n8n 配置從 headers 讀取的情況（如 sec-ch-ua-platform 和 x-zeabur-ip-country）
    const requestHeaders = {
        'Content-Type': 'application/json',
        // 將 platform 放入 headers（n8n 可能從 sec-ch-ua-platform 讀取）
        'sec-ch-ua-platform': platform,
        // 將 country 放入 headers（n8n 可能從 x-zeabur-ip-country 讀取）
        'x-zeabur-ip-country': country
    };
    
    fetch('https://waynetang.zeabur.app/webhook/7f609c50-3951-4b65-897d-3c4b020b9701', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
            email: email,
            topics: selectedTopics,
            frequency: frequency,
            platform: platform,  // 保留在 body 中作為備用
            country: country,     // 保留在 body 中作為備用
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
            <div class="newsletter-subject">本週${topicNames}精選 - VibinNews Newsletter</div>
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

// Article full content modal
function showArticleModal(articleId) {
    const article = appData.articles.find(a => a.id === articleId);
    if (!article || !article.fullContent) return;
    
    const modal = document.getElementById('article-modal');
    const titleElement = document.getElementById('article-modal-title');
    const contentElement = document.getElementById('article-full-content');
    const topic = appData.topics.find(t => t.name === article.topic);
    
    titleElement.textContent = article.title;
    
    let contentHTML = `
        <div class="article-header">
            <div class="article-meta-full">
                <span class="article-topic-badge" style="background-color: ${topic.color}15; color: ${topic.color}">
                    ${topic.displayName}
                </span>
                <span class="article-author-full">作者：${article.author}</span>
                <span class="article-date-full">${article.date}</span>
                <span class="article-read-time-full">${article.readTime}</span>
            </div>
            ${article.fullContent.source ? `<div class="article-source"><a href="${article.fullContent.source}" target="_blank" rel="noopener noreferrer">查看原文連結</a></div>` : ''}
        </div>
        <div class="article-excerpt-full">
            <p>${article.excerpt}</p>
        </div>
    `;
    
    if (article.fullContent.sections && article.fullContent.sections.length > 0) {
        article.fullContent.sections.forEach(section => {
            contentHTML += `
                <div class="article-section">
                    <h4 class="section-title">${section.title}</h4>
                    <div class="section-content">${formatArticleContent(section.content)}</div>
                </div>
            `;
        });
    }
    
    contentElement.innerHTML = contentHTML;
    modal.classList.add('active');
}

function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
}

function formatArticleContent(content) {
    // 转义 HTML 特殊字符
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    
    // 将内容按双换行分割成段落
    const paragraphs = content.split('\n\n').filter(p => p.trim() !== '');
    
    return paragraphs.map(paragraph => {
        const trimmed = paragraph.trim();
        // 将单换行转换为 <br>，但保持列表格式
        const lines = trimmed.split('\n').map(line => escapeHtml(line.trim()));
        return `<p>${lines.join('<br>')}</p>`;
    }).join('');
}

// Utility functions
function modifySubscription() {
    scrollToSection('subscribe');
    
    // Pre-fill form with current data
    document.getElementById('email').value = currentUser.email;
    // 頻率固定為每週，無需設置
    
    // 主題已固定為 AI 和新加坡新聞，無需設置 checkbox
    // Platform 和 Country 會自動檢測，無需手動設置
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
    
    document.getElementById('article-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeArticleModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const newsletterModal = document.getElementById('newsletter-modal');
            const articleModal = document.getElementById('article-modal');
            if (newsletterModal.classList.contains('active')) {
                closeModal();
            }
            if (articleModal.classList.contains('active')) {
                closeArticleModal();
            }
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