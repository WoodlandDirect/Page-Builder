import React from 'react'

const OneImageText = () => {
  return (
    // <!-- START ONE IMAGE-TEXT-TEMPLATE HERE-->
    <div id='one-image-text'>
      <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
      <div className='text-container'>
        <h3>place an amazing section title here</h3>
        {/* <!-- you can add/remove the p tags (each one represents a paragraph break) -->
    <!-- start p tags --> */}
        <p>place paragraph text here</p>
        <p>place paragraph text here</p>
        <p>place paragraph text here</p>
        {/* <!-- end p tags --> */}
      </div>
    </div>
    // <!-- END ONE IMAGE-TEXT-TEMPLATE HERE--></div>
  )
}

export default OneImageText
