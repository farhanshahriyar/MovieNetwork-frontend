import React from 'react'

const SuccessMessage = ({message, setSuccess}) => {
return (
<div>
    <div class="alert alert-dismissible alert-success">
        <button type="button" onClick={()=> setSuccess(false)} class="btn-close" data-bs-dismiss="alert"></button>
        {message}
    </div>
</div>
)
}

export default SuccessMessage