/** 
* @swagger
*     components:
*         schemas:
*             classTypeInfo:
*                 type: object
*                 properties:
*                     name:
*                         type: string
*                         description: 수업 이름
*                     category:
*                         type: string
*                         description: 수업 구분
*                     type:
*                         type: boolean
*                         description: 수업 유형(온라인/오프라인)
*                     coach_id:
*                         type: integer
*                         description: 수업을 맡은 코치 id
*                     decrease:
*                         type: integer
*                         description: 차감 횟수
*                     color:
*                         type: string
*                         description: 수업 색상
*                     time:
*                         type: integer
*                         description: 수업 시간
*                     reservePerson:
*                         type: integer
*                         description: 수업 정원
*                     limitClass:
*                         type: boolean
*                         description: 수강 제한 여부
*             AllClassType_CoachInfo:
*                 type: object
*                 properties:
*                     classType_id:
*                         type: int
*                         description: 수업 유형 id
*                     classType_name:
*                         type: string
*                         description: 수업 유형 이름
*                     coach_id:
*                         type: int
*                         description: 코치 id
*                     coach_name:
*                         type: string
*                         description: 코치 이름
*                     time:
*                         type: time
*                         description: 수업 시간
*/