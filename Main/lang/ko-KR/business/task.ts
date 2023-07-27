export default {
  taskText: '타스크',
  annotate: '라벨링',
  review: '리뷰',
  acceptance: '검수',
  addStage: '단계 추가',
  selectClassTitle: '클래스 및 분류 이름 선택하세요.',
  selected: '선택됨',
  clearAll: '모두 지우기',
  addAll: '모두 추가',
  createTask: '타스크 생성',
  closeTask: '타스크 종료',
  saveChange: '변경 저장',
  instruction: '설명',
  manageClass: '클래스 관리',
  searchClassPlaceholder: '클래스 및 분류 이름 검색하기',
  closed: '닫기',
  viewPerformance: '성과 보기',
  personalPerformance: '개인 성과',
  myTasksPerformance: '내 작업 성과',
  annotateAll: '모두 작업하기',
  reviewAll: '모두 리뷰하기',
  previewAnnotationObjects: '객체 미리 보기',
  Worker: '작업자',
  progressStatus: {
    publish: '게시 중',
    continue: '계속',
    configuring: '세팅 중',
    ongoing: '진행 중',
    paused: '일시 중지',
    closed: '종료',
    completed: '완료됨',
    deleted: '삭제됨',
  },
  detail: {
    viewAllInStudio: 'Studio에서 모두 보기',
    viewAllInACC: 'ACC에서 모두 보기',
    viewAllInQA: 'QA에서 모두 보기',
    checked: '체크됨',
    unChecked: '체크 안 됨',
    removeFromTask: '타스크에서 제거',
    deleteTitle: '이 샘플 결과를 삭제하시겠습니까?',
    deleteDesc: '샘플 결과를 삭제해도 오리진 데이터 및 작업에 영향을 미치지 않습니다.',
    acceptAllModalTips1: '검수 예정',
    acceptAllModalTips2: '워크플로우를 완료하는 모든 데이터를 검수합니다',
    acceptAllModalTips3: '이 작업을 확인하면',
    acceptAllModalTips4: '모든 멤버는 다시 이 작업에서 해당 데이터를 수정할 수 없습니다.',
    acceptAllModalTips5: '작업 결과를 리뷰 및 관리할 수 있습니다.',
    acceptAllModalTips6: '위의 설명을 이해하여 데이터를 받겠습니다.',
    acceptAllModalPlaceHolder: '위의 텍스트를 입력하여 선택한 데이터를 검수하기',
    rejectAllModalTips1: '반려 예정',
    rejectAllModalTips2: ' 워크플로우에 선택한 데이터 완료됨',
    rejectAllModalTips3: '워크플로우를 완료하는 모든 데이터를 반려합니다',
    rejectAllModalTips4: '반려합니다 단계를 선택하세요',
    rejectAllModalTips5: '만료 시간 내에 검수 단계에 제출한 데이터만 포함',
    rejectAllModalTips6: '이 작업을 수행하면 작업의 모든 데이터가 반려된다는 것을 알고 있습니다.',
    rejectAllModalTips7:
      '이 작업을 수행하면 선택한 {num} 데이터를 반려하게 되는 것을 알고 있으며 이 데이터를 반려하겠습니다.',
    rejectAllModalPlaceHolder: '선택한 데이터를 반려하려면 위에 텍스트를 입력하세요.',
    targetStage: '목표 단계',
    rejectReasons: '반려 이유',
    newWorker: '새 작업자',
    originalWorker: '오리지널 작업자',
    reassignModalTips1: '선택한 데이터를 작업할 작업자를 선택하세요.',
    reassignModalTips2: '오리지널 작업에 작업 결과를 포기하기',
    samplePopover: '검수 단계의 데이터만 심플링 될 수 있음',
    sampleModalTips1: '다른 샘플에 데이터 포함',
    sampleModalTips2: '씬에서 심플링하기',
    samplingSize: '샘플링 크기',
    and: '및',
    framesPerSegment: '세그먼트당 프레임 수',
    randomSampling: '랜덤 샘플링',
    fieldWarning: '*로 표시된 필드는 작업이 게시된 후에는 수정할 수 없습니다.',
    preview: '미리보기',
    ViewInQA: 'QA에서 보기',
    ViewInACC: 'ACC에서 보기',
    ViewInStudio: 'Studio에서 보기',
    empty: '현재 작업할 수 있는 데이터가 없습니다.',
  },
  create: {
    name: '타스크 이름',
    createByYourself: '직접 타스크 생성',
    createByTemplate: '템플릿별 타스크 생성',
    dataType: '데이터 유형',
    dataTypeDesc: '보통 라이더, 라이더 퓨전 및 이미지 중에 유형 하나만 선택하세요.',
    scenarioType: '시나리오 유형',
    scenarioTypeDesc: '단일 프래임은 탐지 다스크에만 지원하여 씬은 추적 타스크 지원됩니다.',
    annotationType: '라벨링 유형',
    annotationTypeDesc:
      '인스턴스(instance)는 바운딩 박스, 큐보이드, 폴리곤 등과 같은 순간적인 방법으로 데이터를 라벨링 하는 것입니다. 세그먼테이션(Segmentation)은 곧 지원될 예정입니다.',
    industry: '산업',
    nameHolder: '이름을 입력하세요',
    taskNameLengthError: '작업 이름 문자 수는 100자 초과해야 합니다.',
    uploadAttachment: '첨부 파일 업로드',
    onlySupports: 'PDF형식만 지원합니다.',
    editInstruction: '편집 설명',
    next: '다음',
    cancel: '취소',
    save: '저장',
    prev: '이전',
    saveAndExit: '저장 및 종료',
    thisIs: ' ',
    only: '만',
    datasetWillBeShown: '보이는 데이터셋',
    useTemplate: '템플릿 사용',
    pleaseSelectAData: '데이터셋을 선택하세요',
    selectAResult: '결과를 선택하세요',
    cancelOrClearAll: '취소/모두 지우기',
    regroupSceneForWorkers: '씬 재편지',
    every: '데이터',
    dataAsaScene: '개 씩 한 씬으로',
    regroupPopover: '이 작업에만 영향을 미치며 데이터셋의 모든 씬은 수정되지 않습니다.',
    addTips: '이 작업에 데이터를 추가하세요.',
    addTipsEnd: ' ',
    ontologyOf: '{datasetName}의 온톨로지',
    onlyOntologyIn: '{datasetName}에서만 온톨로지를 선택하거나 편집할 수 있습니다',
    clickToBack: '클릭하여 이전 단계에서 데이터셋 변경하기',
    preview: '툴에서 미리 보기',
    assignMemberTitle: '이 타시크를 팀 멤버에게 할당하기',
    assignTaskAdminTitle: '관리자 할당',
    assignTaskAdminPopover: '관리자가 타스크를 관리할 수 있습니다.',
    assignWorkerAdminTitle: '검수자 할당',
    assignWorkerAdminPopover: '검수자가 타스크를 검수할 수 있습니다.',
    batchSize: '할당 개수',
    batchSizePopover: '각 작업자가 한 단계에서 한 번에 수령할 수 있는 데이터 갯수입니다.',
    batchSizeRequiredError: '할당 개수를 입력하세요',
    maxDataDuration: '최대 데이터 기간',
    maxDataDurationPopover: '기본 할당된 데이터 갯수를 완료하는 최대 시간(분)',
    maxDataDurationRequiredError: '최대 데이터 기간을 입력하세요',
    minutes: '분',
    dataAccuracy: '데이터 정확도',
    dataAccuracyPopover: '데이터가 정확한지 확인하는 기준값입니다.',
    dataAccuracyRequiredError: '데이터 정확도를 입력하세요',
    allowWorkerView: '작업자가 제출된 데이터를 볼 수 있다',
    allowSame: '같은 작업자가 다른 단계에서 동일한 데이터를 작업할 수 있다.',
    searchAndFilter: '검색 & 필터',
    searchUserPlaceholder: '사용자 검색',
    allMembers: '모든 멤버',
    leaveWarning: '지금 종료하면 저장되지 않은 모든 변경 사항이 삭제됩니다. 정말 종료하시겠습니까?',
    removeUploadDataWarning: '선택한 데이터를 삭제하시겠습니까?',

    selectAllError: '모든 선택을 먼저 취소하세요.',
    nextConfirm:
      '현재 타스크 기본 설정을 사용하면 다음 단계에서 모든 설정이 제거됩니다. 계속하시겠습니까?',
    selectTemplate: '템플릿을 선택하세요.',

    publishSuccess: '작업이 게시됨',

    allowExceedArea: '결과가 이미지 영역을 초과하도록 허용할지 여부',
    allowExceedClassLimit: '결과가 클래스 제한을 초과할 경우 제출을 허용할지 여부',
    annotationTypeHolder: '작업 유형을 선택하세요.',

    addDataProgress: '데이터 추가 처리 중...',
    addDataSuccess: '데이터 추가 성공하였습니다. 중복 항목이 제거될 겁니다.',
    addStep: {
      selectAllDataApplyFilter: '필터 조건에 맞는 데이터를 선택합니다.',
      uploadDataInDataset: '데이터셋에서 데이터 업로드하기',
      singleInfo: '단일 프레임 타스크라서 단일 프레임 데이터만 표시됩니다.',
      trackingInfo: '추적 타스크라서 씬 데이터만 표시됩니다.',
    },
  },
  createTips: {
    taskAdminAssignTip: '관리자를 최소 하나 이상 할당해야 합니다!',
    workerAdminAssignTip: '검사자를 최소 하나 이상 할당해야 합니다!',
    memberSelectedTip: '멤버를 최소 하나 이상 선택해야 합니다!',
    panelMaxLengthTip: '이름 길이 100을 초과 할 수 없습니다.',
    batchSizeRequired: '회차 크기 필수',
    batchSizeMax: '회차 크기가 1000을 초과 할 수 없습니다.',
    maxDurationRequired: '최대 작업 시간 필수',
    instanceAccuracyRequired: '인스턴스 데이터 정확도 필수',
    segmentationAccuracyRequired: '세그멘테이션 데이터 정확도 필수 ',
    instanceMax: '최대 인스턴스 데이터 정확도가 100을 초과 할 수 없습니다.',
    segmentationMax: '최대 세그멘테이션 데이터 정확도가 100을 초과 할 수 없습니다.',
    publishFailed: '타스크 게시 실패',
    reviewStageMax: '리뷰 단계가 5개를 초과 할 수 없습니다.',
    uncheckFilter: '선택한 항목을 먼저 취소하세요.',
    selectItem: '아이템을 선택하세요.',
    noDataCanSelected: '선택할 수 있는 데이터가 없습니다.',
    upload10Files: '최대 10개 파일만 업로드할 수 있습니다!',
    uploadPdf: 'PDF 파일만 업로드할 수 있습니다!',
    changeDatasetTip:
      '현재 데이터셋을 변경하면 다음 단계에서 이전 선택된 모든 데이터 및 설정이 제거됩니다. 계속하시겠습니까?',
    selectDataset: '데이터셋을 선택하세요.',
    addData: '데이터를 추가하세요.',
    // TODO 韩文
    createDataset: 'Please create some dataset',
    addDataToTemplate: 'Please add some data to task from this {dataset}',
  },
  error: {
    classRequired: '클래스 또는 분류를 선택하십시오',
    previewError: '타스크에서 데이터를 찾을 수 없습니다. 타스크 및 데이터셋을 확인하세요.',
  },
  step: {
    taskBasics: '기본 정보',
    uploadData: '데이터 업로드',
    ontology: '온톨로지',
    instruction: '설명',
    workflow: '워크플로우',
    QaOptional: 'QA Optional',
  },
  setting: {
    classTips:
      '온톨로지의 변경 사항은 이미 작업한 데이터에 자동으로 적용되지 않습니다. 완료된 데이터는 수동으로 수정해야 합니다.',
    restartModalTips1: '종료하시겠습니까?',
    restartModalTips2: '확인하면',
    restartModalTips3: '이 타스크를 다시 시작할 수 없습니다.',
    restartModalTips4: '검수되지 않은 모든 결과가 삭제됩니다.',
  },
  list: {
    // tab
    myTask: '내 타스크',
    taskManagement: '타스크 관리',
    // table
    id: '아이디',
    name: '이름',
    type: '유형',
    taskType: '타스크 유형',
    stage: '단계',
    stageType: '단계 유형',
    admins: '관리자',
    progress: '진행률',
    ongoingData: '진행 중인 데이터',
    workflowStage: 'Workflow Stage',
    status: 'Status',

    // tips
    inReview: '리뷰 중',
    claimed: '수령됨',
    toBeModified: '수정 예정',
    needAcceptance: '검수 필요함',
    completed: '완료',
    taskPool: '타스크 풀',
    // empty
    emptyText: '할당된 작업이 없습니다.',
    // search
    searchText: '아이디 또는 이름 검색',
  },
  listModal: {
    copySuccessfully: 'Task {name} copied successfully',
    warning: '경고',
    goingTo: '획인하시겠습니까?',
    confirmOption: '확인하면',
    pauseTip: '모든 작업자는 다시 시작할 때까지 이 타스크에 방문할 수 없습니다.',
    closeTip1: '이 타스크를 다시 시작할 수 없습니다.',
    closeTip2: '감수되지 않은 모든 결과가 삭제됩니다.',
    closeBtn2: '종료',
    closeBtn3: '검수으로 이동',
    deleteToast: '현재 다스크를 먼저 종료하세요.',
    deleteTip1: '코멘트, 반려, 통계 등 이 데이터와 관련된 모든 데이터가 삭제됩니다.',
    deleteTip2: '오리지널 데이터가 삭제되지 않습니다.',
    deleteTip3: '검수된 모든 결과는 삭제되지 않습니다.',
  },
  detailTab: {
    overview: '개요',
    data: '데이터',
    performance: '성과',
    setting: '세팅',
  },
  welcome: {
    hello: '안녕하세요',
    toDoInfo: '"작업관리"에서 "작업" 또는 "리뷰"를 클릭하여 작업을 시작하세요.',
    myTaskInfo: '작업 관리자는 내 타스크 관리에서 할당된 작업을 모니터닝하고 관리할 수 있습니다.',
    desc1: '할당된 작업은 "작업관리" 탭에서 찾을 수 있습니다. 시작하려면 "작업/리뷰"를 클릭하세요.',
    desc2: '관리자는 "내 타스크 관리" 탭에서 타스크를 찾을 수 있습니다.',
    // TODO 韩语
    desc3: 'Thank you for collaborating with us and helping advance AI. ',
  },
  overview: {
    statistic: {
      completed: '완료',
      needAcc: 'ACC 대기',
      inLastDay: '최근 1일',
      rejects: '반려',
      comments: '코멘트',
    },
    changeTip:
      '이 타스크를 작업자 또는 심사자 역할로써 보고 있으며 이 보기에서 본인과 관련된 데이터만 표시합니다. 여기를 클릭하여 이 타스크를 검수자 역할로써 보기',
    changeBtnText: '관리자 역할로 보기',
    changeTipForInspector:
      '이 타스크를 작업자 또는 심사자 역할로써 보고 있으며 이 보기에서 본인과 관련된 데이터만 표시합니다. 여기를 클릭하여 이 타스크를 관리자 역할로써 보기',
    changeBtnTextForInspector: '검수자 역할로 보기',
    progress: '진행률',
    progressCompleted: '완료',
    accuracy: '정확도',
    accuracyTip: '정확도는 데이터 및 객체별로 이 타스크의 작업 정확도를 모니터링합니다.',
    byData: '데이터별',
    byObjects: '객체별',
    segmentAccuracyTip: '정확도는 데이터 및 포인트별로 이 타스크의  작업 정확도를 모니터링합니다.',
    byPoint: '포인트별',
    stage: '단계 편집',
    stageTip: '단계 편집은 모든 단계에서 데이터가 어떻게 분배되는지 표시합니다.',
    empty: '설명 없음',
    progressEmpty: '할당된 작업이 없습니다.',
    notStarted: '시작되지 않음',
    object: '객체',
    notClaimed: '수령되지 않음',
    working: '작업 중',
    submitted: '제출',
    rejected: 'Rejected',
    segmentationPoint: '세그먼테이션 포인트',
    segmentationData: '세그먼테이션 데이터',
    segmentationObject: 'Segmentation Object',
    // TODO 韩文
    imgCardAccuracy: {
      IObject: 'I-Object',
      SPoint: 'S-Point',
      SObject: 'S-Object',
    },
  },
  countdown: {
    emptyClaim: '현재 사용 가능한 데이터가 없습니다.',
    emptyTip:
      '한 번에 최대 {dataNum}개의 데이터를 할당할 수 있으며, 회차 기간은 {minute}분입니다. 즉 데이터당 최대 {perMinute}분을 사용할 수 있습니다.',
    emptyNoData: '남은 데이터 없습니다.',
    openWarning: '수령한 데이터가 만료되었습니다.다시 수령하세요.',
    pausedFor: '일시 종지',
    dueIn: '만료 시간',
    activeSelect: {
      withComments: '코멘트 있음',
      withMyComments: '내 코멘트 있음',
      withWorkflowRejects: '워크플로우에 빈려 있음',
    },
    expiringModal: {
      claimedData: '수령된 데이터의(',
      isExpiring: ' 개 남음) 만료 시간 ',
      release: '만료되면 타스크 풀에 릴리스됩니다.',
    },
    expiredModal: {
      refresh: '새로 고치하여 다시 수령하세요.',
      claim: '수령된 데이터가 만료되었습니다. 다시 수령하세요.',
    },
    pauseModal: {
      claim: '수령된 데이터가 일시 중지되었습니다. 다시 시작을 클릭하여 작업을 시작하세요.',
    },
    submitModal: {
      submit: '제출',
      goingTo: '선택한 데이터 ',
      data: '개를 제출하시겠습니까?',
      confirmOption: '확인하면',
      tip1: '해당 데이터는 대기열의 다음 단계로 제출됩니다.',
      tip2: '다음 단계의 작업 관리자 또는 작업자가 데이터를 다시 반송할 때까지 이 데이터를 수정할 수 없습니다.',
      endText: '위의 결과를 이해하며, 해당 데이터를 제출합니다.',
    },
    rejectModal: {
      reject: '반려',
      goingTo: '선택한 데이터',
      data: '개를 반려하시겠습니까?',
      targetStage: '목표 단계',
      worker: '작업자',
      original: '오리지널',
      originalTip: '제출한 사람',
      new: 'New',
      newTip: '해당 단계의 다른 작업자에게 할당',
      result: '결과',
      keepResults: '결과 유지',
      keepResultsTip1: '모든 결과 및 성과 유지',
      clearResults: '결과 지우기',
      clearResultsTip2: '모든 수동 작업 결과 지우기',
      rejectReasons: '반려 이유',
    },
  },

  taskList: {
    TodoTab: '작업관리',
    myTaskManagementTab: '내 타스크 관리',
  },

  taskDetail: {
    previewTips: '객체 미리 보기',
    settingAlert: '이 작업을 변경하려면 먼저 자신을 작업 관리자로 할당해야 합니다.',
    dataAlertBefore: '이 작업에서 작업을 수행하려면 작업 관리자로 자신을 할당해야 합니다.',
    // TODO 韩语
    dataAlertAfter: 'tab first',
    dataAdded: '데이터 추가됨',
    dataStatus: '데이터 상태',
    workflowStatus: '작업 단계',
    // TODO 韩语
    workflowStage: 'Workflow Stage',
    AssigneeAnnotator: '작업자',
    Activities: '활동',
    sampling: '샘플링',
    acceptTask: '타스크 검수하기',
    rejectTask: '타스크 반려하기',
    byObject: '객체별',
    byData: '데이터별',
    byPoint: '포인트별',
    withComments: '코멘트 있음',
    withMyComments: '내 코멘트 있음',
    markedAsInvalid: '무효로 표시',
    withWorkflowRejects: '리뷰에서 반려됨',
    withACCRejects: '검수애서 반려됨',
    pausedForAnHour: '일시 중지 1시간 초과',
    sample: {
      accuracyIn: '정확도',
      sample: '셈플',
      all: '모두',
      details: '세부정보',
      samplingMethod: '셈플링 방법',
      samplingTotalSize: '셈플링/총 크기',
      samplingBy: '샘플링 기준',
      samplingDate: '샘플링 날짜',
      samplingTip: '툴에서 리뷰 상태로 씬을 샘플링할 수 있습니다.',
      samplingData: '샘플링 데이터',
      totalSize: '총 크기(현재 필터 적용)',
      fileSize: '파일（{ totalPercent }% of total)',
    },
    ifChecked: '체크 여부',
    stageStatus: '단계 상태',
    workingByOthers: '다른 작업자 작업중',
    lock: {
      occupiedBy: 'Occupied by',
      occupiedDataCount: 'Occupied Data Count',
      selectRecord: 'please select a record',
    },
    addDataSuccessfully: 'Add data successfully',
    remove: {
      removeData:
        "You are going to remove {num} data from the task. Once removed, they'll no longer be worked in the task.",
      removeSuccess: '{num} data removed from the task.',
      removeFailure: "{num} failed, because they're already claimed.",
    },
  },
  taskSetting: {
    linkedDataset: '연결된 데이터셋',
    annotationType: '라벨링 유형',
    taskStarted: '작업 시작',
    taskCompleted: '작업 완료',
    viewInNewTab: '새 창에서 보기',
    // TODO 韩文
    radius: 'Radius(m)',
  },
  // TODO 韩文
  operateHistory: {
    title: 'Work flow and result version',
    dataId: 'Data ID',
    dataName: 'Data Name',
  },
};
