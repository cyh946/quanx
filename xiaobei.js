[rewrite_local]
# > 读手表-insight
^https:\/\/api\.xiaobeiyangji\.com\/yangji-api\/api\/to-vip-invitation url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/dsb.js

[mitm]
hostname = api.xiaobeiyangji.com
*
*
*/







let obj = JSON.parse($response.body);

if (obj.code === 200 && obj.data) {
    obj.vipType = "year";
    obj.vipEndTime = "2222-05-20 13:14:00";
    obj.isYear = true;
}

$done({body: JSON.stringify(obj)});