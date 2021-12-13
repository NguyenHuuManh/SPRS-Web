import { CButton, CCard, CCardBody, CCardHeader, CCol, CModal, CRow } from '@coreui/react'
import { Field, Form, Formik } from 'formik';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react'
import { apiUpdateEvent } from 'src/apiFunctions/Event';
import AppTimePicker from 'src/views/components/AppTimePicker';
import { appToast } from 'src/views/components/AppToastContainer';
import InputField from 'src/views/components/InputField';
import Mappicker from 'src/views/components/Mappicker';
import TextAreaField from 'src/views/components/TextAreaField';
import { updateEventValidation } from '../validate';
import CartTable from './CartTable';
const EventUpdate = (props) => {
    const { isOpen, setIsOpen, data, setPageSize, pageSize } = props;
    const [items, setItems] = useState([]);
    const [address, setAddress] = useState({});

    useEffect(() => {
        if (isOpen && data?.address) {
            setAddress({
                GPS_lati: data.address?.GPS_lati || "",
                GPS_long: data.address?.GPS_long || "",
                city: data.address?.city.name || "",
                district: data.address?.district.name || "",
                subDistrict: data.address?.subDistrict.name || "",
            });
            setItems(data.reliefInformations);
        }
    }, [isOpen, data]);


    const callUpdate = (body) => {
        apiUpdateEvent(body).then((e) => {
            if (e.status == 200) {
                if (e.data.code == '200') {
                    appToast({
                        toastOptions: { type: "success" },
                        description: "Cập nhật thành công",
                    });
                    setPageSize({ ...pageSize });
                    setIsOpen(false)
                } else {
                    appToast({
                        toastOptions: { type: "error" },
                        description: e?.data?.message,
                    });
                }
            } else {
                appToast({
                    toastOptions: { type: "error" },
                    description: 'Hệ thống đang bảo trì',
                });
            }
        })
    }
    return (
        <CModal
            show={isOpen}
            onClose={() => {
                setIsOpen(false)
            }}
            closeOnBackdrop={false}
            size='xl'
        >
            <CCard>
                <CCardHeader>Cập nhật điểm cứu trợ</CCardHeader>
                <CCardBody>
                    <Formik
                        validationSchema={updateEventValidation}
                        initialValues={{
                            open_time: data.open_time,
                            close_time: data.close_time,
                            name: data.name,
                            description: data.description,
                        }}
                        enableReinitialize
                        onSubmit={(values) => {
                            if (isEmpty(items)) {
                                appToast({
                                    toastOptions: { type: "error" },
                                    description: "Chọn ít nhất một mặt hàng",
                                });
                                return;
                            }
                            const body = {
                                ...values,
                                id: data.id,
                                reliefInformations: items.map((e) => {
                                    return {
                                        id: e.id,
                                        quantity: e.quantity,
                                        item: {
                                            id: e.item.id
                                        }
                                    }
                                }),
                                address: {
                                    id: data.address.id,
                                    city: {
                                        code: "",
                                        id: "",
                                        name: address.city
                                    },
                                    district: {
                                        code: "",
                                        id: "",
                                        name: address?.district,
                                    },
                                    subDistrict: {
                                        code: "",
                                        id: "",
                                        name: address?.subDistrict,
                                    },
                                    addressLine: "",
                                    addressLine2: "",
                                    GPS_lati: address?.GPS_lati,
                                    GPS_long: address?.GPS_long
                                },
                            }
                            console.log('body', body);
                            delete body.adressString
                            callUpdate(body);
                        }}
                    >
                        {({ values }) => (
                            <Form>
                                <CRow>
                                    <CCol lg={6}>
                                        <CCardBody>
                                            <CartTable items={items} setItems={setItems} />
                                        </CCardBody>
                                    </CCol>

                                    <CCol lg={6}>
                                        <CRow>
                                            <CCol lg={12}>
                                                <Field
                                                    maxTitle={170}
                                                    component={InputField}
                                                    name="name"
                                                    title="Tên Điểm cứu trợ"
                                                />
                                            </CCol>

                                            <CCol md={6}>
                                                <Field
                                                    component={AppTimePicker}
                                                    name="open_time"
                                                    title="thời gian mở cửa"
                                                />
                                            </CCol>
                                            <CCol md={6}>
                                                <Field
                                                    component={AppTimePicker}
                                                    name="close_time"
                                                    title="thời gian đóng cửa"
                                                />
                                            </CCol>
                                            <CCol lg={12}>
                                                {
                                                    data?.address && (
                                                        <Field
                                                            maxTitle={170}
                                                            component={Mappicker}
                                                            name="adressString"
                                                            title="Địa chỉ"
                                                            adress={address}
                                                            setAdress={setAddress}
                                                            iconName={"cil-map"}
                                                        />
                                                    )
                                                }
                                            </CCol>
                                            <CCol lg={12}>
                                                <div style={{ height: 110 }}>
                                                    <Field
                                                        title="Mô tả"
                                                        component={TextAreaField}
                                                        name="description"
                                                        type="TextArea"
                                                    />
                                                </div>
                                            </CCol>

                                        </CRow>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <CCol md={12}>
                                        <div className="d-flex justify-content-end align-items-end" style={{ width: "100%" }}>
                                            <CButton type="submit" color="primary" style={{ marginRight: 10 }} onClick={() => { setIsOpen(false) }}>Hủy</CButton>
                                            <CButton type="submit" color="primary" >Cập nhật</CButton>
                                        </div>
                                    </CCol>
                                </CRow>
                            </Form>
                        )}
                    </Formik>
                </CCardBody>
            </CCard>
        </CModal >
    )
}
export default React.memo(EventUpdate);