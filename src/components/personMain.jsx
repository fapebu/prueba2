import ListPersonCard from '../components/personsget/componentListPerson'
import FormEdit from '../components/personput/formput'
import UserContainer from '../components/redux/users_content/UserContainer'



export default function MainPersonComponent() {

    return (
        <>
            <UserContainer />
            <FormEdit />
            <ListPersonCard />
        </>
    )
}
