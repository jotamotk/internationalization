export default {
  // TODO 中文
  FailToSubmit: ' 提交数据失败，请先通过质量检测',
  rules: '规则',
  resolved: '已解决',
  MarkAsUnresolved: '标记为未解决',
  QualityCheckJobs: '质量检查任务',
  overview: {
    totalData: '总数据量',
    totalAnnotations: '总标注数量',
    classesBreakdown: '类别分布',
  },
  validator: {
    resultConfig1: '请至少选择1个结果',
    resultConfig2: '请最多选择5个结果',
    scoreWeight: '所有权重的总和必须为100%',
    qaCheckName: '请输入质量检查名称',
    SelectAJobs: '您需要选择至少一个规则来运行质量检查任务',
    SelectARule: '要创建质量检查任务，您至少需要一个规则。',
    dimensionTips: '您需要在{name}下选择至少一个规则以自定义权重',
    viewViolationstInfotoast: '您需要完成质量检查才能查看违规情况',
    viewReportInfotoast: '您需要至少一个成功的质量检查才能查看报告',
  },
  apply: {
    applyChangesToTheDataset: '将更改应用于数据集',
    changeTipForDataset:
      '在点击“将更改应用于数据集”之前，更改将不会应用到数据集的注释中',
    conflictTipForDataset:
      '您需要确保没有互斥的规则才能将更改应用于数据集',
    applyChangesToTheTask: '将更改应用于任务',
    changeTipForTask:
      '在点击“将更改应用于任务”之前，更改将不会应用到任务的注释中',
    conflictTipForTask:
      '您需要确保没有互斥的规则才能将更改应用于任务',
  },
  targetObject: {
    targetObject: '目标对象',
    range: '范围',
    allRange: '全部范围',
    customRange: '自定义范围',
    height: '高度',
    allHeight: '全部高度',
    customHeight: '自定义高度',
    targetObjectTip:
      '在3D点云数据中，可以根据目标对象与零点的范围和高度来进行筛选。这个标准用于确定是否违反了规则。',
  },
  QCJConfigObject: {
    QCbasics: '质量检查基础信息',
    QCName: '质量检查名称',
    ScoreWeight: '得分权重',
    Average: '平均',
    Custom: '自定义',
    Data: '数据',
    TargetData: '目标数据',
    AllData: '全部数据',
    UncompletedData: '未完成的数据',
    DataInTheAcceptanceStage: '验收阶段的数据',
    Results: '结果',
  },
  QCJAlert: {
    update: '更新',
    updateTitle: '您的数据索引已过时',
    updateDes1:
      '您的数据索引上次更新于{ lastUpdateAt }，意味着它们已过时。',
    updateDes2:
      '使用过时的数据索引运行质量检查作业可能导致结果与实际数据不一致。为确保准确的结果，请更新您的数据索引。',

    build: '构建',
    buildTitle: "在运行质量检查作业之前，您需要构建数据索引。",
    buildDes: '要执行质量检查作业，您首先需要构建数据索引。',
    rebuild: '重新构建',
    rebuildTitle: '您的索引已经是最新版本！',
    rebuildDes:
      '您的数据索引上次更新于{ lastUpdateAt }，已经是最新版本。请随时运行质量检查作业。',
    pengdingTitle: '正在更新您的数据索引',
    pengdingDes:
      '我们正在更新您的数据索引，您可以继续进行其他工作。完成后，您可以运行质量检查作业。',

    hide: '隐藏',
    hideTitle: '您的数据索引已成功更新',
    hideDes: '您的数据索引已成功更新，现在您可以运行质量检查作业。',
  },
  rulesList: {
    ifEnable: '是否启用',
    rulesName: '规则名称',
    requirement: '要求',
    description: '描述',
    dimension: '维度',
    mandatory: '强制',
    warning: '警告',
    info: '信息',
    completeness: '完整性',
    uniqueness: '唯一性',
    validity: '有效性',
    consistency: '一致性',
    config: '配置',
    targetOn: '目标',
    score: '得分',
    objects: '对象',
    data: '数据',
    attributes: '属性',
    trackingObjects: '追踪对象',

    mandatoryTip: '违反强制规则将阻止用户保存或提交数据',
  },
  jobsList: {
    JobNumber: '作业编号',
    QualityCheckName: '质量检查名称',
    Score: '得分',
    RunTimes: '运行次数',
    Status: '状态',
    Progress: '进度',
    Action: '操作',
    // 表格内部状态及按钮
    Runing: '运行中',
    Stopped: '已停止',
    Completed: '已完成',
    Failed: '已失败',
    ViewReport: '查看报告',
    ViewViolations: '查看违规记录',
    deleteTitle: '删除质量检查作业',
    deleteTips:
      '您将要删除一个质量检查作业。确认此操作后，其所有报告和违规记录将被永久删除。',
    createJobs: '创建质量检查作业',

    stopTitle: '停止质量检查作业',
    stopTips:
      '您将要停止一个质量检查作业。停止质量检查作业不会生成报告或违规记录。',
  },
  configModal: {
    configARule: '配置规则',
    builtIn: '内置',
    basics: '基础',
    parameters: '参数',
    viewInstruction: '查看说明',
    ruleName: '规则名称',
  },
  report: {
    runID: '运行 ID',
    dataQualityScore: '数据质量得分',
    dataCount: '数据数量',
    objectCount: '对象数量',
    resultName: '结果名称',
    startDate: '开始日期',
    endDate: '结束日期',
    dataQualityBreakdown: '数据质量细分',
    delete: {
      deleteReport: '删除报告',
      sureDelete: '您确定要删除所选项目或系列吗？此操作不可逆转。',
    },
    reportAreNotAvailable: '报告不可用',
    reportTip:
      '此报告根据您选择的规则和维度反映数据质量。',
    breakdownTip:
      '数据质量细分根据您选择的质量检查规则在四个维度上衡量您的数据质量。',
  },
};
