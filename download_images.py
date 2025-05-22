import requests
import os
import time

def download_image(url, save_path):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, stream=True)
        if response.status_code == 200:
            with open(save_path, 'wb') as f:
                f.write(response.content)
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
    
    # 下載校徽
    logo_url = 'https://www.ccsh.tn.edu.tw/var/file/0/1000/img/1513/logo.png'
    download_image(logo_url, 'images/logo.png')
    
    # 輪播圖片
    slide_urls = [
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/101/banner01.jpg',
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/101/banner02.jpg',
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/101/banner03.jpg'
    ]
    for i, url in enumerate(slide_urls, 1):
        download_image(url, f'images/slide{i}.jpg')
    
    # 校園花絮圖片
    gallery_urls = [
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/411/m1.jpg',
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/411/m2.jpg',
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/411/m3.jpg',
        'https://www.ccsh.tn.edu.tw/var/file/0/1000/gallery/411/m4.jpg'
    ]
    for i, url in enumerate(gallery_urls, 1):
        download_image(url, f'images/gallery{i}.jpg')

if __name__ == '__main__':
    main()