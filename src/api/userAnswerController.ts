/* eslint-disable */
import request from "@/request";

/** addUserAnswer POST /userAnswer/add */
export async function addUserAnswerUsingPost(
  body: API.UserAnswerAddRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseLong_>("/userAnswer/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** getAppUserAnswerCount GET /userAnswer/app_answer_count */
export async function getAppUserAnswerCountUsingGet(options?: {
  [key: string]: any;
}) {
  return request<API.BaseResponseListAppAnswerCountDTO_>(
    "/userAnswer/app_answer_count",
    {
      method: "GET",
      ...(options || {}),
    }
  );
}

/** getAppUserAnswerResult GET /userAnswer/app_answer_result */
export async function getAppUserAnswerResultUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAppUserAnswerResultUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseListAppAnswerResultDTO_>(
    "/userAnswer/app_answer_result",
    {
      method: "GET",
      params: {
        ...params,
      },
      ...(options || {}),
    }
  );
}

/** deleteUserAnswer POST /userAnswer/delete */
export async function deleteUserAnswerUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/userAnswer/delete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** editUserAnswer POST /userAnswer/edit */
export async function editUserAnswerUsingPost(
  body: API.UserAnswerEditRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/userAnswer/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** generateUserAnswerId GET /userAnswer/generate/id */
export async function generateUserAnswerIdUsingGet(options?: {
  [key: string]: any;
}) {
  return request<API.BaseResponseLong_>("/userAnswer/generate/id", {
    method: "GET",
    ...(options || {}),
  });
}

/** getUserAnswerVOById GET /userAnswer/get/vo */
export async function getUserAnswerVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserAnswerVOByIdUsingGETParams,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseUserAnswerVO_>("/userAnswer/get/vo", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserAnswerByPage POST /userAnswer/list/page */
export async function listUserAnswerByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUserAnswer_>("/userAnswer/list/page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** listUserAnswerVOByPage POST /userAnswer/list/page/vo */
export async function listUserAnswerVoByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUserAnswerVO_>(
    "/userAnswer/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** listMyUserAnswerVOByPage POST /userAnswer/my/list/page/vo */
export async function listMyUserAnswerVoByPageUsingPost(
  body: API.UserAnswerQueryRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponsePageUserAnswerVO_>(
    "/userAnswer/my/list/page/vo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}

/** updateUserAnswer POST /userAnswer/update */
export async function updateUserAnswerUsingPost(
  body: API.UserAnswerUpdateRequest,
  options?: { [key: string]: any }
) {
  return request<API.BaseResponseBoolean_>("/userAnswer/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
