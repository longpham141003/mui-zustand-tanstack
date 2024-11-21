import { CSSObject } from "@emotion/react";


const MuiButtonOverrides = {
  styleOverrides: {
    root: {
      textTransform: 'none', // Bỏ chữ hoa trong nút
      // Bạn có thể thêm các override khác ở đây nếu cần
    } as CSSObject, // Đảm bảo rằng kiểu này đúng với kiểu CSSObject của Material-UI
  },
};

export default MuiButtonOverrides;
