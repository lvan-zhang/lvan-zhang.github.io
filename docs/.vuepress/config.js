module.exports = {
  "title": "Lvan's blog",
  "description": "I'm not in danger,I am the danger.",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "关于我",
        "link": "/aboutMe/",
        "icon": "reco-account"
      },
      {
        "text": "我的",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/lvan-zhang",
            "icon": "reco-github"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/weixin_43972437",
            "icon": "reco-csdn"
          }
          // {
          //   "text": "WeChat",
          //   "link": "https://mp.weixin.qq.com/s/mXFqeUTegdvPliXknAAG_A",
          //   "icon": "reco-wechat"
          // }
        ]
      }
    ],
    "valineConfig": {
      "appId": 'yKkVYFK88LjrfDdJA4Y7RNGv-gzGzoHsz',// your appId
      "appKey": 't8L2JLHWd9LhWVFtmAPBdKGy', // your appKey
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/assets/head-photo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Lvan",
    "record": "Lvan",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    "@vuepress/medium-zoom",
    "flowchart",
    "@vuepress-reco/vuepress-plugin-comments"
  ]
}