<template>
  <div id="appStatisticView">
    <h2>热门应用统计</h2>
    <v-chart :option="appAnswerCountOption" style="height: 300px"></v-chart>
    <h2>应用答题结果</h2>
    <div class="searchBar">
      <a-input-search
        :style="{ width: '320px' }"
        placeholder="输入 appId"
        size="large"
        search-button
        @search="(value) => loadAppAnswerResultDTOData(value)"
      />
    </div>
    <div style="margin-bottom: 16px" />
    <v-chart :option="appAnswerResultOption" style="height: 300px"></v-chart>
  </div>
</template>
<script setup lang="ts">
import VChart from "vue-echarts";
import API from "@/api";
import "echarts";
import { computed, ref, watchEffect } from "vue";
import {
  getAppUserAnswerCountUsingGet,
  getAppUserAnswerResultUsingGet,
} from "@/api/userAnswerController";
import message from "@arco-design/web-vue/es/message";

const appAnswerCountList = ref<API.AppAnswerCountDTO[]>([]);
const appAnswerResultList = ref<API.AppAnswerResultDTO[]>([]);

/**
 * 加载热门应用数据
 */
const loadAppAnswerCountListData = async () => {
  // 获取 app
  const res = await getAppUserAnswerCountUsingGet();
  if (res.data.code === 200) {
    appAnswerCountList.value = res.data.data || [];
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

/**
 * 加载应用答题数据
 */
const loadAppAnswerResultDTOData = async (appId: string) => {
  if (!appId) {
    return;
  }
  // 获取 app
  const res = await getAppUserAnswerResultUsingGet({
    appId: appId as any,
  });
  if (res.data.code === 200) {
    appAnswerResultList.value = res.data.data || [];
  } else {
    message.error("获取数据失败，" + res.data.message);
  }
};

watchEffect(() => {
  loadAppAnswerCountListData();
  loadAppAnswerResultDTOData("");
});

const appAnswerCountOption = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: appAnswerCountList.value.map((item) => item.appId),
      name: "应用 id",
    },
    yAxis: {
      type: "value",
      name: "用户做题数",
    },
    series: [
      {
        data: appAnswerCountList.value.map((item) => item.answerCount),
        type: "bar",
      },
    ],
  };
});

const appAnswerResultOption = computed(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: appAnswerResultList.value.map((item) => {
          return {
            value: item.resultCount,
            name: item.resultName,
          };
        }),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
});
</script>

<style>
#appStatisticView {
}

.searchBar {
  margin-bottom: 28px;
}
</style>
