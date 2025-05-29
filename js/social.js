document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // 載入 YouTube 影片
    loadYouTubeVideos();
});

// 載入 YouTube 影片
function loadYouTubeVideos() {
    // 這裡應該使用 YouTube API 獲取實際的影片資料
    const videos = [
        {
            id: 'video1',
            title: '2025年校慶活動精華',
            thumbnail: 'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/265/pho1.jpg'
        },
        {
            id: 'video2',
            title: '國際交流成果發表',
            thumbnail: 'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/265/pho2.jpg'
        },
        {
            id: 'video3',
            title: '特色課程介紹',
            thumbnail: 'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/265/pho3.jpg'
        }
    ];

    const galleryContainer = document.getElementById('youtube-gallery');
    if (galleryContainer) {
        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'col-md-4';
            videoElement.innerHTML = `
                <div class="video-card">
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}" class="img-fluid">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="video-info">
                        <h4>${video.title}</h4>
                    </div>
                </div>
            `;
            galleryContainer.appendChild(videoElement);

            // 點擊影片時的行為
            videoElement.addEventListener('click', () => {
                // 這裡應該打開 YouTube 影片或跳轉到 YouTube 頻道
                window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
            });
        });
    }
}

// 在頁面滾動時更新社群媒體卡片的動畫效果
window.addEventListener('scroll', function() {
    const socialCards = document.querySelectorAll('.social-card');
    socialCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight * 0.75) {
            card.classList.add('animate');
        }
    });
});
