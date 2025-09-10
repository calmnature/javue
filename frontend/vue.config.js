module.exports = {
  // 빌드 타겟 디렉토리
  // npm run build를 했을 때 frontend 파일이 빌드될 경로
  outputDir: "../src/main/resources/static",
  devServer: {
    // vue의 서버 포트
    port: 8081,
    // path 경로를 지정하여 /example로 URL이 들어오면 localhost:8080(스프링 서버)로 보내줌
    proxy: {
      '/example': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
};