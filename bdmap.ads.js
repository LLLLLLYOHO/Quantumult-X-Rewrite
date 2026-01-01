# > Alan优化版本 
# >  更新时间  2026-01-01 23: 26
# >  */
hostname = 180.76.76.200, newclient.map.baidu.com, httpdns.baidubce.com, ugc.map.baidu.com

# > "reject" 策略会返回 HTTP 状态码 404,不附带任何额外内容
# > "reject-200" 策略会返回 HTTP 状态码 200,不附带任何额外内容
# > "reject-img" 策略返回 HTTP 状态码 200,同时附带 1px gif
# > "reject-dict" 策略返回 HTTP 状态码 200,同时附带一个空的 JSON 对象
# > "reject-array" 策略返回 HTTP 状态码 200,同时附带一个空的 JSON 数组
# > 云闪付（默认关闭,只使用分流去云闪付广告）
# > ^https:\/\/wallet\.95516\.com\/s\/wl\/icon\/long url reject
# > ^https?+:\/\/(tysdk|ads)\.95516\.com url reject-dict
# > ads.95516.com和tysdk.95516.com这两个域名都拦截

https?:\/\/.*map\.baidu\.com\/.*govui\/rich_content url jsonjq-response-body '.data.posts.content=[]'
https?:\/\/newclient\.map\.baidu\.com\/client\/phpui.*qt=hw url reject-200
https?:\/\/newclient\.map\.baidu\.com\/client\/phpui2\/\?qt=ads url reject-200
https?:\/\/httpdns\.baidubce\.com url jsonjq-response-body '.data["newclient.map.baidu.com"]={}'
https?:\/\/newclient\.map\.baidu\.com\/client\/crossmarketing url reject-200
https?:\/\/newclient\.map\.baidu\.com\/client\/usersystem\/home\/dynamic url reject-200
https?:\/\/newclient\.map\.baidu\.com\/contributor-bus/bounty/tips url reject-200
https?:\/\/newclient\.map\.baidu\.com\/usercenter/mine/page url jsonjq-response-body 'del(.data.sport_card, .data.gold, .data.gold_coin_card, .data.shop)'
https?:\/\/newclient\.map\.baidu\.com\/usercenter/mine/page url jsonjq-response-body 'del(.data.sport_card, .data.gold, .data.gold_coin_card, .data.shop)'
