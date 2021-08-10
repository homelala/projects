/** 
* @swagger
*     components:
*         schemas:
*             GYM:
*                 type: object
*                 properties:
*                     logoImage:
*                         type: string
*                         description: 회사 로고 이미 (AWS로 배포 후 기능 구현 예정, 현재는 default 값으로 대체)
*                     name:
*                         type: string
*                         description: 지점 이름
*                     location:
*                         type: string
*                         description: 지점 위치
*                     adminName:
*                         type: string
*                         description: 관리자 이름
*                     category:
*                         type: string
*                         description: 지점 구분
*                     email:
*                         type: string
*                         format: email
*                         description: 지점 이메일
*                     passwd:
*                         type: string
*                         description: 지점 비밀번호
*                     phone:
*                         type: string
*                         description: 핸드폰 비밀번호
*                     subscribtionPath:
*                         type: string
*                         description: 가입 경로
*                     example:
*                         name: GoodHabit
*                         location: 강북 지점
*                         adminName: 이하나
*                         category: PT
*                         email: test@naver.com
*                         passwd: 1111
*                         subsribtionPath: 인터넷 정보
*                         phone: 010-0000-0000
*   
*             GYMSetting:
*                 type: object
*                 properties:
*                     countPoint:
*                         type: boolean
*                         description: 횟수 제도/포인트 제도 선택 여부
*                     openReserveDate:
*                         type: integer
*                         description: 예약 오픈 시점 날짜(일,주,월 별로 기간을 계산하여 전달)
*                     openReserveTime:
*                         type: string
*                         format: time
*                         description: 예약 오픈 시점 시간
*                     remainMeber:
*                         type: boolean
*                         description: 잔여 인원 노출 여부
*                     pushAlarm:
*                         type: boolean
*                         description: 수업 리마인드 푸쉬 알람 동의 여부
*                     pushAlarmTime:
*                         type: integer
*                         description: 푸시 알람 발송 시간(분, 시, 일 별로 분을 기준으로 값을 전달)
*                     reservableTime:
*                         type: integer
*                         description: 예약 가능 시간(분, 시, 일 별로 분을 기준으로 값을 전달)
*                     changeReserveTime:
*                         type: integer
*                         description: 예약 변경 가능 시간(분, 시, 일 별로 분을 기준으로 값을 전달)
*                     cancelReserveTime:
*                         type: integer
*                         description: 예약 최수 가능 시간(분, 시, 일 별로 분을 기준으로 값을 전달)
*                     checkAttendTime:
*                         type: integer
*                         description: 출석 체크 가능 시간(분, 시, 일 별로 분을 기준으로 값을 전달)
*                     lateTime:
*                         type: integer
*                         description: 지각 기준 시간
*                     waitingReserve:
*                         type: boolean
*                         description: 예약 대기 인원 노출 여부
*                     reserveConfirmTime:
*                         type: integer
*                         description: 예약 확정 시간 기준(예약 가능 시간, 변경 시간, 취소 시간을 기준으로 선택 값 전달)
*                     approve:
*                         type: boolean
*                         description: 지점 본사 승인 여부   
*             GYMLogin:
*                 type: object
*                 properties:
*                     email:
*                         type: string
*                         description: 지점 로그인 이메일
*                     passwd:
*                         type: string
*                         description: 지점 로그인 비밀번호
*                          
*/