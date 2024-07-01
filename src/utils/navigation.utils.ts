import * as React from "react";

export const navigationRef: any = React.createRef();
export const toastRef: any = React.createRef();

export const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

export const navigateGoBack = () => {
  navigationRef.current.goBack();
};

export const resetNavigation = (name: string, params?: any, index?: number) => {
  navigationRef.current?.reset({
    index: index || 0,
    routes: [{ name: name, params: params }],
  });
};
export const getCurrentRoute = () => {
  return navigationRef.current?.getCurrentRoute();
};
export const navigateDispatch = (data: any) => {
  navigationRef.current?.dispatch(data);
};

export const navigationStrings = {
  eventInfoScreen: "eventInfoScreen",
  questionnaireScreen: "questionnaireScreen",
};
