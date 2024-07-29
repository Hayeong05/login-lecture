const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<p>
    이름 : 김하영
    반 : 104
</p>

    <table>
        <thead>
            <th>프론트엔드 성적</th>
        </thead>
        <tbody>
            <td>A+</td>
        </tbody>
    </table>

    <p>
        <strong>
            75번 -> 봉화산역( 6호선 )
            봉화산역( 6호선 ) -> 약수역( 3호선 / 6호선 )
            약수역( 3호선 / 6호선 ) -> 충무로역( 3호선 )
        </strong>
    </p>
</body>
</html>
    `);
});

app.listen(3500, ()=> {
console.log("서버 가동") ;
});