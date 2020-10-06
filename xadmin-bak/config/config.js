// https://umijs.org/config/
import {defineConfig} from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const {REACT_APP_ENV} = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  outputPath: `../templates/admin/`,
  publicPath: REACT_APP_ENV === 'dev' ? '/' : '/static/madmin/',
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/xadmin/login',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/xadmin/login',
          component: './UserLogin',
        },
      ],
    },
    {
      path: '/xadmin/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/xadmin/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/xadmin/',
              redirect: '/xadmin/index',
            },
            {
              name: '首页',
              path: '/xadmin/index',
              icon: 'dashboard',
              component: './DashBoard',
            },

            {
              name: '课程管理',
              icon: 'VideoCamera',
              path: '/xadmin/lessson',
              routes: [
                {
                  name: '课程方向',
                  icon: 'smile',
                  path: '/xadmin/lessson/label_type',
                  component: './LabelTypeList',
                },
                {
                  name: '课程分类',
                  icon: 'smile',
                  path: '/xadmin/lessson/label',
                  component: './LabelList',
                },
                {
                  name: '课程类型',
                  icon: 'smile',
                  path: '/xadmin/lessson/lesson_type',
                  component: './LessonTypeList',
                },
                {
                  name: '课程本课',
                  icon: 'smile',
                  path: '/xadmin/lessson/lesson',
                  component: './LessonList',
                },
                {
                  name: '课程章节',
                  icon: 'smile',
                  path: '/xadmin/lessson/chapter',
                  component: './ChapterList',
                },{
                  name: '章节小节',
                  icon: 'smile',
                  path: '/xadmin/lessson/term',
                  component: './TermList',
                },
                {
                  name: '课程简介',
                  icon: 'smile',
                  path: '/xadmin/lessson/catalog',
                  component: './CatalogList',
                },
                {
                  name: '课程评论',
                  icon: 'smile',
                  path: '/xadmin/lessson/comment',
                  component: './CommentList',
                },
                {
                  name: '课程提问',
                  icon: 'smile',
                  path: '/xadmin/lessson/qa',
                  component: './QaList',
                },
                {
                  name: '问题状态',
                  icon: 'smile',
                  path: '/xadmin/lessson/qa_type',
                  component: './QaTypeList',
                },
                {
                  name: '课程难度',
                  icon: 'smile',
                  path: '/xadmin/lessson/lesson_hard_type',
                  component: './LessonHardTypeList',
                },

                {
                  name: '课程角标',
                  icon: 'smile',
                  path: '/xadmin/lessson/lesson_script',
                  component: './LessonScriptList',
                },
              ],
            },
            {
              name: '专栏管理',
              icon: 'book',
              path: '/xadmin/read',
              routes: [
                {
                  name: '专栏分类',
                  icon: 'smile',
                  path: '/xadmin/read/read_type',
                  component: './ReadTypeList',
                }, {
                  name: '专栏章节',
                  icon: 'smile',
                  path: '/xadmin/read/read_chapter',
                  component: './ReadChapterList',
                }, {
                  name: '章节子节',
                  icon: 'smile',
                  path: '/xadmin/read/read_chapter_item',
                  component: './ReadChapterItemList',
                },
              ],
            },
            {
              name: '猿问管理',
              icon: 'QuestionCircle',
              path: '/xadmin/qa',
              routes: [

                {
                  name: '问题列表',
                  icon: 'smile',
                  path: '/xadmin/qa/question',
                  component: './QuestionList',
                },
                {
                  name: '关注标签',
                  icon: 'smile',
                  path: '/xadmin/qa/label_follow',
                  component: './LabelFollowList',
                },
                {
                  name: '回答列表',
                  icon: 'smile',
                  path: '/xadmin/qa/answer',
                  component: './AnswerList',
                },
              ],
            },
            {
              name: '手记管理',
              icon: 'PaperClip',
              path: '/xadmin/article',
              routes: [
                {
                  name: '文章列表',
                  icon: 'smile',
                  path: '/xadmin/article/article',
                  component: './ArticleList',
                },
                {
                  name: '文章类型',
                  icon: 'smile',
                  path: '/xadmin/article/article_type',
                  component: './ArticleTypeList',
                },
              ],
            },
            {
              name: '优惠管理',
              icon: 'MoneyCollect',
              path: '/xadmin/coupon',
              routes: [
                {
                  name: '优惠券码',
                  icon: 'smile',
                  path: '/xadmin/coupon/coupon',
                  component: './CouponList',
                },
                {
                  name: '优惠状态',
                  icon: 'smile',
                  path: '/xadmin/coupon/coupon_status',
                  component: './CouponStatusList',
                },
                {
                  name: '优惠范围',
                  icon: 'smile',
                  path: '/xadmin/coupon/coupon_range',
                  component: './CouponRangeList',
                },
              ],
            },

            {
              name: '订单管理',
              icon: 'OrderedList',
              path: '/xadmin/order',
              routes: [
                {
                  name: '购物车车',
                  icon: 'smile',
                  path: '/xadmin/order/cart',
                  component: './CartList',
                },
                {
                  name: '订单列表',
                  icon: 'smile',
                  path: '/xadmin/order/order',
                  component: './OrderList',
                }, {
                  name: '订单子项',
                  icon: 'smile',
                  path: '/xadmin/order/order_item',
                  component: './OrderItemList',
                },
                {
                  name: '订单状态',
                  icon: 'smile',
                  path: '/xadmin/order/order_status',
                  component: './OrderStatusList',
                },
              ],
            },
            {
              name: '充值管理',
              icon: 'PayCircle',
              path: '/xadmin/pay',
              routes: [
                {
                  name: '充值记录',
                  icon: 'smile',
                  path: '/xadmin/pay/recharge',
                  component: './RechargeList',
                },
                {
                  name: '充值类型',
                  icon: 'smile',
                  path: '/xadmin/pay/recharge_action',
                  component: './RechargeActionList',
                }, {
                  name: '充值方式',
                  icon: 'smile',
                  path: '/xadmin/pay/recharge_pay',
                  component: './RechargePayList',
                },
              ],
            },
            {
              name: '用户管理',
              icon: 'UsergroupAdd',
              path: '/xadmin/user',
              routes: [
                {
                  name: '课程讲师',
                  icon: 'smile',
                  path: '/xadmin/user/teacher',
                  component: './TeacherList',
                },
                {
                  name: '学生类型',
                  icon: 'smile',
                  path: '/xadmin/user/student_type',
                  component: './StudentTypeList',
                }, {
                  name: '学生列表',
                  icon: 'smile',
                  path: '/xadmin/user/student',
                  component: './StudentList',
                },
              ],
            },
            {
              name: '积分商城',
              icon: 'Shop',
              path: '/xadmin/integral/',
              routes: [
                {
                  name: '商品类别',
                  icon: 'smile',
                  path: '/xadmin/integral/integral_type',
                  component: './IntegralTypeList',
                }, {
                  name: '积分商品',
                  icon: 'smile',
                  path: '/xadmin/integral/integral',
                  component: './IntegralList',
                },
              ],
            },

            {
              name: '用户中心',
              icon: 'user',
              path: '/xadmin/user_info',
              routes: [
                {
                  name: '学习课程',
                  icon: 'smile',
                  path: '/xadmin/user_info/user_lesson',
                  component: './UserLessonList',
                },
                {
                  name: '用户通知',
                  icon: 'smile',
                  path: '/xadmin/user_info/user_notice',
                  component: './UserNoticeList',
                },
                {
                  name: '搜索历史',
                  icon: 'smile',
                  path: '/xadmin/user_info/history',
                  component: './HistoryList',
                },
                {
                  name: '用户咨询',
                  icon: 'smile',
                  path: '/xadmin/user_info/consult',
                  component: './ConsultList',
                }, {
                  name: '购买账单',
                  icon: 'smile',
                  path: '/xadmin/user_info/bill',
                  component: './BillList',
                }, {
                  name: '地址信息',
                  icon: 'smile',
                  path: '/xadmin/user_info/address',
                  component: './AddressList',
                }, {
                  name: '登录类型',
                  icon: 'smile',
                  path: '/xadmin/user_info/log_type',
                  component: './LogTypeList',

                }, {
                  name: '登录日志',
                  icon: 'smile',
                  path: '/xadmin/user_info/log',
                  component: './LogList',
                },

              ],
            },
            {
              name: '首页管理',
              icon: 'setting',
              path: '/xadmin/home',
              routes: [
                {
                  name: '首页大图',
                  icon: 'smile',
                  path: '/xadmin/home/slider',
                  component: './SliderList',
                }, {
                  name: '首页菜单',
                  icon: 'smile',
                  path: '/xadmin/home/navigation',
                  component: './NavigationList',
                }, {
                  name: '公共配置',
                  icon: 'smile',
                  path: '/xadmin/home/common_path_config',
                  component: './CommonPathConfigList',
                },
                {
                  name: '首页导航',
                  icon: 'smile',
                  path: '/xadmin/home/nav',
                  component: './NavList',
                },
                {
                  name: '底部配置',
                  icon: 'smile',
                  path: '/xadmin/home/footer',
                  component: './FooterList',
                }],

            },
            {
              name: '系统管理',
              icon: 'setting',
              path: '/xadmin/sys',
              routes: [
                {
                  name: '系统日志',
                  icon: 'smile',
                  path: '/xadmin/sys/sys_log',
                  component: './SysLogList',
                },
                {
                  name: '热搜榜单',
                  icon: 'smile',
                  path: '/xadmin/sys/hot',
                  component: './HotList',
                },
                {
                  name: '系统通知',
                  icon: 'smile',
                  path: '/xadmin/sys/notice',
                  component: './NoticeList',
                },
                {
                  name: '系统用户',
                  icon: 'smile',
                  path: '/xadmin/sys/user',
                  component: './UserList',
                },
              ],
            },

            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
