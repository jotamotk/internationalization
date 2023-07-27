export default {
  taskText: 'Task',
  annotate: 'Annotation',
  review: 'Review',
  acceptance: 'Acceptance',
  addStage: 'Add Stage',
  selectClassTitle: 'Select Classes and Classifications',
  selected: 'Selected',
  clearAll: 'Clear All',
  addAll: 'Add All',
  createTask: 'Create a Task',
  closeTask: 'Close the Task',
  saveChange: 'Save Changes',
  instruction: 'Instructions',

  manageClass: 'Manage Class',
  searchClassPlaceholder: 'Search for Classes and Classification Names',
  closed: 'Closed',
  viewPerformance: 'View Performance',
  personalPerformance: 'Personal Performance',
  myTasksPerformance: 'My Team Tasks Performance',
  annotateAll: 'Annotate All',
  reviewAll: 'Review All',
  previewAnnotationObjects: 'Preview Annotations',
  Worker: 'Worker',
  progressStatus: {
    continue: 'Continue',
    publish: 'Publishing',
    configuring: 'Configuring',
    ongoing: 'Ongoing',
    paused: 'Paused',
    closed: 'Closed',
    completed: 'Completed',
    deleted: 'Deleted',
  },
  detail: {
    viewAllInStudio: 'View All in Studio',
    viewAllInACC: 'View All in ACC',
    viewAllInQA: 'View All in QA',
    checked: 'Checked',
    unChecked: 'Unchecked',
    accept: 'Accept',
    reject: 'Reject',
    reassign: 'Re-assign',
    removeFromTask: 'Remove from Task',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    deleteTitle: 'Are you sure you want to delete this sample result?',
    deleteDesc: 'Deleting a sample result will NOT affect the original data and annotations',
    acceptAllModalTips1: 'You are about to accept',
    acceptAllModalTips2: 'You are going to accept ALL the data which have completed the workflow',
    acceptAllModalTips3: 'Once you confirm this operation, ',
    acceptAllModalTips4: 'all members will no longer be able to modify the data in this task',
    acceptAllModalTips5: 'You can see and manage your annotation results as ',
    acceptAllModalTips6: 'I understand the above consequences and want to accept this data',
    acceptAllModalPlaceHolder: 'Type the above text to accept the selected data',
    rejectAllModalTips1: 'You are about to reject',
    rejectAllModalTips2: ' selected data which have completed the workflow',
    rejectAllModalTips3: 'You are about to reject ALL the data which have completed the workflow',
    rejectAllModalTips4: 'Please select the stage you want to reject',
    rejectAllModalTips5:
      'Only the data in the Need Acceptance stage will be included. The data submitted to the acceptance stage after this timestamp will not be included.',
    rejectAllModalTips6:
      'I understand this action will reject all data in the task and want to reject those data',
    rejectAllModalTips7:
      'I understand this action will reject {num} selected data and want to reject them',
    rejectAllModalPlaceHolder: 'Type the above text to reject the selected data',
    targetStage: 'Target Stage',
    rejectReasons: 'Rejection Reasons',
    newWorker: 'New Worker',
    originalWorker: 'Original Worker',
    reassignModalTips1: 'Please select who you want to work on the selected data',
    reassignModalTips2: 'Discard ground truths by the original Annotator',
    samplePopover: 'Only data in the Need Acceptance stage can be sampled',
    sampleModalTips1: 'Include data in other samples',
    sampleModalTips2: 'Sampling inside a Scene',
    samplingSize: 'Sampling Size',
    and: 'and',
    framesPerSegment: 'Frames per Segment',
    randomSampling: 'Random Sampling',
    fieldWarning: 'Fields marked with * cannot be modified once the task has been published.',
    preview: 'Preview',
    ViewInQA: 'View in QA',
    ViewInACC: 'View in ACC',
    ViewInStudio: 'View in QA',
    empty: "You currently don't have any available data",
  },
  create: {
    name: 'Task Name',
    createByYourself: 'Create Task by Yourself',
    createByTemplate: 'Create Task by Templates',
    dataType: 'Data Type',
    dataTypeDesc:
      'The data type defines the data type of your task. You can only select one data type from LiDAR Basic, LiDAR Fusion, or Image.',
    scenarioType: 'Scenario Type',
    scenarioTypeDesc:
      'Scenario Type defines how you would like to organize data in this Task. Single Data is designed for detection tasks only, while Scene supports tracking tasks.',
    annotationType: 'Annotation Type',
    annotationTypeDesc:
      'The Annotation Type defines how you would like to annotate your data. Instance means annotating data in an instantial way, such as with a bounding box, cuboid, polygon, etc.',
    industry: 'Industry',
    nameHolder: 'Please enter the name',
    taskNameLengthError: 'The character length of the Task Name should not exceed 100',
    uploadAttachment: 'Upload Attachment',
    onlySupports: 'Only PDF format is supported',
    editInstruction: 'Edit Instructions',
    next: 'Next',
    cancel: 'Cancel',
    prev: 'Previous',
    saveAndExit: 'Save and Exit',
    save: 'Save',
    thisIs: 'This is a',
    only: 'Only',
    datasetWillBeShown: 'dataset will be shown',
    useTemplate: 'use template',
    pleaseSelectAData: 'Please select a dataset',
    selectAResult: 'Select a Result',
    cancelOrClearAll: 'Cancel / Clear All',
    regroupSceneForWorkers: 'Regroup the Scene for Workers',
    every: 'Every',
    dataAsaScene: 'data as a Scene',
    regroupPopover:
      'This will only affect this task; all your scenes in the dataset will not be modified.',
    addTips: 'Please add some data to this task from',
    addTipsEnd: 'dataset',
    ontologyOf: 'Ontology of {datasetName}',
    onlyOntologyIn: 'You can only choose or edit Ontology from {datasetName}',
    clickToBack: 'Click to go back and change the Dataset',
    preview: 'Preview in Tool',
    assignMemberTitle: 'Assign this task to Team Members',
    assignTaskAdminTitle: 'Assign Admins',
    assignTaskAdminPopover: 'Admins can manage the task',
    assignWorkerAdminTitle: 'Assign Inspector',
    assignWorkerAdminPopover: 'Inspectors can accept the task',
    batchSize: 'Batch Size',
    batchSizePopover:
      'The number of data items that each worker can claim at a time in a single stage',
    batchSizeRequiredError: 'Please enter the batch size',
    maxDataDuration: 'Max Data Duration',
    maxDataDurationPopover: 'The maximum number of minutes allowed for finishing a batch of data',
    maxDataDurationRequiredError: 'Please enter the maximum batch duration',
    minutes: 'Minutes',
    dataAccuracy: 'Data Accuracy',
    dataAccuracyPopover:
      'This is the object accuracy threshold used to determine if data is accurate.',
    dataAccuracyRequiredError: 'Please enter Data Accuracy',
    allowWorkerView: 'Allow worker to view submitted data',
    allowSame: 'Allow the same worker to work on the same data at different stages',
    searchAndFilter: 'Search & Filter',
    searchUserPlaceholder: 'Search users',
    allMembers: 'All Members',
    // leaveWarning: 'Leaving now will discard all unsaved changes. Are you sure to leave?',
    leaveWarning: 'Are you sure?',
    removeUploadDataWarning: 'Are you sure you want to remove the selected data?',

    selectAllError: 'Please first uncheck Select All Data (filter applied)',
    nextConfirm:
      'Your current task basic setting will remove all settings in the following steps. Do you wish to continue?',
    selectTemplate: 'Please select a template',

    publishSuccess: 'Task Published',

    allowExceedArea: 'Should the result be allowed to exceed the image area?',
    allowExceedClassLimit: 'Should submission be allowed if the result exceeds the Class limit?',

    annotationTypeHolder: 'Please select annotation type',

    addDataProgress: 'Adding data in progress...',
    addDataSuccess: 'Data added successfully! We will remove duplicates for you later',
    addStep: {
      selectAllDataApplyFilter: 'Select All Data (filter applied)',
      uploadDataInDataset: 'Upload data to the dataset',
      singleInfo: 'This is a Single Frame Task; only Single Frame data will be displayed.',
      trackingInfo: 'This is a Tracking Task; only Scene data will be displayed.',
    },
  },
  createTips: {
    taskAdminAssignTip: 'At least 1 Admin should be assigned!',
    workerAdminAssignTip: 'At least 1 Inspector should be assigned!',
    memberSelectedTip: 'At least 1 member should be selected',
    panelMaxLengthTip: 'The maximum length for the panel name is 100 characters',
    batchSizeRequired: 'The Batch Size field is required',
    batchSizeMax: 'The maximum batch size is 1000',
    maxDurationRequired: 'The Max Data Duration field is required',
    instanceAccuracyRequired: 'The Instance Data Accuracy field is required',
    segmentationAccuracyRequired: 'The Segmentation Data Accuracy field is required',
    instanceMax: 'The maximum value for Instance Data Accuracy is 100',
    segmentationMax: 'The maximum value for Segmentation Data Accuracy is 100',
    publishFailed: 'Task publishing failed',
    reviewStageMax: 'The maximum number of review stages is 5',
    uncheckFilter: 'Please uncheck Select All Data (filter applied) first',
    selectItem: 'Please select a item',
    noDataCanSelected: 'No data can be selected',
    upload10Files: 'You can upload a maximum of 10 files!',
    uploadPdf: 'Only PDF files can be uploaded',
    changeDatasetTip:
      'You are currently changing the dataset, which will remove all previous data selections and settings in the following steps. Do you want to continue?',
    selectDataset: 'Please select a dataset',
    addData: 'Please add some data',
    createDataset: 'Please create a dataset',
    addDataToTemplate: 'Please add some data to the task from this {dataset}',
  },
  error: {
    classRequired: 'Please select a Class or Classification',
    previewError: 'No data could be found in your task. Please check your task and the dataset.',
  },
  step: {
    taskBasics: 'Task Basics',
    uploadData: 'Upload Data',
    ontology: 'Ontology',
    instruction: 'Instructions',
    workflow: 'Workflow',
    QaOptional: 'QA Rules',
  },
  setting: {
    classTips:
      'Changes to the ontology will not automatically apply to data that has been annotated. Completed data should be manually corrected.',
    restartModalTips1: 'You are about to close',
    restartModalTips2: 'Once you confirm this operation, ',
    restartModalTips3: 'this task will NOT be able to restart',
    restartModalTips4: 'All unaccepted annotations will be discarded',
  },
  list: {
    // tab
    myTask: 'My Tasks',
    taskManagement: 'Team Task Management',
    // table
    id: 'ID',
    name: 'Name',
    type: 'Type',
    taskType: 'Task Type',
    stage: 'Stage',
    stageType: 'Stage Type',
    admins: 'Admins',
    progress: 'Progress',
    ongoingData: 'Ongoing Data',
    workflowStage: 'Workflow Stage',
    status: 'Status',
    // btn
    viewHistory: 'View History',
    annotate: 'Annotate',
    review: 'Review',
    config: 'Configure',
    pause: 'Pause',
    continue: 'Continue',
    close: 'Close',
    delete: 'Delete',
    restart: 'Restart',
    // tips
    inReview: 'In Review',
    claimed: 'Claimed',
    toBeModified: 'To Be Modified',
    needAcceptance: 'Need Acceptance',
    completed: 'Completed',
    taskPool: 'Task Pool',
    // empty
    emptyText: "You don't have any assigned tasks at the moment",
    // search
    searchText: 'Search by ID or name',
  },
  listModal: {
    copySuccessfully: 'Task {name} copied successfully',
    warning: 'Warning',
    goingTo: 'You are about to ',
    confirmOption: 'Once you confirm this operation: ',
    pauseTip: 'All your workers will be unable to access this task until you restart it.',
    closeTip1: 'This task will NOT be able to restart.',
    closeTip2: 'All unaccepted annotations will be discarded.',
    closeBtn2: 'Close Anyway',
    closeBtn3: 'Proceed to Accept',
    deleteToast: 'You need to close this task first',
    deleteTip1:
      'All your data related to this task, such as comments, rejections, statistics, etc., will be removed.',
    deleteTip2: 'Your original data will NOT be removed.',
    deleteTip3: 'All the annotations that have been accepted will NOT be removed.',
  },
  detailTab: {
    overview: 'Overview',
    data: 'Data',
    performance: 'Performance',
    setting: 'Setting',
  },
  welcome: {
    hello: 'Hello',
    toDoInfo:
      'In the "To-do" section, where your assigned tasks are located, simply click on "Annotate" or "Review" to begin.',
    myTaskInfo:
      'Task admins can track and manage assigned tasks in the "My Tasks Management" section.',
    desc1:
      'You can find your assigned tasks in the "To-do" tab. To start, click on "Annotate/Review".',
    desc2: 'Admins can locate their tasks in the "My Tasks Management" tab.',
    desc3: 'Thank you for collaborating with us and helping to advance AI. ',
  },
  overview: {
    statistic: {
      completed: 'Completed',
      needAcc: 'Need ACC',
      inLastDay: 'In last day',
      rejects: 'Rejections',
      comments: 'Comments',
    },
    changeTip:
      'You are viewing this task as an Annotator or Reviewer. In this view, the dashboard only shows data related to you. Click here to work as an Admin in this task.',
    changeBtnText: 'View as Admin',
    changeTipForInspector:
      'You are viewing this task as an Annotator or Reviewer. In this view, the dashboard only shows data related to you. Click here to work as an Inspector in this task.',
    changeBtnTextForInspector: 'View as Inspector',
    progress: 'Progress',
    progressCompleted: 'Completed',
    accuracy: 'Accuracy',
    accuracyTip: 'Accuracy monitors your annotation accuracy in this task, by data and objects.',
    byData: 'By Data',
    byObjects: 'By Objects',
    segmentAccuracyTip:
      'Accuracy monitors your annotation accuracy in this task, by data and points.',
    byPoint: 'By Points',
    stage: 'Stage Breakdown',
    stageTip: 'The Stage Breakdown displays how your data is distributed at every stage.',
    empty: 'No Instruction',
    progressEmpty: "You don't have any assigned tasks at the moment.",
    notStarted: 'Not Started',
    object: 'Object',
    notClaimed: 'Not Claimed',
    working: 'Working',
    submitted: 'Submitted',
    rejected: 'Rejected',
    segmentationPoint: 'Segmentation Point',
    segmentationData: 'Segmentation Data',
    segmentationObject: 'Segmentation Object',
    imgCardAccuracy: {
      IObject: 'I-Object',
      SPoint: 'S-Point',
      SObject: 'S-Object',
    },
  },
  countdown: {
    claim: 'Claim',
    emptyClaim: "You currently don't have any available data",
    emptyTip:
      'You can claim up to {dataNum} pieces of data at once, with a batch duration of {minute} minutes. Therefore, you have a maximum of {perMinute} minutes per piece of data.',
    emptyNoData: 'Congratulations! No Data left',
    openWarning: 'The claimed data has expired. Please claim again.',
    pausedFor: 'Paused for',
    dueIn: 'Due in',
    activeSelect: {
      withComments: 'With Comments',
      withMyComments: 'With my Comments',
      withWorkflowRejects: 'With Workflow Rejections',
    },
    actionList: {
      submit: 'Submit',
      pass: 'Pass',
      reject: 'Reject',
      annotate: 'Annotate',
      review: 'Review',
      markValid: 'Mark as Invalid',
    },
    expiringModal: {
      claimedData: 'Your claimed data (',
      isExpiring: ' data remaining) is expiring in ',
      release: 'After that, they will all be released to the Task Pool.',
    },
    expiredModal: {
      refresh: 'Please refresh to claim again.',
      claim: 'The claimed data has expired. Click to claim again.',
    },
    pauseModal: {
      claim: 'The claimed data is now paused. Click "Restart" to start working again.',
    },
    submitModal: {
      submit: 'Submit',
      goingTo: 'You are about to submit the selected ',
      data: 'data',
      confirmOption: 'Once you confirm this operation:',
      tip1: 'This data will be submitted to the next stage of the queue.',
      tip2: 'You will not be able to modify this data until the Task Manager or worker in the next stage sends them back to you.',
      endText: 'I understand the above consequences and want to submit this data.',
    },
    rejectModal: {
      reject: 'Reject',
      goingTo: 'You are about to reject the selected ',
      data: 'data',
      targetStage: 'Target Stage',
      worker: 'Worker',
      original: 'Original',
      originalTip: 'Who submitted this work',
      new: 'New',
      newTip: 'Assign to any other worker in the stage',
      result: 'Result',
      keepResults: 'Keep results',
      keepResultsTip1: 'Keep all results and performances',
      clearResults: 'Clear results',
      clearResultsTip2: 'Clear all ground truth results',
      rejectReasons: 'Rejection Reasons',
    },
  },

  taskList: {
    TodoTab: 'To-do',
    myTaskManagementTab: 'My Tasks Management',
  },

  taskDetail: {
    previewTips: 'Preview annotations',
    settingAlert: 'To make changes to this task, you must first assign yourself as the Task Admin.',
    dataAlertBefore:
      'To perform actions on this task, you must first assign yourself as the Task Admin in',
    dataAlertAfter: 'tab first',
    dataAdded: 'Data Added',
    dataStatus: 'Data Status',
    workflowStatus: 'Workflow Status',
    workflowStage: 'Workflow Stage',
    AssigneeAnnotator: 'Assignee Annotator',
    Activities: 'Activities',
    sampling: 'Sampling',
    acceptTask: 'Accept Task',
    rejectTask: 'Reject Task',
    byObject: 'by Object',
    byData: 'by Data',
    byPoint: 'by Point',
    withComments: 'With Comments',
    withMyComments: 'With my Comments',
    markedAsInvalid: 'Marked as Invalid',
    withWorkflowRejects: 'With Workflow Rejections',
    withACCRejects: 'With ACC Rejections',
    pausedForAnHour: 'Paused for an hour',
    sample: {
      accuracyIn: 'Accuracy in',
      sample: 'Sample',
      all: 'All',
      details: 'Details',
      samplingMethod: 'Sampling Method',
      samplingTotalSize: 'Sampling / Total Size',
      samplingBy: 'Sampled by',
      samplingDate: 'Sampling Date',
      samplingTip: 'You can sample Scenes in review mode in Tools',
      samplingData: 'Sampling Data',
      totalSize: 'Total size (Apply Current Filters)',
      fileSize: 'files ({ totalPercent }% of total)',
    },
    ifChecked: 'If Checked',
    stageStatus: 'Stage Status',
    workingByOthers: 'Being Worked on by Others',
    lock: {
      occupiedBy: 'Occupied by',
      occupiedDataCount: 'Occupied Data Count',
      selectRecord: 'Please select a record',
    },
    addDataSuccessfully: 'Data Added Successfully',
    remove: {
      removeData:
        'You are about to remove {num} pieces of data from the task. Once removed, they will no longer be worked on in this task.',
      removeSuccess: '{num} pieces of data have been removed from the task',
      removeFailure: "{num} operations failed because they've already been claimed",
    },
  },
  taskSetting: {
    linkedDataset: 'Linked Dataset',
    annotationType: 'Annotation Type',
    taskStarted: 'Task Started',
    taskCompleted: 'Task Completed',
    viewInNewTab: 'View in a New Tab',
    radius: 'Radius(m)',
  },
  operateHistory: {
    title: 'Work flow and result version',
    dataId: 'Data ID',
    dataName: 'Data Name',
  },
};
