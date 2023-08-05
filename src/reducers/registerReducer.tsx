const registerReducer = (state, action) => {
  if (action.type === "full name") {
    return { ...state, fullName: action.payload };
  }
 
  if (action.type === "comp address") {
    return { ...state, company_address: action.payload };
  }
  if (action.type === "state val") {
    return { ...state, stateVal: action.payload };
  }
  if (action.type === "country") {
    return { ...state, country: action.payload };
  }
  if (action.type === "comp number") {
    return { ...state, company_phone_num: action.payload };
  }
  if (action.type === "comp name") {
    return { ...state, company_name: action.payload };
  }

  if (action.type === "comp email") {
    return { ...state, company_email: action.payload };
  }
  if (action.type === "email") {
    return { ...state, email: action.payload };
  }
  if (action.type === "password") {
    return { ...state, password: action.payload };
  }

  if (action.type === "reset") {
    return {
      ...state,
      fullName: action.payload,
      select: action.payload,
      bussAdd: action.payload,
      stateVal: action.payload,
      country: action.payload,
      phn: action.payload,
      bussName: action.payload,
      bussType: action.payload,
      bussEmail: action.payload,
      email: action.payload,
      password: action.payload,
    };
  }

  return state;
};
export default registerReducer;
