import requests
import os
import time
from PIL import Image
from io import BytesIO

def optimize_image(image_path, target_size=None):
    """優化圖片：調整大小和壓縮"""
    try:
        with Image.open(image_path) as img:
            # 調整大小
            if target_size:
                img = img.resize(target_size, Image.Resampling.LANCZOS)
            # 儲存優化後的圖片
            img.save(image_path, quality=85, optimize=True)
            print(f'優化成功: {image_path}')
    except Exception as e:
        print(f'圖片優化錯誤: {str(e)}')

def download_image(url, save_path, target_size=None):
    """下載並優化圖片"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, stream=True)
        if response.status_code == 200:
            with open(save_path, 'wb') as f:
                f.write(response.content)
            # 優化圖片
            if target_size:
                optimize_image(save_path, target_size)
            print(f'下載成功: {save_path}')
            time.sleep(1)  # 避免發送請求太快
        else:
            print(f'下載失敗: {url}')
    except Exception as e:
        print(f'錯誤: {str(e)}')

def main():
    # 建立 images 資料夾
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # 校徽
    logo_url = 'https://www.ccsh.tn.edu.tw/var/file/0/1000/img/1513/logo.png'
    download_image(logo_url, 'images/logo.png', (100, 100))
    
    # 輪播圖片
    slide_urls = [
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/262/pho1.jpg',  # 校門口
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/262/pho2.jpg',  # 校園景觀
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/262/pho3.jpg'   # 活動照片
    ]
    for i, url in enumerate(slide_urls, 1):
        download_image(url, f'images/slide{i}.jpg', (1920, 500))
    
    # 校園花絮圖片
    gallery_urls = [
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/267/pho1.jpg',  # 學生活動
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/267/pho2.jpg',  # 教學活動
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/267/pho3.jpg',  # 校園生活
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/267/pho4.jpg'   # 特色課程
    ]
    for i, url in enumerate(gallery_urls, 1):
        download_image(url, f'images/gallery{i}.jpg', (400, 300))

if __name__ == '__main__':
    main()