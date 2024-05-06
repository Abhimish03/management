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

const Index = () => {

    const [customers,setCustomers] = useState([]);

    useEffect(()=>{
        fetchCustomers()
    },[])


    async function fetchCustomers() {


        let { data: cust_details, error } = await supabase
        .from('cust_details')
        .select('*')
          
        setCustomers(cust_details)

    }

    async function addCustomer(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const customer_name = e.target.customer_name.value;
        const mobile = e.target.mobile.value;
        const city = e.target.city.value;

console.log( { customer_name, email, mobile, city })
        const { data, error } = await supabase
            .from('cust_details')
            .insert([
                { customer_name, email, mobile, city },
            ])
            .select()

            window.location.reload();

    }

    console.log(customers)

    return <CCol xs={12}>

        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Add Customer</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm onSubmit={addCustomer} >
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Customer Name</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='customer_name'
                                    id="exampleFormControlInput1"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                                <CFormInput
                                    type="email"
                                    name='email'
                                    id="exampleFormControlInput1"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlInput1">Mobile Number</CFormLabel>
                                <CFormInput
                                    type="text"
                                    name='mobile'
                                    id="exampleFormControlInput1"
                                    placeholder="Your Mobile Number"
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
                <strong>All</strong> <small>Customers</small>
            </CCardHeader>
            <CCardBody>

                <CTable striped>
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">#</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
                            <CTableHeaderCell scope="col">City</CTableHeaderCell>

                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                       {customers.map(customer=> <CTableRow key={customer.id}>
                            <CTableDataCell>{customer.id}</CTableDataCell>
                            <CTableDataCell>{customer.customer_name}</CTableDataCell>
                            <CTableDataCell>{customer.email}</CTableDataCell>
                            <CTableDataCell>{customer.mobile}</CTableDataCell>
                            <CTableDataCell>{customer.city}</CTableDataCell>



                        </CTableRow>)}
                       
                    </CTableBody>
                </CTable>

            </CCardBody>
        </CCard>
    </CCol>
}

export default Index;