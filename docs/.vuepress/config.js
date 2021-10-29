module.exports = {
    title: 'Hello VuePress',
    description: 'my worklog in wisedu',
    base: '/work-log/',
    themeConfig: {
        displayAllHeaders: false, // 默认值：false
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Guide', link: '/guide/'},
            {text: 'Log', link: '/log/'},
            {text: 'External', link: 'https://baidu.com'},
            {
                text: 'My Place',
                items: [
                    {text: 'GitHub', link: 'https://github.com/BluePrintYang'},
                    {text: 'GitEE', link: 'https://gitee.com/yonglone'},
                    {text: 'Blog', link: 'https://yonglone.gitee.io/'},
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'README',
                    collapsable: false,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: ['']
                },
                {
                    title: 'content',
                    collapsable: true,
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: ['one', 'two']
                }
            ],

            '/log/': [
                {
                    title: '第一周',
                    collapsable: true,
                    path: '/log/week 1/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 1', collapsable: true, path: '/log/week 1/'},
                        {title: '12.24', collapsable: true, path: '/log/week 1/12.24'},
                        {title: '12.24n', collapsable: true, path: '/log/week 1/12.24_newuser'},
                        {title: '12.25', collapsable: true, path: '/log/week 1/12.25'},]
                },
                {
                    title: '第二周',
                    collapsable: true,
                    path: '/log/week 2/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 2', collapsable: true, path: '/log/week 2/'},
                        {title: '12.28', collapsable: true, path: '/log/week 2/12.28'},
                        {title: '12.29', collapsable: true, path: '/log/week 2/12.29'},
                        {title: '12.30', collapsable: true, path: '/log/week 2/12.30'},
                    ]
                },
                {
                    title: '第三周',
                    collapsable: true,
                    path: '/log/week 3/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 3', collapsable: true, path: '/log/week 3/'},
                        {title: '1.4', collapsable: true, path: '/log/week 3/1.4'},
                        {title: '1.5', collapsable: true, path: '/log/week 3/1.5'},
                        {title: '1.6', collapsable: true, path: '/log/week 3/1.6'},
                        {title: '1.7', collapsable: true, path: '/log/week 3/1.7'},
                        {title: '1.8', collapsable: true, path: '/log/week 3/1.8'},
                    ]
                },
                {
                    title: '第四周',
                    collapsable: true,
                    path: '/log/week 4/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 4', collapsable: true, path: '/log/week 4/'},
                        {title: '1.11', collapsable: true, path: '/log/week 4/1.11'},
                        {title: '1.12', collapsable: true, path: '/log/week 4/1.12'},
                        {title: '1.13', collapsable: true, path: '/log/week 4/1.13'},
                        {title: '1.14', collapsable: true, path: '/log/week 4/1.14'},
                        {title: '1.15', collapsable: true, path: '/log/week 4/1.15'},
                    ]
                },
                {
                    title: '第五周',
                    collapsable: true,
                    path: '/log/week 5/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 5', collapsable: true, path: '/log/week 5/'},
                        {title: '3.8', collapsable: true, path: '/log/week 5/3.8'},
                        {title: '3.9', collapsable: true, path: '/log/week 5/3.9'},
                        {title: '3.10', collapsable: true, path: '/log/week 5/3.10'},
                        {title: '3.11', collapsable: true, path: '/log/week 5/3.11'},
                        {title: '3.12', collapsable: true, path: '/log/week 5/3.12'},
                    ]
                },
                {
                    title: '第六周',
                    collapsable: true,
                    path: '/log/week 6/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 6', collapsable: true, path: '/log/week 6/'},
                        {title: '3.15', collapsable: true, path: '/log/week 6/3.15'},
                        {title: '3.16', collapsable: true, path: '/log/week 6/3.16'},
                        {title: '3.17', collapsable: true, path: '/log/week 6/3.17'},
                        {title: '3.18', collapsable: true, path: '/log/week 6/3.18'},
                        {title: '3.19', collapsable: true, path: '/log/week 6/3.19'},
                    ]
                },
                {
                    title: '第七周',
                    collapsable: true,
                    path: '/log/week 7/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 7', collapsable: true, path: '/log/week 7/'},
                        {title: '7.1', collapsable: true, path: '/log/week 7/7.1'},
                        {title: '7.2', collapsable: true, path: '/log/week 7/7.2'}
                    ]
                },
                {
                    title: '第八周',
                    collapsable: true,
                    path: '/log/week 8/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 8', collapsable: true, path: '/log/week 8/'},
                        {title: '7.5', collapsable: true, path: '/log/week 8/7.5'},
                        {title: '7.6', collapsable: true, path: '/log/week 8/7.6'},
                        {title: '7.7', collapsable: true, path: '/log/week 8/7.7'},
                        {title: '7.8', collapsable: true, path: '/log/week 8/7.8'},
                        {title: '7.9', collapsable: true, path: '/log/week 8/7.9'},
                    ]
                },
                {
                    title: '第九周',
                    collapsable: true,
                    path: '/log/week 9/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 9', collapsable: true, path: '/log/week 9/'},
                        {title: '7.12', collapsable: true, path: '/log/week 9/7.12'},
                        {title: '7.13', collapsable: true, path: '/log/week 9/7.13'},
                        {title: '7.14', collapsable: true, path: '/log/week 9/7.14'},
                        {title: '7.15', collapsable: true, path: '/log/week 9/7.15'},
                        {title: '7.16', collapsable: true, path: '/log/week 9/7.16'},
                    ]
                },
                {
                    title: '第十周',
                    collapsable: true,
                    path: '/log/week 10/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 10', collapsable: true, path: '/log/week 10/'},
                        {title: '7.19', collapsable: true, path: '/log/week 10/7.19'},
                        {title: '7.20', collapsable: true, path: '/log/week 10/7.20'},
                        {title: '7.21', collapsable: true, path: '/log/week 10/7.21'},
                        {title: '7.22', collapsable: true, path: '/log/week 10/7.22'},
                        {title: '7.23', collapsable: true, path: '/log/week 10/7.23'},
                    ]
                },
                {
                    title: '第十一周',
                    collapsable: true,
                    path: '/log/week 11/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 11', collapsable: true, path: '/log/week 11/'},
                        {title: '7.26', collapsable: true, path: '/log/week 11/7.26'},
                        {title: '7.27', collapsable: true, path: '/log/week 11/7.27'},
                        {title: '7.28', collapsable: true, path: '/log/week 11/7.28'},
                        {title: '7.29', collapsable: true, path: '/log/week 11/7.29'},
                        {title: '7.30', collapsable: true, path: '/log/week 11/7.30'},
                    ]
                },
                {
                    title: '第十二周',
                    collapsable: true,
                    path: '/log/week 12/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 12', collapsable: true, path: '/log/week 12/'},
                        {title: '8.2', collapsable: true, path: '/log/week 12/8.2'},
                        {title: '8.3', collapsable: true, path: '/log/week 12/8.3'},
                        {title: '8.4', collapsable: true, path: '/log/week 12/8.4'},
                        {title: '8.5', collapsable: true, path: '/log/week 12/8.5'},
                        {title: '8.6', collapsable: true, path: '/log/week 12/8.6'},
                    ]
                },
                {
                    title: '第十三周',
                    collapsable: true,
                    path: '/log/week 13/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 13', collapsable: true, path: '/log/week 13/'},
                        {title: '8.9', collapsable: true, path: '/log/week 13/8.9'},
                        {title: '8.10', collapsable: true, path: '/log/week 13/8.10'},
                        {title: '8.11', collapsable: true, path: '/log/week 13/8.11'},
                        {title: '8.12', collapsable: true, path: '/log/week 13/8.12'},
                        {title: '8.13', collapsable: true, path: '/log/week 13/8.13'},
                    ]
                },
                {
                    title: '第十四周',
                    collapsable: true,
                    path: '/log/week 14/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 14', collapsable: true, path: '/log/week 14/'},
                        {title: '8.16', collapsable: true, path: '/log/week 14/8.16'},
                        {title: '8.17', collapsable: true, path: '/log/week 14/8.17'},
                        {title: '8.18', collapsable: true, path: '/log/week 14/8.18'},
                        {title: '8.19', collapsable: true, path: '/log/week 14/8.19'},
                        {title: '8.20', collapsable: true, path: '/log/week 14/8.20'},
                    ]
                },
                {
                    title: '第十五周',
                    collapsable: true,
                    path: '/log/week 15/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 15', collapsable: true, path: '/log/week 15/'},
                        {title: '8.23', collapsable: true, path: '/log/week 15/8.23'},
                        {title: '8.24', collapsable: true, path: '/log/week 15/8.24'},
                        {title: '8.25', collapsable: true, path: '/log/week 15/8.25'},
                        {title: '8.26', collapsable: true, path: '/log/week 15/8.26'},
                        {title: '8.27', collapsable: true, path: '/log/week 15/8.27'},
                    ]
                },
                {
                    title: '第十六周',
                    collapsable: true,
                    path: '/log/week 16/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 16', collapsable: true, path: '/log/week 16/'},
                        {title: '8.30', collapsable: true, path: '/log/week 16/8.30'},
                        {title: '8.31', collapsable: true, path: '/log/week 16/8.31'},
                        {title: '9.1', collapsable: true, path: '/log/week 16/9.1'},
                        {title: '9.2', collapsable: true, path: '/log/week 16/9.2'},
                        {title: '9.3', collapsable: true, path: '/log/week 16/9.3'},
                    ]
                },
                {
                    title: '第十七周',
                    collapsable: true,
                    path: '/log/week 17/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 17', collapsable: true, path: '/log/week 17/'},
                        {title: '9.6', collapsable: true, path: '/log/week 17/9.6'},
                        {title: '9.7', collapsable: true, path: '/log/week 17/9.7'},
                        {title: '9.8', collapsable: true, path: '/log/week 17/9.8'},
                        {title: '9.9', collapsable: true, path: '/log/week 17/9.9'},
                        {title: '9.10', collapsable: true, path: '/log/week 17/9.10'},
                    ]
                },
                {
                    title: '第十八周',
                    collapsable: true,
                    path: '/log/week 18/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 18', collapsable: true, path: '/log/week 18/'},
                        {title: '9.13', collapsable: true, path: '/log/week 18/9.13'},
                        {title: '9.14', collapsable: true, path: '/log/week 18/9.14'},
                        {title: '9.15', collapsable: true, path: '/log/week 18/9.15'},
                        {title: '9.16', collapsable: true, path: '/log/week 18/9.16'},
                        {title: '9.17', collapsable: true, path: '/log/week 18/9.17'},
                        {title: '9.18', collapsable: true, path: '/log/week 18/9.18'},
                    ]
                },
                {
                    title: '第十九周',
                    collapsable: true,
                    path: '/log/week 19/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 19', collapsable: true, path: '/log/week 19/'},
                        {title: '9.22', collapsable: true, path: '/log/week 19/9.22'},
                        {title: '9.23', collapsable: true, path: '/log/week 19/9.23'},
                        {title: '9.24', collapsable: true, path: '/log/week 19/9.24'},
                    ]
                },
                {
                    title: '第二十周',
                    collapsable: true,
                    path: '/log/week 20/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 20', collapsable: true, path: '/log/week 20/'},
                        {title: '9.26', collapsable: true, path: '/log/week 20/9.26'},
                        {title: '9.27', collapsable: true, path: '/log/week 20/9.27'},
                        {title: '9.28', collapsable: true, path: '/log/week 20/9.28'},
                        {title: '9.29', collapsable: true, path: '/log/week 20/9.29'},
                        {title: '9.30', collapsable: true, path: '/log/week 20/9.30'},
                    ]
                },
                {
                    title: '第二十一周',
                    collapsable: true,
                    path: '/log/week 21/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 21', collapsable: true, path: '/log/week 21/'},
                        {title: '10.8', collapsable: true, path: '/log/week 21/10.8'},
                        {title: '10.9', collapsable: true, path: '/log/week 21/10.9'},
                    ]
                },
                {
                    title: '第二十二周',
                    collapsable: true,
                    path: '/log/week 22/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 22', collapsable: true, path: '/log/week 22/'},
                        {title: '10.11', collapsable: true, path: '/log/week 22/10.11'},
                        {title: '10.12', collapsable: true, path: '/log/week 22/10.12'},
                        {title: '10.13', collapsable: true, path: '/log/week 22/10.13'},
                        {title: '10.14', collapsable: true, path: '/log/week 22/10.14'},
                        {title: '10.15', collapsable: true, path: '/log/week 22/10.15'},
                    ]
                },
                {
                    title: '第二十三周',
                    collapsable: true,
                    path: '/log/week 23/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 23', collapsable: true, path: '/log/week 23/'},
                        {title: '10.18', collapsable: true, path: '/log/week 23/10.18'},
                        {title: '10.19', collapsable: true, path: '/log/week 23/10.19'},
                        {title: '10.20', collapsable: true, path: '/log/week 23/10.20'},
                        {title: '10.21', collapsable: true, path: '/log/week 23/10.21'},
                        {title: '10.22', collapsable: true, path: '/log/week 23/10.22'},
                    ]
                },
                {
                    title: '第二十四周',
                    collapsable: true,
                    path: '/log/week 24/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 24', collapsable: true, path: '/log/week 24/'},
                        {title: '10.25', collapsable: true, path: '/log/week 24/10.25'},
                        {title: '10.26', collapsable: true, path: '/log/week 24/10.26'},
                        {title: '10.27', collapsable: true, path: '/log/week 24/10.27'},
                        {title: '10.28', collapsable: true, path: '/log/week 24/10.28'},
                        {title: '10.29', collapsable: true, path: '/log/week 24/10.29'},
                    ]
                },
            ],

            // fallback
            '/': [
                '',
                'contact',
                'about'
            ]
        },
        lastUpdated: 'Last Updated', // string | boolean
    }
}
