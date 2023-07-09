// import React from 'react'

// const Loading = () => {
//   return (
//     <div>
//         <div class="progress">
//         <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
//         </div>
//     </div>
//   )
// }

// export default Loading

import React from 'react'

const Loading = () => {
  return (
    <div>
        <div className="progress mt-2">
        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
        </div>
    </div>
  )
}

export default Loading
