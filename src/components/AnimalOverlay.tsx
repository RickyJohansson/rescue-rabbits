import './AnimalOverlay.scss';
import CloseOverlayBtn from '../assets/close-overlay.svg';
import VetLogo from '../assets/vet-logo.svg';
import { useState } from 'react';

interface Props {
    // animals: Animal[];
    setHiddenCss:(hiddenCss: boolean) => void;
    hiddenCss: boolean
  }

const AnimalOverlay = ({ setHiddenCss, hiddenCss }: Props) => {

    let hiddenClass: string = hiddenCss ? ' hidden' : ''; 

    // const handleCloseClick: () => void = () => setHiddenCss(hidden => !hidden);

    function handleCloseClick() {
        if (!hiddenCss) {
            setHiddenCss(true);
        } 
    }

    return (
        <section className={ "animal-overlay" + hiddenClass }>
            <a className='close-btn-wrapper' href=""><img className='close-btn' src={ CloseOverlayBtn } alt="" onClick={ () => handleCloseClick() } /></a>
            <h1>Charles</h1>
            <h2>Hund</h2>
            <img className='vet-logo' src={ VetLogo } alt="" />
            <div className="overlay-wrapper">
                <div className="img-wrapper">
                    <img className='overlay-img' src="https://placehold.jp/300x300.png" alt="" />
                </div>
                <div className='info-wrapper'>
                    <p>Age: 2</p>
                    <p>Gender: Male</p>
                    <p>Location: Stockholm</p>
                    <p>Uploaded: 2022-09-02</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p>
                </div>
            </div>
            <p className='link-text'>Läs mer om HUNDAR och hur man sköter dem <a href='#'>HÄR!</a></p>
            <button className="animal-btn">ANMÄL INTRESSE</button>
        </section>
    );
}

export default AnimalOverlay;