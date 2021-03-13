module.exports = {
  "title": "Hải dz",
  "description": "viết nhố nhăng tý",
  "dest": "docs",
  "base": "/haidz/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "href": "/favicon.png"
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
  "locales": {
    "/": {
      "lang": 'en-US',
    },
  },
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/theme-reco/": [
        "README",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "test",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "#"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Haidz",
    "authorAvatar": "/avatar.png",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-rss', {
      'site_url': 'https://www.facebook.com/hainx.jp/'
    }],
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
      'theme': ['z16'],
      'clean': true
    }]
  ]
}
