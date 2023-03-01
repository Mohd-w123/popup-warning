import React, { useEffect, useRef } from 'react';
import laptop from './laptop.png';
import './Popup.css';

const Popup = () => {

    const displayModal = useRef();

    useEffect(() => {
        openModal();
        handleTitleUpdate();
    }, []);
    
    const openModal = () => {
        displayModal.current.click();
    }

    const handleCloseModal = () => {
        setTimeout(() => {
            openModal();
        }, 1000);
    }

    const handleTitleUpdate = () => {
        setInterval(() => {
            document.title = "Windows Defender - Security warning";
        }, 2000);
        setInterval(() => {
            document.title = "Windows Defender - Threat detected";
        }, 1500);
    }
  return (
    <>
        <button ref={displayModal} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            style={{display: "none"}}>
        </button>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-container">
                    <div className="modal-header">
                        <h4 className="modal-title mx-2"><i className="fa-solid fa-shield-halved"></i></h4>
                        <h6 className="modal-title" id="staticBackdropLabel">
                            Windows Defender - Security warning</h6>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                    </div>
                    <div className="modal-body" id="modal-body">
                        <div className="text-danger text-center">
                            App: Ads.fiancetrack(2).dll <br/>
                            Threat detected: Trojan sypware
                        </div>
                        <div className="text-center">
                            <img className="laptop-img" src={laptop} alt=""/>
                            <i className="fa-solid fa-user-shield"></i>
                            <img className="laptop-img" src={laptop} alt=""/>
                        </div>
                        <div className="text-center">
                            <h6 className="font-weight-bold">Windows was blocked due to questionable activity.</h6>
                            <a href="tel:+1 877 962 3365" className="text-decoration-none"> Contact
                                Microsoft Support: +1
                                877 962 3365 (Microsoft Toll Free)</a>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                        <h4 className="modal-title mx-2"><i className="fa-solid fa-shield-halved text-danger"></i></h4>
                        <div>
                            <button id="continue" type="button" className="btn btn-outline-dark mx-1"
                                data-bs-dismiss="modal" onClick={handleCloseModal}><strong>Continue</strong>
                            </button>
                            <button id="back" type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleCloseModal}><strong>Back</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Popup