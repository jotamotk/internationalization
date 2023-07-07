export default {
  url: 'URL',
  data: '数据',
  // TODO 中文
  overview: 'Overview',
  qa: 'QA',
  architecture: 'Zip文件结构',
  architectureTip:
    '倍赛格式：我们将按照我们的标准格式压缩文件\n与上传相同：上传数据时，我们将按照您的原始 zip 结构压缩文件。',
  parseZipByTip:
    "如果您选择按文件夹名称选择，我们将根据包含关键字（如 'batch' 和 'scene'）的文件夹名称解析 zip 文件。但是，如果您选择按结构选择，则最后一级将是 'data'，上一级将是 'scene' 和 'batch'。有关更多详细信息，请参阅我们的文档。",
  objects: '对象',
  dashboard: '仪表盘',
  autoTag: '自动打标签',
  upload: '上传',
  open: '打开',
  selectItemsCount: '个已选中',
  selectAll: '选择全部',
  unSelectAll: '取消选择全部',
  assign: '分配',
  changeStatus: '修改状态',
  delete: '删除',
  more: '更多',
  localData: '本地数据',
  objectStorage: '对象存储',
  dataType: '数据类型',
  uploadDate: '上传时间',

  addDate: '添加时间',
  Status: '状态',
  // TODO 中文
  Resolved: 'Resolved',
  Unresolved: 'Unresolved',
  ViolationOfRules: 'Violation of rules',
  withAnyViolations: 'with Any violations',

  groundTruths: '人工结果',
  annotationCount: '标注总数',
  uploadLocalData: '上传本地数据',
  uploadPlaceholder:
    '点此选择文件，或拖拽文件到这里。当前为图片数据集。支持上传的数据格式：zip/gzip/tar/jpg/jpeg/png',
  uploadImagePlaceholder:
    '点此选择文件，或拖拽文件到这里。支持上传的数据格式：zip/gzip/tar/jpg/jpeg/png',
  uploadCancelWarning: '有尚未上传完成的数据，是否取消全部上传？',
  deleteData: '删除数据',
  deleteDataClassWarning: '是否确认删除所选的数据或连续帧？此操作无法撤回。',

  uploadingItems: '数据上传中...',
  uploadedItems: '数据上传成功',
  uploadData: '上传数据',
  cancelUpload: '取消上传',
  continueUpload: '继续上传',

  terminateUpload: '终止上传',
  terminateExport: '终止导出',
  terminate: '终止',
  terminateUploadPlaceholder: '是否确认终止上传？',
  terminateExportPlaceholder: '是否确认终止导出？',

  editingBy: '编辑者',

  process: {
    uploading: '上传: ',
    exporting: '导出: ',
    finished: '完成: ',
    item: ' 个',
    items: ' 个',
    upload: ' 上传',
    uploads: ' 上传',
    export: ' 导出',
    exports: ' 导出',
    complete: ' 完成',
    ready: ' 已就绪',
    invalidFormat: '不支持的格式',
  },
  creameModel: {
    History: '历史记录',
    Calibrate: '矫正',
    title: '相机参数矫正',
    tips: '将会随机抽取一张数据进行参数矫正，矫正成功后会应用于所有数据.',
    Name: '名称',
    CalibratedTime: '矫正时间',
    Operations: '操作',
    Original: '原始参数',
  },
  uploadModel: {
    pathPlaceholder: '请输入路径，例如/目录/测试.rar或测试.rar',
    // 0
    and: '和',
    uploadResult: ' 如何上传带结果的数据',
    // 1
    uploadLocalData: '上传本地数据',
    clickText: '点此选择文件，',
    dragText: '或拖拽文件到这里',
    compressedFiles: '仅支持压缩文件（zip/gzip/tar）。',
    widthText: ' ',
    formatText: ' 3D数据需满足支持的文件格式',
    widthSupported: ' ',
    checkText: '查看帮助文档：',
    checkImageText: '查看帮助文档：支持的数据格式',
    supportedTypes: '支持的文件格式：',
    imageTypes: 'zip/gzip/tar/jpg/jpeg/png',
    limitUploadLocal: '文件大小不得超过1GB。对于较大的文件，建议使用URL链接或对象存储方式上传。',
    // 2
    uploadByUrl: '通过链接上传',
    validUrl: 'URL有效',
    invalidUrl: 'URL有误',
    supported: '：仅支持压缩文件',
    provide: '请提供URL以便我们访问压缩文件',
    generateUrl: '请查看文档了解如何生成URL。',
    generateText: '亚马逊云说明，Azure云说明，谷歌云说明',
    connect: '连接',
    finish: '完成',
    // 3
    minIOBucket: 'MinIO存储桶',
    uploadMinIO: '请使用以下信息将压缩文件上传到我们的MinIO存储桶：',
    specifyMinIO: '请指定MinIO存储桶中你的路径',
    containsResultMinIO: '3.请指明您的数据是否包含预标签结果。',
    endPoint: '服务器：',
    accessKey: '用户名：',
    secretKey: '密码：',
    path: '路径',
    validPath: '有效路径',
    invalidPath: '无效路径',
    tipsUse: '你可以使用 ',
    cyberduck: 'Cyberduck ',
    tipsOr: '或你的代码进行上传。更多细节请查阅',
    minioGuides: 'MinIO指南',
    containsResult: '包含反显结果',
    resultType: '结果类型',
    resultName: '结果名称',
    selectResults: '选择结果',
    linkPlaceholder: '请输入压缩文件的URL',

    imageTypeError: '只能上传zip/gzip/tar/jpg/jpeg/png文件！',
    zipTypeError: '只能上传zip/gzip/tar文件！',
    fileSizeMax1GB: '文件必须小于1GB！',
    resultNameRequired: '请填写结果名称',
  },
  parse: {
    parseZip: '解析zip文件的方式',
    folderName: '文件夹名称',
    folderArchitecture: '文件夹结构',
    sceneAndData: '场景和数据',
    justData: '仅数据',
    BatchSceneAndData: '批次、场景和数据',
    batchAndData: '批次和数据',
    tip: "如果您选择按文件夹名称选择解析，我们将根据包含关键词如'批次'和'场景'的文件夹名称来解析zip文件。然而，如果您选择按文件夹结构选择解析，最后一级将是'数据'，而上一级将是'场景'和'批次'。更多详细信息，请参考我们的文档。",
    // tip: "如果您选择按文件夹名称选择，我们将根据包含关键字（如 'batch' 和 'scene'）的文件夹名称解析 zip 文件。但是，如果您选择按结构选择，则最后一级将是 'data'，上一级将是 'scene' 和 'batch'。有关更多详细信息，请参阅我们的文档。",
  },

  sort: {
    itemName: '数据名称',
    createDate: '创建时间',
    annotateCount: '标注数量',
    updateDate: '修改时间',
  },
  createDate: '创建日期',
  singleData: '单个数据',
  batch: '批次',
  frame: '连续帧',
  frameAction: {
    frame: '组合连续帧',
    frameMultiple: '组合多个连续帧',
    unFrame: '拆分连续帧',
    merge: '合并到某连续帧',
    moveOut: '移出连续帧',
  },
  modalTitle: {
    merge: '合并连续帧到',
    frameMultiple: '组合多个连续帧',
    minio: 'MinIO存储桶',
    url: '通过链接上传',
  },
  tips: {
    mergeTips: '合并已选数据到',
    frameMultipleTipsBefore: '每',
    frameMultipleTipsAfter: '个数据为一个连续帧',
  },

  urlError: '请输入一个包含压缩包类型的地址',

  unLock: {
    tips: '一旦你强制解锁选中的占用者，他们将无法更改这些数据，除非他们重新认领。所有未保存的更改将被丢弃。',
    totalSelect: '已选占用数据总数',
    searchPlaceholder: '按占用者姓名搜索',
    forceUnlock: '强制解锁',
  },
  emptyTips: '此数据集暂无数据',

  lockedTips: '您占用了{dataNum}条数据，是否继续标注？',

  export: {
    allData: '所有数据',
    filterData: '筛选后的数据',
    selectedData: '已选择的数据',
    basicAiFormat: '倍赛格式',
    sameAsUpload: '与上传相同',
  },
};
