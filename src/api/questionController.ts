// @ts-ignore
/* eslint-disable */
import request from '@/request';

/** addQuestion POST /question/add */
export async function addQuestionUsingPost(
  body: API.QuestionAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/question/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** aiGenerateQuestion POST /question/ai_generate */
export async function aiGenerateQuestionUsingPost(
  body: API.AiGenerateQuestionRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListQuestionContentDTO_>('/question/ai_generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteQuestion POST /question/delete */
export async function deleteQuestionUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/question/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editQuestion POST /question/edit */
export async function editQuestionUsingPost(
  body: API.QuestionEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/question/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionVOById GET /question/get/vo */
export async function getQuestionVoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestionVO_>('/question/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listQuestionByPage POST /question/list/page */
export async function listQuestionByPageUsingPost(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/question/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listQuestionVOByPage POST /question/list/page/vo */
export async function listQuestionVoByPageUsingPost(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/question/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyQuestionVOByPage POST /question/my/list/page/vo */
export async function listMyQuestionVoByPageUsingPost(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/question/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateQuestion POST /question/update */
export async function updateQuestionUsingPost(
  body: API.QuestionUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/question/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
