/** 
* @swagger
*     components:
*         schemas:
*             scheduleRegisterInfo:
*                 type: object
*                 properties:
*                     startDay:
*                         type: date
*                         description: 시작일
*                     startTime:
*                         type: time
*                         description: 시작 시간
*                     coach_id:
*                         type: integer
*                         description: 코치 id(* 여러명의 코치가 있을 경우 list 형식)
*                     classType_id:
*                         type: int
*                         description: 수업 유형 id
*                     period:
*                         type: integer
*                         description: 수업 시간
*                     decrease:
*                         type: integer
*                         description: 차감 횟수
*                     reservePerson:
*                         type: integer
*                         description: 수업 정원
*                     cycle:
*                         type: integer
*                         description: 개설 주기
*                     day:
*                         type: integer
*                         description: 개설 요일(list 형식으로 보냄)
*                     endDay:
*                         type: date
*                         description: 주기 종료일
*             scheduleList:
*                 type: object
*                 properties:
*                     startDay:
*                         type: date
*                         description: 시작일
*             scheduleInfo:
*                 type: object
*                 properties:
*                     class_id:
*                         type: integer
*                         description: 스케줄 id
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*                     classType_id:
*                         type: integer
*                         description: 수업 유형 id
*                     startDay:
*                         type: date
*                         description: 수업 시작일
*                     period:
*                         type: time
*                         description: 수업 종료 시간
*                     total:
*                         type: integer
*                         description: 수업 총원
*                     startTime:
*                         type: time
*                         description: 수업 시작 시간
*                     reserveNumber:
*                         type: integer
*                         description: 현재 예약 인원
*             reserveSchedule:
*                 type: object
*                 properties:
*                     schedule_id:
*                         type: integer
*                         description: 예약할 수업의 id
*                     classType_id:
*                         type: integer
*                         description: 예약할 수업의 수업 유형 id
*                     member_id:
*                         type: integer
*                         description: 예약하는 회원의 id
*             reserveHistory:
*                 type: object
*                 properties:
*                     GYM_id:
*                         type: integer
*                         description: 지점 id
*                     id:
*                         type: integer
*                         description: member_class id
*                     class_id:
*                         type: integer
*                         description: 스케줄 id
*                     member_id:
*                         type: integer
*                         description: 회원 id
*                     membership_id:
*                         type: time
*                         description: 사용하는 회원권 id
*                     date:
*                         type: date
*                         description: 예약한 시간
*                     attend:
*                         type: integer
*                         description: 현재 상태(0:예약, 1:출석, 2:지각, 3:결석)
*                     name:
*                         type: string
*                         description: 회원 이름
*             waitingMember:
*                 type: object
*                 properties:
*                     GYM_id:
*                         type: integer
*                         description: 지점 id
*                     id:
*                         type: integer
*                         description: member_class id
*                     class_id:
*                         type: integer
*                         description: 스케줄 id
*                     member_id:
*                         type: integer
*                         description: 회원 id
*                     membership_id:
*                         type: time
*                         description: 사용하는 회원권 id
*                     date:
*                         type: date
*                         description: 예약한 시간
*                     name:
*                         type: string
*                         description: 회원 이름
*             changeStatus:
*                 type: object
*                 properties:
*                     schedule_id:
*                         type: integer
*                         description: 예약할 수업의 id
*                     status:
*                         type: integer
*                         description: 변경할 상태(0:예약 or 대기 취소, 1:출석, 2:지각, 3:결석)
*                     member_id:
*                         type: integer
*                         description: 예약하는 회원의 id
*/