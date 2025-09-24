<template>
  <div>
    <div class="d-flex flex-column align-items-center vh-100">
      <img src="javue-logo-512x512.png" alt="Javue Logo">
      <p class="fs-4">Java와 Vue를 사용하여 만드는 연습 프로젝트</p>
    </div>
    <div class="d-flex mt-2" style="border:white 1px dotted; height: 800px">
      <div class="d-inline-block m-1 ms-4 p-2" style="width: 25%; height: 70%">
        <div>
          <img src="profile.jpg" class="rounded-5" width="100%" height="auto">
        </div>
        <div class="text-center p-3 fs-4">
          <p class="mt-2 mb-5">김대원</p>
          <p class="mb-5">인생시작 : 1994.01.08~</p>
          <p class="mb-5">경력시작 : 2024.12.02~</p>
        </div>
      </div>
      <div class="d-inline-block m-1 me-4 p-1" style="width: 75%; height: 70%">
        <p class="ms-3 mt-3 fs-1">프로젝트</p>
        <p class="ms-4 fs-3">고향사랑e음 [2024.03.24 ~ ]</p>
        <br>
        <p class="ms-5 fs-4">● SM 유지보수 - 오류 및 에러 수정 / 영향도 분석 / 운영 DB 조작 / AS-IS 수정</p>
        <br>
        <p class="ms-5 fs-4">● 통계 데이터 추출</p>
        <br>
        <p class="ms-5 fs-4">● SI성 개발 [대민 구매 프로세스 → 관리자 사이트 이관]</p>
        <br>
        <p class="ms-5 fs-4">● 메인화면 UI/UX 개편</p>
        <br>
        <p class="ms-5 fs-4">● 통합 검색 엔진 연동을 통한 DB 부하 감소 및 성능 향상 [코난]</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
}
</script>

<style scoped>
</style>
