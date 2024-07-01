
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { EventInfoScreen, QuestionnaireScreen } from "screens";
import { navigationStrings } from "utils";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={navigationStrings.eventInfoScreen}
        component={EventInfoScreen}
      />
      <Stack.Screen
        name={navigationStrings.questionnaireScreen}
        component={QuestionnaireScreen}
      />
      </Stack.Navigator>
  );
};

export default HomeStack;
