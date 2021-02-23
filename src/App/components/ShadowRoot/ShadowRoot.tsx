import React, { FC, useState } from "react";
import root from "react-shadow";
import { StyleSheetManager } from "styled-components";

interface ShadowRootProps {
  children: React.ReactChild;
}

export const ShadowRoot: FC<ShadowRootProps> = ({ children }) => {
  const [stylesNode, setStylesNode] = useState<HTMLDivElement | null>(null);
  return (
    <root.div>
      <div ref={(node) => setStylesNode(node)}>
        {stylesNode && (
          <StyleSheetManager target={stylesNode}>{children}</StyleSheetManager>
        )}
      </div>
    </root.div>
  );
};
