import { Button, Col, Flex, Form, Input, Row, Space, Typography } from "antd";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

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
  return (
    <Form>
      <Typography.Title level={2}>Cài đặt chung</Typography.Title>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Typography.Title level={2}>
        Cài đặt cho game "Trả lời câu hỏi"
      </Typography.Title>
      <Form.Item name="" label="">
        <Input />
      </Form.Item>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="" label="">
        <Input />
      </Form.Item>

      <Flex justify="space-between">
        <Flex vertical>
          <Form.List name="pointRanges">
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
                        name={[name, "first"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "remove"]}
                        rules={[{ required: true, message: "Missing remove" }]}
                      >
                        <Input placeholder="Remove" />
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
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Flex>
        <Flex vertical>
          <Form.List name="users">
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
                        name={[name, "first"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "remove"]}
                        rules={[{ required: true, message: "Missing remove" }]}
                      >
                        <Input placeholder="Remove" />
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
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Flex>
      </Flex>

      <Typography.Title level={2}>
        Cài đặt cho game "Đuổi hình bắt chữ"
      </Typography.Title>
      <Form.Item name="" label="">
        <Input />
      </Form.Item>
      <Row gutter={16}>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item name="" label="">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="" label="">
        <Input />
      </Form.Item>

      <Flex justify="space-between">
        <Flex vertical>
          <Form.List name="pointRanges">
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
                        name={[name, "first"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "remove"]}
                        rules={[{ required: true, message: "Missing remove" }]}
                      >
                        <Input placeholder="Remove" />
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
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Flex>
        <Flex vertical>
          <Form.List name="users">
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
                        name={[name, "first"]}
                        rules={[
                          { required: true, message: "Missing first name" },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        rules={[
                          { required: true, message: "Missing last name" },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "remove"]}
                        rules={[{ required: true, message: "Missing remove" }]}
                      >
                        <Input placeholder="Remove" />
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
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Flex>
      </Flex>
    </Form>
  );
}
