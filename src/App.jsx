import { useState } from 'react'
import PageHeader from './PageHeader/PageHeader'
import { useTranslation } from 'react-i18next'
import { Button, Col, Row } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import pricing from '../public/images/pricing.png'

function App() {
  const { t } = useTranslation();

  return (
    <div className='h-full landing-body'>
      <div className='banner'>
        <PageHeader />
        <div className="pt-32 p-8">
          <h1 className='text-white text-5xl'>{t("banner_title")}</h1>
        </div>
        <div style={{ width: '500px' }} className='p-8'>
          <span className='text-white text-lg'>
            {t('banner_subText')}
          </span>
        </div>
        <Row className='p-8' gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div className='flex gap-2.5'>
              <Button className='secondary'>
                {t('signup_btn')}
              </Button>
              <Button className='primary'>
                {t('login_btn')}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <Row className='pl-[250px] pr-[250px] pb-[150px]'>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className='flex gap-1.5'>
            <div className='box'>
              <div className='text-center mt-[220px]'>
                <span className='text-white text-lg'><b>{t('landing-box-1')}</b></span>
                <div className='pt-2.5 flex justify-center'>
                  <div className='circle pt-[1px]'>
                    <ArrowLeftOutlined style={{ color: 'rgba(235, 245, 244, 1)' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='text-center mt-[220px]'>
                <span className='text-white text-lg'><b>{t('landing-box-1')}</b></span>
                <div className='pt-2.5 flex justify-center'>
                  <div className='circle pt-[1px]'>
                    <ArrowLeftOutlined style={{ color: 'rgba(235, 245, 244, 1)' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='text-center mt-[220px]'>
                <span className='text-white text-lg'><b>{t('landing-box-1')}</b></span>
                <div className='pt-2.5 flex justify-center'>
                  <div className='circle pt-[1px]'>
                    <ArrowLeftOutlined style={{ color: 'rgba(235, 245, 244, 1)' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='text-center mt-[220px]'>
                <span className='text-white text-lg'><b>{t('landing-box-1')}</b></span>
                <div className='pt-2.5 flex justify-center'>
                  <div className='circle pt-[1px]'>
                    <ArrowLeftOutlined style={{ color: 'rgba(235, 245, 244, 1)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className='text-center pt-8'>
            <span className='text-white text-2xl'><b>{t("landing_stat_header")}</b></span>
          </div>
          <div className='pt-4 flex'>
            <div className='w-4/12 text-center'>
              <div>
                <span className='text-white text-4xl'><b>600+</b></span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Videos</span>
              </div>
            </div>
            <div className='w-4/12 text-center'>
              <div>
                <span className='text-white text-4xl'><b>1323+</b></span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Courses</span>
              </div>
            </div>
            <div className='w-4/12 text-center'>
              <div>
                <span className='text-white text-4xl'><b>75</b></span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Teachers</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='pl-[250px] pr-[250px] pb-[150px] pt-[75px] banner-2'>
        <Col xs={24} sm={24} md={24} lg={24} className='pt-8'>
          <div className='text-center'>
            <span className='text-white text-4xl'>MFL will be revealed</span>
          </div>
          <div className='pt-8 text-center pl-[200px] pr-[200px]'>
            <span className='text-white'>
              We cooperate with more than 300 leading universities and companies. We cooperate with more than 300 leading universities and companies. We cooperate with more than 300 leading universities and companies. We cooperate with more than 300 leading universities and companies. We cooperate with more than 300 leading universities and companies. We cooperate with more than 300 leading universities and companies. We cooperate with more than 300 leading universities and companies.
            </span>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} className='pt-16'>
          <div className='flex gap-2'>
            <div className='w-4/12 text-center landing-box flex justify-center items-center' style={{ backgroundColor: 'rgba(59, 46, 138, 0.2)' }}>
              <span className='text-white'>عملي</span>
            </div>
            <div className='w-4/12 text-center landing-box flex justify-center items-center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
              <span className='text-white'>عملي</span>
            </div>
            <div className='w-4/12 text-center landing-box flex justify-center items-center' style={{ backgroundColor: 'rgba(188, 229, 229, 0.2)' }}>
              <span className='text-white'>عملي</span>
            </div>
            <div className='w-4/12 text-center landing-box flex justify-center items-center' style={{ backgroundColor: 'rgba(249, 245, 253, 0.2) ' }}>
              <span className='text-white'>عملي</span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} className='pt-[300px]'>
          <Row className='landing-box'>
            <Col xs={24} sm={24} md={24} lg={24}>
              <div className='p-8'>
                <div>
                  <span className='text-white text-3xl'>
                    <b>
                      Welcome to Film Studio
                    </b>
                  </span>
                </div>
                <div>
                  <span className='text-white text-3xl'>
                    Learn Filmography
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <div className='landing-banner'></div>
        </Col>
      </Row>
      <Row className='pl-[250px] pr-[250px] pb-[150px] pt-[415px]'>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className=''>
            <img src={pricing} alt="pricing" />
          </div>
        </Col>
      </Row>
      <Row className='pl-[250px] pr-[250px] pb-[150px]'>
        <hr style={{ color: 'rgba(246, 255, 255, 1)' }} className='w-full' />
      </Row>
      <Row className='pl-[250px] pr-[250px] pb-[150px]'>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div className='flex'>
            <div className='w-4/12 '>
              <div>
                <span className='text-white text-2xl'><b>Quick Links</b></span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Home</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Profile</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>FAQ</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Home</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Profile</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>FAQ</span>
              </div>
            </div>
            <div className='w-4/12 '>
              <div>
                <span className='text-white text-2xl'><b>Quick Links</b></span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Home</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Profile</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>FAQ</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Home</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>Profile</span>
              </div>
              <div className='pt-1'>
                <span className='text-white'>FAQ</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
