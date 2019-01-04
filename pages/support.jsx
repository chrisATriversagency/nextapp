import React from 'react';

import supportCards from '../static/data/supportCards';

import Card from '../components/Card';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';

const Support = () => (
    <Layout>
        <PageTitle title="Support" copy="Cras diam elit, tempus id egestas a, eleifend et nunc. Proin ipsum risus, lobortis a purus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div>
            {supportCards.map(card => (
                <Card key={card.id} info={card} />
            ))}
        </div>
    </Layout>
);

export default Support;
