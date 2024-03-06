let RspyList = {
    /* 监控信息配置 kr m 船长*/
    SpyList: [
    
        {
            Name: '[船长] 店铺抽奖通用活动-加密',
            Script: 'SuperManito_cishanjia_main/jd_lzkj_draw.js',
            ListenEnv: [
                'LUCK_DRAW_URL','jd_lzkj_draw_url',
            ],
SetEnv: {
                jd_lzkj_draw_url: 'LUCK_DRAW_URL',
                LUCK_DRAW_URL: 'LUCK_DRAW_URL',
            },
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '[船长] 积分换京豆超级会员',
            Script: 'SuperManito_cishanjia_main/jd_pointExgBeans.js',
            ListenEnv: [
                'jd_pointExgBeans_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },  
        {
            Name: '[船长] 积分换京豆超级无线',
            Script: 'SuperManito_cishanjia_main/jd_lzkj_pointsExchange.js',
            ListenEnv: [
                'jd_lzkj_pointsExchange_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },  
         {
            Name: '[船长] 关注店铺有礼[超级无线/超级会员]',
            Script: 'SuperManito_cishanjia_main/jd_wxShopFollowActivity.js',
            ListenEnv: [
                'jd_wxShopFollowActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },  
        {
            Name: '[6dy] 加购有礼超级无线',
            Script: '6dylan6_jdm/jd_lzkj_loreal_cart.js',
            ListenEnv: [
                'jd_lzkj_loreal_cart_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '[6dy] 大转盘抽奖景耕',
            Script: '6dylan6_jdm/jd_jinggeng_showDrawOne.js',
            ListenEnv: [
                'jd_jinggeng_showDrawOne_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '[船长] 通用开卡',
            Script: 'HarbourJ_HarbourToulu_main/jd_joinCommon_opencard.py',
            ListenEnv: [
                'jd_joinCommonId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
          {
            Name: '[SU] 组队瓜分礼品',
            Script: 'SuperManito_cishanjia_main/jd_wxTeam.js',
            ListenEnv: [
                'jd_wxTeam_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '[6dy] 加购有礼超级无线',
            Script: '6dylan6_jdm/jd_lzkj_loreal_cart.js',
            ListenEnv: [
                'jd_lzkj_loreal_cart_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 粉丝互动通用活动-加密',
            Script: '6dylan6_jdm/jd_wxFansInterActionActivity.js',
            ListenEnv: [
                'jd_wxFansInterActionActivity_activityId',
            ],
            TimeOut: 50,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 生日礼包和会员等级礼包',
            Script: '6dylan6_jdm/jd_wxMcLevelAndBirthGifts.js',
            ListenEnv: [
                'jd_wxMcLevelAndBirthGifts_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 加购有礼通用-加密',
            Script: '6dylan6_jdm/jd_wxCollectionActivity.js',
            ListenEnv: [
                'jd_wxCollectionActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] CJ关注店铺有礼',
            Script: '6dylan6_jdm/jd_cjwxShopFollowActivity.js',
            ListenEnv: [
                'jd_cjwxShopFollowActivity_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 集卡抽奖通用活动',
            Script: '6dylan6_jdm/jd_wxCollectCard.js',
            ListenEnv: [
                'jd_wxCollectCard_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 知识超人',
            Script: '6dylan6_jdm/jd_wxKnowledgeActivity.js',
            ListenEnv: [
                'jd_wxKnowledgeActivity_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 购物车锦鲤通用活动',
            Script: '6dylan6_jdm/jd_wxCartKoi.js',
            ListenEnv: [
                'jd_wxCartKoi_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 读秒拼手速通用活动',
            Script: '6dylan6_jdm/jd_wxSecond.js',
            ListenEnv: [
                'jd_wxSecond_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 店铺礼包特效',
            Script: '6dylan6_jdm/jd_wxShopGift.js',
            ListenEnv: [
                'jd_wxShopGift_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 邀请入会赢好礼（京耕）',
            Script: '6dylan6_jdm/jd_jinggeng_showInviteJoin.js',
            ListenEnv: [
                'jd_jinggeng_showInviteJoin_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 入会开卡领取礼包',
            Script: '6dylan6_jdm/jd_OpenCard_Force.js',
            ListenEnv: [
                'VENDER_ID',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 微定制瓜分京豆-加密',
            Script: '6dylan6_jdm/jd_wdz.js',
            ListenEnv: [
                'jd_wdz_activityId',
                'jd_wdz_activityUrl'
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 收藏大师-幸运抽奖',
            Script: '6dylan6_jdm/jd_txzj_lottery.js',
            ListenEnv: [
                'jd_lottery_activityUr',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 收藏大师-关注商品',
            Script: '6dylan6_jdm/jd_txzj_collect_shop.js',
            ListenEnv: [
                'jd_collect_shop_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 收藏大师-关注有礼',
            Script: '6dylan6_jdm/jd_txzj_collect_item.js',
            ListenEnv: [
                'jd_collect_item_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 收藏大师-加购有礼',
            Script: '6dylan6_jdm/jd_txzj_cart_item.js',
            ListenEnv: [
                'jd_cart_item_activityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 加购有礼（lzkj_loreal）',
            Script: '6dylan6_jdm/jd_lzkj_loreal_cart.js',
            ListenEnv: [
                'jd_lzkj_loreal_cart_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 幸运抽奖（lzkj_loreal）',
            Script: '6dylan6_jdm/jd_lzkj_loreal_draw.js',
            ListenEnv: [
                'jd_lzkj_loreal_draw_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] 关注有礼（lzkj_loreal）',
            Script: '6dylan6_jdm/jd_lzkj_loreal_followShop.js',
            ListenEnv: [
                'jd_lzkj_loreal_followShop_url',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
         {
            Name: '[船长]邀请有礼1',
            Script: 'jd_task_jika.js',
            ListenEnv: ['jd_lzkj_loreal_invite_url'],
            SetEnv: {
                jd_lzkjInteractUrl: 'jd_lzkj_loreal_invite_url',
            },
            TimeOut: 80,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
       
        {
            Name: '[6dy] CJ每日抢好礼通用活动',
            Script: '6dylan6_jdm/jd_cjdaily.js',
            ListenEnv: [
                'jd_cjdaily_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
       
        {
            Name: '[6dy] LZ店铺游戏',
            Script: 'KingRan_KR/jd_wxgame.js',
            ListenEnv: [
                'jd_wxgame_activityId',
            ],
            SetEnv: {
                WXGAME_ACT_ID: 'jd_wxgame_activityId',
            },
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M幸运抽奖',
            Script: '6dylan6_jdm/m_jd_wx_luckDraw.js',
            ListenEnv: [
                'M_WX_LUCK_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M组队瓜分',
            Script: '6dylan6_jdm/m_jd_wx_team.js',
            ListenEnv: [
                'M_WX_TEAM_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M关注有礼无线',
            Script: '6dylan6_jdm/m_jd_follow_shop.js',
            ListenEnv: [
                'M_FOLLOW_SHOP_ARGV',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M分享有礼',
            Script: '6dylan6_jdm/m_jd_wx_share.js',
            ListenEnv: [
                'M_WX_SHARE_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy]M读秒手速',
            Script: '6dylan6_jdm/m_jd_wx_secondDraw.js',
            ListenEnv: [
                'M_WX_SECOND_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M等级/生日礼包',
            Script: '6dylan6_jdm/m_jd_wx_levelBirth.js',
            ListenEnv: [
                'M_WX_LEVEL_BIRTH_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M知识超人',
            Script: '6dylan6_jdm/m_jd_wx_knowledge.js',
            ListenEnv: [
                'M_WX_KNOWLEDGE_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M关注抽奖',
            Script: '6dylan6_jdm/m_jd_follow_shop.js',
            ListenEnv: [
                'M_FOLLOW_SHOP_ARGV',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M无线游戏',
            Script: '6dylan6_jdm/m_jd_wx_game.js',
            ListenEnv: [
                'M_WX_GAME_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M完善有礼',
            Script: '6dylan6_jdm/m_jd_wx_completeDraw.js',
            ListenEnv: [
                'M_WX_COMPLETE_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M老虎机抽奖',
            Script: '6dylan6_jdm/m_jd_wx_centerDraw.js',
            ListenEnv: [
                'M_WX_CENTER_DRAW_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
       
        {
            Name: '[6dy] M加购有礼',
            Script: '6dylan6_jdm/m_jd_wx_addCart.js',
            ListenEnv: [
                'M_WX_ADD_CART_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M关注有礼',
            Script: '6dylan6_jdm/m_jd_follow_shop.js',
            ListenEnv: [
                'M_FOLLOW_SHOP_ARGV',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M收藏有礼',
            Script: '6dylan6_jdm/m_jd_fav_shop_gift.js',
            ListenEnv: [
                'M_FAV_SHOP_ARGV',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M粉丝红包',
            Script: '6dylan6_jdm/m_jd_fans_redPackt.js',
            ListenEnv: [
                'M_FANS_RED_PACKET_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[6dy] M打豆豆',
            Script: '6dylan6_jdm/m_jd_wx_dadoudou.js',
            ListenEnv: [
                'M_WX_DADOUDOU_URL',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 店铺特效关注有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxShopGift.py',
            ListenEnv: [
                'jd_wxShopGiftId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 关注店铺有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxShopFollow.py',
            ListenEnv: [
                'jd_wxShopFollowId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 完善信息有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxCompleteInfo.py',
            ListenEnv: [
                'jd_wxCompleteInfoId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 加购有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxCollectionActivity.py',
            ListenEnv: [
                'jd_wxCollectionActivityUrl',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 盖楼有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBulidActivity.py',
            ListenEnv: [
                'jd_wxBulidActivityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 生日等级礼包-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wxBirthGifts.py',
            ListenEnv: [
                'jd_wxBirthGiftsId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 微定制组队瓜分-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_wdz.py',
            ListenEnv: [
                'jd_wdz_activityId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 关注有礼-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopFollowGift.py',
            ListenEnv: [
                'jd_shopFollowGiftId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 店铺会员礼包-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_shopCollectGift.py',
            ListenEnv: [
                'jd_shopCollectGiftId',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
        {
            Name: '[船长] 店铺抽奖-JK',
            Script: 'HarbourJ_HarbourToulu_main/jd_dpcj.py',
            ListenEnv: [
                'DPCJID',
            ],
            TimeOut: 0,
            Interval: 0,
            RunPanel: [0],
            Disable: false,
        },
    ],
    /* 监控列表 */
    ListenList: [
        {
            Name: 'tgM线报群',
            Id: '-1001654299303',
        },
        {
            Name: '来薅线报通知',
            Id: '-1001749005484',
        },
        {
            Name: 'Tg顺丰快递',
            Id: '-1001841389846',
        }
    ],

    //非静默触发消息多少秒撤回 0不撤回
    delMsgWaitTime: 10,
    //静默功能  默认false,会在监听到消息的地方回复监听结果 true则推送到静默推送设置的地方
    Taboo: true,
    TabooOriginalMsg: false /* 静默后推送的消息是否显示触发消息 */,
    //1 禁用任何日志输出 改为true后,不会向社交平台推送任何消息,且2 3开关失效 控制台除外
    DisableAllLogs: false,
    //2 禁用错误日志输出 改为true后,不会向社交平台推送任何错误消息 控制台除外
    DisableErrLogs: false,
    //3 禁用正常运行日志输出 改为true后,不会向社交平台推送任何任务运行成功的消息 控制台除外
    DisableRunLogs: false,
    //4 禁用控制台日志 改为true后,控制台不会显示任何消息
    DisableConsoleLog: false,
    //队列模式 1先进先出  2先进后出  其他值均视为 先进先出
    ListMode: 2,
    /* 运行日志输出位置,例如错误运行日志/任务运行成功等日志,只能设置1个 */
    runLogsInfo: {
        platform: 'HumanTG', //发送平台
        toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
        Id: '-1001904179319', //个人id 或群id
    },
    /* 静默后监控结果输出位置  可填多个*/
    TabooLogsInfo: [
        // 	{
        // 	platform: "qqBot",
        // 	toGroupOrUser: "userId",   //通知类型,个人userId //群groupId
        // 	Id: "528006323"
        // },
         {
             platform: 'HumanTG', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '-1001904179319', //个人id 或群id
         },
         {
             platform: 'tgbot', //发送平台
             toGroupOrUser: 'groupId', //通知类型,个人userId //群groupId
             Id: '-1001904179319', //个人id 或群id
         },
    ],
};


module.exports = {
    RspyList,
};
