import Header from '../components/Header';
import Layout from '../components/Layout';
import Button from '../components/Button';

import ContainerBox from '../components/ContainerBox';
import ContainerBoxHeader from '../components/ContainerBoxHeader';
import ContainerBoxContent from '../components/ContainerBoxContent';
import TwoChoices from '../components/layout/TwoChoices';
import Choice from '../components/Choice';

const Index = () => (
    <Layout>
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
    </Layout>
);

export default Index;
