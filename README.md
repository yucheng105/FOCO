# FOCO

FOCO 是一個專注管理與任務追蹤專案，包含傳統 HTML 版本與 React 版本兩種前端實作。

## 專案架構

```text
FOCO/
├─ src/
│  ├─ html/              # 網頁前端 HTML 檔案
│  └─ foco-react/        # 網頁前端 React 版
└─ README.md
```

### `src/html`

此資料夾放的是傳統的靜態網頁版本，每個功能頁面對應一個 HTML 檔案，例如首頁、任務清單、專注計時器、獎勵與統計頁面。

### `src/foco-react`

此資料夾是 React 版本的前端專案，使用 Vite 建置，原始碼位於 `src/foco-react/src`，主要元件也集中在 `src/foco-react/src/components`。

## 啟動方法

### 1. 啟動 HTML 版本

HTML 版本不需要安裝額外套件，直接用瀏覽器開啟 `src/html` 裡的對應頁面即可。

建議做法：

1. 安裝 VS Code 的 Live Server 擴充功能。
2. 在 VS Code 中開啟 `src/html/Home_Page.html` 或其他頁面。
3. 右鍵選擇 `Open with Live Server`。

### 2. 啟動 React 版本

React 版本需要先安裝依賴，再啟動 Vite 開發伺服器。

```bash
cd src/foco-react
npm install
npm run dev
```

啟動後，終端機會顯示本機網址，通常是 `http://localhost:5173`。

### 3. React 常用指令

```bash
npm run build    # 產生正式版打包
npm run preview  # 預覽打包結果
npm run lint     # 檢查程式碼風格
```

## 備註

- 如果你要修改 React 版本，請以 `src/foco-react` 為主。
- 如果你要快速查看頁面原型，請以 `src/html` 為主。