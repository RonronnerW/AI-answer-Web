import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import AdminUserView from "@/views/admin/AdminUserView.vue";
import AdminUserAnswerView from "@/views/admin/AdminUserAnswerView.vue";
import AdminScoringResultView from "@/views/admin/AdminScoringResultView.vue";
import AdminQuestionView from "@/views/admin/AdminQuestionView.vue";
import AdminAppView from "@/views/admin/AdminAppView.vue";
import AppDetailView from "@/views/app/AppDetailView.vue";
import AddAppView from "@/views/app/AddAppView.vue";
import AddQuestionPage from "@/views/question/AddQuestionView.vue";
import AddScoringResultView from "@/views/scoringResult/AddScoringResultView.vue";
import accessEnum from "@/access/accessEnum";
import DoAnswerView from "@/views/answer/DoAnswerView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import AnswerResultView from "@/views/answer/AnswerResultView.vue";
import MyAnswerView from "@/views/answer/MyAnswerView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: HomeView,
    meta: {
      access: accessEnum.USER,
    },
  },
  {
    path: "/answer/do/:appId",
    name: "答题",
    component: DoAnswerView,
    props: true,
    meta: {
      hideInMenu: true,
      access: accessEnum.USER,
    },
  },
  {
    path: "/answer/result/:id",
    name: "答题结果",
    component: AnswerResultView,
    props: true,
    meta: {
      hideInMenu: true,
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/answer/my",
    name: "我的答题",
    component: MyAnswerView,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/add/app",
    name: "创建应用",
    component: AddAppView,
    meta: {
      access: ACCESS_ENUM.USER,
    },
  },
  {
    path: "/add/question/:appId",
    name: "创建题目",
    component: AddQuestionPage,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/add/app/:appId",
    name: "修改应用",
    props: true,
    component: AddAppView,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/add/question/:appId",
    name: "创建题目",
    component: AddQuestionPage,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/add/scoring_result/:appId",
    name: "创建评分",
    component: AddScoringResultView,
    props: true,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/app/detail/:id",
    name: "应用详情页",
    props: true,
    component: AppDetailView,
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/admin/user",
    name: "用户管理",
    component: AdminUserView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/app",
    name: "应用管理",
    component: AdminAppView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/question",
    name: "题目管理",
    component: AdminQuestionView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/scoringResult",
    name: "评分管理",
    component: AdminScoringResultView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/admin/userAnswer",
    name: "回答管理",
    component: AdminUserAnswerView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
];
