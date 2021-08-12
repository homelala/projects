/**
*  @swagger
*  paths:
*   /schedule/register:
*     get:
*       summary: 스케줄 등록하기
*       tags: [Schedule]
*       responses:
*         "200":
*           description: 스케줄 등록하기
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   memberHistory:
*                     $ref: '#/components/schemas/coachInfo'   
*                   memberInfo:
*                     $ref: '#/components/schemas/AllClassType_CoachInfo'
*     post:
*       summary: 스케줄 추가 
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/scheduleRegisterInfo'   
*       responses:
*         "200":
*           description: 스케줄 추가 완료
*   /schedule/list/day:
*     post:
*       summary: 일별 스케줄 보기
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*                $ref: '#/components/schemas/scheduleList' 
*       responses:
*         "200":
*           description: 일별 스케줄 보기 
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   scheduleInfo:
*                     $ref: '#/components/schemas/scheduleInfo'   
*                   memberInfo:
*                     $ref: '#/components/schemas/listMember'   
*   /schedule/list/week:
*     post:
*       summary: 주간 스케줄 보기
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/scheduleList'   
*       responses:
*         "200":
*           description: 주간 스케줄 보기 
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   scheduleInfo:
*                     $ref: '#/components/schemas/scheduleInfo'   
*                   memberInfo:
*                     $ref: '#/components/schemas/listMember'   
*   /schedule/list/month:
*     post:
*       summary: 월별 스케줄 보기
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/scheduleList'   
*       responses:
*         "200":
*           description: 월별 스케줄 보기 
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   scheduleInfo:
*                     $ref: '#/components/schemas/scheduleInfo'   
*                   memberInfo:
*                     $ref: '#/components/schemas/listMember'   
*   /schedule/reserve:
*     post:
*       summary: 수업 예약하기
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/reserveSchedule'   
*       responses:
*         "200":
*           description: 수업 예약하기
*   /schedule/history:
*     get:
*       summary: 스케줄 히스토리 보기
*       tags: [Schedule]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 스케줄 id
*       responses:
*         "200":
*           description: 스케줄 히스토리 보기
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   scheduleInfo:
*                     $ref: '#/components/schemas/reserveHistory'   
*                   memberInfo:
*                     $ref: '#/components/schemas/waitingMember'
*   /schedule/ReserveStatus:
*     post:
*       summary: 예약 회원 상태 변경하기
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/changeStatus'   
*       responses:
*         "200":
*           description: 예약 회원 상태 변경하기
*   /schedule/WaitingStatus:
*     post:
*       summary: 대기 취소하기
*       tags: [Schedule]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/changeStatus'   
*       responses:
*         "200":
*           description: 대기 취소하기
*/