# 家齊高中網站專案規格書

## 專案目標
建立一個現代化的家齊高中網站，使用純前端技術（HTML、CSS、JavaScript），並能夠直接部署到 GitHub Pages 上。

## 技術規格
- 開發語言：HTML5, CSS3, JavaScript (ES6+)
- CSS 框架：Bootstrap 5
- JavaScript 函式庫：
  - Swiper (輪播功能)
  - AOS (滾動動畫效果)
  - Font Awesome (圖示)
- 所有外部函式庫均使用 CDN 版本
- 響應式設計：支援桌面、平板和手機瀏覽

## 目前完成功能
1. 導航功能
   - [x] 頂部快速連結列
   - [x] 響應式導航欄
   - [x] 下拉式選單
   
2. 首頁功能
   - [x] 輪播圖展示
   - [x] 最新消息區（含分類標籤）
   - [x] 校務服務快速連結
   - [x] 校園花絮圖片牆
   - [x] 新聞搜尋功能
   
3. 頁尾資訊
   - [x] 學校聯絡資訊
   - [x] 相關連結
   - [x] 版權宣告

## 待開發功能
1. 內容頁面
   - [ ] 認識家齊
   - [ ] 行政單位
   - [ ] 校園專區（學生、教師、家長）
   - [ ] 升學資訊
   - [ ] 國際教育

2. 功能擴充
   - [ ] 行事曆系統
   - [ ] 社群媒體整合
   - [ ] 校園活動相簿
   - [ ] 文件下載中心

3. 優化項目
   - [ ] SEO 優化
   - [ ] 網站效能優化
   - [ ] 無障礙網頁支援

## 專案結構
```
.
├── index.html          # 首頁
├── css/
│   └── style.css      # 自定義樣式
├── js/
│   └── main.js        # 自定義腳本
└── images/            # 圖片資源目錄
```

## 外部資源引用
- 圖片資源：目前使用原始網站圖片 (https://www.ccsh.tn.edu.tw/)
- CSS 樣式：
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  ```
- JavaScript 腳本：
  ```html
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  ```

## 開發注意事項
1. 圖片資源：
   - 目前使用原始網站圖片，未來需要替換為專案自有圖片
   - 圖片需要進行適當的壓縮和優化

2. JavaScript 功能：
   - 新聞資料目前使用靜態數據，未來可能需要介接後端 API
   - 所有互動功能都應該考慮行動裝置的使用場景

3. 樣式設計：
   - 主色系：`--primary-color: #004B97`
   - 輔色系：`--secondary-color: #FFB800`
   - 需確保所有元件都支援響應式設計

## 部署說明
1. 專案使用純前端技術，可直接部署至 GitHub Pages
2. 所有外部資源都使用 CDN，無需額外的建置步驟
3. 確保所有連結使用相對路徑，以支援子目錄部署

## 更新記錄
- 2025-05-22：
  - 建立專案基本架構
  - 完成首頁主要功能
  - 實作最新消息和搜尋功能