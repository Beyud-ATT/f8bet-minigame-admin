import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Space,
  Switch,
  Typography,
} from "antd";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import useSettings from "../../../hooks/useSettings";
import { useEffect } from "react";
import useSettingsUpdate from "../../../hooks/useSettingsUpdate";

var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (
        var i = 0, _p = Object.getOwnPropertySymbols(s);
        i < _p.length;
        i++
      ) {
        if (
          e.indexOf(_p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, _p[i])
        )
          t[_p[i]] = s[_p[i]];
      }
    return t;
  };

export default function SettingForm() {
  const { data } = useSettings();
  const [form] = Form.useForm();
  const { mutate } = useSettingsUpdate();

  const onFinish = (values) => {
    mutate({
      ...values,
      site: import.meta.env.VITE_SITE,
    });
  };

  useEffect(() => {
    if (data?.data?.data) {
      form.setFieldsValue(data?.data?.data);
    }
  }, [data, form]);

  return (
    <Form form={form} onFinish={onFinish}>
      <Typography.Title level={2} className="!mt-10">
        Cài đặt chung
      </Typography.Title>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item name="vipAccount" label="TK VIP mới tham gia">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="numberDeposit" label="Số lần nạp tiền">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="dayDeposit" label="Số ngày nạp tiền">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name="totalDayDeposit"
            label="Tổng số tiền nạp trong 3 ngày"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="lam_dung" label="Lạm dụng (nhấn Enter để thêm)">
            <Input placeholder="Nhập lạm dụng" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="urlApp" label="URL App (nhấn Enter để thêm)">
            <Input placeholder="Nhập URL App" />
          </Form.Item>
        </Col>
      </Row>

      {/* Trả lời câu hỏi - Now grouped under 'quiz' */}
      <Typography.Title level={2} className="!mt-10">
        Cài đặt cho game "Trả lời câu hỏi"
      </Typography.Title>
      <Form.Item name={["quiz", "status"]} label="Trạng thái">
        <Switch />
      </Form.Item>
      <Form.Item
        name={["quiz", "portalMemo"]}
        label="Lời nhắn trang thành viên"
      >
        <Input />
      </Form.Item>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            name={["quiz", "timeLimit"]}
            label="Thời gian tối đa mỗi bộ câu hỏi (giây)"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name={["quiz", "questionCount"]} label="Số lượng câu hỏi">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name={["quiz", "point"]} label="Điểm thưởng">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name={["quiz", "maxAttemptsPerDay"]}
            label="Số lượt chơi tối đa mỗi ngày"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name={["quiz", "content"]}
        label="Nội dung tham gia trả lời câu hỏi"
      >
        <Input placeholder="Nhập nội dung" />
      </Form.Item>
      <Flex justify="space-between">
        <Flex vertical>
          <Form.List name={["quiz", "pointRanges"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((_a) => {
                  var { key, name } = _a,
                    restField = __rest(_a, ["key", "name"]);
                  return (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        label="Từ %"
                        name={[name, "correctPercentMin"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing correctPercentMin",
                          },
                        ]}
                      >
                        <Input placeholder="Nhập số" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        label="Đến %"
                        name={[name, "correctPercentMax"]}
                        rules={[
                          {
                            required: true,
                            message: "Missing correctPercentMax",
                          },
                        ]}
                      >
                        <Input placeholder="Nhập số" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        label="Điểm"
                        name={[name, "point"]}
                        rules={[{ required: true, message: "Missing point" }]}
                      >
                        <Input placeholder="Nhập số" />
                      </Form.Item>
                      <FaMinusCircle onClick={() => remove(name)} />
                    </Space>
                  );
                })}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<FaPlusCircle />}
                  >
                    Thêm
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Flex>
      </Flex>

      {/* Đuổi hình bắt chữ - Now grouped under 'wordGuessing' */}
      <Typography.Title level={2} className="!mt-10">
        Cài đặt cho game "Đuổi hình bắt chữ"
      </Typography.Title>
      <Form.Item name={["wordGuessing", "status"]} label="Trạng thái">
        <Switch />
      </Form.Item>
      <Form.Item
        name={["wordGuessing", "portalMemo"]}
        label="Lời nhắn trang thành viên"
      >
        <Input />
      </Form.Item>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item
            name={["wordGuessing", "timeLimit"]}
            label="Thời gian mỗi lượt chơi (giây)"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name={["wordGuessing", "questionCount"]}
            label="Số lượng câu hỏi"
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name={["wordGuessing", "point"]} label="Điểm thưởng">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            name={["wordGuessing", "maxAttemptsPerDay"]}
            label="Số lượt chơi tối đa mỗi ngày"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name={["wordGuessing", "content"]}
        label="Nội dung tham gia đoán chữ"
      >
        <Input placeholder="Nhập nội dung" />
      </Form.Item>

      <Flex justify="space-between">
        <Flex vertical>
          <Form.List name={["wordGuessing", "pointRanges"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map((_a) => {
                  var { key, name } = _a,
                    restField = __rest(_a, ["key", "name"]);
                  return (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        label="Từ %"
                        name={[name, "correctPercentMin"]}
                        rules={[{ required: true, message: "Nhập số" }]}
                      >
                        <Input placeholder="Nhập số" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        label="Đến %"
                        name={[name, "correctPercentMax"]}
                        rules={[{ required: true, message: "Nhập số" }]}
                      >
                        <Input placeholder="Nhập số" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        label="Điểm"
                        name={[name, "point"]}
                        rules={[{ required: true, message: "Nhập số" }]}
                      >
                        <Input placeholder="Nhập số" />
                      </Form.Item>
                      <FaMinusCircle onClick={() => remove(name)} />
                    </Space>
                  );
                })}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<FaPlusCircle />}
                  >
                    Thêm trường
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Flex>
      </Flex>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Lưu
        </Button>
      </Form.Item>
    </Form>
  );
}
