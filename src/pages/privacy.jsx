import React, {useState} from 'react';
import PageHeader from './pagesHeader';
import MetaTags from "react-meta-tags";


export default function Privacy(props){
    const [tab, setTab] = useState(props.tab)

    const style = {
        root: {
            background: "white", 
            width: "100%", 
            padding: "30px 50px 80px 50px", 
            textAlign: "left"
        }
    }
    return (
        <React.Fragment>
        <MetaTags>
        <title>{tab==='privacy'?"Industry Leading Competitive Analysis Platform for Alternatives, Investment Banking and Technology": 'AI-Powered Executive Search Platform for Alternatives, Investment Banking and Technology'}</title>
        <meta name="description" content={tab==='privacy'?"Get live information on trends and opportunities to help you find the talent you need. Our proprietary executive search program offers competitive intelligence on demand.": 'We simplify and accelerate the decision making process by providing clean information, analysis and real time data to help you identify the talent you need.'} />
        </MetaTags>
            <PageHeader />
            {/* <!-- container --> */}
            <div className="container hero-area1" style={style.root}>
                {/* <!-- row --> */}
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="tabbable-panel">
                        <div className="tabbable-line">
                            <ul className="nav nav-tabs ">
                                <li className={tab==='privacy'?"active": ''} onClick={()=>setTab('privacy')}>
                                <a href="#tab_default_1" data-toggle="tab">
                                Privacy Policy </a>
                                </li>
                                <li className={tab==='terms'?"active": ''} onClick={()=>setTab('terms')}>
                                <a href="#tab_default_2" data-toggle="tab">
                                Terms and Conditions </a>
                                </li>
                            </ul>
                            <div className="tab-content" style={{border: "none"}}>
                                <div className="tab-pane active" id="tab_default_1">
                                <h1>Privacy Policy (the "Policy")</h1>
                                <h4>Last Updated 27th June 2019</h4>
                                <p>Consilium Intelligence takes the privacy and security of your information seriously. This Policy describes how Consilium Intelligence and its affiliates (collectively “Consilium”, “we” or “us”) collect, use, transfer, and disclose your information. A list of our affiliates and subsidiaries is available from our Privacy Office as described below.</p>
                                <p className="pad_0">This Policy covers information Consilium collects in connection with our Recruitment Services, Consulting Services, and Products (collectively, the “Services”). This Policy also covers information collected through:</p>
                                <ul>
                                    <li>web sites we operate from which you are accessing this Policy (the “Site”), </li>
                                    <li>the software applications we make available for use on or through computers or mobile devices (the “Apps”), </li>
                                    <li>our social media pages and apps to which the Site links (collectively, our “Social Media Pages”), and </li>
                                    <li>email messages we send to you that link to this Policy (collectively, including the Site, Apps, and our Social Media Pages, the “Online Systems”). </li>
                                </ul>
                                <p>This Policy also covers other means by which we collect information from publicly available information, in person discussions, telephone conversations, and through non-electronic communications (i.e. collection through other means than our Online Systems).</p>
                                <h5>WHO WE ARE</h5>
                                <p>Consilium is an intelligence services provider of global organizational model information and a consulting firm. We help companies design their organization, including the structure, roles and responsibilities, as well as how they attain talent, compensate, develop and motivate their people.</p>
                                <p>Consilium offers services to help companies recruit new personnel and attract talent ("Recruitment Services"). We provide Recruitment Services to clients searching for senior executive talent. We are also a global management consulting firm that provides talent management and consulting services (“Services”). We help our clients implement their business strategy by consulting with them on strategy execution and organization design, talent strategy and work design, rewards and benefits, assessment and succession, leadership development, and other talent needs.</p>
                                <h5>PERSONAL INFORMATION WE COLLECT</h5>
                                <p>Consilium collects information that identifies you as an individual or relates to an identifiable individual (“Personal Information”) to provide Services to you, our clients and to operate our business. The type of Personal Information we collect about you may include your name and work-related contact details and publicly available work history including skills and professional qualifications.</p>
                                <p>If you become a recruitment candidate, we may also collect other forms of personal information including personal email and contact information, a more detailed resume of employment history, education, professional credentials, memberships in professional organizations, skills, citizenship, information from former employers and other references, and additional information to the extent we have acquired or you have provided us with such information. We also use photos of you that you provide to us or that you make publicly available on the Internet (e.g., LinkedIn). As permitted by
                                    applicable laws, we obtain background verification information. In certain cases, we request sensitive Personal Information about you. We may use this information to ensure that our Services conform with legal requirements, including equal opportunity laws. Our assessments and surveys may include demographic survey questions like questions about gender, race, age, or country of origin.
                                </p>
                                <p>Where permitted by law, we may collect compensation and benefits information about you to consult with you or our clients on rewards and benefits.</p>
                                <p>When you are utilizing our Online Systems, we may collect login user credentials like user names, passwords, and password hints.</p>
                                <p>Please do not provide us with any Personal Information if you do not agree with this Policy. Except in these limited cases, we encourage you not to provide any other sensitive Personal Information to us, such as government identification numbers, payment card numbers, information related to racial or ethnic origin, political opinions, religious or other beliefs, health, biometrics or genetic characteristics, criminal background, or trade union membership.</p>
                                <h5>HOW WE COLLECT PERSONAL INFORMATION</h5>
                                <p>As you interact with Consilium, you provide some Personal Information directly.</p>
                                <p>We may collect Personal Information when you register to use our Online Systems, submit or build a resume, respond to employment opportunities, complete online assessments or surveys, provide Personal Information about yourself to us via email, electronic forms, telephone or postal mail.</p>
                                <p>If you submit any Personal Information about other people to us or to our service providers, you represent that you have the authority to do so and to permit us to use the information in accordance with this Policy.</p>
                                <p>Personal Information about you may also come from our clients to whom we provide Services.</p>
                                <p>We may also obtain Personal Information about you from third parties, such as from referrals, networking activities, public databases, joint marketing partners, licensed databases, and social media platforms. We cannot and do not assume any responsibility for the actions or omissions of third parties, such as clients, including the way they use Personal Information received either from Consilium or from other independent sources. The information we collect from these third parties includes information about the identity of potential candidates (e.g. an individual’s name, address, telephone number, email address), information about their background and qualifications (employment history, education, professional credentials, memberships in professional organizations, skills, etc.), citizenship, information from former employers and other references. We also use photos of you that you provide to us or that you make publicly available on the Internet (e.g., LinkedIn). As permitted by applicable laws, we obtain background verification information.</p>
                                <p>Please do not provide us with any Personal Information if you do not agree with this Policy. Except in these limited cases, we encourage you not to provide any other sensitive Personal Information to us, such as government identification numbers, payment card numbers, information related to racial or ethnic origin, political opinions, religious or other beliefs, health, biometrics or genetic characteristics, criminal background, or trade union membership.</p>
                                <h5>HOW WE USE THE PERSONAL INFORMATION WE COLLECT</h5>
                                <p>Consilium uses the Personal Information it collects to provide Services to you and our clients. We do this to fulfil our contractual relationships with you and our clients and where we have a legitimate, beneficial interest in using Personal Information to conduct our business.</p>
                                <p>In the course of our Services, we may use Personal Information that we have collected to create a profile about you. This profile may be used to identify professional opportunities that we think may be of interest to you. In the course of our Recruitment Services, we also use your Personal Information to confirm references and conduct education and background checks as appropriate.</p>
                                <p>We may contact you from time to time regarding those opportunities. We may also contact individuals from time to time for referrals. We may solicit names of, or additional Personal Information regarding, potential candidates in connection with our Recruitment Services to understand the market and provide other advisory services to our clients.</p>
                                <p>You can always object to our creating a profile about you, or restrict us from allowing our clients to access your Personal Information. See the ‘Choices and Access’ section below on how you can object. If you object or restrict the disclosure to our clients, we will remove your profile from our database, or restrict our clients from being able to access your information.  This will also mean that you may not be considered for opportunities in the future.</p>
                                <p>We also use your Personal Information that we collect to aggregate and disclose diversity and other statistical information regarding our candidates and placement activities. We do so to manage our contractual relationship with you, with your consent, or because we have a legitimate business interest.</p>
                                <p>We use your Personal Information to respond to your inquiries, to verify your information, or to share information with you. 
                                    We use your Personal Information to respond to your inquiries and fulfil your requests. If you contact us, we keep a record of your contact information and correspondence, and we use information you provide in your message to respond to your inquiry. From time to time we use your Personal Information to send you important information regarding the Online Systems, changes to our terms, conditions, policies, and other administrative information.
                                </p>
                                <p>We may also contact you to verify that the Personal Information we collected about you is accurate and current. We use the Personal Information to manage our contractual relationship with you or to comply with a legal obligation.</p>
                                <p>We use your Personal Information to operate our business.</p>
                                <p>We use your Personal Information for our business purposes, such as audits, internal communication regarding candidates and clients, determining the effectiveness of our promotional activities, administering our Services, maintaining and securing our infrastructure, and for procurement and financial transactions.</p>
                                <p>We use this Personal Information to manage our contractual relationship with you and our clients, to comply with a legal obligation, and because we have a legitimate beneficial business interest.</p>
                                <p>We may use Personal Information to conduct analytics and thought leadership materials. Any published product will refer only to larger aggregations of individuals and will not identify you personally or include any results attributable to you. We perform analytics because we have a legitimate beneficial business interest in doing so.</p>
                                <p>We may retain and use Personal Information about you for research, publication, development, benchmarking and norms, validation, longitudinal studies, trend analysis, to improve and enhance our Services or to develop and market new Services. We may use Personal Information about you to ensure that our Services conform with legal requirements like equal opportunity laws. We also use your name and other personal identifiers to associate and combine information about you that is collected from one Service with information about you collected through other Services.</p>
                                <p>We may also anonymize, aggregate or de-identify Personal Information so the end-product does not identify you or any other individual. For example, we may use this information to generate norms by industry, geography, level, etc., enable us to understand where our Services are being utilized, conduct ongoing validation studies, compile reports, and publish journal articles to further the knowledge base of organizational and leadership science. Such aggregated, anonymized or de-identified information is not considered Personal Information for purposes of this Policy and we may use it for any purpose.</p>
                                <p>We may use your Personal Information to send you information or marketing materials. Please note that if we obtained your Personal Information because of a consulting engagement with our client, or you are using our Products at the request of your employer, you will not receive marketing materials as a result of the Personal Information we obtained from those Services.</p>
                                <p>Consilium sends informational emails, articles, white papers, proposals, engagement letters, and information regarding our Services. We also use your Personal Information to conduct surveys. We do so either with your consent or because we have a legitimate beneficial business interest.   Occasionally, we may desire to use your Personal Information in press releases and direct marketing materials. Before we use your Personal Information in that way, we will obtain consent from you.</p>
                                <h5>WHO HAS ACCESS TO YOUR PERSONAL INFORMATION</h5>
                                <p>While providing our Services, we may disclose your Personal Information to clients who have engaged our services. Our clients are financial institutions such as fund management companies, banks or service providers related to these institutions.</p>
                                <p>In the course of our Services, we disclose Personal Information regarding candidates, including the results of assessments and related data, to prospective employers that have engaged Consilium to fulfil recruitment requests, or to reference sources.</p>
                                <p>In the course of our Consulting Services and in providing our Products and Services, we disclose Personal Information to our client. Our client can be your employer or an organization with whom you are seeking employment.</p>
                                <p>If you have completed an assessment or survey at our client’s request as part of our Services or related to a Product, we will not share your assessment results with other clients without obtaining the appropriate consent.</p>
                                <p>We have affiliates and subsidiaries around the world. To the extent permitted by law, we may share Personal Information with our affiliates and subsidiaries to provide seamless Services for you and our clients. Consilium is responsible for managing jointly-used Personal Information.</p>
                                <p>From time to time, we also disclose Personal Information to our strategic alliance partners and to our network of independent consultants who provide services on Consilium’s behalf for the purposes stated above.</p>
                                <p>Consilium discloses Personal Information to third parties who provide support for our Services or business operation. Consilium works with third parties who provide services that may include, but are not limited to, assessment services, including assessment validation services, website hosting and IT consulting services, data analysis, resume verification, background checking, payroll services, public relations services, marketing services, attorneys, accountants, and other administrative and back-up and security services. As part of providing services, these third parties will be provided with access to Personal Information. In addition, our software development partners may use Personal Information to modify, improve, refine, and validate their technology, research and development.</p>
                                <p>Consilium may disclose or transfer all or part of your Personal Information in the event of a sale of our company or one or more of our affiliates. We may also disclose or transfer all or part of your Personal Information in the event of a merger or consolidation involving our company or one or more of our affiliates. This may also occur if there is a sale or transfer of assets or of any portion of our business or the business of one or more of our affiliates. 
                                    There may be other times that we disclose your Personal Information. Consilium may also use or disclose Personal Information (to comply with a legal obligation or because we have legitimate interest to do so) in order to: (i) comply with applicable laws, (ii) respond to inquiries, requests or orders from public or government authorities, including those outside of your country of residence, or (iii) protect the rights, privacy, safety or property, of Consilium and our affiliates, you or others.
                                </p>
                                <p>We cannot and do not assume any responsibility for the actions or omissions of third parties, such as clients, including the way they use Personal Information received either from Consilium or from other independent sources.</p>
                                <h5>OTHER INFORMATION WE COLLECT</h5>
                                <p>Consilium collects other information that does not reveal your specific identity (“Other Information”), such as Information collected through cookies, pixel tags, and other technologies, App usage data, demographic information and other information provided by you, and aggregated information.</p>
                                <p>Because Other Information does not reveal your specific identity, we may use it for any purpose. If we combine Other Information with Personal Information that identifies you directly (like combining your name with your location), we will treat the combined information as Personal Information for as long as it is combined.</p>
                                <p>If we are required to treat Other Information as Personal Information under applicable law, we may use and disclose it for the purposes for which we use and disclose your Personal Information as detailed in this Policy.</p>
                                <p>We and our third-party service providers may collect Other Information in a variety of ways.</p>
                                <p>We use “cookies” (small text files placed on a visitor’s computer hard drive) and other similar technologies to help us determine information like the type of content a visitor to the Site consumes, and the length of time each visitor spends at any area of the Site. Cookies and similar technologies enhance your experience on the Site.</p>
                                <p>You can configure your browser settings to automatically decline cookies or be given the choice of declining or accepting the transfer to your computer of a particular cookie(s) from a particular site. Please refer to <a href="http://www.allaboutcookies.org/manage-cookies" target="_blank"> http://www.allaboutcookies.org/manage-cookies</a> for information on how to manage cookies stored on your computer. If you disable cookies and similar technologies, your experience on the Site may be diminished and some features may not work as intended.</p>
                                <h5>CHOICE AND ACCESS</h5>
                                <p>Your provision of Personal Information to us is voluntary, although if you do not provide certain Personal Information you may not be able to participate in our Services.</p>
                                <p className="pad_0">Contact us privacy@consiliumintelligence.com if you would like to:</p>
                                <ul>
                                    <li>ask questions about how we handle your Personal Information,</li>
                                    <li>withdraw your consent to our use of your Personal Information,</li>
                                    <li>object to our use of your Personal Information for our legitimate business interests,</li>
                                    <li>request us to not sell your personal information, or</li>
                                    <li>request an electronic copy of your Personal Information for purposes of transmitting it to another company (to       
                                        the extent this right to data portability is provided to you by applicable law),
                                    </li>
                                    <li>request to review, correct, update, suppress, including the sale of your information to our clients, or restrict the 
                                        use of your Personal Information,
                                    </li>
                                    <li className="sub">To review, correct, update, suppress or restrict the use of your Personal Information, please include all 
                                        relevant User IDs and email addresses as well as the names of any Consilium or Consilium-related sites, 
                                        products, or services you may have accessed in your communication to 
                                        privacy@consiliumintelligence.com.
                                    </li>
                                    <li className="sub">Although we strive to maintain accurate Personal Information, if it is determined the Personal Information is 
                                        not accurate, we will work quickly to correct it.
                                    </li>
                                    <li>request that your Personal Information be removed from Consilium’s databases,</li>
                                    <li className="sub">Please include all relevant Name, User IDs, email addresses as well as the names of any Consilium or 
                                        Consilium-related sites, products, or services you may have accessed in your communication to 
                                        privacy@consiliumintelligence.com.
                                    </li>
                                    <li className="sub">Consilium will make reasonable attempts to delete Personal Information upon your request.</li>
                                    <li className="sub">Please note that to maintain consistency in our Services and operations, we retain backup systems. When 
                                        you ask that your information be removed from Consilium’s databases, we may not be able to delete 
                                        residual copies from our systems or from our backup systems, but they will continue to be protected as 
                                        required under this Policy.
                                    </li>
                                </ul>
                                <p>If you would like to opt-out of receiving marketing communications from us, please contact us at privacy@consiliumintelligence.com to have your contact information removed from our marketing databases.</p>
                                <ul>
                                    <li>If you request to have your information removed from our marketing databases through an email request, please include “Remove User” in the subject line of the email, and include your full name, User ID, and telephone number in the body of the email message.</li>
                                    <li>You can also forward a copy of the email or marketing communications from which you want to opt-out. 
                                        We will respond to your request consistent with applicable law. We may decline to process requests that in our reasonable opinion may jeopardize the privacy of others or put our intellectual property at risk.<br/> 
                                        Please note that when we perform Services at the specific request of our client, your request may need to be directed to that client. We may only be able to provide you with a non-confidential summary of our final assessment report because these reports contain confidential client personal information that we are not allowed to disclose.<br/> 
                                        For your protection, we may only implement requests with respect to the Personal Information associated with the email address that you use to send us your request, and we may need to verify your identity before implementing your request. We will comply with your request as soon as reasonably practical and may need to contact you to be sure that we understand your request.<br/> 
                                        We also may need to retain certain Personal Information about you such as your email address to honor opt-out or similar requests. Please keep in mind that this residual Personal Information will remain within Consilium databases, access logs, and other records, which may or may not contain identifiable Personal Information about you. The residual Personal Information will not be used for commercial purposes. However, Consilium reserves the right, from time to time, to recontact former users of its Services as appropriate.
                                    </li>
                                </ul>
                                <h5>LOCATION OF PERSONAL INFORMATION COLLECTED AND MAINTAINED</h5>
                                <p>Depending on the Product or Service we are providing to you, your Personal Information may be collected, used, processed, disclosed, and transferred to and within the United States and other countries where we have facilities or in which we engage service providers. By using our Online Systems, Services, you understand that your Personal Information may be transferred to countries outside of your country of residence, which may have different data protection rules than your country.</p>
                                <ul>
                                    <li>Some of the non-EEA countries are recognized by the European Commission as providing an adequate level of data protection according to EEA standards (the full list of these countries is available here <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en" target="_blank">https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en</a>.</li>
                                    <li>For transfers from the EEA to countries not considered adequate by the European Commission, we have put in place adequate measures, such as standard contractual clauses adopted by the European Commission, to protect your Personal Information. You may obtain a copy of these measures by contacting the Privacy Office at <a href="mailto:privacy@consiliumintelligence.com" target="_blank">privacy@consiliumintelligence.com</a>.</li>
                                </ul>
                                <h5>SECURITY</h5>
                                <p>Consilium has reasonable organizational, technical, and administrative measures in place to protect against the loss, misuse, and alteration of Personal Information about users of the Online Systems which is under our control. Unfortunately, however, no security system, or system of transmitting information over the Internet can be guaranteed to be 100% secure.</p>
                                <p>If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of any account you might have with us has been compromised or your user credentials are no longer secure), please immediately notify us of the problem by contacting us as described in the "Questions" section below.</p>
                                <h5>RETENTION PERIOD</h5>
                                <p>We retain your Personal Information for as long as needed or permitted considering the purpose(s) for which it was obtained.</p>
                                <p className="pad_0">The criteria used to determine our retention periods include:</p>
                                <ul>
                                    <li>The length of time we have an ongoing relationship with you or our client (e.g., for as long as you have an account with us or keep using the Services),</li>
                                    <li>A period beyond the time of the ongoing relationship if we have a legitimate internal operations need, such as a need to retain such information for analysis, record-keeping and compliance with data retention schedules,</li>
                                    <li>Whether there is a legal obligation to which we are subject (for example, certain laws require us to keep records of your transactions for a certain period before we can delete them), or</li>
                                    <li>Whether retention is advisable considering our legal position (such as regarding applicable statutes of limitations, litigation or regulatory investigations).</li>
                                </ul>
                                <h5>LINKS TO OTHER WEBSITES</h5>
                                <p>This Policy does not address, and we are not responsible for, the privacy, information, or other practices of any other third parties.</p>
                                <p>On the Online Systems, you may have the opportunity to follow a link from or to other websites maintained by Consilium affiliates, or other third parties. The inclusion of a link on our Online Systems does not imply our endorsement of the linked site. Because these other websites may not be hosted or controlled by Consilium, this Policy does not address the privacy practices of those websites. We encourage you to review the privacy policies of each of those websites.</p>
                                <p>Please note that we are not responsible for the collection, usage, and disclosure policies and practices (including the data security practices) of other organizations, such as LinkedIn, Facebook, Apple, Google, Microsoft or any other app developer, app provider, social media platform provider, operating system provider, wireless service provider or device manufacturer, including any Personal Information you disclose to other organizations through or in connection with the Apps or our Social Media Pages.</p>
                                <h5>UPDATES TO THIS POLICY</h5>
                                <p>Consilium reviews its privacy practices regularly, and those practices are subject to change. You can determine when this Policy was last revised by checking the “Revised Date” legend at the top of the Policy. Any changes to the Policy will become effective upon posting of the revised Policy on the Internet, accessible through the Site.</p>
                                <h5>USE OF ONLINE SYSTEMS BY CHILDREN</h5>
                                <p>The Online Systems are not directed to individuals under the age of sixteen (16), and we request that these individuals do not provide their personal information through the Online Systems.</p>
                                <h5>SUMMARIES OF POLICY</h5>
                                <p>This Policy is the sole authorized statement of Consilium’s practices with respect to the online collection of Personal Information through the Online Systems and the usage of Personal Information. Any summaries of this Policy generated by third party software or otherwise have no legal effect, are in no way binding upon Consilium, cannot be relied upon in substitute for this Policy, and neither supersede nor modify this Policy.</p>
                                <h5>QUESTIONS</h5>
                                <p>Consilium is responsible for collection, use, and disclosure of your Personal Information under this Policy.</p>
                                <p>Questions regarding this Policy should be directed to Consilium at privacy@consiliumintelligence.com or, if by postal mail, at Consilium Intelligence, LLC, Bond Collective, 55 Broadway, New York, New York, 10006, Attn: Privacy Office.</p>
                                <h5>ADDITIONAL INFORMATION REGARDING THE EEA OR CALIFORNIA</h5>
                                <p>You may contact us at <a href="mailto:privacy@consiliumintelligence.com" target="_blank">privacy@consiliumintelligence.com</a> with any questions about this Policy.</p>
                                <p>You may also lodge a complaint or report an alleged infringement of applicable data protection law with a data protection authority for your country or region, or where an alleged infringement of applicable data protection law has occurred.</p>
                                </div>


                                <div className="tab-pane" id="tab_default_2">
                                <h1>Terms</h1>
                                <h4>Last Updated 27th June 2019</h4>
                                <p>Consilium Intelligence operates the www.consiliumintelligence.com web site (the “Site”) to provide online access to information regarding products and services available from Consilium Intelligence (the “Service”).</p>
                                <p>By accessing and using the Site, you agree to each of the terms and conditions set forth herein (“Terms of Use”). If you do not agree with any of the Terms of Use, you are not authorized to access or use the Site for any purpose. By using the Site, you express your understanding and agreement that you are bound by this Agreement. If you are unwilling to be bound by this Agreement, do not use the Site.</p>
                                <p>Consilium Intelligence reserves the right to modify the Terms of Use at any time without giving you prior notice. Your use of the Site following any such modification constitutes your agreement to follow and be bound by the Terms of Use as modified. The last date these Terms of Use were revised is set forth below.</p>
                                <h5>INTELLECTUAL PROPERTY</h5>
                                <p>The Service, the Site, and all information and/or content that can be seen, heard or otherwise experienced on the Site (the “Content”) are protected by U.S. and international copyright, trademark and other laws, and belong to Consilium Intelligence or its partners, affiliates or third parties.</p>
                                <p>You may use the Site, the Service and the Content solely for your personal, non-commercial use. You may download, print and store portions of the Content that you select, provided that you: (1) only use these copies of the Content for your own personal, non-commercial use; (2) do not copy or post the Content on any network computer or transmit, distribute, publish or broadcast the Content in any media; and (3) do not modify or alter the Content in any way, or delete or change any copyright or trademark notice. No right, title or interest in any downloaded Content or materials is transferred to you as a result of any such downloading. Consilium Intelligence reserves complete title and full intellectual property rights in any Content you download from the Site, subject to this limited license for you to make personal use of the Content as set forth herein.</p>
                                <p>You agree not to modify, reformat, copy, reproduce, display, distribute, repost, transmit, publish, license, sell, rent, transfer, or create derivative works from any Content or information obtained from the Site or the Service, except as expressly permitted by the Terms of Use. You may not mirror or frame the home page or any other pages of this Site on any other web site or web page. You may not connect “deep links” to the Site, i.e., create links to this site that bypass the home page or other parts of the Site. You are prohibited from using any of the marks or logos appearing throughout the Site without express written consent from the trademark owner, except as permitted by applicable law.</p>
                                <h5>DISCLAIMERS</h5>
                                <ul>
                                    <li>Third Party Links. Hypertext links to third party web sites or information do not constitute or imply an endorsement, sponsorship, or recommendation by Consilium Intelligence of the third party, the third- party web site, or the information contained therein, unless expressly stated on the Site. You acknowledge and agree that Consilium Intelligence is not responsible for the availability of any such web sites and that Consilium Intelligence does not endorse or warrant, and is not responsible or liable for, any such web site or the content thereon.</li>
                                    <li>Downloading Files. Consilium Intelligence cannot and does not guarantee or warrant that files available for downloading through the Site will be free of infection by software viruses or other harmful computer code, files or programs. The entire risk as to the quality and performance of the Site and the Service and the accuracy of the Content is solely and exclusively with you.</li>
                                    <li>International Use. Consilium Intelligence makes no representation that the Service or Content is applicable or appropriate for use in locations outside the United States. You agree to comply with all applicable laws and local rules regarding the transmission of technical data, acceptable contents and online conduct.</li>
                                </ul>
                                <h5>DISCLAIMER OF WARRANTIES </h5>
                                <p>YOU AGREE TO ASSUME TOTAL RESPONSIBILITY AND RISK FOR YOUR USE OF THE SITE, THE SERVICE AND THE CONTENT AND FOR EVALUATING THE ACCURACY, COMPLETENESS AND USEFULNESS OF ALL CONTENT PROVIDED BY THE SITE OR THE SERVICE. CONSILIUM INTELLIGENCE MAKES NO EXPRESS OR IMPLIED WARRANTIES, REPRESENTATIONS OR ENDORSEMENTS WHATSOEVER WITH RESPECT TO THE SITE, THE SERVICE OR THE CONTENT. CONSILIUM INTELLIGENCE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NONINFRINGEMENT WITH REGARD TO THE SITE, THE SERVICE, AND THE CONTENT.<br/>
                                    CONSILIUM INTELLIGENCE DOES NOT WARRANT THAT THE FUNCTIONS PERFORMED BY THE SITE OR THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, OR THAT DEFECTS IN THE SITE OR THE SERVICE WILL BE CORRECTED. CONSILIUM INTELLIGENCE DOES NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE CONTENT, OR THAT ANY ERRORS IN THE CONTENT WILL BE CORRECTED. THE SITE, THE SERVICE AND THE CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS.
                                </p>
                                <h5>LIMITATION OF LIABILITY</h5>
                                <p>CONSILIUM INTELLIGENCE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE ARISING EITHER DIRECTLY OR INDIRECTLY FROM ANY USE OR INABILITY TO USE THE SITE, THE SERVICE OR THE CONTENT. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES WILL CONSILIUM INTELLIGENCE BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING, BUT NOT LIMITED TO: (I) ANY DIRECT, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY OR INDIRECT DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO USE THE SITE, THE SERVICE, OR THE CONTENT, (II) ANY CLAIM ATTRIBUTABLE TO ERRORS, OMISSIONS, OR OTHER INACCURACIES IN THE SITE, THE SERVICE AND/OR THE CONTENT, (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF TRANSMISSIONS OR DATA, (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SITE OR THE SERVICE, OR (V) ANY OTHER MATTER RELATING TO THE SITE, THE SERVICE, OR THE CONTENT, EVEN IF CONSILIUM INTELLIGENCE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                                <p>IF YOU ARE DISSATISFIED WITH THE SITE, THE SERVICE, THE CONTENT, OR WITH THE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE. YOU ACKNOWLEDGE, BY YOUR USE OF THE SITE, THAT SUCH USE IS AT YOUR SOLE RISK.
                                    BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH STATES, CONSILIUM INTELLIGENCE’S LIABILITY IS LIMITED AND WARRANTIES ARE EXCLUDED TO THE GREATEST EXTENT PERMITTED BY LAW, BUT WILL, IN NO EVENT, EXCEED $500.00.
                                </p>
                                <h5>INDEMNIFICATION</h5>
                                <p>You understand and agree that you are personally responsible for your behaviour on the Site. You agree to indemnify, defend and hold harmless Consilium Intelligence, its affiliates, licensors, employees, and agents from and against all claims, losses, expenses, damages and costs (including, but not limited to, direct, incidental, consequential, exemplary and indirect damages), and reasonable attorneys’ fees, resulting from or arising out of your use, misuse, or inability to use the Site, the Service, or the Content, or any violation by you of this Agreement.</p>
                                <h5>PRIVACY POLICY</h5>
                                <p><a href="#tab_default_1" data-toggle="tab">Click here</a> to see Consilium Intelligence’s Privacy Policy.</p>
                                <h5>DO NOT SELL MY PERSONAL INFORMATION</h5>
                                <p><a href="#" target="_blank">Click here</a> to restrict Consilium Intelligence’s ability to distribute, or allow clients to access to your Personal Information.</p>
                                <h5>USER CONDUCT</h5>
                                <p>You agree not to take any action that might compromise the security of the Site, render the Site inaccessible to others or otherwise cause damage to the Site or the Content. You agree not to add to, subtract from, or otherwise modify the Content. You agree not to use the Site in any manner that might interfere with the rights of third parties.</p>
                                <h5>USER SUPPLIED INFORMATION</h5>
                                <p>If you supply any information or material to Consilium Intelligence or others via the Site, you guarantee to Consilium Intelligence that you have the legal right to supply, post, or store such information or material and that doing so will not violate any law or the rights of any person or entity. You also agree to abide by any additional rules regarding posting of user content, such as the type of content allowed in various areas of the Site.</p>
                                <h5>TERMINATION</h5>
                                <p>Consilium Intelligence reserves the right to terminate your use of the Site at any time for any reason. Consilium Intelligence may discontinue the Site or any portion of the Site at any time for any reason.</p>
                                <h5>GENERAL PROVISIONS</h5>
                                <ul>
                                    <li>Claims of Copyright Infringement. Pursuant to Title 17, United States Code, Section 512(c)(2), notifications of claimed copyright infringement should be sent to Service Provider's Designated Agent.</li>
                                    <li>Correction of Errors and Inaccuracies. The Content may contain typographical errors or other errors or inaccuracies and may not be complete or current. Consilium Intelligence therefore reserves the right to correct any errors, inaccuracies or omissions and to change or update the Content at any time without prior notice. Consilium Intelligence does not, however, guarantee that any errors, inaccuracies or omissions will be corrected.</li>
                                    <li>Enforcement/ Choice of Law/ Choice of Forum. Every provision of this Agreement will be construed, to the extent possible, so as to be valid and enforceable. If any provision of this Agreement so construed is held by a court of competent jurisdiction to be invalid, illegal or otherwise unenforceable, such provision will be deemed severed from this Agreement, and all other provisions will remain in full force and effect. Any and all disputes relating to these Terms of Use, Consilium Intelligence’s Privacy Policy, your use of the Site, the Service, or the Content (collectively, “Disputes”) are governed by, and will be interpreted in accordance with, the laws of the State of New York, without regard to any conflict of laws provisions. Any Dispute will be venued in a state or federal court situated in New York, NY, and you hereby irrevocably submit to the personal jurisdiction of such courts for that purpose.</li>
                                    <li>Entire Agreement/No Waiver. This Agreement constitutes the entire agreement of the parties with respect to the subject matter hereof. No waiver by Consilium Intelligence of any breach or default hereunder will be deemed to be a waiver of any preceding or subsequent breach or default.</li>
                                </ul>
                                <p>&copy; Copyright 2019. Consilium Intelligence. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
                {/* <!-- /row --> */}
            </div>
        </React.Fragment>
    );
}
