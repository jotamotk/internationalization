import { ILocale } from './type';

const ko: ILocale = {
    titleHelp: '도움',
    titleFlow: '워크플로우',
    titleData: '데이터 세부 정보',
    titleBack: '뒤로',
    titleClose: '닫기',
    tipFullScreen: '전체 화면',
    tipNoFullScreen: '전체 화면 종료',
    titleSaveChange: '변경 내용 저장',
    msgSaveChange: '변경 내용을 저장하시겠습니까?',
    // FlowBtn
    btnReject: '반려',
    btnModify: '수정',
    btnAccept: '검수',
    btnSave: '저장',
    btnClaim: '수령',
    btnSubmit: '제출',
    btnPass: '통과',
    btnR_E: '반려 & 종료',
    btnR_C: '반려 & 수령',
    btnP_E: '통과 & 종료',
    btnP_C: '통과 & 수령',
    btnS_E: '제출 & 종료',
    btnS_C: '제출 & 수령',
    // SampleMsg
    msgSample:
        '이제 샘플링되지 않은 프레임을 보고 있습니다. 이 프레임의 모든 설명은 샘플링 정확도에서 계산되지 않습니다.',
    infoPointPercent: '세그먼테이션:{{n}}% 포인트별로',
    infoObjectPercent: '인스턴스:{{n}}% 객체별로',
    sampleFilterTitle: '정확률',
    // Status
    titleAnnotate: '작업',
    titleReview: '리뷰',
    titleAcceptance: '검수',
    titleQA: 'QA',
    titleView: '보기',
    titleModify: '수정',
    titlePausedFor: '일시 중지된 시간',
    titleDueIn: '예정일',
    titlePause: '일시 중지',
    titleRestart: '다시 시작',
    msgOutTime:
        '수령한 데이터가({{ n }} 데이터 남음) {{ t }} 안에 종료 될 예정이며 다스크 풀에 다시 릴리스됩니다.',
    msgAgain: '다시 수령하십시오.',
    msgPaused: '수령 데이터가 종지되었습니다.',
    msgOver2M: '2분 동안 작업을 안 했습니다.',
    msgClickStart: '작업을 계속하려면 버튼을 클릭하십시오.',
    msgClaimMsg: '수령 데이터가 종지되었습니다. 버튼을 클릭하여 작업 계속하십시오.',
    msgExpire: '수령된 데이터가 곧 만료됩니다',
    msgExpired: '수령된 데이터가 만료되었습니다',
};

export { ko };
