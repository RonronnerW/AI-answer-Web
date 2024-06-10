<template>
  <a-card class="appCard" hoverable @click="doCardClick">
    <template #actions>
      <span class="icon-hover" @click.stop="doLike">
        <template v-if="liked_number > 0">
          {{ liked_number }}
        </template>
        <IconThumbUp :class="{ highlight: isLiked }" />
      </span>
      <span class="icon-hover" @click="doShare"> <IconShareInternal /> </span>
      <ShareModel ref="shareModalRef" :link="shareLink" />
    </template>
    <template #cover>
      <div
        :style="{
          height: '204px',
          overflow: 'hidden',
        }"
      >
        <img
          :style="{ width: '100%', transform: 'translateY(-20px)' }"
          :alt="app.appName"
          :src="app.appIcon"
        />
      </div>
    </template>
    <a-card-meta :title="app.appName" :description="app.appDesc">
      <template #avatar>
        <div
          :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
        >
          <a-avatar
            :size="24"
            :image-url="app.user?.userAvatar"
            :style="{ marginRight: '8px' }"
          />
          <a-typography-text
            >{{ app.user?.userName ?? "无名" }}
          </a-typography-text>
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { IconThumbUp, IconShareInternal } from "@arco-design/web-vue/es/icon";
import API from "@/api";
import { defineProps, ref, withDefaults } from "vue";
import { useRouter } from "vue-router";
import ShareModel from "@/components/ShareModel.vue";
import { likeUsingGet } from "@/api/appController";
import message from "@arco-design/web-vue/es/message";

interface Props {
  app: API.AppVO;
}

const props = withDefaults(defineProps<Props>(), {
  app: () => {
    return {};
  },
});
// 分享弹窗引用
const shareModalRef = ref();
const shareLink = `${window.location.protocol}//${window.location.host}/app/detail/${props.app.id}`;
const doShare = (e: Event) => {
  if (shareModalRef.value) {
    shareModalRef.value.openModal();
  }
  e.stopPropagation();
};
let liked_number = ref<number>(props.app.likedNumber as number);
let isLiked = ref<boolean>(props.app.liked as boolean);
const doLike = async () => {
  if (!props.app) {
    return;
  }
  const res = await likeUsingGet({
    id: props.app.id as any,
  });
  if (res.data.code === 200) {
    isLiked.value = res.data.data as boolean;
    if (isLiked.value === true) {
      liked_number.value += 1;
    } else {
      liked_number.value -= 1;
    }
    console.log("点赞成功");
  } else {
    message.error("点赞失败，" + res.data.message);
  }
};
const router = useRouter();
const doCardClick = () => {
  router.push(`/app/detail/${props.app.id}`);
};
</script>
<style scoped>
.appCard {
  cursor: pointer;
}

.icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.1s;
}

.icon-hover:hover {
  background-color: rgb(var(--gray-2));
}

.highlight {
  color: #c51313; /* 高亮颜色，可以根据需求调整 */
}
</style>
