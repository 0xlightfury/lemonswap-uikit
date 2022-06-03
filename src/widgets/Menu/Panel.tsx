import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const RugDoc = styled.a<{ target: string; rel: string; href: string }>`
  margin: 2%;
`;
const AssureKyc = styled.a<{ target: string; rel: string; href: string }>`
  margin: 2%;
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
      <AssureKyc target="_blank" rel="noreferrer" href="https://www.assuredefi.io/projects/polyvertex/">
        <img src="/images/kyc.png" />
      </AssureKyc>
      <RugDoc target="_blank" rel="noreferrer" href="https://rugdoc.io/project/polyvertex/">
        <img src="/images/rugdoc-dark.png" />
      </RugDoc>
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
