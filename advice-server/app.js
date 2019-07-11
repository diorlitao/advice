var express = require('express'),
  cors = require('cors'),
  app = express();

app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({
    msg: 'This is CORS-enabled for all origins!'
  });
});
app.get('/api/advicetypes', function (req, res, next) {
  res.json([{
      id: 1,
      name: `值班管理`,
      value: 'zbgl',
      icon: `wechat`
    },
    {
      id: 2,
      name: `角色管理`,
      value: 'jsgl',
      icon: `apple`
    },
    {
      id: 3,
      name: `用户管理`,
      value: 'yhgl',
      icon: `ie`
    },
    {
      id: 4,
      name: `请销假管理`,
      value: 'qxjgl',
      icon: `chrome`
    },
    {
      id: 5,
      name: `日程安排`,
      value: 'rcap',
      icon: `github`
    },
    {
      id: 6,
      name: `人员在位`,
      value: 'ryzw',
      icon: `alipay`
    },
    {
      id: 7,
      name: `督办管理`,
      value: 'dbgl',
      icon: `google`
    },
    {
      id: 8,
      name: `用印管理`,
      value: 'yygl',
      icon: `ant-design`
    },
    {
      id: 9,
      name: `车辆管理`,
      value: 'clgl',
      icon: `alibaba`
    },
    {
      id: 10,
      name: `其他问题`,
      value: 'qtwt',
      icon: `ellipsis`
    },
  ]);
});
app.get('/api/examples', function (req, res, next) {
  res.json([{
    id: 1,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 2,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 3,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 4,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 5,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 6,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 7,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 8,
    title: `系统运行缓慢1`,
    url: `#`,
  }, {
    id: 9,
    title: `系统运行缓慢1`,
    url: `#`,
  }]);
});

app.get('/api/advices', function (req, res, next) {
  res.json([{
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 0",
      type: '车辆管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 1",
      type: '用户管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 2",
      type: '车辆管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 3",
      type: '用印管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 4",
      type: '请销假管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 5",
      type: '日程安排'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 6",
      type: '车辆管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 7",
      type: '角色管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 8",
      type: '车辆管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 9",
      type: '督办管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 10",
      type: '值班管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 11",
      type: '值班管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 12",
      type: '人员在位'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 13",
      type: '角色管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 14",
      type: '用印管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 15",
      type: '人员在位'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 16",
      type: '用印管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 17",
      type: '其他问题'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 18",
      type: '车辆管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 19",
      type: '用印管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 20",
      type: '督办管理'
    },
    {
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      content: "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
      description: "用户： na***@163.com 2019/07/01 09:32:45.",
      href: "https://vue.ant.design/",
      title: "协同办公系统问题 21",
      type: '车辆管理'
    },

  ])
})

app.get('/api/types', (req, res, next) => {
  res.json([{
      id: 1,
      name: '车辆管理',
      value: 'clgl'
    },
    {
      id: 2,
      name: '人员在位',
      value: 'ryzw'
    },
    {
      id: 3,
      name: '请销假管理',
      value: 'qxjgl'
    },
    {
      id: 4,
      name: '用印管理',
      value: 'yygl'
    },
    {
      id: 5,
      name: '督办管理',
      value: 'dbgl'
    }, {
      id: 6,
      name: '用印管理',
      value: 'yygl'
    },
    {
      id: 7,
      name: '督办管理',
      value: 'dbgl'
    }
  ])
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80');
});