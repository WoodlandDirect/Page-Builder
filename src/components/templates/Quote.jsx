import React from 'react'

const Quote = props => {
  const { templateData } = props
  let defaultDisplay = !templateData['feedBackLayout'] && !templateData['faqLayout'] && !templateData['proTipLayout']
  let backgroundDark = templateData.backgroundDark && templateData.backgroundDark.value ? 'background-dark' : ''
  let addPadding = templateData.addPadding && templateData.addPadding.value ? 'add-padding' : 'padding'
  let faqTemplate = templateData['faqLayout'] && templateData['faqLayout'].value === true
  let proTipTemplate = templateData['proTipLayout'] && templateData['proTipLayout'].value === true
  let feedbackTemplate = templateData['feedBackLayout'] && templateData['feedBackLayout'].value === true
  let faq = templateData.faq ? templateData.faq.value : 'Frequent Question Here?'
  let answer = templateData.answer ? templateData.answer.value : 'answer here'
  let proTip = templateData.proTip ? templateData.proTip.value : 'Pro Tip Here'
  let customerFeedback = templateData.customerFeedback ? templateData.customerFeedback.value : 'feedback'
  return (
    // <!-- START QUOTES TEMPLATE -->
    <div id='quotes-template' className={'quotes-template ' + backgroundDark + ' ' + addPadding}>
      {/* <!-- ADD/REMOVE TEMPLATES AS NEEDED -- DO NOT CHANGE OUT IMAGES-->
  <!-- QUESTION TEMPLATE STARTS --> */}
      {faqTemplate && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/question-icon.svg'
              alt='question mark icon'
            />
            {/* <!-- start quote title --> */}
            <h3>{faq}</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{answer}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- QUESTION TEMPLATE ENDS -->
  <!-- PRO TIP TEMPLATE STARTS --> */}
      {proTipTemplate && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/pro-tip-icon.svg'
              alt='pro-tip wrench icon'
            />
            {/* <!-- start quote title --> */}
            <h3>Pro tip:</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{proTip}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- PRO TIP TEMPLATE ENDS -->
  <!-- CUSTOMER FEEDBACK TEMPLATE STARTS --> */}
      {feedbackTemplate && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg'
              alt='star icon'
            />
            {/* <!-- start quote title --> */}
            <h3>customer feedback</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>{customerFeedback}</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {defaultDisplay && (
        <div className='single-quote-cont'>
          <div className='title-container'>
            <img
              src='https://dev.woodlanddirect.com/learningcenter/pagebuilder+/svgs/feedback-icon.svg'
              alt='star icon'
            />
            {/* <!-- start quote title --> */}
            <h3>default</h3>
            {/* <!-- end quote title --> */}
          </div>
          {/* <!-- START add/remove p tags as needed --> */}
          <p>default</p>
          {/* <!-- end of paragraphs --> */}
        </div>
      )}
      {/* <!-- CUSTOMER FEEDBACK TEMPLATE ENDS --> */}
    </div>
    /* <!-- END QUOTES TEMPLATE --> */
  )
}

export default Quote
