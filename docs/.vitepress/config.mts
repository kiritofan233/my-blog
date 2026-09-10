import { defineConfig } from 'vitepress'

export default defineConfig({
    base: '/my-blog/',
    
    title: '我的学习博客',

    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '微积分', link: '/calculus/' },
            { text: '大学物理', link: '/physics/' },
            { text: '数据结构', link: '/data-structure/' }
        ],

        sidebar: {
            '/calculus/': [
                {
                    text: '微积分',
                    items: [
                        { text: '课程首页', link: '/calculus/' },
                        { text: '极限', link: '/calculus/limit' },
                        { text: '导数', link: '/calculus/derivative' },
                        { text: '泰勒公式', link: '/calculus/taylor' }
                    ]
                }
            ],

            '/physics/': [
                {
                    text: '大学物理',
                    items: [
                        { text: '课程首页', link: '/physics/' },
                        { text: '力学', link: '/physics/mechanics' }
                    ]
                }
            ],

            '/data-structure/': [
                {
                    text: '数据结构',
                    items: [
                        { text: '课程首页', link: '/data-structure/' },
                        { text: '链表', link: '/data-structure/linked-list' }
                    ]
                }
            ]
        },

        outline: {
            level: [2, 3],
            label: '本页目录'
        }
    }
})