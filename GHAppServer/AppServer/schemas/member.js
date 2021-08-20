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
*                     member_id:
*                         type: integer
*                         description: 회원 id
*                     member_name:
*                         type: string
*                         description: 회원 이름
*                     birth:
*                         type: string
*                         description: 회원 생년월일
*                     description:
*                         type: string
*                         description: 회원 메모
*                     male:
*                         type: string
*                         description: 성별
*                     recentAttendDay:
*                         type: date
*                         description: 최근 출석일
*                     phone:
*                         type: string
*                         description: 핸드폰 번호
*                     startDay:
*                         type: date
*                         description: 회원권 시작일
*                     endDay:
*                         type: date
*                         description: 회원권 종료일
*                     membership_name:
*                         type: string
*                         description: 회원권 이름
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*                     countClass:
*                         type: integer
*                         description: 수강 횟수
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
*             accountReceivableInfo:
*                 type: object
*                 properties:
*                     member_id:
*                         type: string
*                         description: 회원 id
*                     member_name:
*                         type: string
*                         description: 회원 이름
*                     accountReceivable:
*                         type: integer
*                         description: 미수금
*                     phone:
*                         type: string
*                         description: 전화번호
*                     recentAttendDay:
*                         type: date
*                         description: 최근 출석 날짜
*             sumAccountReceivable:
*                 type: object
*                 properties:
*                     sumAccountReceivable:
*                         type: integer
*                         description: 미수금 총액
*             expireExpectList:
*                 type: object
*                 properties:
*                     member_id:
*                         type: integer
*                         description: 회원 id
*                     male:
*                         type: boolean
*                         description: 성별
*                     birth:
*                         type: date
*                         description: 생년월일
*                     description:
*                         type: string
*                         description: 회원 메모
*                     name:
*                         type: string
*                         description: 회원 이름
*                     recentAttendDay:
*                         type: date
*                         description: 최근 출석 날짜
*                     phone:
*                         type: string
*                         description: 전화번호
*                     startDay:
*                         type: date
*                         description: 회원권 시작일
*                     endDay:
*                         type: date
*                         description: 회원권 종료일
*                     membership_name:
*                         type: string
*                         description: 회원권 이름
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*             todayMemberList:
*                 type: object
*                 properties:
*                     member_id:
*                         type: integer
*                         description: 회원 id
*                     male:
*                         type: boolean
*                         description: 성별
*                     birth:
*                         type: date
*                         description: 생년월일
*                     description:
*                         type: string
*                         description: 회원 메모
*                     name:
*                         type: string
*                         description: 회원 이름
*                     recentAttendDay:
*                         type: date
*                         description: 최근 출석 날짜
*                     startTime:
*                         type: time
*                         description: 수업 시작 시간
*                     endTime:
*                         type: time
*                         description: 수업 종료 시간
*                     endDay:
*                         type: date
*                         description: 회원권 종료일
*                     attend:
*                         type: integer
*                         description: 상태
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*             DateReserveList:
*                 type: object
*                 properties:
*                     date:
*                         type: date
*                         description: 예약 회원 리스트 검색 날짜
*/