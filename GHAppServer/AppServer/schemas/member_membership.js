/** 
* @swagger
*     components:
*         schemas:
*             member_membershipInfo:
*                 type: object
*                 properties:
*                     membership_id:
*                         type: integer
*                         description: 회원권 id
*                     startDay:
*                         type: date
*                         description: 시작일
*                     endDay:
*                         type: date
*                         description: 종료일
*                     classType_id:
*                         type: integer
*                         description: 수업 유형 id
*                     MaxApply:
*                         type: integer
*                         description: 최대 수강 횟수
*                     countClass:
*                         type: integer
*                         description: 현재 수강 횟수
*                     price:
*                         type: integer
*                         description: 정상 금액
*                     payment:
*                         type: integer
*                         description: 결제 금액
*                     card:
*                         type: integer
*                         description: 카드 결제 금액
*                     cash:
*                         type: integer
*                         description: 현금 결제 금액
*                     accountReceivable:
*                         type: integer
*                         description: 미수금 
*                     결제일:
*                         type: date
*                         description: 결제일
*/