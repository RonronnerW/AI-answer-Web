<template>
  <div id="userLoginPage">
    <h2 style="margin-bottom: 16px">用户登录</h2>
    <a-form
      :model="form"
      :style="{ width: '480px', margin: '0 auto' }"
      label-align="left"
      auto-label-width
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不小于 8 位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-row
          class="grid-demo"
          :gutter="24"
          :style="{ width: '480px', margin: '0 auto' }"
          label-align="left"
          auto-label-width
        >
          <a-col :span="12">
            <a-button
              type="primary"
              html-type="submit"
              style="width: 120px"
              @click="login"
            >
              登录
            </a-button>
          </a-col>
          <a-col :span="12">
            <a-button
              type="outline"
              html-type="submit"
              style="width: 120px"
              @click="register"
            >
              注册
            </a-button>
          </a-col>
        </a-row>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import API from "@/api";
import { userLoginUsingPost } from "@/api/userController";
import { useLoginUserStore } from "@/store/userStore";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const loginUserStore = useLoginUserStore();
const router = useRouter();

const form = reactive({
  userAccount: "",
  userPassword: "",
} as API.UserLoginRequest);

/**
 * 登录
 */
const login = async () => {
  const res = await userLoginUsingPost(form);
  if (res.data.code === 200) {
    await loginUserStore.fetchLoginUser();
    message.success("登录成功");
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.error("登录失败，" + res.data.message);
  }
};
// 注册
const register = async () => {
  router.push({
    path: "/user/register",
  });
};
</script>
