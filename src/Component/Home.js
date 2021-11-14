import React from 'react'
import "../Style/Component/homeScss.scss"
import { Button, Row, Col, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

function Home() {
  const { TextArea } = Input;
  const valueOfInputArea = "The mandatory closing time does not apply to artistic and cultural performances, for instance in cinemas, theatres and concert halls."

  const props = {
    name: 'file',
    action: '',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="Home">
      <div className="Home-Top">
        <span className="leftLogo"><img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" /></span>
        <span className="Title">
          <h1>Im a title</h1>
        </span>
        <span className="rightLogo"><img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" /></span>
      </div>
      <div className="Home-Bottom">
        <Row>
          <Col span="12">
            <div className="btn">
              <div className="linkUpload">
                <Button type="primary" icon={<UploadOutlined />}>Link</Button>
                <Input placeholder="Basic usage" />
              </div>
            </div>
            <div className="btn">
              <Upload {...props}>
                <Button type="primary" icon={<UploadOutlined />}>CSV file</Button>
              </Upload>
            </div>
            <div className="btn">
              <Upload {...props}>
                <Button type="primary" icon={<UploadOutlined />}>Pdf file</Button>
              </Upload>
            </div>

          </Col>
          <Col span="12">
            <span className="resultArea">
              <TextArea value={valueOfInputArea} disabled={true} />
            </span>

          </Col>
        </Row>
      </div>
    </div>
  )
}


export default Home;