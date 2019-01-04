import React from 'react';

import steps from '../static/data/steps';

import ChoosePathModal from '../components/ChoosePathModal';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import StepLink from '../components/StepLink';

const SystemOverview = () => (
    <Layout>
        <PageTitle title="A Blueprint for Implementation and Improvement of CMM" copy="A step-by-step guide to facilitate quality implementation and improvement of CMM that is grounded in implementation science theory and refined with evidence-based learnings from the CMM in Primary Care Study." />
        <ChoosePathModal />
        <ul>
            {steps.map(({ id, ...step }) => (
                <StepLink {...step} key={id} />
            ))}
        </ul>
    </Layout>
);

export default SystemOverview;
