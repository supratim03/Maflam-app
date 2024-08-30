import { SearchOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { supportedLangs } from "../constants/supportedLangs";

const PageHeader = () => {
    const { i18n } = useTranslation();
    return (
        <div className="fixed w-full navbar">
            <Row className="p-2">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <span className="text-white text-lg"><b>Maflam</b></span>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Row gutter={[16, 16]}>
                        <Col xs={16} sm={16} md={16} lg={16}>
                            <Input placeholder="Search" prefix={<SearchOutlined style={{color: '#ffffff'}} />} />
                        </Col>
                        <Col xs={8} sm={8} md={8} lg={8}>
                            <div className="locale-switcher">
                                <select
                                    value={i18n.resolvedLanguage}
                                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                                    className="w-full h-8 rounded-md"
                                >
                                    {Object.entries(supportedLangs).map(([code, name]) => (
                                        <option value={code} key={code}>
                                            {name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>

        </div>
    )
}

export default PageHeader;