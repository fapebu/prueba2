import ListPersonCard from '../components/personsget/componentListPerson'
import FormInput from '../components/personpost/formpost'
import FormEdit from '../components/personput/formput'

export default function MainPersonComponent() {

    return (
        <>
            <FormInput />
            <ListPersonCard />
            <FormEdit />

        </>
    )
}
