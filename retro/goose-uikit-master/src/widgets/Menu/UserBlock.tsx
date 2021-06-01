import React from "react";
import Button from "../../components/Button/Button";
import { Flex } from "../../components/Flex";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";
import { GooseIcon, RedditIcon, TelegramIcon, TwitterIcon } from "./icons";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <Flex>
      <Button size="sm" onClick={() => window.open("https://presale.retroworld.io")}>
        Presale
      </Button>
      <div onClick={() => window.open("https://twitter.com/RetroWorldDefi")}>
        <TwitterIcon width="28px" />
      </div>
      <div onClick={() => window.open("https://retroworld.medium.com/")}>
        <RedditIcon width="28px" />
      </div>
      <div onClick={() => window.open("https://t.me/retroworldglobal")}>
        <TelegramIcon width="28px" />
      </div>
      <div>
        {account ? (
          <Button
            size="sm"
            variant="tertiary"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => {
              onPresentConnectModal();
            }}
            style={{ color: "#FFFFFF" }}
          >
            CONNECT
          </Button>
        )}
      </div>
    </Flex>
  );
};

export default UserBlock;
