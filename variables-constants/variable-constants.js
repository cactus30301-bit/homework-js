
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


//----------------------------------------------------------------------------------
// 2. 배송비 계산

// 주문 금액과 배송 지역을 입력받아 배송비를 계산하는 함수를 작성합니다.

// 배송비 정책
//  
// - 주문 금액이 50,000원 이상 : 무료 배송
// - 제주/도서 지역 : 추가 배송비 3,000원
// - 배송지역 값 예시 : "서울", "부산", "제주", "도서"
// - 일반 지역 : 기본 배송비 3,000원
// - 주문 금액이 0원 이하인 경우 : 0 반환
// - 배송지역이 빈 문자열인 경우 : 기본 배송비 적용

function deliveryFee(orderPrice, area) {
  const freeOrderPrice = 50000
  const baseOrderFee = 3000
  const additionalFee = 3000
  
  const isCharge = area === '제주' || area === '도서'
  const isFree = orderPrice >= 50000 || orderPrice === 0

  const totalPrice = !isFree * (basePrice + isCharge * additionalFee)

  return totalPrice
  }
console.log(100000, '제주')




//----------------------------------------------------------------------------------
// 3. 비밀번호 유효성 검사

// 비밀번호 문자열을 입력받아 유효성 검사를 수행하는 함수를 작성합니다.

// 비밀번호 규칙

// - 최소 8자 이상
// - 최대 20자 이하
// - 위 조건을 모두 만족하면 true, 아니면 false 반환

function isValidPassword (password) {
  const minPasswordLength = 8
  const maxPasswordLength = 20
  const passwordLength = String(password).length

  return passwordLength >= minPasswordLength && passwordLength <= maxPasswordLength
}

console.log (isValidPassword(12358))
console.log (isValidPassword(1564890231015))


// 4. 포인트 적립 계산

// 결제 금액과 회원 등급을 입력받아 적립될 포인트를 계산하는 함수를 작성합니다.

// 포인트 적립률
// - VIP : 결제 금액의 5%
// - GOLD : 결제 금액의 3%
// - SILVER : 결제 금액의 1%
// - 일반 : 결제 금액의 0.5%
// 
// [예] VIP 회원이 100,000원 결제 시 → 5,000 포인트 적립
//



function rewardingPoints(price, grade) {

  const rewardingRate = {
    VIP : 0.05,
    GOLD : 0.03,
    SILVER : 0.01,
    NORMAL : 0.005
  }
  // 수정 전
  // const priceAsGrade = rewardingRate[grade] * price
  // return priceAsGrade

  // 수정 후
  //grade가 'NORMAL'일 때만 일반 회원으로 인식함. 즉, 기본값 처리가 없음.
  const rate = rewardingRate[grade] || rewardingRate.NORMAL
  return rate * price
  }

console.log(rewardingPoints(100000, 'VIP'))

// function rewardingPoints(grade, orderPrice) {
// const rewardRate = {   
//   VIP : 0.05,
//   GOLD : 0.03,
//   SILVER : 0.01,
//   NORMAL : 0.005,
// }
// const memberRate = rewardRate[grade] || rewardRate.NORMAL
//   return parseInt(orderPrice) * memberRate

// }

// console.log(rewardingPoints('VIP', 100000))
// console.log(rewardingPoints('GOLD', 100000))
// console.log(rewardingPoints('SILVER', 100000))
// console.log(rewardingPoints('NORMAL', 100000))




// 5. 영화 티켓 가격 계산

// 영화 정보와 관람 인원을 입력받아 총 결제 금액을 계산하는 함수를 작성합니다.

// 요금 정책
// 
// - 일반 영화: 14,000원
// - 3D 영화: 17,000원
// - IMAX 영화: 20,000원
// - 조조 할인(10시 이전 상영): 20% 할인
// - 영화타입 값 : "일반", "3D", "IMAX"
// - 조조할인여부 값 : true 또는 false
// 
// [예] 3D 영화, 조조 상영, 2명 관람 → 27,200원 결제
//

function getTicket(type, number, isJojo) {
  const discountJojo = 0.2

  const theatreType = {
    NORMAL : 14_000,
    '3D' : 17_000,
    IMAX : 20_000,
  }

  const ticketPrice = (theatreType[type] || theatreType.NORMAL) * (1- isJojo * discountJojo) * number
  return ticketPrice
}

console.log(getTicket('', 3, true)+'원')
console.log(getTicket('3D', 2, true)+'원')





// 서버 응답: 사용자 포인트 예시
{
  let userPoint = 0

if (userPoint == 0) { 
  // 사용자 포인트가 0이므로 조건은 참 (실행)
  console.log('🎉 첫 구매이군요. 포인트 결제가 가능합니다!')
  // 결제하기 버튼 활성화 (사용자가 0원에 결제 가능)
}
}


// 서버 응답: 네트워크 오류로 인해 포인트 데이터를 못 가져옴
{
  let userPoint = null // 또는 false

// 🚨 비상! 시스템 오류로 포인트가 null이지만, 느슨한 비교(==)를 사용함
if (userPoint == 0) { 
  console.log('🎉 첫 구매이군요. 포인트 결제가 가능합니다!')
  // 결제하기 버튼 활성화 (사용자가 0원에 결제 가능)
} else {
  // 데이터가 null이나 false인 경우, 안전하게 오류 처리가 가능함
  console.log('⚠️ 데이터를 불러오지 못했습니다. 다시 시도해 주세요.')
}

}


// 서버 응답: 사용자 포인트 예시
let userPoint = 0

if (userPoint == null) { 
  // 사용자 포인트가 0이므로 조건은 참 (실행)
  console.log('🎉 첫 구매이군요. 포인트 결제가 가능합니다!')
  // 결제하기 버튼 활성화 (사용자가 0원에 결제 가능)
} else {
  // 데이터가 null이나 false인 경우, 안전하게 오류 처리가 가능함
  console.log('⚠️ 데이터를 불러오지 못했습니다. 다시 시도해 주세요.')
}


if (userPoint === null) {
  console.log('🎉 첫 구매이군요. 포인트 결제가 가능합니다!')
  // 결제하기 버튼 활성화 (사용자가 0원에 결제 가능)
} else {
  // 데이터가 null이나 false인 경우, 안전하게 오류 처리가 가능함
  console.log('⚠️ 데이터를 불러오지 못했습니다. 다시 시도해 주세요.')
}


{
function getTicket(type, number, isJojo) {
  const priceOption = {
    NORMAL : 14000,
    '3D' : 17000,
    IMAX : 20000
  }
  const discountJojo = 0.2

  const totalFee = (priceOption[type] || priceOption.NORMAL) * (1 - discountJojo * isJojo) * number
  return totalFee
}

console.log(getTicket('3D', 2, true))

}