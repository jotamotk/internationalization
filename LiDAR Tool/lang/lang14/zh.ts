import { ILocale } from './type';

const zh: ILocale = {
  versionTipTitle: '🎆版本已更新',
  versionTipContent:
    '我们的工具已经更新到最新版本。为了避免数据不一致，我们建议您保存数据，关闭并重启当前页面。',
  'load-resource-error': '加载资源失败',
  'load-object-error': '加载结果失败',
  'load-classification-error': '加载分类信息失败',
  'load-class-error': '加载标签失败',
  'load-model-error': '加载模型失败',
  'load-dataset-classification-error': '加载数据集分类失败',
  'load-record-error': '加载标注信息失败',
  'load-frame-series-error': '加载连续帧数据失败',
  'invalid-query': '无效请求',
  'load-error': '加载失败',

  // model
  'load-track': '正在追踪....',
  'track-no-data': '无追踪结果，请检查结果的位置和方向是否正确',
  'track-error': '追踪失败',
  'track-ok': '追踪成功',

  // info
  'load-point': '加载点云....',
  'save-ok': '保存成功',
  'save-error': '保存失败',
  'model-run-error': '模型运行异常',
  'model-run-no-data': '无模型结果',
  'no-point-data': '无点云数据',
  'play-error': '播放异常',
  'unknown-error': '异常错误',
  'network-error': '网络错误',
  'login-invalid': '登录过期',
  'not-login': '未登录',
  // Button
  btnOk: '确认',
  btnSave: '保存',
  btnConfirm: '确认',
  btnConfirmExit: '确认并退出',
  btnCancel: '取消',
  btnDelete: '删除',
  btnDiscard: '废弃',
  btnRelease: '释放',
  btnRefresh: '刷新',
  btnClose: '关闭',
  btnUpdate: '更新',
  'title-verify': '相机参数矫正',
  // msg
  'msg-not-save': '是否保存变更?',
  'success-reject': '驳回成功',
  'success-accept': '验收成功',
  'success-submit': '提交成功',
  'msg-allow-validating': '结果标签验证规则进行中，是否确认提交？',
  'msg-allow-valid-failed': '有结果超出标签限制，是否确认提交？',
  'msg-not-validating': '结果标签验证规则未完成，请等待完成后提交',
  'msg-not-valid-failed': '有结果超出标签限制，请修改后提交',
  'msg-comment-limit': '评论点数不能超过{{n}}!',
  // 'title-validating': '标签验证规则校验中',
  // 'title-validated': '标签验证规则校验完成',
  // common
  'title-save-change': '保存修改',
  'msg-save-change': '是否保存修改？',
  'title-warning': '警告',
  'msg-close-task':
    '你想保存修改并保留数据吗？或不保存结果、将这些数据释放到任务池中供其他人领取？',
  'error-save': '任务保存失败,请重试',
  'error-release': '任务释放失败, 请重试',

  'title-reject': '驳回',
  // taskFlow
  'title-claiming': '正在领取作业...',
  'title-noData-claim': '无可领取的作业',
  'msg-link-hidden': '关联对象已隐藏！',
  'msg-link-deleted': '关联对象已删除！',
  'title-more': '更多',

  'verify-step1':
    '在点云中选中一个点并在图片中调整它的映射位置实现精准映射。每一张图片需要至少三个与点云结果相关联的点。',
  'verify-step2':
    '在调整位置实现精准映射之后，点击“重新矫正”。在矫正完成之后，创建新点或映射所有点到图片上来检查自动映射的参数是否精准。如果不精准，你需要重新调整点的位置并再次矫正参数。',
  'verify-step3': '如果参数正确，应用当前相机参数。',
  'verify-instruction': '指引',
  're-correct': '重新矫正',
  'warn-correct': '每张图片需要至少三个与点云结果相关联的点。',
  'success-correct': '矫正完成，请创建新点检验效果。',
  'success-update-config': '相机参数更新成功。',
  'data-classification-invalid': '当前数据缺失类别，请先修改。',
  'datas-classification-invalid': '第 {{n}} 缺失类别，请先修改。',
  'msg-dataflow-qaerror': '您的结果违反了质检强制性规则,是否确实要保存此结果?',
};

export { zh };
