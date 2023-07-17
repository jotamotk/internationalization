export default {
  FailToSubmit: ' Failed to submit data, you must pass QA first',
  rules: 'Rules',
  resolved: 'Resolved',
  MarkAsUnresolved: 'Mark as unresolved',
  QualityCheckJobs: 'Quality Check Tasks',
  overview: {
    totalData: 'Total Data',
    totalAnnotations: 'Total Annotations',
    classesBreakdown: 'Classes Breakdown',
  },
  validator: {
    resultConfig1: 'Please select at least 1 result',
    resultConfig2: 'Please select up to 5 results',
    scoreWeight: 'All weights must add up to 100%',
    qaCheckName: 'Please enter a name for the Quality Check',
    SelectAJobs: 'You need to select at least one rule to run a quality check task',
    SelectARule: 'To create a quality check task, you need at least one rule',
    dimensionTips: 'You need to select at least one rule under {name} to customize the weight',
    viewViolationstInfotoast: 'You need to complete quality check to view violations',
    viewReportInfotoast: 'You need at least one successful quality check to view the report',
  },
  apply: {
    applyChangesToTheDataset: 'Apply Changes to the Dataset',
    changeTipForDataset:
      'Changes will not be applied to the dataset until you click "Apply Changes to Dataset" to effect the dataset annotation',
    conflictTipForDataset:
      'You need to ensure there are no mutually exclusive rules before applying changes to the dataset',
    applyChangesToTheTask: 'Apply Changes to the Task',
    changeTipForTask:
      'Changes will not be applied to the task until you click "Apply Changes to Task" to effect the annotation',
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
      'In 3D point cloud data, target objects can be filtered based on their range and height from the zero point. These criteria are used to determine if a rule has been violated.',
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
    buildTitle: "Before running a quality check task, you'll need to build data indices",
    buildDes: 'To perform a quality check task, you first need to build data indices',
    rebuild: 'Re-build',
    rebuildTitle: 'Your indices are already up to date!',
    rebuildDes:
      'Your data indices were last updated on { lastUpdateAt }, which is the latest version. Feel free to run a quality check task.',
    pengdingTitle: 'Your data indices are updating',
    pengdingDes:
      'We are updating your data indices, feel free to continue with your other work. Once it is done, you can run a quality check task.',

    hide: 'Hide',
    hideTitle: 'Your data indices are updated successfully',
    hideDes: 'Your data indices have been successfully updated. Now you can run your quality check tasks.',
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

    deleteTitle: 'Delete a Quality Check Job',
    deleteTips:
      'You are about to delete a quality check task. Once you confirm this operation, all of its reports and violation records will be permanently deleted.',

    createJobs: 'Create a Quality Check Job',
    stopTitle: 'Stop a Quality Check Job',
    stopTips:
      'You are about to stop a quality check task. Stopping a quality check task will not generate a report or a violation record.',
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
      sureDelete: 'Are you sure you want to delete the selected items or series? This action is irreversible.',
    },
    reportAreNotAvailable: 'Report is not available',
    reportTip:
      'The provided report reflects the quality of your data based on the rules and dimensions you have selected.',
    breakdownTip:
      'The data quality breakdown measures your data quality across four dimensions, which are aggregated from the quality check rules you have selected.',
  },
};
