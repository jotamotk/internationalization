export default {
  taskPerformance: 'Task Performance',
  workerPerformance: 'Worker Performance',
  someonePerformance: "'s Performance",
  chart: {
    day: 'Day',
    week: 'Week',
    month: 'Month',
  },
  export: {
    exportSettings: 'Export Settings',
    task: 'Task',
    workers: 'Workers',
    exportResultsFor: 'Export Results for',
    valid: 'Valid & Unknown',
    invalid: 'Invalid',
    performanceValidity: 'Data Validity',
    exporting: 'Exporting',
    exported: 'Exported',
  },
  condition: {
    countConditions: 'Count Conditions',
    conditionInfo:
      'Only tasks created within the past six months are eligible for performance analysis',
    taskHolder: 'Task ID / Task Name',
    dataType: 'Data Type',
    scenarioType: 'Scenario Type',
    linkedDataset: 'Linked Dataset',
    annotationType: 'Annotation Type',
    taskStarted: 'Task Started',
    taskCompleted: 'Task Completed',
    static: 'Single Data',
    scene: 'Scene',
    dataStatus: 'Data Status',
    completed: 'Completed',
    completedInfo:
      'The data has been accepted by the Task Admins. After acceptance, performance statistics will remain the same. The Completed Performance is typically used for task billing.',
    submitted: 'Submitted',
    submittedInfo:
      'The data has been submitted by the workers, but it has not yet been accepted by the Task Admins. The Performance statistics are not final and may change as the task progresses. The Submitted Performance is typically used for monitoring task progress.',
    dataValidity: 'Data Validity',
    valid: 'Valid & Unknown',
    invalid: 'Invalid',
    validityInfo: 'Indicates if the data has been marked as valid or invalid in the task',
    date: 'Date',
    day: 'Day',
    week: 'Week',
    month: 'Month',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    byDay: 'By Day',
    byWeek: 'By Week',
    byMonth: 'By Month',
    upToNow: 'Up to Now',
    upTtoYesterday: 'Up to Yesterday',
    completedAt: 'Completed at',
    submittedAt: 'Submitted at',
    last7Days: 'Last 7 Days',
    last30Days: 'Last 30 Days',
    last90Days: 'Last 90 Days',
    last180Days: 'Last 180 Days',
  },
  taskData: {
    dataPerformance: 'Data Performance',
    data: {
      completedData: 'Completed Data',
      submittedData: 'Submitted Data',
      items: 'Items',
      scenes: 'Scenes',
      frames: 'Frames',
      completedInfo: {
        framesInfo: 'Number of scenes/frames that were accepted during the filtered time period.',
        singleInfo: 'Number of data items that were accepted during the filtered time period.',
      },
      submittedInfo: {
        framesInfo:
          'Number of scenes/frames that were submitted during the filtered time period.',
        singleInfo: 'Number of data items that were submitted during the filtered time period.',
      },
    },
    valid: {
      validWorkDuration: 'Valid Work Duration',
      stageBreakdown: 'Stage Breakdown',
      total: 'Total',
      averageScene: 'Average/Scene',
      average: 'Average',
      completedInfo: {
        total: 'Total: The cumulative work duration across all stages to complete the data',
        framesAverage:
          'Average/Scene = Total Work Duration / Number of Scenes. This represents the average work duration to complete a scene.',
        singleAverage:
          'Average = Total Work Duration / Number of Data Items. This represents the average work duration to complete an item.',
      },
      submittedInfo: {
        total: 'Total: The cumulative work duration',
        framesAverage:
          'Average/Scene = Total Work Duration / Number of Scenes. This represents the average work duration for a scene.',
        singleAverage:
          'Average = Total Work Duration / Number of Data Items. This represents the average work duration for an item.',
      },
    },
    quality: {
      quality: 'Quality',
      accuracy: 'Accuracy',
      passRate: 'Pass Rate',
      AccAccuracy: 'ACC Accuracy',
      AccPassRate: 'ACC Pass Rate',
      completedInfo: {
        accuracy:
          'Accuracy: Total Number of Accurate Data in the ACC stage / Total Number of Data.',
        passRate:
          'Pass Rate: Total Number of Data in the ACC stage / Total Number of Submission Times.',
        AccAccuracy:
          'ACC Accuracy: Total Number of Accurate Data in the ACC stage / Total Number of Data.',
        AccPassRate:
          'ACC Pass Rate: Total Number of Data in the ACC stage / Total Number of Submission Times.',
      },
      submittedInfo: {
        accuracy: 'Accuracy: Total Number of Accurate Data / Total Number of Data',
        passRate:
          'Pass Rate: 1 - Total Number of Redo Times in the Stage / Total Number of Submission Times.',
        AccAccuracy: 'ACC Accuracy: Total Number of Accurate Data / Total Number of Data.',
        AccPassRate:
          'ACC Pass Rate: 1 - Total Number of Redo Times in the Stage / Total Number of Submission Times.',
      },
      gatherInfo: 'This is averaged across tasks.',
      d: 'D',
      h: 'H',
      m: 'M',
      s: 'S',
    },
    redo: {
      redo: 'Redo',
      rejectedData: 'Reject Data',
      resetData: 'Reset Data',
      redoScenes: 'Reject Scenes',
      resetScenes: 'Reset Scenes',
      redoItems: 'Reject Items',
      resetItems: 'Reset Items',
      completedInfo: {
        frames: {
          redoScenes:
            'ACC Reject Scenes: Number of Scenes that were rejected or reassigned to an earlier stage during the ACC stage.',
          resetScenes:
            'ACC Reset Scenes: Number of Scenes that were rejected or reassigned, and had results cleared to an earlier stage during the ACC stage.',
        },
        single: {
          redoItems:
            'Reject Items: Number of Items that were rejected or reassigned to an earlier stage during the ACC stage.',
          resetItems:
            'Reset Items: Number of Items that were rejected or reassigned, and had results cleared to an earlier stage during the ACC stage.',
        },
      },
      submittedInfo: {
        frames: {
          redoScenes: 'Rejected Scenes: Number of Scenes that were rejected or reassigned.',
          resetScenes:
            'Reset Scenes: Number of Scenes that were rejected or reassigned and had their results cleared.',
        },
        single: {
          redoItems: 'Rejected Items: Number of Items that were rejected or reassigned.',
          resetItems:
            'Reset Items: Number of Items that were rejected or reassigned and had their results cleared to an earlier stage.',
        },
      },
    },
  },
  taskObject: {
    objectPerformance: 'Object Performance',
    objectCount: 'Object Count',
    viewBy: 'View By',
    object: 'Object Type',
    class: 'Class',
    filterObjectType: 'Filter Object Type',
    create: 'Create',
    createInfo: 'Create: Number of new objects',
    viewImported: 'View Imported',
    viewInfo: 'View Imported: Number of pre-annotated objects',
    edit: 'Edit',
    editInfo: 'Edit: Number of objects that were edited by others',
    delete: 'Delete',
    deleteInfo: 'Delete: Number of deleted objects',
    review: 'Review',
    reviewInfo: 'Review: Number of reviewed objects',
    accept: 'Accept',
    acceptInfo: 'Accept: Number of accepted objects',
    sum: 'Sum',
    total: 'Total',
    filterClass: 'Filter Class',
    pleaseSelect: 'Please select...',
  },
  taskAccuracy: {
    pointAccuracy: 'Point accuracy',
    objectAccuracy: 'Object Accuracy',
    ACCObjectAccuracy: 'ACC Object Accuracy',
    ACCAccuracy: 'ACC Accuracy',
    DataAccuracyInfo: 'Total Number of Accurate Data in ACC stage / Total Number of Data.',
    instanceObjectAccuracyInfoForAdminCompleteAnnotate:
      '1 - Number of Wrong Objects in ACC / Total Number of Created Objects.',
    instanceObjectAccuracyInfoForCompleteReview:
      '1 - Number of Wrong Objects / Total Number of Reviewed Objects.',
    instanceObjectAccuracyInfoForWorkerCompleteAnnotate:
      '1 - Number of Wrong Objects / Total Number of Created Objects.',
    segmentationDataAccuracyInfoForWorker: 'Total Number of Accurate Data / Total Number of Data.',
    segmentationObjectAccuracyInfoForAdmin:
      '1 - Number of Wrong Points in ACC / Total Number of Annotated Points.',
    segmentationObjectAccuracyInfoForWorkerAnnotate:
      '1 - Number of Wrong Points / Total Number of Annotated Points.',
    segmentationObjectAccuracyInfoForWorkerReview:
      '1 - Number of Wrong Points / Total Number of Reviewed Points.',
    instanceTitle: 'Instance (Seg. Excluded)',
    pointAccuracyAnnotate: 'Point Accuracy - Annotate',
    pointAccuracyReview: 'Point Accuracy - Review',
    image: {
      segmentationDataAccuracy: {
        complete: 'Total Number of Accurate Data in ACC stage / Total Number of Data.',
        annotationStage: 'Total Number of Accurate Data / Total Number of Data.',
        reviewStage: 'Total Number of Accurate Data / Total Number of Data.',
      },
      segmentationObjectAccuracy: {
        complete: '1 - Number of Wrong Objects in ACC / Total Number of Created Objects.',
        annotationStage: '1 - Number of Wrong Objects / Total Number of Created Objects.',
        reviewStage: '1 - Number of Wrong Objects / Total Number of Reviewed Objects.',
      },
    },
  },
  tableList: {
    columns: 'Columns',
    type: 'Type',
    sum: 'Sum',
    object3D: '3D Object',
    noClass: 'No Class',
    box3D: '3D Cuboid',
    box2D: '2D Cuboid',
    rect2D: '2D BBox',
    rectangle: 'Rectangle',
    polygon: 'Polygon',
    polyline: 'Polyline',
    polygon2D: '2D Polygon',
    polyline2D: '2D Polyline',
    polygon3D: '3D Polygon',
    polyline3D: '3D Polyline',
    imageCuboid: 'Cuboid',
    total: 'Total',
    name: 'Name',
    completedScenes: 'Completed Scenes',
    submittedScenes: 'Submitted Scenes',
    scenesInfo: 'Number of scenes that were accepted during the filtered time period.',
    completedItems: 'Completed Items',
    submittedItems: 'Submitted Items',
    itemsInfo: 'Number of data that were accepted during the filtered time period.',
    completedFrames: 'Completed Frames',
    submittedFrames: 'Submitted Frames',
    framesInfo: 'Number of frames that were accepted during the filtered time period.',
    totalDuration: 'Total Duration',
    totalDurations: 'Total Duration (s)',
    totalInfo: 'Total work duration in the current stage.',
    averageDuration: 'Average Duration',
    averageDurationUnit: 'Average Duration (s)',
    averageDurationScene: 'Average Duration/Scene (s)',
    averageScenesInfo:
      'Total Work Duration / Number of Scenes. Average work duration to finish a scene in the current stage.',
    averageItemsInfo:
      'Total Work Duration / Number of Data Items. Average work duration to finish an item.',
    passRate: 'Pass Rate',
    passInfo:
      '1 - Total Number of Rejected Data in the Stage / Total Number of Submitted Times in the Stage.',
    rejectedScenes: 'Rejected Scenes',
    rejectScenesInfo: 'Number of Scenes that were rejected or reassigned to another worker.',
    rejectedItems: 'Rejected Items',
    rejectItemsInfo: 'Number of Items that were rejected or reassigned to another worker.',
    resetScenes: 'Reset Scenes',
    resetScenesInfo:
      'Number of Scenes that were rejected or reassigned and had their results cleared.',
    resetItems: 'Reset Items',
    resetItemsInfo:
      'Reset Items: Number of Items that were rejected or reassigned and had their results cleared to an earlier stage.',
    //
    objectPerformance: 'Object Performance',
    annotation: {
      createInfo: 'Create: Number of new objects that were created by a worker.',
      viewInfo: 'View Imported: Number of pre-annotated objects that were viewed by a worker.',
      editInfo: 'Edit: Number of objects that were created by others and edited by a worker.',
      deleteInfo: 'Delete: Number of objects that were created by others and deleted by a worker.',
    },
    review: {
      reviewInfo: 'Review: Number of objects that were reviewed by a worker.',
      createInfo: 'Create: Number of new objects that were created by a worker',
      editInfo: 'Edit: Number of objects that were created by others and edited by a worker',
      deleteInfo: 'Delete: Number of objects that were created by others and deleted by a worker',
    },
    acceptance: {
      acceptInfo: 'Accept: Number of objects accepted by a worker',
      createInfo: 'Create: Number of new objects created by a worker',
      editInfo: 'Edit: Number of objects that were created by others and edited by a worker',
      deleteInfo: 'Delete: Number of objects that were created by others and deleted by a worker',
    },
    objectAccuracy: 'Ins. Accuracy',
    accuracyInfo: {
      createInfo: 'Create: 1 - Number of Wrong Objects / Number of Created Objects',
      reviewInfo: 'Review: 1 - Number of Wrong Objects / Number of Reviewed Objects',
    },
    segAccuracy: 'Seg. Accuracy',
  },
};
