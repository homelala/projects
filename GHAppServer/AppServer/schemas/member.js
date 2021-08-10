/** 
* @swagger
*     components:
*         schemas:
*             memberInfo:
*                 type: object
*                 properties:
*                     logoImage:
*                         type: string
*                         description: 회원 로고 이미지 (AWS로 배포 후 기능 구현 예정, 현재는 default 값으로 대체)
*                     name:
*                         type: string
*                         description: 회원 이름
*                     email:
*                         type: string
*                         description: 회원 이메일
*                     passwd:
*                         type: string
*                         description: 회원 비밀번호
*                     phone:
*                         type: string
*                         description: 핸드폰 비밀번호
*                     birth:
*                         type: string
*                         description: 생년월일
*                     male:
*                         type: string
*                         description: 성별
*                     description:
*                         type: string
*                         description: 메모
*             listMember:
*                 type: object
*                 properties:
*                     GYM_id:
*                         type: integer
*                         description: 회원 소속 지점 id
*                     member_id:
*                         type: integer
*                         description: 회원 id
*                     name:
*                         type: string
*                         description: 회원 이름
*                     image:
*                         type: string
*                         description: 회원 프로필 이미지
*                     email:
*                         type: string
*                         description: 회원 이메일
*                     passwd:
*                         type: string
*                         description: 회원 비밀번호
*                     male:
*                         type: string
*                         description: 성별
*                     approve:
*                         type: boolean
*                         description: 회원 승인 여부
*                     rentSportwear:
*                         type: boolean
*                         description: 운동복 대여 여부
*                     pointeger:
*                         type: integer
*                         description: 회원 보유 마일리지
*                     membership_id:
*                         type: integer
*                         description: 회원권 id
*                     classType_id:
*                         type: integer
*                         description: 수업 유형 id
*                     startDay:
*                         type: date
*                         description: 회원권 시작일
*                     endDay:
*                         type: date
*                         description: 회원권 종료일
*                     maxCountClass:
*                         type: integer
*                         description: 회원권 최대 사용 가능 횟수
*                     DayAttend:
*                         type: integer
*                         description: 당일 등록 횟수
*                     weekAttend:
*                         type: integer
*                         description: 주간 등록 횟수
*                     paymentDay:
*                         type: date
*                         description: 결제일
*                     card:
*                         type: integer
*                         description: 카드 결제 금약
*                     cash:
*                         type: integer
*                         description: 현금 결제 금액
*                     accountReceivable:
*                         type: integer
*                         description: 미수금
*                     holdingStartDay::
*                         type: date
*                         description: 홀딩 시작일
*                     holdingEndDay:
*                         type: date
*                         description: 홀딩 종료일
*             detailMember:
*                 type: object
*                 properties:
*                     membership_name:
*                         type: string
*                         description: 회원 보유 membership_name
*                     startDay:
*                         type: date
*                         description: 회원권 시작일
*                     endDay:
*                         type: date
*                         description: 회원권 종료일
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*                     maxApply:
*                         type: integer
*                         description: 회원권 수강 가능 횟수
*                     countClass:
*                         type: integer
*                         description: 회원권 사용 횟수
*                     price:
*                         type: integer
*                         description: 정상 가격
*                     payment:
*                         type: integer
*                         description: 결제 금액
*                     paymentDay:
*                         type: date
*                         description: 결제일
*                     card:
*                         type: integer
*                         description: 카드 결제 금약
*                     cash:
*                         type: integer
*                         description: 현금 결제 금액
*                     accountReceivable:
*                         type: integer
*                         description: 미수금
*                     period:
*                         type: integer
*                         description: 회원권 기간
*             approveMember:
*                 type: object
*                 properties:
*                     member_id:
*                         type: integer
*                         description: 회원 id
*             memberHistory:
*                 type: object
*                 properties:
*                     id:
*                         type: integer
*                         description: 스케줄 id
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*                     date:
*                         type: date
*                         description: 등록 시간
*                     membership_name:
*                         type: string
*                         description: 사용한 회원권 id
*                     decrease:
*                         type: integer
*                         description: 차감 횟수
*                     attend:
*                         type: string
*                         description: 현재 스케줄 상태(출석, 대기, 예약...)
*             waitingMemberHistory:
*                 type: object
*                 properties:
*                     id:
*                         type: integer
*                         description: 스케줄 id
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*                     date:
*                         type: date
*                         description: 등록 시간
*                     membership_name:
*                         type: string
*                         description: 사용한 회원권 id
*                     decrease:
*                         type: integer
*                         description: 차감 횟수
*                     
*/