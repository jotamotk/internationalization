export default {
  // TODO 中文
  FailToSubmit: ' Fail to submit data, you have to pass QA at first',
  rules: 'Rules',
  resolved: 'Resolved',
  MarkAsUnresolved: 'Mark as unresolved',
  QualityCheckJobs: 'Quality Check Jobs',
  overview: {
    totalData: 'Total Data',
    totalAnnotations: 'Total Annotations',
    classesBreakdown: 'Classes Breakdown',
  },
  validator: {
    resultConfig1: 'Please select at least 1 result',
    resultConfig2: 'Please select up to 5 results',
    scoreWeight: 'All weights must add up to 100%',
    qaCheckName: 'Please input Quality Check Name',
    SelectAJobs: 'you need to select at least one rule to run a quality check job',
    SelectARule: 'To create a quality check job, you need at least one rule.',
    dimensionTips: 'You need to select at least one rule under {name} to customize the weight',
    viewViolationstInfotoast: 'You need to complete quality check to view violations',
    viewReportInfotoast: 'You need at least one success quality check to view the report',
  },
  apply: {
    applyChangesToTheDataset: 'Apply Changes to the Dataset',
    changeTipForDataset:
      'Changes will not apply to dataset until you click apply changes to dataset to effects dataset annotation',
    conflictTipForDataset:
      'You need to make sure there are no mutually exclusive rules to apply changes to the dataset',
    applyChangesToTheTask: 'Apply Changes to the Task',
    changeTipForTask:
      'Changes will not apply to the task until you click apply changes to the task to effect annotation',
    conflictTipForTask:
      'You need to make sure there are no mutually exclusive rules to apply changes to the task',
  },
  targetObject: {
    targetObject: 'Targeted Objects',
    range: 'Range',
    allRange: 'All range',
    customRange: 'Custom range',
    height: 'Height',
    allHeight: 'All Height',
    customHeight: 'Custom height',
    targetObjectTip:
      'In 3D point cloud data, target objects can be filtered based on their range and height from the zero point. This criteria is used to determine if a rule has been violated.',
  },
  QCJConfigObject: {
    QCbasics: 'Quality Check Basics',
    QCName: 'Quality Check Name',
    ScoreWeight: 'Score Weight',
    Average: 'Average',
    Custom: 'Custom',
    Data: 'Data',
    TargetData: 'Target Data',
    AllData: 'All Data',
    UncompletedData: 'Uncompleted Data',
    DataInTheAcceptanceStage: 'Data in the Acceptance Stage',
    Results: 'Results',
  },
  QCJAlert: {
    update: 'Update',
    updateTitle: 'Your data indexes are out of date',
    updateDes1:
      'Your data indexes were last updated on  { lastUpdateAt }, which means they are out of date.',
    updateDes2:
      'Using outdated data indexes to run a quality check job can lead to inconsistent results that differ from the actual data. To ensure accurate results, please update your data indexes.',

    build: 'Build',
    buildTitle: "Before running a quality check job, you'll need to build data indexes.",
    buildDes: 'To perform a quality check job, you need to first build data indexes.',
    rebuild: 'Re-build',
    rebuildTitle: 'Your indexes are already updated to date !',
    rebuildDes:
      'Your data indexes were last updated on  { lastUpdateAt }, which is latest version. Feel free to run a quality check job.',
    pengdingTitle: 'Your data indexes are updating',
    pengdingDes:
      'We are updating your data indexes , feel free to continue with your other work. Once it is done, you can run a quality check job.',

    hide: 'Hide',
    hideTitle: 'Your data indexes are updated successfully',
    hideDes: 'Your data indexes are updated successfully, now you can run your Quality Check Jobs.',
  },
  rulesList: {
    ifEnable: 'If enable',
    rulesName: 'Rules name',
    requirement: 'Requirement',
    description: 'Description',
    dimension: 'Dimension',
    mandatory: 'Mandatory',
    warning: 'Warning',
    info: 'Info',
    completeness: 'Completeness',
    uniqueness: 'Uniqueness',
    validity: 'Validity',
    consistency: 'Consistency',
    config: 'Config',
    targetOn: 'Target on',
    score: 'Score',
    objects: 'Objects',
    data: 'Data',
    attributes: 'Attributes',
    trackingObjects: 'Tracking Objects',

    mandatoryTip: 'Violation of mandatory rules will prevent user to save or submit data',
  },
  jobsList: {
    JobNumber: 'JobNumber',
    QualityCheckName: 'Quality Check Name',
    Score: 'Score',
    RunTimes: 'Run times',
    Status: 'Status',
    Progress: 'Progress',
    Action: 'Action',
    // 表格内部状态及按钮
    Runing: 'Runing',
    Stopped: 'Stopped',
    Completed: 'Completed',
    Failed: 'Failed',
    ViewReport: 'View report',
    ViewViolations: 'View violations',
    deleteTitle: 'Delete a Quality Check Job',
    deleteTips:
      'You are about to delete a quality check job. Once you confirm this operation, all of its reports and violation records will be permanently deleted.',
    createJobs: 'Create a Quality Check Job',

    stopTitle: 'Stop a Quality Check Job',
    stopTips:
      'You are about to stop a quality check job. Stopping a quality check job will not generate a report or a violation record',
  },
  configModal: {
    configARule: 'Config a Rule',
    builtIn: 'Built-in',
    basics: 'Basics',
    parameters: 'Parameters',
    viewInstruction: 'View instruction',
    ruleName: 'Rule Name',
  },
  report: {
    runID: 'Run ID',
    dataQualityScore: 'Data Quality Score',
    dataCount: 'Data Count',
    objectCount: 'Object Count',
    resultName: 'Result Name',
    startDate: 'Start Date',
    endDate: 'End Date',
    dataQualityBreakdown: 'Data Quality Breakdown',
    delete: {
      deleteReport: 'Delete Report',
      sureDelete: 'Are you sure to delete the selected items or series?This action is irreversible',
    },
    reportAreNotAvailable: 'Report is not available',
    reportTip:
      'This report reflects the data quality based on the rules and dimensions that you have selected.',
    breakdownTip:
      'Data quality breakdown measures your data quality across four dimensions, which are aggregated from the quality check rules you have selected',
  },
};
