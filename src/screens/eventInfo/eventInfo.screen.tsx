import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EventFooter from "./components/eventFooter";
import EventHeader from "./components/eventHeader";
import { eventData } from "./data";
import { styles } from "./styles";
import { CTIconImageText, CTImage, CTWrapperContainer } from "components";
import { colors, fonts, metrics } from "theme";
import { moderateScale } from "utils";

const EventInfoScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <CTWrapperContainer viewContainer={styles.viewContainer}>
      <>
        <CTImage
          imageSrc={eventData.image}
          resizeMode="cover"
          imageHeight={45}
          imageWidth={100}
        />
        <EventHeader />
        <View style={styles.bottomView}>
          <ScrollView
            contentContainerStyle={{
              ...metrics.paddings.pT15,
              paddingLeft: moderateScale(Math.max(Number(insets?.left), 15)),
              paddingRight: moderateScale(Math.max(Number(insets?.right), 15)),
            }}
          >
            <Text style={{ ...fonts.fontStyle.h2Text }}>
              {eventData?.title}
            </Text>
            <Text
              style={{
                ...fonts.fontStyle.tinyTextPM,
                color: colors.greyB,
                ...metrics.margins.mB20,
              }}
            >
              {eventData?.subTitle}
            </Text>
            {eventData.data.map((item: any, index: number) => (
              <CTIconImageText
                lableViewStyle={{ ...metrics.margins.mB8 }}
                labelPlacement="right"
                secondaryTextStyle={{
                  ...fonts.fontStyle.xsmallTextPM,
                  color: colors.greyB,
                }}
                key={index}
                {...item}
              />
            ))}
            <Text
              style={{
                ...fonts.fontStyle.smallTextPB,
                ...metrics.margins.mT10,
              }}
            >
              {eventData?.descriptionTitle}
            </Text>
            <Text style={{ ...fonts.fontStyle.xsmallTextPM }}>
              {eventData?.description}
            </Text>
          </ScrollView>
          <EventFooter />
        </View>
      </>
    </CTWrapperContainer>
  );
};

export default EventInfoScreen;
