export default {
  forceLogoutTip: '강제로 로그아웃 되었습니다.',
  tokenChangeTip: '사용자 역할이 변경되었습니다.확인을 클릭하여 홈페이지로 이동하세요.',
  versionTipTitle: '🎆버전 업데이트',
  versionTipContent: '시스템이 최신 버전으로 업데이트되었습니다. 새로 고치를 클릭하세요.',
  api: {
    operationFailed: '작업 실패',
    errorTip: '오류 팁',
    errorMessage: '작업 실패했습니다. 시스템이 비정상입니다!',
    timeoutMessage: 'L로그인 시간이 초과되었습니다. 다시 로그인하십시오!',
    apiTimeoutMessage:
      '인터페이스 요청이 시간 초과되었습니다. 페이지를 새로 고치고 다시 시도하십시오!',
    apiRequestFailed: '인터페이스 요청이 실패했습니다. 나중에 다시 시도하십시오!',
    networkException: '네트워크 이상',
    networkExceptionMsg: '네트워크 연결이 정상인지 확인하십시오! 네트워크가 비정상입니다.',

    errMsg401: '로그인 시간 초과. 로그인하십시오.',
    errMsg403: '사용자가 인증되었지만 액세스가 금지되었습니다!',
    errMsg404: '네트워크 요청 오류, 리소스를 찾을 수 없습니다!',
    errMsg405: '네트워크 요청 오류, 요청 방법이 허용되지 않습니다!',
    errMsg408: '네트워크 요청 시간 초과!',
    errMsg500: '서버 오류, 관리자에게 문의하십시오!',
    errMsg501: '네트워크가 구현되지 않았습니다!',
    errMsg502: '네트워크 오류!',
    errMsg503:
      '서비스를 사용할 수 없습니다. 서버가 일시적으로 오버로드되거나 유지 관리되고 있습니다!',
    errMsg504: '네트워크 시간 초과!',
    errMsg505: 'http 버전이 요청을 지원하지 않습니다!',
    disbandTeamTips: '팀이 존재하지 않음',
    userExistTips: '팀에서 삭제되었습니다.',
  },
  app: {
    logoutTip: '주의사항',
    logoutMessage: '시스템을 종료하시겠습니까?',
    menuLoading: '메뉴 로드 중...',
  },
  errorLog: {
    tableTitle: '오류 로그 목록',
    tableColumnType: '유형',
    tableColumnDate: '시간',
    tableColumnFile: '파일',
    tableColumnMsg: '오류 메시지',
    tableColumnStackMsg: 'Stack 정보',

    tableActionDesc: '세부 정보',

    modalTitle: '오류 세부 정보',

    fireVueError: 'FireVue 오류',
    // TODO 韩语
    fireResourceError: 'Fire resource 오류',
    fireAjaxError: 'Fire ajax 오류',

    enableMessage: '오류 발생했습니다. 다시 시도해 주세요.',
  },
  exception: {
    backLogin: '백 로그인',
    backHome: '홈으로',
    subTitle403: '죄송합니다. 이 페이지에 대한 액세스 권한이 없습니다.',
    subTitle404: '죄송합니다. 방문하신 페이지가 존재하지 않습니다.',
    subTitle500: '죄송합니다. 서버에서 오류를 발생하고 있습니다.',
    noDataTitle: '현재 페이지에 데이터가 없습니다.',
    networkErrorTitle: '네트워크 오류',
    networkErrorSubTitle: '죄송합니다. 네트워크 연결이 끊어졌습니다. 네트워크를 확인하십시오!',
  },
  lock: {
    unlock: '잠금 해제',
    alert: '잠금 화면 암호 오류',
    backToLogin: '로그인으로 돌아가기',
    entry: '시스템 진입',
    placeholder: '잠금 화면 암호 또는 사용자 암호를 입력하십시오.',
  },
  login: {
    updatePwd: '비밀 번호 재설정',
    updatePwdTips: '계정 안 전을 위해 비밀 번호를 재설정하세요.',
    confirmUpdage: '확인',
    // TODO:韩语
    jump: 'pass',
    backSignIn: '백 로그인',
    signInFormTitle: '로그인',
    signUpFormTitle: '등록',
    forgetFormTitle: '암호 재설정',
    joinTeamTitle: '팀 ID 입력',
    notAMember: '멤버가 아님',

    signInTitle: '백스테이지 관리 시스템',
    signInDesc: '개인 정보를 입력하고 시작하십시오!',
    policy: 'xxx 개인 정보 보호 정책에 동의합니다',
    scanSign: `코드 스켄하여 로그인하십시오.`,

    backButton: '이전',
    loginButton: '로그인',
    registerButton: '등록',
    resetPwdButton: '제출',
    returnButton: '이전으로',
    continueButton: '계속',
    joinButton: '가입',
    // TODO 韩语
    rememberMe: '너를 기억하기',
    forgetPassword: '비밀번호를 잊으셨나요?',
    otherSignIn: '다른 방식으로 등룩하기',

    passwordValidationError: '암호 형식이 잘못되었습니다.',

    // notify
    loginSuccessTitle: '로그인 성공',
    // TODO 韩语
    loginSuccessDesc: 'Welcome back',

    // placeholder
    accountPlaceholder: '사용자 이름을 입력하십시오.',
    emailPlaceholder: '이메일을 입력하십시오.',
    passwordPlaceholder: '암호를 입력하십시오.',
    smsPlaceholder: 'sms 코드를 입력하십시오.',
    mobilePlaceholder: 'mobile을 입력하십시오.',
    policyPlaceholder: '확인하여 등록하기',
    diffPwd: '암호가 일치하지 않습니다. 다시 시도하십시오.',
    teamNamePlaceholder: '팀 이름을 입력하십시오.',
    joinTeamPlaceholder: '팀 ID를 입력하십시오.',

    userName: '사용자 이름',
    password: '암호',
    newPassword: '새 암호',
    confirmPassword: '확인',
    email: '이메일',
    teamName: '팀 이름',
    team: '팀',
    phoneNumber: '전화 번호',
    account: '계정',

    loginTips: '계정이 없습니까?',
    signUpTips: '계정이 이미 있습니까?',
    forgetPwdTips: '암호를 재설정하려면 이메일을 입력하십시오.',
    resetPwdTips: '비밀번호 재설정',
    teamIDCopiedTips: '팀 ID가 클립보드에 복사되었습니다!',

    resetSuccessTitle: '암호가 재설정되었습니다!',
    resetSuccessTips: '5초 후 로그인 페이지로 돌아가기',
    joinSuccessFeedDescription: '가입 요청이 전송되었습니다.',
    joinSuccessFeedDescription2: '승인이 필요한 경우 팀장에게 문의하십시오.',
    createSuccessFeedDescription: '생성되었습니다.',
    createSuccessFeedDescription2: '팀 ID',
    signupSuccessFeedDescription: '등록이 거의 완료되었습니다! 이메일 확인하십시오.',
    signupSuccessFeedDescription2: '이미 승인되었습니까?',
    pwdTips: '암호는 다음을 포함해야 합니다:',
    // TODO 韩语
    pwdRules1: '8 and 64 characters',
    pwdRules2: '숫자',
    pwdRules3: '영문자',
    agreeToTips: '등록은 약관 사항에 동의한다는 것을 의미합니다.',
    terms: '약관 사항',
    privacyPolicy: '개인 정보 보호 정책',
    loginIntroduct:
      '우리는 귀사의 팀이 규모에 맞게 맞춤형 ML 데이터 세트를 수집, 라벨링 달기 및 구현할 수 있도록 세계에서 가장 원활한 트레이닝 데이터 플랫폼을 구축하기 위해 노력하고 있습니다.',
    alreadyHaveAccountError:
      '이 이메일과 연결된 계정이 이미 있습니다. 암호를 잊어버린 경우 로그인하거나 암호를 재설정하십시오.',
    loginError:
      '이미 계정이 있는 것 같습니다. 바로 로그인하거나 암호를 잊어버린 경우 재설정하십시오.',
    signInWithGoogle: 'Google로 로그인',
    signUpTitle: '계정 만들기',

    loginReminderTitle: '로그인 알림',
    loginReminderContent:
      '계정이 이미 로그인되었습니다.로그인하면 상대방이 오프라인 상태가 됩니다. 계속 로그인하시겠습니까?',
    emailResentSuccess: '이메일 재전송 성공',
    licenseExpiredTitle: '라인센스가 만료되었습니다.',
    licenseExpiredText: '라인센스가 만료되었습니다. 관리자에 연락하세요.',
    licenseExpire: {
      notice: '알림',
      expired: '라이센스가 {date}에 만료되었습니다. 관리자에게 문의하세요.',
    },
    // TODO 韩文
    forget: {
      forgetPassword: '비밀번호를 잊으셨나요?',
      notAMember: '멤버가 아닙니까?',
      resubmitEmail:
        '이 링크는 비밀번호 변경에 사용되었습니다. 새 이메일 주소를 다시 제출해주세요',
      sendToTheEmail: '비밀번호 재설정 링크를 다음 이메일 주소로 보내드리겠습니다:',
      Oops: 'Oops!',
      wrongEmail: '잘못된 이메일입니다.',
      resend: '다시 보내기',
    },
  },
  team: {
companyName: '회사 이름',
country: '국가 및 지역',
businessEmail: '기업 이메일',
verifyCode: '인증 코드',
verify: '인증',
continue: '계속하기',
manageTeams: '팀 관리',
upgradeNow: '지금 업그레이드하기',

businessTip:
  '기업 이메일 시스템의 각 도메인은 무료로 최대 5개의 팀을 생성할 수 있음을 참고해주세요.',
maxTeam:
  '기업 이메일로 최대 5개의 팀 생성 가능한 제한을 초과한 것으로 보입니다. 더 많은 팀을 생성하려면 프리미엄 요금제로 업그레이드하거나 기존 팀을 삭제하여 공간을 확보하십시오.',
validEmail: '유효한 이메일 주소를 입력해주세요.',
enterpriseName: '기업 이메일을 입력해주세요.',
verifyExpired: '인증 코드가 만료되었습니다. 새로운 코드를 요청한 후 다시 시도해주세요.',
verifyError: '실폐! 입력한 인증 코드가 올바르지 않습니다. 다시 시도해주세요.',
verifySent: '인증 코드가 이메일로 전송되었습니다. 아래에 코드를 입력해주세요.',
verifyEmail1: '이메일 주소에 @를 포함해주세요.',
verifyEmail2: '“{value}” 이전/이후의 내용을 입력해주세요.',
},
contact: {
hey: '안녕하세요!',
tip: '재미있고 친근한 Slack 커뮤니티에 참여해주세요. 우리와 소통하고 아이디어를 공유하며 피드백을 제공할 수 있습니다. 아래 버튼을 클릭하여 Slack 채널로 이동하실 수 있습니다. 참여해주시면 감사하겠습니다!',
takeMeToSlack: 'Slack으로 이동하기!',

  },
};
