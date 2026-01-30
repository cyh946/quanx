[rewrite_local]
# > 小贝基金
^https?:\/\/api\.xiaobeiyangji\.com\/yangji-api\/api\/to-vip-invitation url script-response-body https://raw.githubusercontent.com/cyh946/quanx/refs/heads/main/xiaobei.js

[mitm]
hostname = api.xiaobeiyangji.com
*
*
*/





// 圈X 自定义VIP响应数据脚本
const customResponse = {
  "isExpire": false,
  "surplus": {
    "milliseconds": 0,
    "seconds": 29,
    "minutes": 49,
    "hours": 22,
    "days": 6,
    "months": 0,
    "years": 0
  },
  "freeMine": 0,
  "isYear": true,
  "vipEndTime": "2222-05-20 13:14:00",
  "vipType": "year"
};
// 输出JSON响应体（圈X会自动将此输出作为接口响应）
$done({ body: JSON.stringify(customResponse) });









