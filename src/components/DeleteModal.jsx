import { Button } from "antd";
import { CompoundModal } from "./CompoundModal";
import { FaTrash } from "react-icons/fa";

export default function DeleteModal({ trigger, content }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger>
        {trigger || (
          <Button
            icon={<FaTrash />}
            type="text"
            className="!text-2xl !text-red-500"
          />
        )}
      </CompoundModal.Trigger>
      <CompoundModal.Content>{content}</CompoundModal.Content>
    </CompoundModal>
  );
}
