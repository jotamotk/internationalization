export default {
  ontology: '本体',
  // 空列表
  emptyOntology: '无本体',
  emptyClass: '无标签',
  emptyClassification: '无分类',
  // 新建 ontology
  createHolder: '输入名称…',
  maxLength: '字符长度不能超过256。',
  createOntology: '创建本体',
  ontologyName: '本体名称',
  ontologyType: '本体类型',
  successCreated: '创建成功',
  duplicate: '重复的本体名称',
  noOntologyName: '请输入名称',
  // 删除 ontology
  deleteOntology: '删除本体',
  hasBeenDeleted: '已被删除',
  deletePlace: '输入本体名称…',
  sure: '是否确认删除本体？',
  removed: '所有标签和分类都会被删除。',
  verify: '请输入本体名称以完成双重验证。',
  // 重命名 ontology
  renameOntology: '重命名本体',
  newName: '新名称',
  hasBeenRenamed: '重命名成功',
  hasExist: '已经存在。请输入不同的名称。',
  Instruction: '说明',
  // TODO 中文
  QAOptional: '质检(可选)',
  // 搜索字段
  sort: {
    name: '名称',
    creationTime: '创建时间',
  },
  // 卡片列表
  card: {
    classesCount: '标签数量',
    type: '类型',
    createdTime: '创建时间',
  },
  modalMapError: '请先创建标签。',
  inputType: {
    radio: '单选框',
    mutiSelection: '多选框',
    dropdown: '下拉框',
    text: '文本',
  },
  // 弹窗内部的文字
  modal: {
    treeGraph: '树形图',
    basicInfo: '基本信息',
    attributeName: '属性名称',
    optionName: '选项名称',
    inputType: '输入类型',
    required: '必选项',
    root: '根',
    options: '选项',
    attributes: '属性',
    duplicatedName: '名称重复',
    colonNotAllowed: '不允许包含:',
    constraints: {
      constraints: '校验条件',
      standard: '标准框',
      length: '长',
      width: '宽',
      height: '高',
      points: '点数',
      unitStandard: '米',
      size: '尺寸',
      area: '面积',
      unitImage: 'px',
      min: '最小值',
      max: '最大值',
    },
    defaultHeight: '默认高度',
    minHeight: '最小高度',
    minPoints: '最少点数',
    // 校验 class|classification
    nameRequired: '名称必填',
    alreadyExits: '已存在。',
    enterNewName: '请输入新名称。',
    datasetType: {
      image: '图片',
      lidar: '点云',
      lidarBasic: '点云基础',
      lidarFusion: '点云融合',
    },
    toolType: {
      boundingBox: '2D框',
      polygon: '多边形',
      polyline: '折线',
      keyPoint: '关键点',
      polygonPlus: '多边形(高级)',
      skeleton: '骨骼点',
      curve: '曲线',
      group: '分组',
      imageCuboid: '伪3D框',
      cuboid: '立体框',
      segmentation: '分割',
      mask: 'Mask',
    },
    // 取消弹窗
    discard: '放弃',
    discardChanges: '放弃更改',
    sureDiscard: '是否确认放弃更改？',
    // options 校验
    optionsRequired: '选项必填',
    optionValid: '是否确定放弃更改？',
    optionValidFilled: '必填字段尚未全部填写。',
    optionValidDiscard: '是否确认丢弃该属性和其选项？',
    // 标准框校验信息
    standardValidateMax: '最大值应大于最小值',
    standardValidateMin: '最小值应小于最大值',
    sizeLimit: {
      sizeLimit: '尺寸限制',
      lengthLimit: '长度限制',
      widthLimit: '宽度限制',
      areaLimit: '面积限制',
    },
    advancedConfiguration: '高级配置',
    manageAttributes: '编辑属性',
    numberOfPolygonPoints: '多边形的边数',
    lidar: {
      resultType: '结果类型',
      instance: '实例',
      semantic: '语义',
    },
    skeleton: {
      option1: '单击鼠标左键新增点',
      option2: '选中点后拖拽来改变位置',
      option3: '按住shift，点击起始和终止点进行连线，连线附带方向',
      option4: '按下键盘删除键来删除点或线',
      updatePicture: '更新图片',
      keyPointsLabel: '关键点标签：',
      order: '顺序',
      label: '标签',
      enterALabel: '输入标签',
      labelRepeat: '标签重复',
      equidistantSkeleton: '等距骨骼点',
      inOrder: '按顺序',
      custom: '自定义',
      skeletonAttributeConfiguration: '骨骼点属性配置',
      attribute: '属性',
      hotKey: '快捷键',
      common: '普通点',
      outside: '外部',
      cover: '覆盖',
      oneOrNone: '1 OR 无',
      enterATag: '输入标签',
      tagRepeat: '标签重复',
      addConfiguration: '增加配置',
      skeletonInfo: 'Skeleton类至少有一个关键点',
    },
    alias: '别名',
    attributeAlias: '属性别名',
    optionAlias: '选项别名',
    classID: '类 ID',
    classificationID: '分类 ID',
    copied: '已复制',
  },
  // 搜索表单
  searchForm: {
    search: '搜索',
    searchItems: '按名称搜索',
    sort: '排序',
    filter: '筛选',
    createdDate: '创建日期',
    datasetType: '数据集类型',
    toolType: '工具类型',
    activities: '活动',
  },
  // 复制
  copy: {
    copyEntireOntology: '复制整个本体',
    copyFromOntology: '从本体中心复制',
    copyFrom: '复制于',
    next: '下一个',
    inputToSearch: '输入搜索',
    copyClass: '从本体中心复制类别',
    copyClassification: '从本体中心复制标签',
    copyPlaceholder: '目前没有相同类型的本体可以选择，请先去',
    copyOntologyCenter: '本体中心',
    copyToCreate: '创建',
  },
  sync: {
    saveToOntology: '保存到本体中心',
    selectOntology: '选择要保存到的本体',
    noOntology: '目前没有同类型的本体可以选择，请创建',
    createAndSync: '创建并同步',
    successCreated: '成功创建并同步',
    classConflictTip:
      '部分标签已存在于目标本体。为了解决这些冲突，请选择需要保留目标本体中的内容，或是用新标签替换。',
    classificationConflictTip:
      '部分分类已存在于目标本体。为了解决这些冲突，请选择需要保留目标本体中的内容，或是用新分类替换。',
  },
  conflict: {
    tips1:
      '部分标签/分类已存在于目标本体。为了解决这些冲突，请选择需要保留目标本体中的内容，或是用新标签替换。',
    keep: '保留',
    original: '原内容，或',
    replace: '替换',
    originalNew: '为新标签/分类。',
    replaceAll: '替换全部',
    keepAll: '保留全部',
    noConflict: '没有冲突',
    className: '标签名称',
    classificationName: '分类名称',
    copied: '复制',
    classesAnd: '标签和',
    classes: '标签',
    classifications: '分类',
    resolution: '解决方案',
    conflicts: '冲突',
  },
  import: {
    importByJson: '通过JSON导入',
    exportAsJson: '导出为JSON',
    importClassesByJson: '通过JSON导入标签/分类',
    tip: '点击选择文件或拖放文件到此处',
    supported: '支持的文件格式: Json',
    download: '下载JSON模板',
    view: '查看帮助文档',
    uploadJson: '只能上传JSON文件！',
  },
  model: {
    modelMap: '模型对应',
    model: '模型',
    modelClasses: '模型标签',
    classDetail: '标签详情',
    discardChange: '放弃修改',
    sureToDiscard: '是否确认放弃修改？',
    modelMapError: '请选择一个标签',
  },
};
