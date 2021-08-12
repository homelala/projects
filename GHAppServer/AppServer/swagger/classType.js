/**
*  @swagger
*  paths:
*   /class/register_process:
*     post:
*       summary: 수업 유형 등록 처리
*       tags: [ClassType]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/classTypeInfo'
*       responses:
*         "200":
*           description: 수업 유형 등록 완료
*   /class/register:
*     get:
*       summary: 수업 유형 등록하기
*       tags: [ClassType]
*       responses:
*         "200":
*           description: "수업 유형 등록하기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/coachInfo'
*   /class/list:
*     get:
*       summary: 수업 목록 보기
*       tags: [ClassType]
*       responses:
*         "200":
*           description: "수업 목록 보기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/AllClassType_CoachInfo'
*/