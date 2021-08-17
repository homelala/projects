/** 
* @swagger
*     components:
*         schemas:
*             gymLockerInfo:
*                 type: object
*                 properties:
*                     lockerCount:
*                         type: integer
*                         description: 지점 락커 개수
*                     lockerPrice:
*                         type: integer
*                         description: 지점 락커 대여 가격
*             lockerInfo:
*                 type: object
*                 properties:
*                     locker_id:
*                         type: integer
*                         description: 지점 락커 id
*                     member_name:
*                         type: string
*                         description: 락커 소유 회원 이름
*                     phone:
*                         type: string
*                         description: 락커 소유 회원 전화번호
*                     endDate:
*                         type: date
*                         description: 락커 만료일
*                     member_id:
*                         type: integer
*                         description: 락커 소우 회원 id
*             RegisterLockerInfo:
*                 type: object
*                 properties:
*                     locker_id:
*                         type: integer
*                         description: 지점 락커 id
*                     member_id:
*                         type: integer
*                         description: 락커 소유 회원 id
*                     endDate:
*                         type: date
*                         description: 락커 만료일
*                     starDate:
*                         type: date
*                         description: 락커 시작일
*                     price:
*                         type: integer
*                         description: 정상 금액
*                     payment:
*                         type: integer
*                         description: 결제 금액
*                     paymentDay:
*                         type: date
*                         description: 결제일
*                     card:
*                         type: integer
*                         description: 카드
*                     cash:
*                         type: integer
*                         description: 현금
*                     accountReceivable:
*                         type: integer
*                         description: 미수금
*/