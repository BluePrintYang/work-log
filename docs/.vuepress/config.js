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
            {text: 'Version', link: '/version/'},
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

            '/version/': [
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
                    children: ['sizheng', '9.2.0', '9.2.0-2', 'springbootdemo', '常用小技巧']
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
                {
                    title: '第二十五周',
                    collapsable: true,
                    path: '/log/week 25/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 25', collapsable: true, path: '/log/week 25/'},
                        {title: '11.1', collapsable: true, path: '/log/week 25/11.1'},
                        {title: '11.2', collapsable: true, path: '/log/week 25/11.2'},
                        {title: '11.3', collapsable: true, path: '/log/week 25/11.3'},
                        {title: '11.4', collapsable: true, path: '/log/week 25/11.4'},
                        {title: '11.5', collapsable: true, path: '/log/week 25/11.5'},
                    ]
                },
                {
                    title: '第二十六周',
                    collapsable: true,
                    path: '/log/week 26/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 26', collapsable: true, path: '/log/week 26/'},
                        {title: '11.8', collapsable: true, path: '/log/week 26/11.8'},
                        {title: '11.9', collapsable: true, path: '/log/week 26/11.9'},
                        {title: '11.10', collapsable: true, path: '/log/week 26/11.10'},
                        {title: '11.11', collapsable: true, path: '/log/week 26/11.11'},
                        {title: '11.12', collapsable: true, path: '/log/week 26/11.12'},
                    ]
                },
                {
                    title: '第二十七周',
                    collapsable: true,
                    path: '/log/week 27/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 27', collapsable: true, path: '/log/week 27/'},
                        {title: '11.15', collapsable: true, path: '/log/week 27/11.15'},
                        {title: '11.16', collapsable: true, path: '/log/week 27/11.16'},
                        {title: '11.17', collapsable: true, path: '/log/week 27/11.17'},
                        {title: '11.18', collapsable: true, path: '/log/week 27/11.18'},
                        {title: '11.19', collapsable: true, path: '/log/week 27/11.19'},
                    ]
                },
                 {
                    title: '第二十八周',
                    collapsable: true,
                    path: '/log/week 28/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 28', collapsable: true, path: '/log/week 28/'},
                        {title: '11.22', collapsable: true, path: '/log/week 28/11.22'},
                        {title: '11.23', collapsable: true, path: '/log/week 28/11.23'},
                        {title: '11.24', collapsable: true, path: '/log/week 28/11.24'},
                        {title: '11.25', collapsable: true, path: '/log/week 28/11.25'},
                        {title: '11.26', collapsable: true, path: '/log/week 28/11.26'},
                    ]
                },
                {
                    title: '第二十九周',
                    collapsable: true,
                    path: '/log/week 29/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 29', collapsable: true, path: '/log/week 29/'},
                        {title: '11.29', collapsable: true, path: '/log/week 29/11.29'},
                        {title: '11.30', collapsable: true, path: '/log/week 29/11.30'},
                        {title: '12.1', collapsable: true, path: '/log/week 29/12.1'},
                        {title: '12.2', collapsable: true, path: '/log/week 29/12.2'},
                        {title: '12.3', collapsable: true, path: '/log/week 29/12.3'},
                    ]
                },
                {
                    title: '第三十周',
                    collapsable: true,
                    path: '/log/week 30/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 30', collapsable: true, path: '/log/week 30/'},
                        {title: '12.6', collapsable: true, path: '/log/week 30/12.6'},
                        {title: '12.7', collapsable: true, path: '/log/week 30/12.7'},
                        {title: '12.8', collapsable: true, path: '/log/week 30/12.8'},
                        {title: '12.9', collapsable: true, path: '/log/week 30/12.9'},
                        {title: '12.10', collapsable: true, path: '/log/week 30/12.10'},
                    ]
                },
                {
                    title: '第三十一周',
                    collapsable: true,
                    path: '/log/week 31/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 31', collapsable: true, path: '/log/week 31/'},
                        {title: '12.13', collapsable: true, path: '/log/week 31/12.13'},
                        {title: '12.14', collapsable: true, path: '/log/week 31/12.14'},
                        {title: '12.15', collapsable: true, path: '/log/week 31/12.15'},
                        {title: '12.16', collapsable: true, path: '/log/week 31/12.16'},
                        {title: '12.17', collapsable: true, path: '/log/week 31/12.17'},
                    ]
                },
                {
                    title: '第三十二周',
                    collapsable: true,
                    path: '/log/week 32/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 32', collapsable: true, path: '/log/week 32/'},
                        {title: '12.20', collapsable: true, path: '/log/week 32/12.20'},
                        {title: '12.21', collapsable: true, path: '/log/week 32/12.21'},
                        {title: '12.22', collapsable: true, path: '/log/week 32/12.22'},
                        {title: '12.23', collapsable: true, path: '/log/week 32/12.23'},
                        {title: '12.24', collapsable: true, path: '/log/week 32/12.24'},
                    ]
                },
                {
                    title: '第三十三周',
                    collapsable: true,
                    path: '/log/week 33/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 33', collapsable: true, path: '/log/week 33/'},
                        {title: '12.27', collapsable: true, path: '/log/week 33/12.27'},
                        {title: '12.28', collapsable: true, path: '/log/week 33/12.28'},
                        {title: '12.29', collapsable: true, path: '/log/week 33/12.29'},
                        {title: '12.30', collapsable: true, path: '/log/week 33/12.30'},
                        {title: '12.31', collapsable: true, path: '/log/week 33/12.31'},
                    ]
                },
                {
                    title: '第三十四周',
                    collapsable: true,
                    path: '/log/week 34/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 34', collapsable: true, path: '/log/week 34/'},
                        {title: '1.4', collapsable: true, path: '/log/week 34/1.4'},
                        {title: '1.5', collapsable: true, path: '/log/week 34/1.5'},
                        {title: '1.6', collapsable: true, path: '/log/week 34/1.6'},
                        {title: '1.7', collapsable: true, path: '/log/week 34/1.7'},
                    ]
                },
                {
                    title: '第三十五周',
                    collapsable: true,
                    path: '/log/week 35/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 35', collapsable: true, path: '/log/week 35/'},
                        {title: '1.10', collapsable: true, path: '/log/week 35/1.10'},
                        {title: '1.11', collapsable: true, path: '/log/week 35/1.11'},
                        {title: '1.12', collapsable: true, path: '/log/week 35/1.12'},
                        {title: '1.13', collapsable: true, path: '/log/week 35/1.13'},
                        {title: '1.14', collapsable: true, path: '/log/week 35/1.14'},
                    ]
                },
                {
                    title: '第三十六周',
                    collapsable: true,
                    path: '/log/week 36/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 36', collapsable: true, path: '/log/week 36/'},
                        {title: '1.17', collapsable: true, path: '/log/week 36/1.17'},
                        {title: '1.18', collapsable: true, path: '/log/week 36/1.18'},
                        {title: '1.19', collapsable: true, path: '/log/week 36/1.19'},
                        {title: '1.20', collapsable: true, path: '/log/week 36/1.20'},
                        {title: '1.21', collapsable: true, path: '/log/week 36/1.21'},
                    ]
                },
                {
                    title: '第三十七周',
                    collapsable: true,
                    path: '/log/week 37/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 37', collapsable: true, path: '/log/week 37/'},
                        {title: '1.24', collapsable: true, path: '/log/week 37/1.24'},
                        {title: '1.25', collapsable: true, path: '/log/week 37/1.25'},
                        {title: '1.26', collapsable: true, path: '/log/week 37/1.26'},
                        {title: '1.27', collapsable: true, path: '/log/week 37/1.27'},
                        {title: '1.28', collapsable: true, path: '/log/week 37/1.28'},
                        {title: '1.29', collapsable: true, path: '/log/week 37/1.29'},
                        {title: '1.30', collapsable: true, path: '/log/week 37/1.30'},
                    ]
                },
                {
                    title: '第三十八周',
                    collapsable: true,
                    path: '/log/week 38/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 38', collapsable: true, path: '/log/week 38/'},
                        {title: '2.7', collapsable: true, path: '/log/week 38/2.7'},
                        {title: '2.8', collapsable: true, path: '/log/week 38/2.8'},
                        {title: '2.9', collapsable: true, path: '/log/week 38/2.9'},
                        {title: '2.10', collapsable: true, path: '/log/week 38/2.10'},
                        {title: '2.11', collapsable: true, path: '/log/week 38/2.11'},
                    ]
                },
                {
                    title: '第三十九周',
                    collapsable: true,
                    path: '/log/week 39/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 38', collapsable: true, path: '/log/week 39/'},
                        {title: '2.14', collapsable: true, path: '/log/week 39/2.14'},
                        {title: '2.15', collapsable: true, path: '/log/week 39/2.15'},
                        {title: '2.16', collapsable: true, path: '/log/week 39/2.16'},
                        {title: '2.17', collapsable: true, path: '/log/week 39/2.17'},
                        {title: '2.18', collapsable: true, path: '/log/week 39/2.18'},
                    ]
                },
                {
                    title: '第四十周',
                    collapsable: true,
                    path: '/log/week 40/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 40', collapsable: true, path: '/log/week 40/'},
                        {title: '2.21', collapsable: true, path: '/log/week 40/2.21'},
                        {title: '2.22', collapsable: true, path: '/log/week 40/2.22'},
                        {title: '2.23', collapsable: true, path: '/log/week 40/2.23'},
                        {title: '2.24', collapsable: true, path: '/log/week 40/2.24'},
                        {title: '2.25', collapsable: true, path: '/log/week 40/2.25'},
                    ]
                },
                {
                    title: '第四十一周',
                    collapsable: true,
                    path: '/log/week 41/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 41', collapsable: true, path: '/log/week 41/'},
                        {title: '2.28', collapsable: true, path: '/log/week 41/2.28'},
                        {title: '3.1', collapsable: true, path: '/log/week 41/3.1'},
                        {title: '3.2', collapsable: true, path: '/log/week 41/3.2'},
                        {title: '3.3', collapsable: true, path: '/log/week 41/3.3'},
                        {title: '3.4', collapsable: true, path: '/log/week 41/3.4'},
                    ]
                },
                {
                    title: '第四十二周',
                    collapsable: true,
                    path: '/log/week 42/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 42', collapsable: true, path: '/log/week 42/'},
                        {title: '3.7', collapsable: true, path: '/log/week 42/3.7'},
                        {title: '3.8', collapsable: true, path: '/log/week 42/3.8'},
                        {title: '3.9', collapsable: true, path: '/log/week 42/3.9'},
                        {title: '3.10', collapsable: true, path: '/log/week 42/3.10'},
                        {title: '3.11', collapsable: true, path: '/log/week 42/3.11'},
                    ]
                },
                {
                    title: '第四十三周',
                    collapsable: true,
                    path: '/log/week 43/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 43', collapsable: true, path: '/log/week 43/'},
                        {title: '3.14', collapsable: true, path: '/log/week 43/3.14'},
                        {title: '3.15', collapsable: true, path: '/log/week 43/3.15'},
                        {title: '3.16', collapsable: true, path: '/log/week 43/3.16'},
                        {title: '3.17', collapsable: true, path: '/log/week 43/3.17'},
                        {title: '3.18', collapsable: true, path: '/log/week 43/3.18'},
                    ]
                },
                {
                    title: '第四十四周',
                    collapsable: true,
                    path: '/log/week 44/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 44', collapsable: true, path: '/log/week 44/'},
                        {title: '3.21', collapsable: true, path: '/log/week 44/3.21'},
                        {title: '3.22', collapsable: true, path: '/log/week 44/3.22'},
                        {title: '3.23', collapsable: true, path: '/log/week 44/3.23'},
                        {title: '3.24', collapsable: true, path: '/log/week 44/3.24'},
                        {title: '3.25', collapsable: true, path: '/log/week 44/3.25'},
                    ]
                },
                {
                    title: '第四十五周',
                    collapsable: true,
                    path: '/log/week 45/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 45', collapsable: true, path: '/log/week 45/'},
                        {title: '3.28', collapsable: true, path: '/log/week 45/3.28'},
                        {title: '3.29', collapsable: true, path: '/log/week 45/3.29'},
                        {title: '3.30', collapsable: true, path: '/log/week 45/3.30'},
                        {title: '3.31', collapsable: true, path: '/log/week 45/3.31'},
                        {title: '4.1', collapsable: true, path: '/log/week 45/4.1'},
                        {title: '4.2', collapsable: true, path: '/log/week 45/4.2'},
                    ]
                },
                {
                    title: '第四十六周',
                    collapsable: true,
                    path: '/log/week 46/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 46', collapsable: true, path: '/log/week 46/'},
                        {title: '4.6', collapsable: true, path: '/log/week 46/4.6'},
                        {title: '4.7', collapsable: true, path: '/log/week 46/4.7'},
                        {title: '4.8', collapsable: true, path: '/log/week 46/4.8'},
                    ]
                },
                {
                    title: '第四十七周',
                    collapsable: true,
                    path: '/log/week 47/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 47', collapsable: true, path: '/log/week 47/'},
                        {title: '4.11', collapsable: true, path: '/log/week 47/4.11'},
                        {title: '4.12', collapsable: true, path: '/log/week 47/4.12'},
                        {title: '4.13', collapsable: true, path: '/log/week 47/4.13'},
                        {title: '4.14', collapsable: true, path: '/log/week 47/4.14'},
                        {title: '4.15', collapsable: true, path: '/log/week 47/4.15'},
                    ]
                },
                {
                    title: '第四十八周',
                    collapsable: true,
                    path: '/log/week 48/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 48', collapsable: true, path: '/log/week 48/'},
                        {title: '4.18', collapsable: true, path: '/log/week 48/4.18'},
                        {title: '4.19', collapsable: true, path: '/log/week 48/4.19'},
                        {title: '4.20', collapsable: true, path: '/log/week 48/4.20'},
                        {title: '4.21', collapsable: true, path: '/log/week 48/4.21'},
                        {title: '4.22', collapsable: true, path: '/log/week 48/4.22'},
                    ]
                },
                {
                    title: '第四十九周',
                    collapsable: true,
                    path: '/log/week 49/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 49', collapsable: true, path: '/log/week 49/'},
                        {title: '4.24', collapsable: true, path: '/log/week 49/4.24'},
                        {title: '4.25', collapsable: true, path: '/log/week 49/4.25'},
                        {title: '4.26', collapsable: true, path: '/log/week 49/4.26'},
                        {title: '4.27', collapsable: true, path: '/log/week 49/4.27'},
                        {title: '4.28', collapsable: true, path: '/log/week 49/4.28'},
                        {title: '4.29', collapsable: true, path: '/log/week 49/4.29'},
                    ]
                },
                {
                    title: '第五十周',
                    collapsable: true,
                    path: '/log/week 50/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 50', collapsable: true, path: '/log/week 50/'},
                        {title: '5.5', collapsable: true, path: '/log/week 50/5.5'},
                        {title: '5.6', collapsable: true, path: '/log/week 50/5.6'},
                        {title: '5.7', collapsable: true, path: '/log/week 50/5.7'},
                    ]
                },
                {
                    title: '第五十一周',
                    collapsable: true,
                    path: '/log/week 51/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 51', collapsable: true, path: '/log/week 51/'},
                        {title: '5.9', collapsable: true, path: '/log/week 51/5.9'},
                        {title: '5.10', collapsable: true, path: '/log/week 51/5.10'},
                        {title: '5.11', collapsable: true, path: '/log/week 51/5.11'},
                        {title: '5.12', collapsable: true, path: '/log/week 51/5.12'},
                        {title: '5.13', collapsable: true, path: '/log/week 51/5.13'},
                    ]
                },
                {
                    title: '第五十二周',
                    collapsable: true,
                    path: '/log/week 52/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 52', collapsable: true, path: '/log/week 52/'},
                        {title: '5.16', collapsable: true, path: '/log/week 52/5.16'},
                        {title: '5.17', collapsable: true, path: '/log/week 52/5.17'},
                        {title: '5.18', collapsable: true, path: '/log/week 52/5.18'},
                        {title: '5.19', collapsable: true, path: '/log/week 52/5.19'},
                        {title: '5.20', collapsable: true, path: '/log/week 52/5.20'},
                    ]
                },
                {
                    title: '第五十三周',
                    collapsable: true,
                    path: '/log/week 53/',
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        {title: 'week 53', collapsable: true, path: '/log/week 53/'},
                        {title: '5.23', collapsable: true, path: '/log/week 53/5.23'},
                        {title: '5.24', collapsable: true, path: '/log/week 53/5.24'},
                        {title: '5.25', collapsable: true, path: '/log/week 53/5.25'},
                        {title: '5.26', collapsable: true, path: '/log/week 53/5.26'},
                        {title: '5.27', collapsable: true, path: '/log/week 53/5.27'},
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
