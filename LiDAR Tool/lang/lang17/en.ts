const en = {
    titleHelp: 'Help',
    titleFlow: 'Workflow Detail',
    titleData: 'Data Detail',
    titleBack: 'Back',
    titleClose: 'Close',
    tipFullScreen: 'Full Screen',
    tipNoFullScreen: 'Exit Full Screen',
    titleSaveChange: 'Save Changes',
    msgSaveChange: 'Do you want to save changes?',
    // FlowBtn
    btnReject: 'Reject',
    btnModify: 'Modify',
    btnAccept: 'Accept',
    btnSubmit: 'Submit',
    btnSave: 'Save',
    btnPass: 'Pass',
    btnClaim: 'Claim',
    btnR_E: 'Reject & Exit',
    btnR_C: 'Reject & Claim',
    btnP_E: 'Pass & Exit',
    btnP_C: 'Pass & Claim',
    btnS_E: 'Submit & Exit',
    btnS_C: 'Submit & Claim',
    // SampleMsg
    msgSample:
        "You're now viewing a frame that is not sampled. Any comments in this frame will not be counted in Sampling Accuracy.",
    infoPointPercent: 'Segmentation: {{n}}% by Point',
    infoObjectPercent: 'Instance: {{n}}% by Object',
    sampleFilterTitle: 'Accuracy in',
    // Status
    titleAnnotate: 'Annotate',
    titleReview: 'Review',
    titleAcceptance: 'Acceptance',
    titleQA: 'QA',
    titleView: 'View',
    titleModify: 'Modify',
    titlePausedFor: 'Paused for',
    titleDueIn: 'Due in',
    titlePause: 'Pause',
    titleRestart: 'Resume',
    msgOutTime:
        'Your claimed data ({{ n }} data remaining) is expiring in {{ t }}. After that, they will all be released to task pool.',
    msgAgain: 'Please claim again.',
    msgPaused: 'Claimed data is now paused.',
    msgOver2M: "It seems you haven't operate in 2 minutes.",
    msgClickStart: 'Click button to continue working.',
    msgClaimMsg: 'Claimed data is now paused. Click button to continue working.',
    msgExpire: 'Claimed data is about to expire',
    msgExpired: 'Claimed data has expired',
};

export type ILocale = typeof en;

export { en };
