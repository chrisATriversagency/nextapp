import Layout from '../components/Layout';
import StepLink from '../components/StepLink';
import PageTitle from '../components/PageTitle';

import Link from 'next/link';

import steps from '../data/steps';

const SystemOverview = props => (
    <Layout>
        <PageTitle title="A Blueprint for Implementation and Improvement of CMM" copy="A step-by-step guide to facilitate quality implementation and improvement of CMM that is grounded in implementation science theory and refined with evidence-based learnings from the CMM in Primary Care Study." />
        <ul>
            {steps.map((step) => (
                <StepLink
                    step={step}
                    key={step.number}
                />
            ))}
        </ul>
    </Layout>
);

export default SystemOverview;
