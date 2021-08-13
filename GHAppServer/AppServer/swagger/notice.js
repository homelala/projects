/**
*  @swagger
*  paths:
*   /notice/list:
*     get:
*       summary: 공지사항 목록 
*       tags: [Notice]
*       responses:
*         "200":
*           description: "공지사항 목록"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/noticeInfo'
*   /notice/info:
*     get:
*       summary: 공지사항 상세 보기 
*       tags: [Notice]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 공지사항 id
*       responses:
*         "200":
*           description: "공지사항 상세보기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/noticeInfo'
*   /notice/update:
*     get:
*       summary: 공지사항 수정하기
*       tags: [Notice]
*       parameters:
*       - in: query
*         name: id
*         required: true
*         schema:
*           type: integer
*           description: 공지사항 id
*       responses:
*         "200":
*           description: "공지사항 수정하기"
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/noticeInfo'
*   /notice/register_process:
*     post:
*       summary: 공지사항 등록
*       tags: [Notice]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/noticeInfo'
*       responses:
*         "200":
*           description: 공지사항 등록
*   /notice/update_process:
*     post:
*       summary: 공지사항 수정
*       tags: [Notice]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/noticeInfo'
*       responses:
*         "200":
*           description: 공지사항 수정
*   /notice/delete:
*     post:
*       summary: 공지사항 삭제
*       tags: [Notice]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/noticeId'
*       responses:
*         "200":
*           description: 공지사항 수정
*/