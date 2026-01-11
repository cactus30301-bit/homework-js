
//----------------------------------------------------------------------------------
// 변수, 상수 작성 과제
//----------------------------------------------------------------------------------
// 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하세요.

// 1. 영화 제목을 저장할 변수를 선언하고 좋아하는 영화 제목을 할당하세요.
let myFavoriteMovie = 'les choristes'

// 2. "빛의 속도(299,792,458 m/s)"를 담을 상수를 선언하세요.
const SPEED_LIGHT = '299,792,458 m/s'

// 3. "이메일 인증 완료 여부"를 확인하는 불리언 타입 변수를 선언하고 적절한 값을 할당하세요.
let isVerifiedEmail = true

// 4. "상품 재고 수량(예: 47개)"을 담는 변수를 선언하고 숫자 값을 할당하세요.
let stock = 47

// 5. "회원 포인트(예: 15,800점)"를 담는 변수를 작성하세요.
let pointMember = 15_800

// 6. API 서버의 "기본 URL(예: https://api.example.com)을 담는 상수를 작성하고 값을 할당하세요.
const BASE_URL = 'https://api.example.com'

// 7. 게시글의 "조회수(예: 1,234)"를 담는 변수를 선언하고 값을 할당하세요.
let hits = 1_234

// 8. "배송 상태('준비중', '배송중', '배송완료' 중 하나)"를 담는 변수를 작성해보세요.
const STATUS_DELIVERY = {
  READY : '준비중',
  SHIPPING : '배송중',
  DELIVERED : '배송완료',
}

let statusDelivery = STATUS_DELIVERY.READY

// 9. "쿠폰 사용 가능 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let availableCoupon = false

// 10. "최대 업로드 파일 크기(예: 10MB를 바이트 단위로 10485760)"를 담는 상수를 작성하세요.
const MAX_SIZE = 10485760

// 11. "사용자 등급 점수(예: 85.5점)"를 담는 변수를 선언하고 소수점이 포함된 값을 할당하세요.
let userGrade = parseFloat(85.5) + '점'

// 12. "알림 수신 동의 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let notificationConsent = false


console.log (myFavoriteMovie)
console.log(SPEED_LIGHT)
console.log(isVerifiedEmail, typeof isVerifiedEmail)
console.log(stock + '개', typeof stock)
console.log(pointMember + '점')
console.log(BASE_URL)
console.log(hits)
console.log(statusDelivery)
console.log(availableCoupon, typeof availableCoupon)
console.log(MAX_SIZE + 'byte', typeof MAX_SIZE)
console.log(userGrade, typeof userGrade)
console.log(notificationConsent, typeof notificationConsent)



//----------------------------------------------------------------------------------
// 함수 작성 과제
//----------------------------------------------------------------------------------
// 1. 환영 메시지 생성

// 회원 등급과 이름을 입력받아 맞춤형 환영 메시지를 출력하는 함수를 작성합니다.

// VIP 회원 : "🌟 VIP {이름}님, 특별한 혜택이 준비되어 있습니다!"
// 일반 회원 : "안녕하세요, {이름}님! 즐거운 쇼핑 되세요."

function greeting (name, grade) {

  const message = {
  VIP : `🌟 VIP ${name}님, 특별한 혜택이 준비되어 있습니다!`,
  NORMAL : `안녕하세요, ${name}님! 즐거운 쇼핑 되세요.`
}

    return message[grade] || message.NORMAL

}

console.log (greeting('김효경', 'VIP'))


