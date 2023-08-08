import { ILocale } from './type';

const ko: ILocale = {
  validity: '유효성',
  classification: '분류',
  result: '결과',
  comment: '코멘트',

  noData: '데이터 없음',
  VALID: '유효',
  INVALID: '무효',
  UNKNOWN: '알 수 없음',
  thisFrame: '현재 프레임',

  open: '미 해결({{n}})',
  resolved: '해결됨({{n}})',
  resolveAll: '모두 해결',
  type: '유형',
  object: '결과',
  resolve: '해결',
  delete: '삭제',
  unresolved: '해결되지 않음',
  all: '모든 코멘트',
  you: '나의 코멘트',
  viewAll: '모두 보기({{n}})',
  selectAll: '모두 선택',
  acceptance: '검수',

  MISSED: '누락',
  WRONG_OBJECT: '잘못된 객체',
  WRONG_LABEL: '잘못된 클래스',
  WRONG_ATTRIBUTE: '오류 속성',
  NOT_FIT: '맞지 않음',
  DUPLICATED: '중복',
  UNCERTAIN: '불확실함',
  DISCUSSION: '검토',
  OTHER: '기타',

  filterByCreator: '생성자별 필터링하기',
  filterByStage: '단계별 필터링하기',
  filterByType: '오류 유형별 필터링하기',

  sureDeleteMsg: '삭제하시겠습니까?',

  resultsSource: '로드 소스',
  editSource: '편집 소스',
  msgResolveAll: '모든 코멘트를 처리하시겠습니까?',

  msgSwitchInstance: '인스턴스 결과 보기/편집 모드로 전환되었습니다',
  msgSwitchSegmentation: '세그멘테이션 결과 보기/편집 모드로 전환되었습니다',
  msgTotalN: '코멘트 포인트 수:{{n}}',
  msgErrN: '코멘트 에로 포인트 수:{{n}}',
  btnNoRepeat: '중복 없음',

  labelWithoutTask: '타스크 없음',
  labelGroundTruth: '지상 진실',
  labelModelRuns: '모형 실행',
  labelAll: '모든 코멘트',
};

export { ko };
