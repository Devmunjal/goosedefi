import React, { useState } from "react";
import styled from "styled-components";
import { PancakeRoundIcon, CogIcon, SvgProps, ArrowDownIcon, ArrowDropDownIcon } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import { Toggle } from "../../components/Toggle";

interface Props extends PanelProps, PushedProps { }

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-top: solid 0px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <Container>
      <div>
        <Text color="textSubtle" style={{ fontSize: "14px" }}>Account Balance</Text>

        <SocialEntry>

          {cakePriceUsd ? (
            <PriceLink href={priceLink} target="_blank">
              <PancakeRoundIcon width="24px" mr="8px" />
              <Text color="textColor" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
            </PriceLink>
          ) : (
            <Skeleton width={80} height={24} />
          )}

        </SocialEntry>
      </div>
      <div>
        <Flex>


          <table style={{ width: "100%" }}>

            <tr style={{ width: "50%" }}>
              <td>
                <div>
                  <Text color="textSubtle" style={{ fontSize: "14px" }}>Night Mode</Text>
                  <Toggle checked={isDark} onChange={() => toggleTheme(!isDark)} />

                </div>
              </td>

              <td style={{ alignItems: "middle", width: "50%" }} >

                <Text color="textSubtle" style={{ fontSize: "14px", textAlign:"center" }}>Language</Text>
                <Dropdown
                  position="top-right"
                  target={
                    <Button variant="text" style={{ padding: "0", height: "0", textAlign: "center", width:"100%" }}>
                      <Text color="text" style={{ fontWeight: 500, fontSize:"20px", paddingTop:"30px" }}>{currentLang?.toUpperCase()}
                      <ArrowDropDownIcon />
                      </Text>
                    </Button>
                  }
                >
                  {langs.map((lang) => (
                    <MenuButton
                      key={lang.code}
                      fullWidth
                      onClick={() => setLang(lang)}
                      // Safari fix
                      style={{ minHeight: "32px", height: "auto" }}
                    >
                      {lang.language}
                    </MenuButton>
                  ))}
                </Dropdown>
              </td>
            </tr>
          </table>

        </Flex>
      </div>
      <SettingsEntry>

        <Flex style={{padding:"8px 15px", marginTop:"15px", marginLeft:"-8px", marginBottom:"10px", borderRadius:"30px", background:`${isDark ? "#2d2d2d" : "#c0c0c04f"}`}}>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer", marginTop:"2px" } };
            const mr = index < socials.length - 1 ? "24px" : 0;
            // if (social.items) {
            //   return (
            //     <Dropdown key={social.label} position="top" target={<Icon {...iconProps} mr={mr} />}>
            //       {social.items.map((item) => (
            //         <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
            //           {item.label}
            //         </Link>
            //       ))}
            //     </Dropdown>
            //   );
            // }
            return (
              <Link style={{borderRadius:"50%", background:`${isDark ? "#2d2d2d" : "#c0c0c0c0"}`, padding:"2px"}} external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} isDark={isDark}  />
              </Link>
            );
          })}
        </Flex>



        {/* <Button variant="text" onClick={() => toggleTheme(!isDark)}>
          alignItems center is a Safari fix
          <Flex alignItems="center">
            <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
            <Text color="textDisabled" mx="4px">
              /
            </Text>
            <MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />
          </Flex>
        </Button> */}
        {/* <Dropdown
          position="top-right"
          target={
            <Button variant="text" startIcon={<LanguageIcon color="textSubtle" width="24px" />}>
              <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
            </Button>
          }
        >
          {langs.map((lang) => (
            <MenuButton
              key={lang.code}
              fullWidth
              onClick={() => setLang(lang)}
              // Safari fix
              style={{ minHeight: "32px", height: "auto" }}
            >
              {lang.language}
            </MenuButton>
          ))}
        </Dropdown> */}
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
