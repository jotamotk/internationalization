export default {
  FailToSubmit: 'Data submission failed. You must first pass QA.',
  rules: 'Rules',
  resolved: 'Resolved',
  MarkAsUnresolved: 'Mark as Unresolved',
  QualityCheckJobs: 'Quality Check Tasks',
  overview: {
    totalData: 'Total Data',
    totalAnnotations: 'Total Annotations',
    classesBreakdown: 'Classes Breakdown',
  },
  validator: {
    resultConfig1: 'Please select at least 1 result',
    resultConfig2: 'Please select up to 5 results',
    scoreWeight: 'The total of weights must be 100%',
    qaCheckName: 'Please enter a name for the Quality Check',
    SelectAJobs: 'At least one rule must be selected to run a Quality Check task',
    SelectARule: 'At least one rule is needed to create a Quality Check task',
    dimensionTips: 'At least one rule under {name} must be selected to customize the weight',
    viewViolationstInfotoast: 'You need to complete Quality Check to view violations',
    viewReportInfotoast: 'At least one successful Quality Check is required to view the report',
  },
  apply: {
    applyChangesToTheDataset: 'Apply Changes to the Dataset',
    changeTipForDataset:
      'Changes will not be applied to the dataset until you click on "Apply Changes to Dataset", which will affect the dataset annotation',
    conflictTipForDataset:
      'Ensure there are no mutually exclusive rules before applying changes to the dataset',
    applyChangesToTheTask: 'Apply Changes to the Task',
    changeTipForTask:
      'Changes will not be applied to the task until you click on "Apply Changes to Task", which will affect the annotation',
    conflictTipForTask:
      'You need to ensure there are no mutually exclusive rules before applying changes to the task',
  },
  targetObject: {
    targetObject: 'Targeted Objects',
    range: 'Range',
    allRange: 'All Range',
    customRange: 'Custom Range',
    height: 'Height',
    allHeight: 'All Height',
    customHeight: 'Custom Height',
    targetObjectTip:
      'In 3D point cloud data, target objects can be filtered based on their range and height from the origin. These criteria help determine whether a rule has been violated.',
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
    updateTitle: 'Your data indices are out of date',
    updateDes1:
      'Your data indices were last updated on { lastUpdateAt }, which means they are out of date',
    updateDes2:
      'Using outdated data indices to run a quality check task can lead to inconsistent results that differ from the actual data. To ensure accurate results, please update your data indices.',

    build: 'Build',
    buildTitle: "Data indices must be built before running a Quality Check task",
    buildDes: 'Data indices must be built before performing a Quality Check task',
    rebuild: 'Re-build',
    rebuildTitle: 'Your indices are already up to date!',
    rebuildDes:
      'Your data indices were last updated on { lastUpdateAt }, which is the latest version. Feel free to run a Quality Check task.',
    pengdingTitle: 'Your data indices are updating',
    pengdingDes:
      'Your data indices are being updated. Feel free to continue with your other tasks. Once the update is complete, you will be able to run a Quality Check task.',

    hide: 'Hide',
    hideTitle: 'Your data indices are updated successfully',
    hideDes:
      'Your data indices have been successfully updated. Now you can run your Quality Check tasks.',
  },
  rulesList: {
    ifEnable: 'If enable',
    rulesName: 'Rules Name',
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

    mandatoryTip: 'Violation of mandatory rules will prevent users from saving or submitting data',
  },
  jobsList: {
    JobNumber: 'Job Number',
    QualityCheckName: 'Quality Check Name',
    Score: 'Score',
    RunTimes: 'Run Times',
    Status: 'Status',
    Progress: 'Progress',
    Action: 'Action',
    // 表格内部状态及按钮
    Runing: 'Runing',
    Stopped: 'Stopped',
    Completed: 'Completed',
    Failed: 'Failed',
    ViewReport: 'View Report',
    ViewViolations: 'View Violations',

    deleteTitle: 'Delete a Quality Check Task',
    deleteTips:
      'You are about to delete a Quality Check task. Once you confirm this operation, all of its reports and violation records will be permanently deleted.',

    createJobs: 'Create a Quality Check Task',
    stopTitle: 'Stop a Quality Check Task',
    stopTips:
      'You are about to stop a Quality Check task. Stopping a Quality Check task will not generate a report or a violation record.',
  },
  configModal: {
    configARule: 'Configure a Rule',
    builtIn: 'Built-in',
    basics: 'Basics',
    parameters: 'Parameters',
    viewInstruction: 'View Instruction',
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
      sureDelete:
        'Are you sure you want to delete the selected items or series? This action is irreversible.',
    },
    reportAreNotAvailable: 'Report is not available',
    reportTip:
      'The provided report reflects the quality of your data based on the rules and dimensions you have selected.',
    breakdownTip:
      'The data quality breakdown measures your data quality across four dimensions, which are aggregated from the Quality Check rules you have selected.',
  },
};
