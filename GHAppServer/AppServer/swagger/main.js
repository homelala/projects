/**
*  @swagger
*  paths:
*   /register_process:
*     post:
*       summary: 새로운 지점 가입
*       tags: [GYM]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/GYM'
*       responses:
*         "200":
*           description: 지점 가입 완료
*   /setting_process:
*     post:
*       summary: 지점 운영 정책 설정
*       tags: [GYM]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/GYMSetting'
*       responses:
*         "200":
*           description: 지점 운영 정책 설정 완료
*   /login_process:
*     post:
*       summary: 지점 로그인(로그인 후 지점 정보 세션에 저장)
*       tags: [GYM]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/GYMLogin'
*       responses:
*         "200":
*           description: 지점 로그인 완료
*   /statistics:
*     post:
*       summary: 지점 통계 보기
*       tags: [GYM]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/searchDate'
*       responses:
*         "200":
*           description: 지점 통계 보기
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   SumPaymentInfo:
*                     $ref: '#/components/schemas/SumPaymentInfo'   
*                   AgainstPaymentInfo:
*                     $ref: '#/components/schemas/AgainstPaymentInfo'
*                   newPaymentInfo:
*                     $ref: '#/components/schemas/newPaymentInfo'
*                   membershipPaymentInfo:
*                     $ref: '#/components/schemas/membershipPaymentInfo'   
*                   coachStatisticsInfo:
*                     $ref: '#/components/schemas/coachStatisticsInfo'
*                   monthMembershipPayment:
*                     $ref: '#/components/schemas/monthMembershipPayment'
*                   monthLockerPayment:
*                     $ref: '#/components/schemas/monthLockerPayment'
*/