import React from 'react';

import faqs from '../data/faqs';

import Accordion from '../components/Accordion';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const Faqs = () => (
    <Layout>
        <PageTitle title="Frequenty Asked Questions" copy="Cras diam elit, tempus id egestas a, eleifend et nunc. Proin ipsum risus, lobortis a purus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Accordion>
            {faqs.map(faq => (
                <div label={faq.title} key={faq.id} id={faq.id}>
                    <p>{faq.content}</p>
                </div>
            ))}
        </Accordion>
    </Layout>
);

export default Faqs;
