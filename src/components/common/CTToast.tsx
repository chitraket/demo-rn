import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { Platform, StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { fonts, metrics } from "theme";

interface ToastProps {
  type: "success" | "warning" | "error";
  text: string;
  description?: string;
  duration: number;
}
const CTToast = forwardRef(({}, ref) => {
  const toastTopAnimation = useSharedValue(-100);
  const context = useSharedValue(0);
  const [showing, setShowing] = useState(false);
  const [toastType, setToastType] = useState("success");
  const [toastText, setToastText] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [toastDuration, setToastDuration] = useState(0);
  const TOP_VALUE = Platform.OS === "ios" ? 60 : 20;
  useImperativeHandle(
    ref,
    () => ({
      show: (props: ToastProps) => show(props),
    }),
    [],
  );

  const show = useCallback(
    ({ type, text, description, duration = 3000 }: ToastProps) => {
      setShowing(true);
      setToastType(type);
      setToastText(text);
      setToastDescription(description || "");
      setToastDuration(duration);
      toastTopAnimation.value = withSequence(
        withTiming(TOP_VALUE),
        withDelay(
          duration,
          withTiming(-100, undefined, (finish) => {
            if (finish) {
              runOnJS(setShowing)(false);
            }
          }),
        ),
      );
    },
    [TOP_VALUE, toastTopAnimation],
  );

  const animatedTopStyles = useAnimatedStyle(() => {
    return {
      top: toastTopAnimation.value,
    };
  });

  const pan = Gesture.Pan()
    .onBegin(() => {
      context.value = toastTopAnimation.value;
    })
    .onUpdate((event) => {
      if (event.translationY < 100) {
        toastTopAnimation.value = withSpring(
          context.value + event.translationY,
          {
            damping: 600,
            stiffness: 100,
          },
        );
      }
    })
    .onEnd((event) => {
      if (event.translationY < 0) {
        toastTopAnimation.value = withTiming(-100, undefined, (finish) => {
          if (finish) {
            runOnJS(setShowing)(false);
          }
        });
      } else if (event.translationY > 0) {
        toastTopAnimation.value = withSequence(
          withTiming(TOP_VALUE),
          withDelay(
            toastDuration,
            withTiming(-100, undefined, (finish) => {
              if (finish) {
                runOnJS(setShowing)(false);
              }
            }),
          ),
        );
      }
    });

  return (
    <>
      {showing && (
        <GestureDetector gesture={pan}>
          <Animated.View
            style={[
              styles.toastContainer,
              toastType === "success"
                ? styles.successToastContainer
                : toastType === "warning"
                  ? styles.warningToastContainer
                  : styles.errorToastContainer,
              animatedTopStyles,
            ]}
          >
            <Text
              style={[
                styles.toastText,
                toastType === "success"
                  ? styles.successToastText
                  : toastType === "warning"
                    ? styles.warningToastText
                    : styles.errorToastText,
              ]}
            >
              {toastText}
            </Text>
            {toastDescription && (
              <Text
                style={[
                  styles.toastDescription,
                  toastType === "success"
                    ? styles.successToastText
                    : toastType === "warning"
                      ? styles.warningToastText
                      : styles.errorToastText,
                ]}
              >
                {toastDescription}
              </Text>
            )}
          </Animated.View>
        </GestureDetector>
      )}
    </>
  );
});

export default CTToast;
CTToast.displayName = "CTToast";

const styles = StyleSheet.create({
  toastContainer: {
    position: "absolute",
    top: 0,
    ...metrics.paddings.pV8,
    ...metrics.paddings.pH25,
    ...metrics.border.bR50,
    ...metrics.borderWidth.bW1,
    ...metrics.margins.mH10,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
  },
  toastText: {
    ...fonts.fontStyle.tinyTextPSB,
  },
  toastDescription: {
    ...fonts.fontStyle.xsmallTextPM,
  },
  successToastContainer: {
    backgroundColor: "#def1d7",
    borderColor: "#1f8722",
  },
  warningToastContainer: {
    backgroundColor: "#fef7ec",
    borderColor: "#f08135",
  },
  errorToastContainer: {
    backgroundColor: "#fae1db",
    borderColor: "#d9100a",
  },
  successToastText: {
    color: "#1f8722",
  },
  warningToastText: {
    color: "#f08135",
  },
  errorToastText: {
    color: "#d9100a",
  },
});
