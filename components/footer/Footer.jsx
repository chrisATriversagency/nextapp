import React from 'react';

import socialLinks from '../../static/data/socialLinks';

import { SmallLink } from '../Links';

import SocialList from './SocialList';
import {
    FooterElement,
    FooterTop,
    FooterBottom,
    FooterBottomItem
} from './FooterLayout';

const now = new Date();
const currentYear = now.getFullYear();

const Footer = () => (
    <FooterElement>
        <FooterTop>
            <ul>
                <li>
                    <a href="#">
                        <img src="/static/images/center-for-medication-optimization.svg" alt="Center for Medication Optimization" />
                    </a>
                </li>
                <li className="signup-footer__logo-item">
                    <a href="#">
                        <img src="/static/images/minnesota-school-of-pharmacy.svg" alt="Minnesota School of Pharmacy" />
                    </a>
                </li>
                <li className="signup-footer__logo-item">
                    <a href="#">
                        <img src="/static/images/eshelman-institute-for-innovation.svg" alt="Eshelman Institute for Innovation" />
                    </a>
                </li>
                <li className="signup-footer__logo-item">
                    <a href="#">
                        <img src="/static/images/aimm.svg" alt="AIMM" />
                    </a>
                </li>
            </ul>
            <a href="#">
                <i className="icon icon-arrow-right"></i>
            </a>
            <a href="#">
                <i className="icon icon-arrow-left"></i>
            </a>
        </FooterTop>
        <FooterBottom>
            <FooterBottomItem>
                <SocialList links={socialLinks} />
            </FooterBottomItem>
            <FooterBottomItem>
                <span>
                    {'Optimizing Medications for Better Health'}
                    &copy;
                    {currentYear}
                </span>
            </FooterBottomItem>
            <FooterBottomItem>
                <SmallLink href="#">Accessible Use Policy</SmallLink>
            </FooterBottomItem>
        </FooterBottom>
    </FooterElement>
);

export default Footer;
