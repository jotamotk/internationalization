const en = {
  // load
  'load-resource-error': 'Resource Loading Error',
  'load-object-error': 'Object Loading Error',
  'load-classification-error': 'Classification Loading Error',
  'load-class-error': 'Class Loading Error',
  'load-model-error': 'Model Loading Error',
  'load-dataset-classification-error': 'Dataset Classification Loading Error',
  'load-record-error': 'Record Loading Error',
  'load-frame-series-error': 'Frame Series Data Loading Error',
  'invalid-query': 'Query Invalid',
  'load-error': 'Error Loading',

  // model
  'load-track': 'Tracking....',
  'track-no-data': "No tracking object found. Please check the location and direction of your objects",
  'track-no-source': 'No Objects Tracked',
  'interpolate-no-source': 'Minimum 2 Ground Truth Results Required',
  'track-error': 'Error in Tracking',
  'track-ok': 'Successfully Tracked',
  //
  'msg-box-manual': 'Switched to Manual Tool',
  'msg-box-ai': 'Switched to AI-assisted Tool',
  'msg-link-on': 'Show Linkage Pointer',
  'msg-link-off': 'Hide Linkage p`Pointer',
  'copy-ok': 'Successfully Copied',
  'paste-ok': 'Successfully Pasted',
  'label-reload': 'Reload',
  'info-reload': 'Failed to load resource, please reload',

  // info
  'load-point': 'Loading....',
  'save-ok': 'Successfully Saved',
  'save-error': 'Error Saving',
  'model-run-error': 'Model Run Error',
  'model-run-no-data': 'No Results from Model',
  'no-point-data': 'No Point Cloud Data',
  'no-data': 'No Data',
  'no-valid-data': 'No Valid Data',
  'play-error': 'Error Playing',
  'unknown-error': 'Error',
  'network-error': 'Network Connection Error',
  'login-invalid': 'Invalid Login',
  'not-login': 'Not Logged In',
  'results-title': 'Results',

  'title-hide': 'Hide',
  'title-show': 'Show',
  'title-edit': 'Edit',
  'title-delete': 'Delete',
  'title-group': 'Group {{n}}',

  // msg
  'msg-not-save': "You didn't save the changes",
  'create-3-invalid': 'The Main View is too small',
  'create-rect-valid': 'Annotations cannot extend outside the image',
  'msg-init': 'Initializing...',

  'btn-ok': 'Confirm',
  'btn-cancel': 'Cancel',
  'title-warning': 'Warning',
  title_instance: 'Instance',
  title_segmentation: 'Segmentation',
  'need-select-object': 'Please select a segmentation object first',
  'warn-addModel':
    'Adding model results may overwrite the annotated points. Proceed?',
  'title-lasso': 'Lasso',
  'title-polygon': 'Polygon',
  'title-polyline': 'Polyline',
  'title-rect': 'Rectangle',
  'title-point': 'Point',
  'msg-brush-switch': 'Brush Switched to {{ a }}',
  'seg-cover': 'Cover Exsisting Results',
  'seg-cover-no': 'Exclude Exsisting Results',
  'seg-mode-switch': 'Add Mode Switched to {{ m }}',
  'btn-pre': 'Previous',
  'btn-next': 'Next',
  'btn-done': 'Done',

  setting_rect: 'Rectangle',
  setting_box: '2D Cuboids',
  setting_polygon: '2D Polygon',
  setting_polyline: '2D Polyline',
  setting_projectbox: 'Projected Cuboids',
  setting_projectpoint: 'Projected Points',
  setting_projectpolygon: 'Projected Polygon',
  setting_projectpolyline: 'Projected Polyline',
  'cancel-hollow-tips': 'Cancel Hollowing',
  'cut-not-first-tips': 'Do not crop the first object',
  'cut-first-tips': 'Crop the first object',
  'title-aux-line': 'Auxiliary Line',
  'title-aux-circle': 'Auxiliary Circle',
  'title-radius': 'Radius',
  'msg-edge-shared': 'Polygon with Shared Edge',
  'msg-edge-share': 'Polygon with Shared Edge by Points Drawing Mode',
  'msg-switch-edge-share': 'Switch Shared Edge',
  'label-manual': 'Manual',
  'label-model': 'Model',
  'label-ground': 'Ground',
  'label-distance-m': 'Distance',
  msg_polygon_valid: 'A polygon requires at least three points',
  msg_polyline_valid: 'A polyline requires at least two points',
  // interpolate
  'label-interpolation': 'Interpolation',
  'label-interpolation-track': 'Interpolation Tracking',
  'label-selected-frame': 'Selected Frames',
  'label-all-frame': 'All Frames',
  'msg-selected-frame-empty': 'Please select frames to track',
};

export type ILocale = typeof en;

export { en };
