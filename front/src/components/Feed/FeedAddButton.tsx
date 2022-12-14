import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddIcon from "../../assets/images/icons/icon_plus.png";

interface FeedAddButtonProps {
  navLink: string;
}

function FeedAddButton({ navLink }: FeedAddButtonProps) {
  const navigator = useNavigate();

  const handleFeedAddClick = () => {
    navigator(navLink);
  };

  return (
    <AddButton onClick={handleFeedAddClick}>
      <AddButtonIcon src={AddIcon} />
    </AddButton>
  );
}

FeedAddButton.defaultProps = {
  navLink: "/feed/add",
};

const AddButton = styled.button`
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const AddButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default FeedAddButton;
