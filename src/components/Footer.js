import React, { Component } from 'react'
import { Toast, ToastBody, ToastHeader} from 'reactstrap'

class Footer extends Component{
  render(){
    return(
      <>
        <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
            Created by
          </ToastHeader>
          <ToastBody>
            Trey Rogers, and Kelen Yafuso
          </ToastBody>
        </Toast>
      </div>
      </>
    )
  }

}

export default Footer
