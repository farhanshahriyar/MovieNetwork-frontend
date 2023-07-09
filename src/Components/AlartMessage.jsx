import React from 'react'

const AlartMessage = () => {
return (
<div>
    <div class="alert alert-dismissible alert-info">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not
        super important.
    </div>
</div>
)
}

export default AlartMessage