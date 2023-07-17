import { ILocale } from './type';

const zh: ILocale = {
  validity: '有效性',
  classification: '分类',
  result: '结果',
  comment: '评论',

  noData: '无数据',
  VALID: '有效',
  INVALID: '无效',
  UNKNOWN: '不确定',
  thisFrame: '当前帧',

  open: '未解决({{n}})',
  resolved: '已解决({{n}})',
  resolveAll: '解决所有',
  type: '类型',
  object: '结果',
  resolve: '解决',
  delete: '删除',
  unresolved: '未解决',
  all: '全部',
  you: '你',
  viewAll: '查看全部({{n}})',
  selectAll: '全选',
  acceptance: '验收',

  MISSED: '消失',
  WRONG_OBJECT: '错误结果',
  WRONG_LABEL: '错误标签',
  WRONG_ATTRIBUTE: '错误属性',
  NOT_FIT: '不贴合',
  DUPLICATED: '重复',
  UNCERTAIN: '不确定',
  DISCUSSION: '待讨论',
  OTHER: '其他',

  filterByCreator: '按创建者筛选',
  filterByStage: '按工序筛选',
  filterByType: '按错误类型筛选',

  sureDeleteMsg: '确认删除吗?',

  resultsSource: '加载来源',
  editSource: '编辑中来源',
  msgResolveAll: '是否确认解决全部评论？',

  msgSwitchInstance: '已切换到 查看/编辑 实例',
  msgSwitchSegmentation: '已切换到 查看/编辑 分割',
  msgTotalN: '评论总点数：{{n}}',
  msgErrN: '错误评论总点数：{{n}}',
  btnNoRepeat: '去重',

  labelWithoutTask: '无任务的结果',
  labelGroundTruth: '人工标注',
  labelModelRuns: '模型',
  labelAll: '全部',
};

export { zh };
