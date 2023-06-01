# Electron + React + Ts 应用示例(Arale)

- [x] 支持 React+Ts 语法
- [x] 支持多个窗口加载不同 preload
- [x] 支持修改 electron 文件自动重启更新
- [x] 支持 web 热更新
- [x] 支持 mac/linux/window 平台打包
- [x] 支持 dotenv 导入环境变量


### 使用
- 开发调试
  ```
  npm run dev
  ```

- 打包
  ```
  npm run package
  npm run package:mac
  npm run package:linux
  npm run package:window
  ```

### 其他

- 编译electron中主进程
  ```
  npm run build:main && npm run build:preloads
  ```

- 编译electron的渲染进程
  ```
  npm run build:renderer
  ```

- 调试electron的渲染进程
  ```
  npm run dev:renderer
  ```