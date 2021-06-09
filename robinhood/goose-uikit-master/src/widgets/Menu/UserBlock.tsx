import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          style={{
            backgroundImage: "linear-gradient(to right, #5a9d49, #90d480, #76bda5)",padding:"25px 25px"
          }}
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

          style={{
            backgroundImage: "linear-gradient(to right, #5a9d49, #90d480, #76bda5)",padding:"25px 25px"
          }}
        >
          CONNECT
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
