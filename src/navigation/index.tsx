import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef, toastRef } from "utils";
import HomeStack from "./homeStack";
import { CTToast } from "components";

const RootNavigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
    >
        <HomeStack/>
        <CTToast ref={toastRef} />
    </NavigationContainer>
  );
};

export default RootNavigation;
