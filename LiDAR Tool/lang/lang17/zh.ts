import { ILocale } from './type';

const zh: ILocale = {
    titleHelp: '帮助',
    titleFlow: '工作流',
    titleData: '数据详情',
    titleBack: '返回',
    titleClose: '关闭',
    tipFullScreen: '全屏',
    tipNoFullScreen: '退出全屏',
    titleSaveChange: '保存修改',
    msgSaveChange: '是否保存修改？',
    // FlowBtn
    btnReject: '驳回',
    btnModify: '修改',
    btnAccept: '验收通过',
    btnSubmit: '提交',
    btnClaim: '领取',
    btnSave: '保存',
    btnPass: '通过',
    btnR_E: '驳回 & 退出',
    btnR_C: '驳回 & 领取',
    btnP_E: '通过 & 退出',
    btnP_C: '通过 & 领取',
    btnS_E: '提交 & 退出',
    btnS_C: '提交 & 领取',
    // SampleMsg
    msgSample: '你正在查看未被抽样的帧。这一帧打的评论不会计入抽样准确率。',
    infoPointPercent: '分割:{{n}}% 通过点',
    infoObjectPercent: '实体:{{n}}% 通过对象',
    sampleFilterTitle: '准确率在',
    // Status
    titleAnnotate: '标注',
    titleReview: '审核',
    titleAcceptance: '验收',
    titleQA: '质检',
    titleView: '浏览',
    titleModify: '修改',
    titlePausedFor: '已挂起',
    titleDueIn: '过期时间',
    titlePause: '暂停',
    titleRestart: '继续',
    msgOutTime:
        '你认领的数据（剩余 {{ n }} 条）将在 {{ t }} 内过期。过期后，它们将全部被释放到任务池中。',
    msgAgain: '请重新领取',
    msgPaused: '领取的数据现已暂停。',
    msgOver2M: '你已经有 2 分钟没有操作了。',
    msgClickStart: '点击按钮继续工作。',
    msgClaimMsg: '领取的数据现已暂停。点击按钮继续工作。',
    msgExpire: '领取的作业即将过期',
    msgExpired: '领取的作业已过期',
};

export { zh };
