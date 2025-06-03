import { Button } from "antd";
import { CompoundModal } from "./CompoundModal";
import { LuPenLine } from "react-icons/lu";

export default function CreateUpdateModal({ trigger, content }) {
  return (
    <CompoundModal>
      <CompoundModal.Trigger>
        {trigger || (
          <Button
            icon={<LuPenLine />}
            type="text"
            className="!text-2xl !text-blue-600"
          />
        )}
      </CompoundModal.Trigger>
      <CompoundModal.Content>{content}</CompoundModal.Content>
    </CompoundModal>
  );
}
