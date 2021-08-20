/**
*  @swagger
*  paths:
*   /user/register_process:
*     post:
*       summary: 새로운 회원 가입
*       tags: [Member]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/memberInfo'
*       responses:
*         "200":
*           description: 회원 가입 완료
*   /user/list/active:
*     get:
*       summary: 유효 회원 보기
*       tags: [Member]
*       responses:
*         "200":
*           description: "유효 회원 리스트"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/listMember'
*   /user/list/expire:
*     get:
*       summary: 만료 회원 보기
*       tags: [Member]
*       responses:
*         "200":
*           description: "만료 회원 리스트"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/listMember'
*   /user/list/Approve:
*     get:
*       summary: 승인 대기 회원 보기
*       tags: [Member]
*       responses:
*         "200":
*           description: "유효 회원 리스트"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/memberInfo'
*   /user/info:
*     get:
*       summary: 회원 상세 정보 보기
*       tags: [Member]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 회원 id
*       responses:
*         "200":
*           description: "회원 상세 정보"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/detailMember'
*
*   /user/Approve:
*     post:
*       summary: 회원 승인 처리
*       tags: [Member]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/approveMember'   
*       responses:
*         "200":
*           description: 회원 승인 완료
*
*   /user/delete:
*     post:
*       summary: 회원 승인 거절 처리(삭제)
*       tags: [Member]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/approveMember'   
*       responses:
*         "200":
*           description: 회원 승인 거절 완료
*   /user/info/history:
*     get:
*       summary: 회원 수강 내역 보기 
*       tags: [Member]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 회원 id
*       responses:
*         "200":
*           description: "회원 수강 내역"
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   memberHistory:
*                     $ref: '#/components/schemas/memberHistory'   
*                   memberInfo:
*                     $ref: '#/components/schemas/memberInfo'   
*                   waitingMemberHistory:
*                     $ref: '#/components/schemas/waitingMemberHistory' 
*   /user/info/update:
*     get:
*       summary: 회원 정보 수정 
*       tags: [Member]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 회원 id
*       responses:
*         "200":
*           description: "회원 정보 수정"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/memberInfo' 
*   /user/info/update_process:
*     post:
*       summary: 회원 정보 수정 처리
*       tags: [Member]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/memberInfo'   
*       responses:
*         "200":
*           description: 회원 정보 수정 완료
*   /user/membership:
*     get:
*       summary: 회원권 구매 
*       tags: [Member]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 회원 id
*       responses:
*         "200":
*           description: "회원권 구매"
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   memberHistory:
*                     $ref: '#/components/schemas/membershipInfo'   
*                   memberInfo:
*                     $ref: '#/components/schemas/AllClassType_CoachInfo'
*       
*   /user/membership/buy:
*     post:
*       summary: 회원권 구매 처리
*       tags: [Member]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 회원 id
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/member_membershipInfo'   
*       responses:
*         "200":
*           description: 회원권 구매 완료          
*   /user/accountReceivableList:
*     get:
*       summary: 미수금 목록 보기 
*       tags: [Member]
*       responses:
*         "200":
*           description: "미수금 목록 보기"
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   memberList:
*                     $ref: '#/components/schemas/accountReceivableInfo'   
*                   sumAccountReceivable:
*                     $ref: '#/components/schemas/sumAccountReceivable'   
*   /user/expireExpectList:
*     get:
*       summary: 만료 예정 회원 보기 
*       tags: [Member]
*       responses:
*         "200":
*           description: 만료 예정 회원 보기 
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/expireExpectList'  
*   /user/todayReserveList:
*     post:
*       summary: 예약 현황 보기 
*       tags: [Member]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/DateReserveList'   
*       responses:
*         "200":
*           description: 예약 현황 보기 
*           content:
*             application/json:
*               schema:
*                 type: object
*                 properties:
*                   sumPayment:
*                     $ref: '#/components/schemas/accountReceivableInfo'   
*                   activeMember:
*                     $ref: '#/components/schemas/listMember'
*                   todayMemberList:
*                     $ref: '#/components/schemas/todayMemberList'
*/