[rewrite_local]
# > 小贝基金
^https:\/\/api\.xiaobeiyangji\.com\/yangji-api\/api\/to-vip-invitation\/ url script-response-body https://raw.githubusercontent.com/cyh946/quanx/refs/heads/main/xiaobei.js

[mitm]
hostname = api.xiaobeiyangji.com
*
*
*/







let obj = JSON.parse($response.body);

obj = {"isExpire":false,"surplus":{"milliseconds":0,"seconds":29,"minutes":49,"hours":22,"days":6,"months":0,"years":0},"freeMine":0,"isYear":true,"vipEndTime":"2222-05-20 13:14:00","vipType":"year"}


$done({body: JSON.stringify(obj)});






