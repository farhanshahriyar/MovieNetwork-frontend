import React from 'react'

const ErrorMessage = () => {
return (
<div>
    <div class="alert alert-dismissible alert-danger">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Oh Sorry!</strong> <a href="#" class="alert-link">There is an issue</a> please try submitting again.
    </div>
</div>
)
}

export default ErrorMessage