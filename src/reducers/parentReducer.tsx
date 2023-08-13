const parentReducer = (state, action) => {
  if (action.type === "child name") {
    return { ...state, child_name: action.payload };
  }

  if (action.type === "parent name") {
    return { ...state, parent_name: action.payload };
  }
  if (action.type === "parent address") {
    return { ...state, parent_address: action.payload };
  }
  if (action.type === "state val") {
    return { ...state, stateVal: action.payload };
  }
  if (action.type === "country") {
    return { ...state, country: action.payload };
  }
  if (action.type === "parent number") {
    return { ...state, parent_phone_num: action.payload };
  }
  if (action.type === "class Value") {
    return { ...state, class_value: action.payload };
  }
  if (action.type === "parent email") {
    return { ...state, parent_email: action.payload };
  }
 if (action.type === "Age") {
   return { ...state, child_age: action.payload };
 }
 if (action.type === "gender") {
   return { ...state, gender: action.payload };
 }

  if (action.type === "child health") {
    return { ...state, health_status: action.payload };
  }

  if (action.type === "password") {
    return { ...state, password: action.payload };
  }

  if (action.type === "reset") {
    return {
      ...state,
      child_name: action.payload,
      gender: action.payload,
      child_age: action.payload,
      stateVal: action.payload,
      country: action.payload,
      parent_address: action.payload,
      parent_phone_num: action.payload,
      class_value: action.payload,
      parent_email: action.payload,
      health_status: action.payload,
      password: action.payload,
    };
  }

  return state;
};
export default parentReducer;

