### ๐ history ๊ฐ์ฒด
- ์ฌ์ฉ์์ ์น์ฌ์ดํธ ์ฌ์ฉ ๋ด์ญ
```
history.length : ํ์คํ ๋ฆฌ ๋ชฉ๋ก์ ํฌํจ๋ url์ ์
history.back() : ๋ค๋ก ์ด๋
history.forward() : ์์ผ๋ก ์ด๋
history.go( 2 ) : ํ์ฌ url ์์น์์ 2๋งํผ ์์ผ๋ก ์ด๋, 
                ์์๋ผ๋ฉด ๋ค๋ก, ์์๋ผ๋ฉด ์์ผ๋ก ์ด๋
```
- history.back() ๊ณผ history.forward() ์๋ชป ์ฌ์ฉํ๋ฉด ๋ฌดํ๋ฃจํ์ ๋น ์ง ์ ์์ผ๋ฏ๋ก ์ ์ํด์ ์ฌ์ฉํ๊ธฐ!


### ๐ Location ๊ฐ์ฒด
- ํ์ฌ window์ url ์ฃผ์์ ๋ํ ์ ๋ณด ์ ๊ณต ๊ฐ์ฒด
```
location.host : ํธ์คํธ ์ด๋ฆ๊ณผ ํฌํธ๋ฒํธ(url๋ก๋ถํฐ ๋ถ๋ฆฌํ์ฌ ์ ๊ณต)
                ex) www.naver.com:80(์ฐ ๋ธ์ด ํฌํธ๋ฒํธ : ์๋ต๊ฐ๋ฅ)
location.hostname : url ์ฃผ์์ ๋ํ ํธ์คํธ ์ด๋ฆ
location.href : ํ์ดํผ๋งํฌ๋ก ์ฃผ์ ์ง์ 
location.pathname : ๋๋ ํ ๋ฆฌ ์์น(ํธ์คํธ)
location.port : ํธ์คํธ ํฌํธ๋ฒํธ
location.protocol : ํ๋กํ ์ฝ ์ข๋ฅ
location.reload() : ๋ฌธ์ ๋ค์ ์ฝ๊ธฐ
window.location.assign(url ์ฃผ์) : url๋ก ์ด๋(๋ฐ๋ฌธ๊ธฐ๋ก ์ ์ฅ)
window.location.replace(url ์ฃผ์) : url๋ก ์ด๋(๋ฐ๋ฌธ๊ธฐ๋ก ๋ฎ์ด์)
```

### ๐ navigator ๊ฐ์ฒด
- ์น ๋ธ๋ผ์ฐ์ ์ ํน์ฑ ์ ๋ณด๋ฅผ ๊ฐ์ง๋ ๊ฐ์ฒด
```
navigator.appName : ์ฌ์ฉ์ค์ธ ๋ธ๋ผ์ฐ์  ์ข๋ฅ
navigator.appCodeName : ์ฌ์ฉ์ค์ธ ์น๋ธ๋ผ์ฐ์  ์ด๋ฆ
navigator.appVersion : ๋ธ๋ผ์ฐ์  ๋ฒ์  ๋ฐ os ์ด๋ฆ
navigator.plaform : ์ด์์ฒด์  ํ๊ฒฝ
navigator.userAgent : ์น๋ธ๋ผ์ฐ์  ์ข๋ฅ์ ๋ฒ์ 
navigator.plugins : ์ค์น๋ ํ๋ฌ๊ทธ์ธ ์ ๋ณด
navigator.mimeTypes : ๋ธ๋ผ์ฐ์ ์ ์ง์๋๋ MIME  ํ์
```
- MIME ํ์ ์ข๋ฅ
    ```
    text, image, audio. video, application, message, multiport
    ```
    ```
    image - gif, jpeg
    video - mpeg
    application - stream, script
    ```