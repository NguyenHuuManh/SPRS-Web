import { CButton, CCard, CCardBody, CCardHeader, CCol, CInput, CInputGroup, CModal, CModalBody, CModalFooter, CModalHeader, CPagination, CRow } from "@coreui/react";
import { Field, Formik } from "formik";
import { debounce } from "lodash-es";
import React, { useCallback, useEffect, useState } from "react";
import { getEvents } from "src/apiFunctions/Event";
import { calcItemStart } from "src/helps/function";
import AppSelectStautusAccount from "src/views/components/AppSelectStautusAccount";
import AppSelectStautusEvent from "src/views/components/AppSelectStautusEvent";
import { appToast } from "src/views/components/AppToastContainer";
import EventDetail from "./Components/EventDetail";
import EventUpdate from "./Components/EventUpdate";
const size = 10;
const EventManagerment = () => {
    const [itemSelected, setItemSelected] = useState({});
    const [data, setData] = useState({});
    const [key, setKey] = useState("");
    const [pageSize, setPageSize] = useState({ page: 1, size: size });
    const [status, setStatus] = useState(2);
    const [sort, setSort] = useState(true);
    const [detail, setDetail] = useState(false);
    const [update, setUpdate] = useState(false);

    const searchByName = (key) => {
        const param = {
            pageSize: pageSize.size,
            pageIndex: pageSize.page - 1,
            search: key,
            sort: sort,
            status_store: status
        }
        getEvents(param).then((e) => {
            if (e?.status == 200) {
                if (e.data.code === '200') {
                    setData(e.data.obj);
                    console.log(e.data, 'dataaa')
                }
            } else {
                appToast({
                    toastOptions: { type: "error" },
                    description: "Chức năng đang bảo trì",
                });
                setData({});
            }

        })
    }

    const debounceSearch = useCallback(debounce((key) => { setPageSize({ ...pageSize, page: 1, size: size }) }, 500), []);

    useEffect(() => {
        searchByName(key);
    }, [pageSize]);

    const pageChange = (newPage) => {
        setPageSize({ ...pageSize, page: newPage });
    };

    const onChange = (values) => {
        setKey(values.target.value);
        debounceSearch(values.target.value);
    }

    return (
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol md={6}>
                        Danh sách tài khoản
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <Formik
                    initialValues={{
                        status: "",
                    }}
                >
                    {() => (
                        <>
                            <CRow>
                                <CCol md={3}>
                                    <label className="inputTitle">Tìm kiếm</label>
                                    <CInputGroup className="mb-3" style={{ display: "flex", borderRadius: 10 }}>
                                        <CInput
                                            placeholder="Nhập tên tài khoản . . ."
                                            onChange={onChange}
                                            value={key}
                                        />
                                    </CInputGroup>
                                </CCol>
                                <CCol md={3}>
                                    <Field
                                        component={AppSelectStautusEvent}
                                        name='status'
                                        title="Trạng thái"
                                        functionProps={(item) => {
                                            if (item?.id == 0 || item?.id == 1) {
                                                setStatus(item?.id);
                                            } else {
                                                setStatus(2);
                                            }
                                            setPageSize({ ...pageSize, page: 1, size: size })
                                        }}
                                    />
                                </CCol>
                            </CRow>
                        </>
                    )}
                </Formik>
                <table className="table table-hover">
                    <thead className="table-active">
                        <th>STT</th>
                        <th>Tên Điểm</th>
                        <th>Ngày tạo</th>
                        <th>Ngày mở cửa</th>
                        <th>Ngày đóng cửa</th>
                        <th>Địa chỉ</th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            data?.reliefs?.map((item, index) => {
                                return (
                                    <tr
                                        key={item.id}
                                        className={`${item.id == itemSelected?.id && "table-active"}`}
                                        onClick={() => { setItemSelected(item) }}
                                    >
                                        <td>{calcItemStart(pageSize.page, pageSize.size) + index}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.create_time}</td>
                                        <td>{item?.open_time}</td>
                                        <td>{item?.close_time}</td>
                                        <td>{item?.address?.subDistrict.name + ' ' + item?.address?.district.name + ' ' + item?.address?.city.name}</td>
                                        <td>
                                            <CButton
                                                color="info"
                                                onClick={() => { setDetail(true) }}
                                            >Xem chi tiết</CButton>
                                        </td>
                                        <td>
                                            <CButton
                                                color="primary"
                                                onClick={() => { setUpdate(true) }}
                                            >Cập nhật</CButton>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <EventDetail isOpen={detail} setIsOpen={setDetail} data={itemSelected} />
                    <EventUpdate isOpen={update} setIsOpen={setUpdate} data={itemSelected} pageSize={pageSize} setPageSize={setPageSize} />
                </table>
                <CPagination
                    activePage={pageSize.page}
                    onActivePageChange={pageChange}
                    pages={data?.totalPages || 1}
                    align="center"
                />
            </CCardBody>
        </CCard>
    )
}
export default EventManagerment;