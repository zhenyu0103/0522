// 初始化 Swiper 輪播
document.addEventListener('DOMContentLoaded', function() {
    // 輪播圖初始化
    const swiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 初始化 AOS 動畫
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // 最新消息資料
    const newsData = {
        announcement: [
            {
                date: '2025-05-21',
                department: '學務處-生輔組',
                title: '三年級缺曠課及請假注意事項',
                link: '#'
            },
            {
                date: '2025-05-20',
                department: '教務處-設備組',
                title: '科學大師講座在家齊報名囉!(今年請到中央研究院廖俊智院長)',
                link: '#'
            },
            {
                date: '2025-05-20',
                department: '圖書館-資訊媒體組',
                title: '校園資訊安全與個資保護',
                link: '#'
            }
        ],
        competition: [
            {
                date: '2025-05-19',
                department: '圖書館',
                title: '恭賀! 本校學生參與第1140310梯中學生網站閱讀心得寫作比賽，總計8件作品得獎，特優1篇、優等1篇、甲等6篇',
                link: '#'
            },
            {
                date: '2025-05-19',
                department: '教務處',
                title: '【賀】本校高302班薛怡婷同學經由114學年度希望入學錄取台大經濟學系',
                link: '#'
            },
            {
                date: '2025-05-18',
                department: '教務處',
                title: '高二1雙語實驗班參加書林第13屆全國高中職英文閱讀心得比賽榮獲佳績',
                link: '#'
            }
        ],
        study: [
            {
                date: '2025-05-20',
                department: '輔導處',
                title: '烏克蘭街訪&紀錄片放映＋映後talk-第二波報名-場地調整至演藝廳',
                link: '#'
            },
            {
                date: '2025-05-20',
                department: '教務處',
                title: '財團法人人智學教育基金會 2025第三屆青年哲學體驗營活動',
                link: '#'
            },
            {
                date: '2025-05-19',
                department: '輔導處',
                title: '112-2學期生涯講座：醫療專業學群分享',
                link: '#'
            }
        ],
        entrance: [
            {
                date: '2025-05-19',
                department: '教務處',
                title: '114學年度大學個人申請入學第二階段甄試重要提醒',
                link: '#'
            },
            {
                date: '2025-05-18',
                department: '教務處',
                title: '114學年度科技校院繁星計畫聯合推薦甄選入學錄取名單',
                link: '#'
            },
            {
                date: '2025-05-17',
                department: '教務處',
                title: '114學年度四技二專甄選入學招生簡章公告',
                link: '#'
            }
        ]
    };

    // 載入最新消息
    function loadNews(category) {
        const newsContainer = document.getElementById(category);
        const news = newsData[category];
        
        if (newsContainer && news) {
            let html = '<div class="list-group">';
            news.forEach(item => {
                html += `
                    <a href="${item.link}" class="list-group-item list-group-item-action">
                        <div class="d-flex w-100 justify-content-between">
                            <h6 class="mb-1">${item.title}</h6>
                            <small class="text-nowrap ms-2">${item.date}</small>
                        </div>
                        <small class="text-muted">${item.department}</small>
                    </a>
                `;
            });
            html += '</div>';
            newsContainer.innerHTML = html;
        }
    }

    // 初始載入所有分類的新聞
    loadNews('announcement');
    loadNews('competition');
    loadNews('study');
    loadNews('entrance');

    // 監聽分頁切換事件
    document.querySelectorAll('a[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener('shown.bs.tab', function(event) {
            const target = event.target.getAttribute('href').replace('#', '');
            loadNews(target);
        });
    });

    // 搜尋功能
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            Object.keys(newsData).forEach(category => {
                const filteredNews = newsData[category].filter(item =>
                    item.title.toLowerCase().includes(searchTerm) ||
                    item.department.toLowerCase().includes(searchTerm)
                );
                const newsContainer = document.getElementById(category);
                if (newsContainer) {
                    let html = '<div class="list-group">';
                    filteredNews.forEach(item => {
                        html += `
                            <a href="${item.link}" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-1">${item.title}</h6>
                                    <small class="text-nowrap ms-2">${item.date}</small>
                                </div>
                                <small class="text-muted">${item.department}</small>
                            </a>
                        `;
                    });
                    html += '</div>';
                    newsContainer.innerHTML = html;
                }
            });
        });
    }
});