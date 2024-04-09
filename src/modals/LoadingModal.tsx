import { ActivityIndicator, Modal, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Space, TextComponent } from "../components";
import { colors } from "../constants/colors";

interface Props {
    visiable: boolean,
    messege?: string,
    onClose?: () => void
}

const LoadingModal = (props: Props) => {
    const { visiable, messege, onClose } = props

    return (
        <Modal 
            style={[
                // globalStyles.container,
                {flex: 1}
            ]} 
            transparent //prop hiển thị trong suốt hay không
            statusBarTranslucent // status bar có hiển thị trong suốt hay không
            visible = {visiable}
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)', 
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ActivityIndicator 
                    color={colors.white}
                    size={32}
                />
                <Space height={10}/>
                <TextComponent 
                    text="Loading..." 
                    flex={0}
                    color={colors.white}
                />
            </View>
        </Modal>
    );
}

export default LoadingModal;