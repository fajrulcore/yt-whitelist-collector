// ==UserScript==
// @name         YT Whitelist Collector (Android)
// @namespace    https://github.com/fajrulcore/yt-whitelist-collector
// @version      1.0
// @description  Collect whitelist links from YouTube Watch Later easily, support version for Firefox Android
// @author       fajrulcore
// @match        https://m.youtube.com/playlist?list=WL
// @updateURL    https://raw.githubusercontent.com/fajrulcore/yt-whitelist-collector/main/fireandro.user.js
// @downloadURL  https://raw.githubusercontent.com/fajrulcore/yt-whitelist-collector/main/fireandro.user.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function cleanURL(href) {
        const match = href.match(/\/watch\?v=([^&]+)/);
        return match ? `https://www.youtube.com/watch?v=${match[1]}` : null;
    }

    function fetchAllURL() {
        let links;
        if (location.host.startsWith("m.")) {
            links = document.querySelectorAll('a[href^="/watch?v="]');
        } else {
            links = document.querySelectorAll('a#video-title');
        }

        const urls = Array.from(links)
            .map(link => cleanURL(link.getAttribute('href')))
            .filter(url => url !== null);

        return [...new Set(urls)]; // <-- tidak ada slice
    }

    function openInNewTab(dataArray) {
        const hasil = dataArray.join('\n');
        const base64Data = btoa(unescape(encodeURIComponent(hasil)));
    
        const newTab = window.open('', '_blank');
        newTab.document.write(`
            <html>
            <head>
                <title>Download Whitelist URLs</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    body {
                        font-family: sans-serif;
                        background: #000;
                        color: #fff;
                        padding: 20px;
                        text-align: center;
                        margin: 0;
                    }
                    h2 {
                        color: #ff0000;
                        font-size: 1.5em;
                    }
                    textarea {
                        width: 100%;
                        height: 200px;
                        font-size: 14px;
                        margin-bottom: 20px;
                        background: #1e1e1e;
                        color: #fff;
                        border: 1px solid #333;
                        border-radius: 6px;
                        padding: 10px;
                        box-sizing: border-box;
                    }
                    #whitelist-btn {
                    display: none;
                    }
                    .custombutton {
                        width: 100%;
                        padding: 12px;
                        font-size: 16px;
                        border-radius: 6px;
                        cursor: pointer;
                        border: none;
                        margin: 5px 0;
                        transition: background 0.3s;
                        box-sizing: border-box;
                    }
                    .download0 {
                        background: #ff0000;
                        color: white;
                    }
                    .download0:hover {
                        background: #cc0000;
                    }
                    .close {
                        background: #333;
                        color: white;
                    }
                    .close:hover {
                        background: #444;
                    }
                    @media (min-width: 600px) {
                        button {
                            width: auto;
                            display: inline-block;
                        }
                    }
                </style>
            </head>
            <body>
                <h2>Whitelist URLs (${dataArray.length} URL)</h2>
                <textarea readonly>${hasil}</textarea><br>
                <button class="download0 custombutton" onclick="downloadFile()">Download .txt</button>
                <button class="close custombutton" onclick="window.close()">Tutup Tab</button>
                <script>
                    function downloadFile() {
                        const link = document.createElement('a');
                        link.href = 'data:text/plain;base64,${base64Data}';
                        link.download = 'whitelist-url.txt';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                </script>
            </body>
            </html>
        `);
        newTab.document.close();
    }
    

    function addButton() {
        if (document.getElementById('whitelist-btn')) return;

        const tombol = document.createElement('button');
        tombol.id = 'whitelist-btn';
        tombol.textContent = '📥 Download Semua WL';
        tombol.style.position = 'fixed';
        tombol.style.bottom = '20px';
        tombol.style.right = '20px';
        tombol.style.zIndex = '999999';
        tombol.style.padding = '12px 18px';
        tombol.style.backgroundColor = '#ff0000';
        tombol.style.color = '#fff';
        tombol.style.border = 'none';
        tombol.style.borderRadius = '8px';
        tombol.style.cursor = 'pointer';
        tombol.style.fontSize = '14px';

        tombol.onclick = () => {
            const urls = fetchAllURL();
            if (urls.length > 0) {
                openInNewTab(urls);
            } else {
                alert('❌ Tidak ada URL ditemukan.');
            }
        };

        document.body.appendChild(tombol);
    }

    setInterval(() => {
        if (location.href.includes('playlist?list=WL')) {
            addButton();
        }
    }, 1000);

})();
