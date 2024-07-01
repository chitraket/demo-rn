import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import CheckBox from "./components/checkBox";
import { questionData } from "./data";
import { styles } from "./styles";
import { CTWrapperContainer } from "components";
import { CTButton } from "components/common";
import { fonts } from "theme";
import { navigate, navigationStrings } from "utils";

const QuestionnaireScreen = () => {
  const [info, setInfo] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (field, value) => {
    setInfo({
      ...info,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (currentIndex < questionData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
     navigate(navigationStrings.eventInfoScreen, { success: true });
    }
  };

  const renderComponent = (currentIndex: number) => {
    const dataInfo = questionData[currentIndex];
    return (
      <View>
        <Text style={styles.questionTitle}>
          Question {currentIndex + 1 || 0} of {questionData?.length || 0}{" "}
        </Text>
        <Text style={styles.title}>{dataInfo.title}</Text>
        {dataInfo.type === "input" && (
          <TextInput
            value={info[dataInfo.name]}
            placeholder={dataInfo.placementText}
            style={{ ...fonts.fontStyle.h4Text }}
            onChangeText={(text) => handleChange(dataInfo.name, text)}
          />
        )}
        {dataInfo.type === "radio" &&
          dataInfo?.data?.map((item, index) => (
            <CheckBox
              select={info[dataInfo.name] === item}
              onPress={() => handleChange(dataInfo.name, item)}
              title={item}
              key={index}
            />
          ))}
        {dataInfo.type === "checkbox" &&
          dataInfo?.data?.map((item, index) => (
            <CheckBox
              select={info[dataInfo.name]?.includes(item)}
              onPress={() => {
                const updatedInterests = [...(info[dataInfo.name] || [])];
                if (updatedInterests.includes(item)) {
                  updatedInterests.splice(updatedInterests.indexOf(item), 1);
                } else {
                  updatedInterests.push(item);
                }
                handleChange(dataInfo.name, updatedInterests);
              }}
              title={item}
              key={index}
            />
          ))}
      </View>
    );
  };
  return (
    <CTWrapperContainer>
      <View style={styles.mainCard}>
        {renderComponent(currentIndex)}
        <CTButton
          btnText={
            currentIndex < questionData.length - 1 ? "Next question" : "Submit"
          }
          onPress={handleSubmit}
        />
      </View>
    </CTWrapperContainer>
  );
};

export default QuestionnaireScreen;
