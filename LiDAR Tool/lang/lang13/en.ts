const en = {
  instruction: 'Instruction',
  newTabOpen: 'Open in New Tab',
  actions: 'Actions',
  editCuboid: 'Edit',
  display: 'Display',

  attachment: 'Attachment',
  actionF: 'Create Object / Comment',
  actionF_S: 'Create Seg. / Comment',
  actionCtrlC: 'Copy Object',
  actionCtrlV: 'Paste Object',
  actionCtrlDrag: 'Copy by drag object',
  actionDel: 'Delete Object',
  actionCtrlZ: 'Undo',
  actionCtrlShiftZ: 'Redo',
  actionU: 'Switch to Manual/AI-assisted boxing',

  actionAlt1: 'Switch to view/edit Instance',
  actionAlt2: 'Switch to view/edit Segmentation',
  actionWS: 'Move cuboid up/down',
  actionW_S: 'Switch Add Mode to Cover/ Exclude',
  actionAD_S: 'Add/Delete Point',
  actionCtrlAD_S: 'Continuous Add/Delete Point',
  actionTab_S: 'End Comment',
  actionC_S: 'Show/Hide Contour',
  actionX_S: 'Switch Brush Type',
  actionAD: 'Move cuboid backward/forward',
  actionQE: 'Move cuboid left/right',
  actionZX: 'Rotate cuboid left/right',
  actionT: 'Show/hide classes and attributes pad',
  actionM: 'Show/Hide label and attributes',
  actionC: 'Rotate head',
  actionV: 'Flip head',
  actionY: 'Relocate',
  actionG: 'Show/hide coordinate axis',
  actionB: 'Filter other object',
  actionN: 'Show/Hide distance measure',
  actionR: 'Open/Close review panel',
  actionL: 'Switch shared edge',
  actionK: 'Shared edge polygon by points',
  actionLink: 'Show/Hide linkage pointer',
  actionShiftH: 'Show/Hide comment label',
  actionO: 'Switch alias/name',
  actionP: 'Show Trajectory',
  actionEnd: 'Finish drawing',

  titleTaskId: 'Task ID',
  titleTaskName: 'Task Name',
  titleDataID: 'Data ID',
  titleDataName: 'Data Name',
  titleDataSize: 'Data Size',
  btnCopyDataDetail: 'Copy Data Detail',
  canNotCopy: 'The browser does not support copying',
  // Button
  btnOk: 'Ok',
  btnSave: 'Save',
  btnConfirm: 'Confirm',
  btnCancel: 'Cancel',
  btnDelete: 'Delete',
  btnDiscard: 'Discard',
  btnRelease: 'Release',
  btnRefresh: 'Refresh',
  // Annotation.vue
  titleComment: 'Comment',
  titleReplyComment: 'Reply Comment',
  titleUnresolved: 'Unresolved',
  titleResolved: 'Resolved',
  titleType: 'Type',

  msgDelete: 'Are you sure to delete?',
  msgType: 'Please select a type',
  msgChar: 'Input should be less than 500 characters',
  holderComment: 'Please type in comment.',
  holderReply: 'Add a new reply.',
  // ModalFlow.vue
  titleReject: 'Reject Info',
  titleNoInfo: 'No Info',
  // Reject.vue
  titleStage: 'Target Stage',
  titleWorker: 'Worker',
  titleNew: 'New',
  titleResult: 'Result',
  titleKeep: 'Keep results',
  titleClear: 'Clear results',
  titleReason: 'Reject Reasons',
  msgWorker: 'Original',
  msgNew: 'Assign to any other worker in the stage',
  msgKeep: 'Keep all results and performances',
  msgClear: 'Clear all ground truth results and performances',
};

export type ILocale = typeof en;

export { en };