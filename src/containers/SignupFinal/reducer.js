const TRY_POST_EMAIL = 'TRY_POST_EMAIL';
const SUCCESS_POST_EMAIL = 'SUCCESS_POST_EMAIL';
const FAIL_POST_EMAIL = 'FAIL_POST_EMAIL';

const TRY_POST_PHONE = 'TRY_POST_PHONE';
const SUCCESS_POST_PHONE = 'SUCCESS_POST_PHONE';
const FAIL_POST_PHONE = 'FAIL_POST_PHONE';

const TRY_POST_USERNAME = 'TRY_POST_USERNAME';
const SUCCESS_POST_USERNAME = 'SUCCESS_POST_USERNAME';
const FAIL_POST_USERNAME = 'FAIL_POST_USERNAME';

const TRY_POST_SIGNUP = 'TRY_POST_SIGNUP';
const FAIL_POST_SIGNUP = 'FAIL_POST_SIGNUP';

const initialState = {
  isFetching: false,
  fetchSuccess: false,
  form: {
    email: '',
    phone: '',
    username: '',
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TRY_POST_EMAIL:
      return {
        ...state,
        isFetching: true,
      };
    case SUCCESS_POST_EMAIL:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        form: {
          ...state.form,
          email: action.email,
        },
      };
    case FAIL_POST_EMAIL:
      return {
        ...state,
        errors: action.errors,
        isFetching: false,
        fetchSuccess: false,
      };
    case TRY_POST_PHONE:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: false,
      };
    case SUCCESS_POST_PHONE:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        form: {
          ...state.phone,
          phone: action.phone,
        },
      };
    case FAIL_POST_PHONE:
      return {
        ...state,
        errors: action.errors,
        isFetching: false,
        fetchSuccess: true,
      };
    case TRY_POST_USERNAME:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: false,
      };
    case SUCCESS_POST_USERNAME:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        form: {
          ...state.form,
          account_name: action.account_name,
        },
      };
    case FAIL_POST_USERNAME:
      return {
        ...state,
        errors: action.errors,
        isFetching: false,
        fetchSuccess: false,
      };
    default:
      return state;
  }
}

export function failPostEmail({ error }) {
  return {
    type: FAIL_POST_EMAIL,
    form: 'sign-up',
    error,
  };
}

export function succeedPostEmail({ email }) {
  return {
    type: SUCCESS_POST_EMAIL,
    email,
  };
}

export function failPostPhone({ error }) {
  return {
    type: FAIL_POST_PHONE,
    form: 'sign-up',
    error,
  };
}

export function succeedPostPhone({ phone }) {
  return {
    type: SUCCESS_POST_PHONE,
    phone,
  };
}

export function tryPostPhone({ history, phone }) {
  return {
    type: TRY_POST_PHONE,
    history,
    phone,
  };
}

export function failPostUsername({ error }) {
  return {
    type: FAIL_POST_USERNAME,
    form: 'sign-up',
    error,
  };
}

export function succeedPostUsername({ account_name }) {
  return {
    type: SUCCESS_POST_USERNAME,
    account_name,
  };
}


export function tryPostEmail({ email, history }) {
  return {
    type: TRY_POST_EMAIL,
    form: 'sign-up',
    history,
    email,
  };
}

export function tryPostUsername({ account_name, history }) {
  return {
    type: TRY_POST_USERNAME,
    history,
    /* eslint-disable camelcase */
    account_name,
    /* eslint-enable camelcase */
  };
}

export function failPostSignup({ error }) {
  return {
    type: FAIL_POST_SIGNUP,
    form: 'sign-up',
    error,
  };
}

export function tryPostSignup({ account_name, email, phone }) {
  return {
    type: TRY_POST_SIGNUP,
    account_name,
    email,
    phone,
  };
}

