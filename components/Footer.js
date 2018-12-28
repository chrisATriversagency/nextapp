/** @jsx jsx */
import { jsx } from '@emotion/core';
import SocialList from './SocialList';

import socialLinks from '../data/socialLinks';

const Footer = () => (
    <footer
        css={{
            gridArea: 'footer'
        }}
    >
        <div className="signup-footer__side signup-footer__side--one">
            <div className="signup-footer__side-item">
                <SocialList links={socialLinks} />
            </div>
            <div className="signup-footer__side-item">
                <span className="copyright">Optimizing Medications for Better Health &copy;2018</span>
            </div>
            <div className="signup-footer__side-item">
                <a className="small-link" href="#">Accessible Use Policy</a>
            </div>
        </div>
        <div className="signup-footer__side signup-footer__side--two">
            <ul className="signup-footer__logos unstyled-list">
                <li className="signup-footer__logo-item">
                    <a className="signup-footer__logo-link reset-link" href="#">
                        <img className="signup-footer__logo" src="/static/images/center-for-medication-optimization.svg" alt="Center for Medication Optimization" />
                    </a>
                </li>
                <li className="signup-footer__logo-item">
                    <a className="signup-footer__logo-link reset-link" href="#">
                        <img className="signup-footer__logo" src="/static/images/minnesota-school-of-pharmacy.svg" alt="Minnesota School of Pharmacy" />
                    </a>
                </li>
                <li className="signup-footer__logo-item">
                    <a className="signup-footer__logo-link reset-link" href="#">
                        <img className="signup-footer__logo" src="/static/images/eshelman-institute-for-innovation.svg" alt="Eshelman Institute for Innovation" />
                    </a>
                </li>
                <li className="signup-footer__logo-item">
                    <a className="signup-footer__logo-link reset-link" href="#">
                        <img className="signup-footer__logo" src="/static/images/aimm.svg" alt="AIMM" />
                    </a>
                </li>
            </ul>
            <a href="#" className="footer-slider__arrow footer-slider__slide-arrow--next reset-link">
                <i className="icon icon-arrow-right"></i>
            </a>
            <a href="#" className="footer-slider__arrow footer-slider__slide-arrow--prev reset-link">
                <i className="icon icon-arrow-left"></i>
            </a>
        </div>
    </footer>
)

export default Footer;
