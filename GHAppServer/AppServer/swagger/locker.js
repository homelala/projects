/**
*  @swagger
*  paths:
*   /locker/count:
*     get:
*       summary: 지점 락커 개수 등록
*       tags: [Locker]
*       responses:
*         "200":
*           description: "지점 락커 개수 등록"
*   /locker/count_register:
*     post:
*       summary: 지점 락커 개수 등록
*       tags: [Locker]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/gymLockerInfo'
*       responses:
*         "200":
*           description: 지점 락커 개수 등록
*   /locker/list:
*     get:
*       summary: 지점 락커 목록 보기
*       tags: [Locker]
*       responses:
*         "200":
*           description: "지점 락커 목록 보기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/lockerInfo'
*   /locker/register:
*     post:
*       summary: 회원 락커 등록
*       tags: [Locker]
*       responses:
*         "200":
*           description: "지점 락커 목록 보기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/listMember'
*   /locker/register_process:
*     post:
*       summary: 회원 락커 등록 처리
*       tags: [Locker]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/RegisterLockerInfo'
*       responses:
*         "200":
*           description: 회원 락커 등록 처리 완료
*/