/* eslint-disable */
import request from "@/request";

/** addApp POST /app/add */
export async function addAppUsingPost(
  body: API.AppAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/app/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteApp POST /app/delete */
export async function deleteAppUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/app/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editApp POST /app/edit */
export async function editAppUsingPost(
  body: API.AppEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/app/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getAppVOById GET /app/get/vo */
export async function getAppVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseAppVO_>("/app/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAppByPage POST /app/list/page */
export async function listAppByPageUsingPost(
  body: API.AppQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageApp_>("/app/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listAppVOByPage POST /app/list/page/vo */
export async function listAppVoByPageUsingPost(
  body: API.AppQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAppVO_>("/app/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyAppVOByPage POST /app/my/list/page/vo */
export async function listMyAppVoByPageUsingPost(
  body: API.AppQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageAppVO_>("/app/my/list/page/vo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** doAppReview POST /app/review */
export async function doAppReviewUsingPost(
  body: API.ReviewRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/app/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** updateApp POST /app/update */
export async function updateAppUsingPost(
  body: API.AppUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/app/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
