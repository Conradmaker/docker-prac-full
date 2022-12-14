import express from "express";

import * as db from "./db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//DB lists 테이블에 있는 모든 데이터를 프론트로
app.get("/api/values", async (req, res, next) => {
  try {
    //db에서 정보 가져오기
    const result = await db.pool.query(`SELECT * FROM LISTS`);
    return res.status(200).json(result[0]);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
app.post("/api/value", async (req, res, next) => {
  try {
    const result = await db.pool.query(
      `INSERT INTO LISTS (value) VALUES ("${req.body.value}")`
    );
    console.log(result)
    return res.status(200).json(result[0]);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

app.listen(8080, () => {
  console.log("서버가 실행되었습니다.");
});
