/*
 * @Author: SHUO
 * @Date: 2022-06-08 13:49:16
 * @LastEditors: SHUO
 * @LastEditTime: 2022-06-23 23:58:59
 * @FilePath: /doc/docs/.vitepress/config.js
 * @Description:配置项文件
 *
 */
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 语言
  lang: 'zh-CN',
  // 标题
  title: 'Sure Wang',
  // 描述信息<meta>
  description: 'Sure Wang Study Document.',
  // 最近更新时间
  lastUpdatedText: 'Updated Date',

  // 主题配置
  themeConfig: {
    // 导航
    nav: [
      {
        text: '前端技术',
        items: [
          {
            text: 'JavaScript',
            link: '/front-end/JavaScript/01.introduction'
          },
          {
            text: 'TypeScript',
            link: '/front-end/TypeScript/01.introduction'
          },
          {
            text: 'Vue',
            items: [
              // { text: 'Vue2', link: '/Vue/Vue2/introduction' },
              { text: 'Vue3', link: '/front-end/Vue/Vue3/introduction' }
            ]
          }
        ]
      },
      {
        text: '源码解析',
        items: [
          {
            text: 'Vue',
            items: [
              // { text: 'Vue2', link: '/Vue/Vue2/introduction' },
              { text: 'Vue3', link: '/sound-code/Vue/Vue3/createApp' }
            ]
          }
        ]
      }
    ],
    // 侧边栏
    sidebar: {
      '/front-end/JavaScript': [
        {
          text: 'JavaScript',
          items: [
            { text: '介绍', link: '/front-end/JavaScript/01.introduction' },
            {
              text: '浏览器工作原理',
              link: '/front-end/JavaScript/02.browsers-work'
            },
            {
              text: 'JavaScript工作原理',
              link: '/front-end/JavaScript/03.javaScript-work'
            },
            {
              text: '函数',
              link: '/front-end/JavaScript/04.function'
            },
            {
              text: 'this',
              link: '/front-end/JavaScript/05.this'
            },
            {
              text: '函数式编程',
              link: '/front-end/JavaScript/06.functional-programming'
            },
            {
              text: '面向对象',
              link: '/front-end/JavaScript/07.object-oriented'
            },
            {
              text: '原型',
              link: '/front-end/JavaScript/08.prototype'
            },
            {
              text: 'class',
              link: '/front-end/JavaScript/09.class'
            },
            {
              text: 'promis',
              link: '/front-end/JavaScript/10.promis'
            },
            {
              text: 'proxy-reflect',
              link: '/front-end/JavaScript/11.proxy-reflect'
            },
            {
              text: 'ES6',
              link: '/front-end/JavaScript/12.es6-knowledge'
            },
            {
              text: 'ES7',
              link: '/front-end/JavaScript/13.es7-knowledge'
            },
            {
              text: 'ES8',
              link: '/front-end/JavaScript/14.es8-knowledge'
            },
            {
              text: 'ES9',
              link: '/front-end/JavaScript/15.es9-knowledge'
            },
            {
              text: 'ES10',
              link: '/front-end/JavaScript/16.es10-knowledge'
            },
            {
              text: 'ES11',
              link: '/front-end/JavaScript/17.es11-knowledge'
            },
            {
              text: 'ES12',
              link: '/front-end/JavaScript/18.es12-knowledge'
            }
          ]
        }
      ],
      '/front-end/TypeScript': [
        {
          text: 'TypeScript',
          items: [
            { text: '介绍', link: '/front-end/TypeScript/01.introduction' },
            {
              text: '安装',
              link: '/front-end/TypeScript/02.typescript-install'
            },
            {
              text: '类型声明',
              link: '/front-end/TypeScript/03.declare-type'
            },
            {
              text: '基础类型',
              link: '/front-end/TypeScript/04.basics-type'
            },
            {
              text: '数组类型',
              link: '/front-end/TypeScript/05.array-type'
            },
            {
              text: '函数类型',
              link: '/front-end/TypeScript/06.function-type'
            },
            {
              text: '对象类型',
              link: '/front-end/TypeScript/07.object-type'
            },
            {
              text: '特殊类型',
              link: '/front-end/TypeScript/08.special-type'
            },
            {
              text: '联合类型',
              link: '/front-end/TypeScript/09.union-type'
            },
            {
              text: '断言类型',
              link: '/front-end/TypeScript/10.assertions-type'
            },
            {
              text: '文字类型',
              link: '/front-end/TypeScript/11.text-type'
            },
            {
              text: '枚举',
              link: '/front-end/TypeScript/12.enum'
            },
            {
              text: '代码收窄',
              link: '/front-end/TypeScript/13.narrow-code'
            }
          ]
        }
      ],
      '/front-end/Vue/Vue3': [
        {
          text: 'Vue3',
          items: [
            { text: '介绍', link: '/front-end/Vue/Vue3/introduction' },
            { text: '应用实例', link: '/front-end/Vue/Vue3/instance' },
            { text: '模板语法', link: '/front-end/Vue/Vue3/template-syntax' },
            { text: '组件', link: '/front-end/Vue/Vue3/component' },
            { text: '过渡组件', link: '/front-end/Vue/Vue3/transitions' },
            { text: '响应式API', link: '/front-end/Vue/Vue3/basic-reactivity' },
            { text: '组合式API', link: '/front-end/Vue/Vue3/composition-api' }
          ]
        }
      ]
    },
    // 社交链接
    socialLinks: [{ icon: 'github', link: 'https://github.com/ws1004/doc' }],
    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    // 最后更新文本
    lastUpdatedText: 'Updated Date'
  }
})
