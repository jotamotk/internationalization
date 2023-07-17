import { ILocale } from './type';

const ko: ILocale = {
    'track-title': '추적 객체',
    'frame-object': '프레임{{n}}객체',
    'mark-all-true': '모든 프레임에서 수동작업으로 표시하기',
    'track-id': '추적 ID',
    'model-info': '모델 정보',
    'predict-class': '모델 태그',
    'mark-present': '보이는 것으로 표시',
    'mark-gone': '사라짐으로 표시',
    'status-title': '상태',
    'instances-title': '인스턴스',
    'advanced-title': '고급 작업',
    'copy-title': '복사',
    'copy-success': '복사 성공',
    'no-data': '데이터 없음',
    // class
    'class-title': '태그',
    'not-show-anymore': '이 컨텐트는 더 이상 표시되지 않습니다.',
    'class-tip-info':
        '이 추적 객체를  "{{type}}"로 지정하면 모든 프레임에서 해당 속성이 지워집니다. 변경하시겠습니까?',
    'class-tip-info-standard':
        '이 추적 객체를  "{{type}}"로 지정하면 모든 L, W, H가 다시 작성됩니다. 변경하시겠습니까?',
    'class-length': '길이',
    'class-width': '너비',
    'class-height': '높이',
    'class-points': '포인트',
    'class-recent': '최근에 사용된 태그',
    'class-other': '기타',
    // type
    'mark-as-standard': '표준 박스로 설정',
    'mark-standard': '표준 박스',
    'mark-no-standard': '취소',
    'object-type': '박스 유형',
    'type-tip-info':
        '이 추적 객체를  "{{type}}"로 지정하면 모든 L, W, H가 다시 작성됩니다. 변경하시겠습니까?',
    // instance
    'rect-title': '직사각형',
    'box-title': '박스',
    'cloud-object': '클라우드 포인트 객체',
    'image-object': '이미지 {{index}} 객체({{type}})',
    // attributes
    'attributes-title': '속성',
    'attr-copy-from': '복사 본체',
    'attr-copy-to': '복사 본체',
    'attr-from-title': '현재 프레임의 다른 개체에서 속성 복사하기',
    'attr-from-object': '추적 객체',
    'attr-to-title': '이 속성을 이 추적 객체의 다른 프레임에 복사하기',
    'attr-to-tip': '(원래 속성을 덮어씁니다)',
    'attr-to-from': '{{n}} 프레임에서',
    'attr-to-to': '{{n}} 프레임으로',
    'attr-from-self': '자체에서 복사할 수 없음',
    'attr-from-different-class': '다른 태그의 속성을 복사할 수 없습니다.',

    // model
    'model-instance': '인스턴스',
    'model-confidence': '신뢰 수준',

    // Merge
    'merge-title': '병합',
    'merge-to': '병합하기 ',
    'merge-from': '병합 오기 ',
    'marge-target': '대상',
    // Split
    'split-title': '분할',
    'split-btn-title': '현재 프레임에서 분리하기',
    'split-new-object': '새 추적 객체',
    'split-new-class': '태그',
    // Delete
    'delete-title': '삭제',
    'delete-all': '모든 프레임',
    'delete-some': '일부 프레임',
    'delete-no-true': '수동 작업 아님',
    'delete-all-tip': '모든 프레임에서 이 추적 개체를 삭제하시겠습니까?',
    'delete-some-tip': '다음 프레임에서 이 추적 객체를 삭제하시겠습니까?',
    'delete-no-true-tip': '이 추적 객체의 모든 수동 아닌 결과를 삭제하시겠습니까?',
    'delete-from': '{{n}} 프레임에서',
    'delete-to': '{{n}} 프레임으로',

    // btn
    'btn-title-cancel': '취소',
    'btn-title-copy': '복사',
    'btn-title-merge': '병합',
    'btn-title-split': '분할',
    'btn-title-delete': '삭제',
    'btn-title-confirm': '확인',
    // msg
    'msg-delete-title': '삭제',
    'msg-delete-subtitle': '객체를 삭제하시겠습니까?',
    'msg-merge-different-class': '다른 태그를 병합할 수 없습니다.',
    'msg-merge-conflict': '병합 충돌이 있습니다. 타임라인을 확인하십시오.',
    'msg-merge-success': '병합 성공',
    'msg-split-empty': '빈 객체를 생성할 수 없습니다.',
    'msg-split-success': '분할 성공',
    'msg-delete-success': '삭제 성공',
    'msg-copy-success': '복사 성공',
    'msg-no-object': '객체 없음',

    // const
    Dynamic: '비 고정 박스',
    Fixed: '고정 박스',
    Standard: '표준 박스',
    Copied: '복사 성공',
    Predicted: '모형 예측',
    'True-Value': '수동 작업',
    RADIO: '단항 선택',
    MULTI_SELECTION: '다종 선택',
    DROPDOWN: '드롭다운',
    TEXT: '입력',
    'msg-search': '태그 검색',
};

export { ko };
