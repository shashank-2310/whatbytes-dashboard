"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Form from './Form'
import { Button, Modal } from 'antd';
import { MdArrowForward, MdOutlineCancel } from 'react-icons/md';
import QuickStats from './QuickStats';
import Graph from './Graph';

const SkillsHome = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        (document.getElementById('form') as HTMLFormElement)?.submit();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        (document.getElementById('form') as HTMLFormElement)?.reset();
    };

    return (
        <div className="flex justify-start items-start sm:items-center flex-col gap-2 lg:gap-4 w-full lg:w-max overflow-hidden">
            <div className="border-2 border-gray-200 rounded-lg p-3 lg:p-5 flex-between flex-col lg:flex-row gap-2 lg:gap-5">
                <Image src={"/html.png"} alt='html-icon' width={60} height={60} />
                <div className="flex flex-col gap-1 text-center lg:text-justify">
                    <h1 className='font-semibold text-base lg:text-lg'>Hyper Text Markup Language</h1>
                    <p className='text-neutral-500 text-sm lg:text-base'>
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                </div>
                <button onClick={showModal} className='lg:px-6 lg:py-3 px-4 py-2 font-medium text-xs lg:text-sm bg-blue-800 text-white rounded-lg' >Update</button>
            </div>
            <Modal
                open={isModalOpen}
                okText={"Submit"}
                closable={false}
                className='lg:top-52'
                footer={[
                    <Button onClick={handleCancel} key={"cancel"} className='bg-white border-2 lg:py-4 border-blue-900 font-medium text-sm lg:text-base text-blue-900 hover:text-white hover:bg-blue-900'>
                        Cancel <MdOutlineCancel className='text-lg' />
                    </Button>,
                    <Button form="form" key="submit" htmlType="submit" onClick={handleOk} className='bg-blue-900 border-2 lg:py-4 border-blue-900 font-medium text-sm lg:text-base text-white hover:bg-white hover:text-blue-900'>
                        Submit <MdArrowForward className='text-lg' />
                    </Button>
                ]}
            >
                <Form id="form" />
            </Modal>
            <QuickStats />
            <Graph />
        </div>

    )
}

export default SkillsHome