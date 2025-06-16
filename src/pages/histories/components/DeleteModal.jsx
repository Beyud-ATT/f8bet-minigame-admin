import CustomModal from "../../../components/CustomModal";
import { Button, Flex } from "antd";
import { FaTrash } from "react-icons/fa";
import { Typography } from "antd";
import { useModal } from "../../../components/CompoundModal";
import useDeletePlayerGameHistory from "../../../hooks/useDeletePlayerGameHistory";

function DeleteModalContent({ record }) {
  const { closeModal } = useModal();
  const { mutate: deletePlayerGameHistory } = useDeletePlayerGameHistory();

  const handleDelete = () => {
    deletePlayerGameHistory(record._id, {
      onSuccess: () => {
        closeModal();
      },
    });
  };

  return (
    <>
      <Typography.Title level={3}>Xóa lịch sử</Typography.Title>
      <Typography.Text>Bạn có chắc chắn muốn xóa lịch sử này?</Typography.Text>
      <Flex align="center" gap={10} justify="end" className="!mt-5">
        <Button onClick={closeModal}>Hủy</Button>
        <Button type="primary" danger onClick={handleDelete}>
          Xóa
        </Button>
      </Flex>
    </>
  );
}

export default function DeleteModal({ record }) {
  return (
    <CustomModal
      trigger={
        <Button
          icon={<FaTrash />}
          type="text"
          className="!text-2xl !text-red-500"
        />
      }
      content={<DeleteModalContent record={record} />}
    />
  );
}
