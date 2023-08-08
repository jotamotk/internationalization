import { ILocale } from './type';

const ko: ILocale = {
  versionTipTitle: '🎆버전 업데이트',
  versionTipContent:
    '최신 버전으로 업데이트되었습니다. 데이터 불일치를 방지하려면 데이터를 저장하고 현재 페이지를 닫은 후 다시 시작하는 것이 좋습니다.',
  'load-resource-error': '리소스 로드 오류',
  'load-object-error': '결과 로드 오류',
  'load-classification-error': '분류 로드 오류',
  'load-class-error': '클래스 로드 오류',
  'load-model-error': '모델 로드 오류',
  'load-dataset-classification-error': '데이터셋 분류 로드 오류',
  'load-record-error': '레코드 로드 오류',
  'load-frame-series-error': '연속 프레임 데이터 로드 오류',
  'invalid-query': '요청 무효',
  'load-error': '로드 오류',

  // model
  'load-track': '추적',
  'track-no-data': '추적객체를 찾을 수 없습니다. 객체의 위치와 방향을 확인하십시오.',
  'track-error': '추적 오류',
  'track-ok': '추적 성공',

  // info
  'load-point': '로딩 중',
  'save-ok': '저장 성공',
  'save-error': '저장 실패',
  'model-run-error': '모델 실행 오류',
  'model-run-no-data': '모형 결과 없음',
  'no-point-data': '포인트 클라우드 데이터 없음',
  'play-error': '재생 오류',
  'unknown-error': '오류',
  'network-error': '네트워크 오류',
  'login-invalid': '로그인이 만료되었습니다.',
  'not-login': '로그인 되지 않았습니다.',
  // Button
  btnOk: '확인',
  btnSave: '저장',
  btnConfirm: '확인',
  btnConfirmExit: '확인 및 종료',
  btnCancel: '취소',
  btnDelete: '삭제',
  btnDiscard: '포기',
  btnRelease: '릴리스',
  btnRefresh: '새로 고침',
  btnClose: '닫기',
  btnUpdate: '업데이트',
  'title-verify': '카메라 파라미터 조절',
  // msg
  'msg-not-save': '변경 내용을 저장하지 않았습니다.?',
  'success-reject': '반려 성공',
  'success-accept': '검수 성공',
  'success-submit': '제출 성공',
  'msg-allow-validating': '클래스 유효성 검사가 진행 중입니다. 제출하시겠습니까?',
  'msg-allow-valid-failed': '클래스 제한을 초과하는 결과가 있습니다. 제출하시겠습니까?',
  'msg-not-validating': '클래스 유효성 검사가 진행 중입니다. 완료될 때까지 기다려 주세요.',
  'msg-not-valid-failed': '클래스 제한을 초과하는 결과가 있습니다. 제출하기 전에 수정하세요.',
  'msg-comment-limit': '댓글 포인트 수는 {{n}}개를 넘을 수 없습니다!',
  // common
  'title-save-change': '변경 내용 저장',
  'msg-save-change': '변경 내용을 저장하시겠습니까?',
  'title-warning': '경고',
  'msg-close-task':
    '변경 내용을 저장하고 다음에 작업 계속하시겠습니까?아니면 다른 사람이 작업할 수 있게 데이터를 릴리스하시겠습니까?',
  'error-save': '저장 실패. 다시 시도하십시오',
  'error-release': '릴리스 실패. 다시 시도하십시오',

  'title-reject': '반려',
  // taskFlow
  'title-claiming': '데이터를 할당 중...',
  'title-noData-claim': '수령할 데이터가 없습니다',
  'msg-link-hidden': '선택한 객체 보이지 않음',
  'msg-link-deleted': '선택한 객체 삭제됨',
  'title-more': 'more',

  'verify-step1':
    '포인트 클라우드에서 포인트를 선택하고 정확한 매핑을 위해 이미지에서 매핑 위치를 조정합니다. 각 이미지에는 포인트 클라우드 결과와 관련된 최소 3개의 포인트가 필요합니다.',
  'verify-step2':
    '정확한 매핑을 위해 위치를 조정한 후 "재조절"을 클릭하세요. 조절 성공 후에 결과를 생성하여 또는 재매핑을 통해 효과를 확인하세요. 정확하지 않으면 포인트의 위치 다시 조정하고 파라미터 재조절하세요.',
  'verify-step3': '파라미터가 올바르면 현재 카메라 파라미터를 적용합니다.',
  'verify-instruction': '가이드',
  're-correct': '재조절',
  'warn-correct': '각 이미지에는 포인트 클라우드 결과와 관련된 최소 3개의 포인트가 필요합니다.',
  'success-correct': '조절 성공! 결과를 생성하여 효과를 확인하세요.',
  'success-update-config': '카메라 파라미터가 업데이트되었습니다.',
  'data-classification-invalid': '데이터에는 분류가 필요합니다. 먼저 수정해야 합니다.',
  'datas-classification-invalid': '프레임 {{n}} 에는 분류가 필요합니다. 먼저 수정해야 합니다.',
  'msg-dataflow-qaerror':
    '결과가 필수 QA 규칙을 위반했습니다. 이 결과를 저장하시겠습니까?',
};

export { ko };
