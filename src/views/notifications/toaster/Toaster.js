import {
  CToast,
  CToastBody, CToaster, CToastHeader
} from '@coreui/react'
import React from 'react'

const Toaster = () => {
  return (
    <CToaster
      position="top-center"
    >
      <CToast
        show={true}
        autohide={3000}
        fade={true}
      >
        <CToastHeader>
          Toast title
        </CToastHeader>
        <CToastBody>
          {"toast !!!!!"}
        </CToastBody>
      </CToast>
    </CToaster>
  )
}

export default Toaster
