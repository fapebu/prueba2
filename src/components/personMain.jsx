import ListPersonCard from '../components/personsget/componentListPerson'
import FormInput from '../components/personpost/formpost'
import FormEdit from '../components/personput/formput'
import ContentInfo from '../components/contentInfo'

export default function MainPersonComponent() {

    return (
        <>
            <ContentInfo />
            <FormInput />
            <ListPersonCard />
            <FormEdit />
        </>
    )
}
