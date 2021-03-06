import React from 'react';

import Button from './Button';
import ContainerBox from './ContainerBox';
import ContainerBoxContent from './ContainerBoxContent';
import Choice from './Choice';
import ContainerBoxHeader from './ContainerBoxHeader';
import { DefaultLinkStyle } from './Links';
import Modal from './Modal';
import TwoChoices from './layout/TwoChoices';
import UserContext from '../context/UserContext';

class ChoosePathModal extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
                {({path}) => (
                    <div>
                        <h2>You're on the {
                                path.toLowerCase().split(' ').map(word => {
                                    return (word.charAt(0).toUpperCase() + word.slice(1));
                                }).join(' ')
                            } Path.
                        </h2>
                        <Modal trigger={<DefaultLinkStyle>Need to change your path?</DefaultLinkStyle>}>
                            <ContainerBox>
                                <ContainerBoxHeader
                                    title="Choosing Your Path!"
                                    copy="Lorem ipsum dolo sit amet consectetur."
                                />
                                <ContainerBoxContent>
                                    <TwoChoices
                                        leftChoice={<Choice></Choice>}
                                        rightChoice={<Choice></Choice>}
                                    />
                                <Button variant="purple" size="large">Change to Improvement Path</Button>
                                </ContainerBoxContent>
                            </ContainerBox>
                        </Modal>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }
}

export default ChoosePathModal;
