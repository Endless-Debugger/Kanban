import { styled } from "@stitches/react";

const Bbutton = styled("button", {
  transition: "all 0.2s",
  borderRadius: "12px",
  padding: "0px 20px",
  height: "40px",
  backgroundColor: "#FFFFFF",

  boxShadow: "0px 4px 0px #DFE1E4",
  color: "#6C6F75",
  border: "2px solid #DFE1E4",
  fontWeight: "600",
  fontSize: "16px",
  transform: "scale(1)",
  cursor: "pointer",
  userSelect: "none",
  alignItems: "center",
  marginBottom: "4px",
  fontFamily: "GTWalshiem",

  "&:hover": {
    backgroundColor: "var(--primary-light)",
  },

  "&:focus": {
    outline: "none",
  },

  "&:disabled": {
    transition: "all 0.2s",
    backgroundColor: "var(--primary-light)",
    cursor: "not-allowed",
  },

  "&:active": {
    boxShadow: "none",
    translate: "0px 8px",
  },
});

function Button({ children, style }: { children: any; style: any }) {
  return <Bbutton style={style}>{children}</Bbutton>;
}
export default Button;
