// khai báo các file .svg như 1 module để sử dụng trong dự án ts
declare module "*.svg" {
    import React from "react";
    import {SvgProps} from "react-native-svg";
    // module khai báo svg trả về thông qua thư viện react-native-svg
    const content:React.FC<SvgProps>;

    export default content
}