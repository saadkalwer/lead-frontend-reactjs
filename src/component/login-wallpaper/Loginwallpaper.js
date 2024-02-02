import React from "react";
import { WallStyle } from "./style";

export default function Loginwallpaper({ children }) {
  return (
    <>
      <WallStyle>
        <div className="Well-Menu-Section">
          <div className="Well">{children}</div>
        </div>
      </WallStyle>
    </>
  );
}
