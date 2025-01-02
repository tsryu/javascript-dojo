// # Promise

// ## 1. Promise
const data = '{"name": "Alice", "age": 25}'; // JSON 문자열

const promise = new Promise((resolve, reject) => {
  try {
    const parsedData = JSON.parse(data); // JSON 파싱
    resolve(parsedData); // 성공적으로 파싱된 데이터를 resolve로 전달
  } catch (error) {
    reject("JSON 파싱 실패"); // 에러 메시지를 reject로 전달
  }
});

promise
  .then((result) => console.log("파싱된 데이터:", result))
  .catch((error) => console.error("에러 발생:", error));

// ## 2. async await
async function parseJson(jsonString) {
  try {
      const parsedData = JSON.parse(jsonString); // JSON 파싱
      console.log("파싱된 데이터:", parsedData);
      return parsedData; // 성공적으로 파싱된 데이터 반환
  } catch (error) {
      console.error("에러 발생: JSON 파싱 실패");
      throw new Error("JSON 파싱 실패"); // 에러 던지기
  }
}

// 실행 코드
(async () => {
  try {
      await parseJson(data);
  } catch (error) {
      console.error("처리 중 에러:", error.message);
  }
})();