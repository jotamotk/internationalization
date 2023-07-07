export default {
  taskPerformance: '任务绩效',
  workerPerformance: '作业员绩效',
  someonePerformance: '的绩效',
  chart: {
    day: '天',
    week: '周',
    month: '月',
  },
  export: {
    exportSettings: '导出设置',
    task: '任务',
    workers: '作业员',
    exportResultsFor: '导出绩效类型',
    valid: '有效和未知',
    invalid: '无效',
    performanceValidity: '数据有效性',
    exporting: '正在导出',
    exported: '已导出',
  },
  condition: {
    countConditions: '统计条件',
    conditionInfo: '仅支持过去六个月里创建的任务的绩效分析。',
    taskHolder: '任务ID/任务名',
    dataType: '数据类型',
    scenarioType: '场景类型',
    linkedDataset: '关联的数据集',
    annotationType: '标注类型',
    taskStarted: '任务开始时间',
    taskCompleted: '任务完成时间',
    static: '单帧',
    scene: '连续帧',
    dataStatus: '数据状态',
    completed: '已完成',
    completedInfo:
      '数据已被任务管理员验收通过。一旦被验收通过，绩效统计数据将保持不变。完成绩效通常用于任务结算。',
    submitted: '已提交',
    submittedInfo:
      '数据仅由作业员提交，但尚未被任务管理员验收通过。因为这些数据可能随着任务的进行而改变，该部分的绩效统计不是最终统计。提交绩效通常用于任务进度监控。',
    dataValidity: '数据有效性',
    valid: '有效和未知',
    invalid: '无效',
    validityInfo: '数据在任务中被标记为有效和未知或无效',
    date: '时间',
    day: '天',
    week: '周',
    month: '月',
    thisWeek: '本周',
    thisMonth: '本月',
    byDay: '按天',
    byWeek: '按周',
    byMonth: '按月',
    upToNow: '截止当前',
    upTtoYesterday: '截止昨天',
    completedAt: '验收通过时间',
    submittedAt: '提交时间',
    last7Days: '过去7天',
    last30Days: '过去30天',
    last90Days: '过去90天',
    last180Days: '过去180天',
  },
  taskData: {
    dataPerformance: '作业绩效',
    data: {
      completedData: '完成作业',
      submittedData: '提交作业',
      items: '张',
      scenes: '连续帧',
      frames: '帧',
      completedInfo: {
        framesInfo: '在筛选的时间段里被验收通过的连续帧数量/总帧数。',
        singleInfo: '在筛选的时间段里被验收通过的作业数量。',
      },
      submittedInfo: {
        framesInfo: '在筛选的时间段里提交的连续帧数量/总帧数。',
        singleInfo: '在筛选的时间段里提交的作业数量。',
      },
    },
    valid: {
      validWorkDuration: '有效工作时长',
      stageBreakdown: '工序细分',
      total: '总计',
      averageScene: '平均/连续帧',
      average: '平均',
      completedInfo: {
        total: '总计: 在所有工序的总有效工作时间。',
        framesAverage: '平均/连续帧 = 总有效工作时长/连续帧数量。 完成一个连续帧的平均工作时间。',
        singleAverage: '平均 = 总有效工作时长/作业数量。 完成一个作业的平均工作时间。',
      },
      submittedInfo: {
        total: '总计: 总有效工作时长。',
        framesAverage: '平均/连续帧 = 总有效工作时长/连续帧数量。在一个连续帧上的平均工作时间。',
        singleAverage: '平均 = 总有效工作时长/作业数量。 一个作业上的平均工作时间。',
      },
    },
    quality: {
      quality: '质量',
      accuracy: '准确率',
      passRate: '通过率',
      AccAccuracy: '验收准确率',
      AccPassRate: '验收通过率',
      completedInfo: {
        accuracy: '图准率：验收环节中总准确作业量/总数据数量。',
        passRate: '通过率: 验收环节中数据总量/提交总次数。',
        AccAccuracy: '验收图准率：验收环节中总准确作业量/总数据数量。',
        AccPassRate: '验收通过率: 验收环节中数据总量/提交总次数。',
      },
      submittedInfo: {
        accuracy: '图准率：总准确作业量/总数据数量。',
        passRate: '通过率: 1-该工序被驳回总数/该工序提交总次数。',
        AccAccuracy: '验收图准率：总准确作业量/总数据数量。',
        AccPassRate: '验收通过率: 1-该工序被驳回总数/该工序提交总次数。',
      },
      gatherInfo: '此为任务平均值。',
      d: '天',
      h: '小时',
      m: '分钟',
      s: '秒',
    },
    redo: {
      redo: '重做',
      rejectedData: '驳回张数',
      resetData: '重置张数',
      redoScenes: '驳回连续帧',
      resetScenes: '重置连续帧',
      redoItems: '驳回张数',
      resetItems: '重置张数',
      completedInfo: {
        frames: {
          redoScenes: '验收驳回连续帧：验收环节驳回/重新分配到前序工序的连续帧数量。',
          resetScenes: '验收重置连续帧：验收环节驳回/重新分配到前序工序并清空结果的连续帧数量。',
        },
        single: {
          redoItems: '验收驳回张数：验收环节驳回/重新分配到前序工序的张数。',
          resetItems: '验收重置张数：验收环节驳回/重新分配到前序工序并清空结果的张数。',
        },
      },
      submittedInfo: {
        frames: {
          redoScenes: '被驳回连续帧：被驳回/重新分配到前序工序的连续帧数量。',
          resetScenes: '被重置连续帧：被驳回/重新分配到前序工序并清空结果的张数。',
        },
        single: {
          redoItems: '被驳回张数：被驳回/重新分配到前序工序的张数。',
          resetItems: '被重置张数：被驳回/重新分配到前序工序并清空结果的张数。',
        },
      },
    },
  },
  taskObject: {
    objectPerformance: '结果绩效',
    objectCount: '结果数',
    viewBy: '查看类型',
    object: '结果类型',
    class: '标签',
    filterObjectType: '筛选结果类型',
    create: '创建',
    createInfo: '创建：新创建的结果数量',
    viewImported: '查看导入',
    viewInfo: '查看导入：查看导入的预标注结果数量',
    edit: '编辑',
    editInfo: '编辑：被他人编辑过的结果数量',
    delete: '删除',
    deleteInfo: '删除：被删除的结果数量',
    review: '审核',
    reviewInfo: '审核：被审核过的结果数量',
    accept: '验收',
    acceptInfo: '验收：被验收过的结果数量',
    sum: '总数',
    total: '总数',
    filterClass: '筛选标签',
    pleaseSelect: '请选择',
  },
  taskAccuracy: {
    pointAccuracy: '点准率',
    objectAccuracy: '框准率',
    ACCObjectAccuracy: '验收框准率',
    ACCAccuracy: '验收准确率',
    DataAccuracyInfo: '在验收阶段中准确的数据的总数/数据总数',
    instanceObjectAccuracyInfoForAdminCompleteAnnotate: '1-在验收阶段错误的对象数/总创建的对象数',
    instanceObjectAccuracyInfoForCompleteReview: '1-错误对象数/审核对象总数',
    instanceObjectAccuracyInfoForWorkerCompleteAnnotate: '1 - 错误对象数量 / 创建的对象总数',
    segmentationDataAccuracyInfoForWorker: '准确数据的总数 / 数据的总数',
    segmentationObjectAccuracyInfoForAdmin: '1 - 验收中错误点的数量 / 标注的总点数',
    segmentationObjectAccuracyInfoForWorkerAnnotate: '1 - 错误点的数量 / 标注点的总数',
    segmentationObjectAccuracyInfoForWorkerReview: '1 - 错误点的数量 / 已审核点的总数',
    instanceTitle: '实例 (分割例外)',
    pointAccuracyAnnotate: '点准率 - 标注',
    pointAccuracyReview: '点准率 - 审查',
    // TODO 中文
    image: {
      segmentationDataAccuracy: {
        complete: 'Total Number of Accurate Data in ACC stage/ Total Number of Data.',
        annotationStage: 'Total Number of Accurate Data/ Total Number of Data.',
        reviewStage: 'Total Number of Accurate Data/ Total Number of Data.',
      },
      segmentationObjectAccuracy: {
        complete: '1 - Number of Wrong Objects in ACC/ Total Number of Created Objects.',
        annotationStage: '1 - Number of Wrong Objects/ Total Number of Created Objects.',
        reviewStage: '1 - Number of Wrong Objects/ Total Number of Reviewed Objects.',
      },
    },
  },
  tableList: {
    columns: '列',
    type: '类型',
    sum: '总计',
    object3D: '点云结果',
    noClass: '无标签',
    box3D: '点云立体框',
    box2D: '图像立体框',
    rect2D: '图像2D框',
    rectangle: '矩形',
    polygon: '多边形',
    polyline: '折线',
    polygon2D: '2D多边形',
    polyline2D: '2D折线',
    polygon3D: '3D多边形',
    polyline3D: '3D折线',
    imageCuboid: '伪3D框',
    total: '总计',
    name: '姓名',
    completedScenes: '完成连续帧',
    submittedScenes: '提交连续帧',
    scenesInfo: '在筛选的时间段里被验收通过的连续帧数量。',
    completedItems: '完成张数',
    submittedItems: '提交张数',
    itemsInfo: '在筛选的时间段里被验收通过的张数。',
    completedFrames: '完成帧数',
    submittedFrames: '提交帧数',
    framesInfo: '在筛选的时间段里被验收通过的连续帧数量。',
    totalDuration: '总工作时长',
    totalDurations: '总工作时长（秒）',
    totalInfo: '在当前工序的总有效工作时间。',
    averageDuration: '平均时长',
    averageDurationUnit: '平均时长（秒）',
    averageDurationScene: '平均时长/连续帧（秒）',
    averageScenesInfo: '总有效工作时长/连续帧数量。完成一个连续帧的平均工作时间。',
    averageItemsInfo: '总有效工作时长/作业数量。完成一个作业的平均工作时间。',
    passRate: '通过率',
    passInfo: '1-该工序被驳回总数/该工序提交总次数。',
    rejectedScenes: '被驳回连续帧',
    rejectScenesInfo: '被驳回/重新分配给其他作业员的连续帧数量。',
    rejectedItems: '被驳回张数',
    rejectItemsInfo: '被驳回/重新分配给其他作业员的张数。',
    resetScenes: '被重置连续帧',
    resetScenesInfo: '被驳回/重新分配并清空结果的张数。',
    resetItems: '被重置张数',
    resetItemsInfo: '被重置张数：被驳回/重新分配并清空结果的张数。',
    objectPerformance: '结果绩效',
    annotation: {
      createInfo: '创建：新创建的结果数量',
      viewInfo: '查看导入：查看导入的预标注结果数量',
      editInfo: '编辑：编辑他人创建结果的数量',
      deleteInfo: '删除：删除他人结果的数量',
    },
    review: {
      reviewInfo: '审核：审核通过的结果数量',
      createInfo: '创建：新创建的结果数量',
      editInfo: '编辑：编辑他人创建结果的数量',
      deleteInfo: '删除：删除他人结果的数量',
    },
    acceptance: {
      acceptInfo: '验收：验收通过的结果数量',
      createInfo: '创建：新创建的结果数量',
      editInfo: '编辑：编辑他人创建结果的数量',
      deleteInfo: '删除：删除他人结果的数量',
    },
    objectAccuracy: '框准率',
    accuracyInfo: {
      createInfo: '创建的：1 - 错误结果数/创建结果数。',
      reviewInfo: '审核的框准率：1 - 错误结果数/审核结果数。',
    },
    segAccuracy: '分割准确度',
  },
};
