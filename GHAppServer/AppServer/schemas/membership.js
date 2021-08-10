/** 
* @swagger
*     components:
*         schemas:
*             membershipInfo:
*                 type: object
*                 properties:
*                     name:
*                         type: string
*                         description: 회원권 이름
*                     price:
*                         type: integer
*                         description: 회원권 가격
*                     periodType:
*                         type: integer
*                         description: 기간의 단위 선택
*                     period:
*                         type: integer
*                         description: 기간
*                     maxApply:
*                         type: integer
*                         description: 최대 수강 횟수
*                     maxDayAttend:
*                         type: integer
*                         description: 일일 최대 수강 횟수
*                     maxWeekAttend:
*                         type: integer
*                         description: 주간 최대 수강 횟수
*/