import React from 'react'

const Linking = () => {
  return (
    // <!-- START OF LINKING TEMPLATE -->
    <div id='linking-temp'>
      <div className='image-text-container'>
        <img src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/grey-img-icon.svg' alt='' />
        <div className='linking-text-container'>
          <h3>Place Title Here</h3>
          {/* <!-- below add/remove p tags for more/less paragraph breaks --> */}
          <div className='linking-text'>
            {/* <!-- BEGINNING OF PARAGRAPH SECTION --> */}
            <p>Place a paragraph here.</p>
            <p>Place a paragraph here.</p>
            {/* <!-- END OF PARAGRAPH SECTION --> */}
          </div>
        </div>
      </div>
      <div className='linking-guide'>
        {/* <!-- below are links to sections of your page -->
        <!-- replace each #section-id with the section's id you wish to link to  -->
        <!-- max of 6 links allowed, remove any a tag not used -->
        <!-- START OF ANCHOR SECTION --> */}
        <a href='#section-id' aria-label='section title'>
          Anchor Link Title 1
        </a>
        <a href='#section-id' aria-label='section title'>
          Anchor Link Title 2
        </a>
        <a href='#section-id' aria-label='section title'>
          Anchor Link Title 3
        </a>
        <a href='#section-id' aria-label='section title'>
          Anchor Link Title 4
        </a>
        <a href='#section-id' aria-label='section title'>
          Anchor Link Title 5
        </a>
        <a href='#section-id' aria-label='section title'>
          Anchor Link Title 6
        </a>
        {/* <!-- END OF ANCHOR SECTION --> */}
      </div>
    </div>
    // <!-- END OF LINKING TEMPLATE -->
  )
}

export default Linking
