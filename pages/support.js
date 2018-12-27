import Header from '../components/Header';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

import supportCards from '../data/supportCards';

const Support = () => (
    <Layout>
        <PageTitle title="Support" copy="Cras diam elit, tempus id egestas a, eleifend et nunc. Proin ipsum risus, lobortis a purus quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <div>
            {supportCards.map((card) => (
                <Card key={card.id} info={card}/>
            ))}
        </div>
    </Layout>
);

export default Support;
