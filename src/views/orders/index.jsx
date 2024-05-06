import React, { useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CButton,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import supabase from '../../utils/supabase'
``

const index = () => {

    const [Orders,setOrders] = useState([]);

    useEffect(()=>{
        fetchOrders()
    },[])


    async function fetchOrders() {

        let { data: purchase_management, error } = await supabase
  .from('purchase_management')
  .select('*')


    }

    async function addCustomer(e) {
        e.preventDefault();
        const product_name = e.target.product_name.value;
        const quantity = e.target.quantity.value;
        const pricing = e.target.pricing.value;
        const mrp = e.target.mrp.value;
        const purchase_order = e.target.purchase_order.value;
        const customer_id = e.target.customer_id.value;


        const { data, error } = await supabase
        .from('purchase_management')
        .insert([
          { product_name,quantity,pricing,mrp,purchase_order,customer_id },
          
        ])
        .select()

            window.location.reload();

    }

    console.log(orders)

    return <CCol xs={12}>

        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Add Orders</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={addOrders} >
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Product Name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='product_name'
                                    id="exampleFormControlInput1"
                                    placeholder="Your product name"
                                />
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Quantity</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='quantity'
                                    id="exampleFormControlInput1"
                                    placeholder="your quantity"
                                />
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Pricing</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='pricing'
                                    id="exampleFormControlInput1"
                                    placeholder="Your pricing"
                                />
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">City</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='city'
                                    id="exampleFormControlInput1"
                                    placeholder="Your City"
                                />
                            </div>

                            <div className="mb-3" >
                                <CButton color="success" className="px-4"
                                    type="submit">
                                    Add
                                </CButton>
                            </div>

                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>

        </CRow>

        <CCard className="mb-4">
            <CCardHeader>
                <strong>All</strong> <small>Orders</small>
            </CCardHeader>
            <CCardBody>

                <CTable striped>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">*</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Pricing</CTableHeaderCell>
                            <CTableHeaderCell scope="col">MRP</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Purchase order ID</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Customer ID</CTableHeaderCell>



                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                       {customers.map(customer=> <CTableRow key={order.id}>
                            <CTableDataCell>{order.product_name}</CTableDataCell>
                            <CTableDataCell>{order.quantity}</CTableDataCell>
                            <CTableDataCell>{order.pricing}</CTableDataCell>
                            <CTableDataCell>{order.mrp}</CTableDataCell>
                            <CTableDataCell>{order.purchase_order}</CTableDataCell>
                            <CTableDataCell>{order.customer_id}</CTableDataCell>
                            



                        </CTableRow>)}
                       
                    </CTableBody>
                </CTable>

            </CCardBody>
        </CCard>
    </CCol>
}

export default index;