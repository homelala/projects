/**
*  @swagger
*  paths:
*   /coach/register_process:
*     post:
*       summary: 새로운 코치 등록
*       tags: [Coach]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/coachInfo'
*       responses:
*         "200":
*           description: 코치 등록 완료
*   /coach/list:
*     get:
*       summary: 코치 정보 보기
*       tags: [Coach]
*       responses:
*         "200":
*           description: "코치 정보 보기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/coachInfo'
*/