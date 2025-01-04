import { useAppContext } from "@/app/context/app-context";
import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import { Portal, Modal } from "react-native-paper";

type PopupProps = {
  title: string;
  children: any;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};
export const Popup = ({ title, visible, setVisible, children }: PopupProps) => {
  const { theme } = useAppContext();

  const styles = StyleSheet.create({
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
      color: theme.colors.onSurface,
    },
  });

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}
        contentContainerStyle={{
          padding: 20,
          margin: 10,
          backgroundColor: theme.colors.surface,
          borderRadius: 10,
        }}
        style={{ backgroundColor: theme.colors.backdrop }}
      >
        <Text style={styles.modalTitle}>{title}</Text>
        {children}
      </Modal>
    </Portal>
  );
};
