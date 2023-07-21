const en = {
  versionTipTitle: '🎆Version updated',
  versionTipContent:
    'Our tool has been updated to the latest version. To avoid data inconsistency, we strongly recommend that you save your data, close the current page, and then restart it.',
  // load
  'load-resource-error': 'Load Resource Error',
  'load-object-error': 'Load Object Error',
  'load-classification-error': 'Load Classification Error',
  'load-class-error': 'Load Class Error',
  'load-model-error': 'Load Models Error',
  'load-dataset-classification-error': 'Load DataSet Classification Error',
  'load-record-error': 'Load Record Error',
  'load-frame-series-error': 'Load FrameSeries Data Error',
  'invalid-query': 'Invalid Query',
  'load-error': 'Load Error',

  // model
  'load-track': 'Tracking....',
  'track-no-data': "No Tracking object found, please check your objects' location and direction",
  'track-error': 'Failed to track objects',
  'track-ok': 'Tracked objects successfully',
  btnOk: 'OK',
  btnSave: 'Save',
  btnConfirm: 'Confirm',
  btnConfirmExit: 'Confirm and Exit',
  btnCancel: 'Cancel',
  btnDelete: 'Delete',
  btnDiscard: 'Discard',
  btnRelease: 'Release',
  btnRefresh: 'Refresh',
  btnClose: 'Close',
  btnUpdate: 'Update',
  'title-verify': 'Calibrating camera parameters',
  // info
  'load-point': 'Loading....',
  'save-ok': 'Save Success',
  'save-error': 'Save Error',
  'model-run-error': 'Model Run Error',
  'model-run-no-data': 'No Model Results',
  'no-point-data': 'No PointCloud Data',
  'play-error': 'Play Error',
  'unknown-error': 'Error',
  'network-error': 'Network Error',
  'login-invalid': 'Login Invalid',
  'not-login': 'Not logged in',

  // msg
  'msg-not-save': "You didn't save changes?",
  'success-reject': 'Reject Success',
  'success-accept': 'Accept Success',
  'success-submit': 'Submit Success',
  'msg-allow-validating': 'The class validation is in progress. Are you sure you want to submit?',
  'msg-allow-valid-failed':
    'There are results that exceed class limits. Are you sure you want to submit?',
  'msg-not-validating': 'The class validation is in progress. Please wait until it’s complete.',
  'msg-not-valid-failed':
    'There are results that exceed class limits. Please modify them before submitting.',
  // 'title-validating': 'Rule is validating',
  // 'title-validated': 'Rule is validated',
  // common
  'title-save-change': 'Save Changes',
  'msg-save-change': 'Do you want to save changes?',
  'title-warning': 'Warning',
  'msg-close-task':
    'Do you want to save changes and keep these data to yourself? Or release these data to task pool for others to claim?',
  'error-save': 'Failed to save, please try again',
  'error-release': 'Failed to release, please try again',
  // reject
  'title-reject': 'Reject',
  // taskFlow
  'title-claiming': 'Claiming data...',
  'title-noData-claim': 'No data to claim',
  'msg-comment-limit': 'Comment count cannot exceed {{n}}!',
  //
  'msg-link-hidden': 'Linked object is hidden!',
  'msg-link-deleted': 'Linked object is deleted!',
  'title-more': 'More',

  'verify-step1':
    'Select a point in the point cloud and modify its corresponding projection in the camera image. Each image should have at least three points that are associated with the point cloud result.',
  'verify-step2':
    'After adjusting the positions of the points, click "Retry Calibration". After the calibration is complete, create a new point or project points to check if the automatically mapped point positions are correct. If they are not correct, you will need to readjust the positions of each pair of points in the camera images and point cloud again.',
  'verify-step3': 'If it is correct, apply the current camera parameters.',
  'verify-instruction': 'Instruction',
  're-correct': 'Retry Calibration',
  'warn-correct': 'Each image should have at least 3 reference points.',
  'success-correct':
    'Calibration success! Please create another pair of points or project points  to check the effects.',
  'success-update-config': 'The camera config has been updated successfully.',
  'data-classification-invalid': 'The data needs to have classifications, please modify first.',
  'datas-classification-invalid': 'Frame {{n}} need to have classifications, please modify first.',
  'msg-dataflow-qaerror':
    'Your results have violated mandatory QA rules. Are you sure you want to save this result?',
};

export type ILocale = typeof en;

export { en };
