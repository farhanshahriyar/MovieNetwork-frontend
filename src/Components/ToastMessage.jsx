import React from 'react'

const ToastMessage = () => {
return (
<div>
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" bis_skin_checked="1">
        <div class="toast-header" bis_skin_checked="1">
            <strong class="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                <span aria-hidden="true"></span>
            </button>
        </div>
        <div class="toast-body" bis_skin_checked="1">
            Hello, world! This is a toast message.
        </div>
    </div>
</div>
)
}

export default ToastMessage