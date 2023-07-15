const registerReducer = (state, action) => {
  if (action.type === "full name") {
    return { ...state, fullName: action.payload };
  }
  if (action.type === "select inp") {
    return { ...state, select: action.payload };
  }
  if (action.type === "Buss Address") {
    return { ...state, bussAdd: action.payload };
  }
  if (action.type === "state val") {
    return { ...state, stateVal: action.payload };
  }
  if (action.type === "country") {
    return { ...state, country: action.payload };
  }
  if (action.type === "phone number") {
    return { ...state, phn: action.payload };
  }
  if (action.type === "business name") {
    return { ...state, bussName: action.payload };
  }
  if (action.type === "Buss Type") {
    return { ...state, bussType: action.payload };
  }
  if (action.type === "Buss Email") {
    return { ...state, bussEmail: action.payload };
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
