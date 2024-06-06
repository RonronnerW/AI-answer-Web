<template>
  <a-button
    type="outline"
    style="
       {
        width: 100px;
        margin-bottom: 20px;
      }
    "
    @click="handleClick"
    >AI 生成
  </a-button>
  <a-drawer
    :width="340"
    :visible="visible"
    @ok="handleOk"
    @cancel="handleCancel"
    unmountOnClose
    :ok-loading="submitting"
  >
    <template #title>AI 生成题目</template>
    <div>
      <a-form
        :model="form"
        label-align="left"
        auto-label-width
        @submit="handleSubmit"
      >
        <a-form-item label="应用 ">
          {{ app.appName }}
        </a-form-item>
        <a-form-item field="questionNumber" label="题目数量">
          <a-input-number
            min="0"
            max="20"
            v-model="form.questionNumber"
            placeholder="请输入题目数量"
          />
        </a-form-item>
        <a-form-item field="optionNumber" label="选项数量">
          <a-input-number
            min="0"
            max="6"
            v-model="form.optionNumber"
            placeholder="请输入选项数量"
          />
        </a-form-item>
      </a-form>
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watchEffect, withDefaults } from "vue";
import API from "@/api";
import { aiGenerateQuestionUsingPost } from "@/api/questionController";
import message from "@arco-design/web-vue/es/message";
import { getAppVoByIdUsingGet } from "@/api/appController";

interface Props {
  appId: string;
  // 子组件返回函数
  onSuccess?: (result: API.QuestionContentDTO[]) => void;
}

const props = withDefaults(defineProps<Props>(), {
  appId: () => {
    return "";
  },
});

const form = reactive({
  optionNumber: 2,
  questionNumber: 10,
} as API.AiGenerateQuestionRequest);

const visible = ref(false);
const submitting = ref(false);
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  handleSubmit();
};
const handleCancel = () => {
  visible.value = false;
};

const app = ref<API.AppVO>();
/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.appId) {
    return;
  }
  // 获取app
  const res = await getAppVoByIdUsingGet({
    id: props.appId as any,
  });
  if (res.data.code === 200) {
    app.value = res.data.data;
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData();
});
/**
 * 提交
 */
const handleSubmit = async () => {
  if (!props.appId) {
    return;
  }
  submitting.value = true;
  const res: any = await aiGenerateQuestionUsingPost({
    appId: props.appId as any,
    ...form,
  });
  if (res.data.code === 200 && res.data.data.length > 0) {
    if (props.onSuccess) {
      props.onSuccess(res.data.data);
    } else {
      message.success("生成题目成功");
    }
    // 关闭抽屉
    handleCancel();
  } else {
    message.error("操作失败，" + res.data.message);
  }
  submitting.value = false;
};
</script>
