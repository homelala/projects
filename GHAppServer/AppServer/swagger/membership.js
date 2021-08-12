/**
*  @swagger
*  paths:
*   /membership/register_process:
*     post:
*       summary: 새로운 회원권 등록
*       tags: [Membership]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/membershipInfo'
*       responses:
*         "200":
*           description: 회원권 등록 완료
*   /membership/list:
*     get:
*       summary: 회원권 목록 보기
*       tags: [Membership]
*       responses:
*         "200":
*           description: "회원권 목록 보기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/membershipInfo'
*/