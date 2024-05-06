import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const WidgetsDropdown = (props) => {
  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }
    })
  }, [widgetChartRef1, widgetChartRef2])

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
      style={{height:'160px'}}
          color="primary"
          value={
            <>
              78
              
            </>
          }
          title="Customers"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          // chart={
          //   <CChartLine
          //     ref={widgetChartRef1}
          //     className="mt-3 mx-3"
          //     style={{ height: '70px' }}
          //     data={{
          //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          //       datasets: [
          //         {
          //           label: 'My First dataset',
          //           backgroundColor: 'transparent',
          //           borderColor: 'rgba(255,255,255,.55)',
          //           pointBackgroundColor: getStyle('--cui-primary'),
          //           data: [65, 59, 84, 84, 51, 55, 40],
          //         },
          //       ],
          //     }}
          //     options={{
          //       plugins: {
          //         legend: {
          //           display: false,
          //         },
          //       },
          //       maintainAspectRatio: false,
          //       scales: {
          //         x: {
          //           border: {
          //             display: false,
          //           },
          //           grid: {
          //             display: false,
          //             drawBorder: false,
          //           },
          //           ticks: {
          //             display: false,
          //           },
          //         },
          //         y: {
          //           min: 30,
          //           max: 89,
          //           display: false,
          //           grid: {
          //             display: false,
          //           },
          //           ticks: {
          //             display: false,
          //           },
          //         },
          //       },
          //       elements: {
          //         line: {
          //           borderWidth: 1,
          //           tension: 0.4,
          //         },
          //         point: {
          //           radius: 4,
          //           hitRadius: 10,
          //           hoverRadius: 4,
          //         },
          //       },
          //     }}
          //   />
          // }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
      style={{height:'160px'}}

          color="info"
          value={
            <>
              56
             
            </>
          }
          title="Orders"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          // chart={
          //   <CChartLine
          //     ref={widgetChartRef2}
          //     className="mt-3 mx-3"
          //     style={{ height: '70px' }}
          //     data={{
          //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          //       datasets: [
          //         {
          //           label: 'My First dataset',
          //           backgroundColor: 'transparent',
          //           borderColor: 'rgba(255,255,255,.55)',
          //           pointBackgroundColor: getStyle('--cui-info'),
          //           data: [1, 18, 9, 17, 34, 22, 11],
          //         },
          //       ],
          //     }}
          //     options={{
          //       plugins: {
          //         legend: {
          //           display: false,
          //         },
          //       },
          //       maintainAspectRatio: false,
          //       scales: {
          //         x: {
          //           border: {
          //             display: false,
          //           },
          //           grid: {
          //             display: false,
          //             drawBorder: false,
          //           },
          //           ticks: {
          //             display: false,
          //           },
          //         },
          //         y: {
          //           min: -9,
          //           max: 39,
          //           display: false,
          //           grid: {
          //             display: false,
          //           },
          //           ticks: {
          //             display: false,
          //           },
          //         },
          //       },
          //       elements: {
          //         line: {
          //           borderWidth: 1,
          //         },
          //         point: {
          //           radius: 4,
          //           hitRadius: 10,
          //           hoverRadius: 4,
          //         },
          //       },
          //     }}
          //   />
          // }
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsA
          color="warning"
      style={{height:'160px'}}

          value={
            <>
           98
            
            </>
          }
          title="Shippings"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                <CIcon icon={cilOptions} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          // chart={
          //   <CChartLine
          //     className="mt-3"
          //     style={{ height: '70px' }}
          //     data={{
          //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          //       datasets: [
          //         {
          //           label: 'My First dataset',
          //           backgroundColor: 'rgba(255,255,255,.2)',
          //           borderColor: 'rgba(255,255,255,.55)',
          //           data: [78, 81, 80, 45, 34, 12, 40],
          //           fill: true,
          //         },
          //       ],
          //     }}
          //     options={{
          //       plugins: {
          //         legend: {
          //           display: false,
          //         },
          //       },
          //       maintainAspectRatio: false,
          //       scales: {
          //         x: {
          //           display: false,
          //         },
          //         y: {
          //           display: false,
          //         },
          //       },
          //       elements: {
          //         line: {
          //           borderWidth: 2,
          //           tension: 0.4,
          //         },
          //         point: {
          //           radius: 0,
          //           hitRadius: 10,
          //           hoverRadius: 4,
          //         },
          //       },
          //     }}
          //   />
          // }
        />
      </CCol>
    
    </CRow>
  )
}

WidgetsDropdown.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsDropdown
