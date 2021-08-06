import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    
    return (
            <MeetupList meetups={props.meetups} />
    )
}



// export async function getServerSideProps(context) {
//     // Fetch goes here

//     const req = context.req;
//     const res = context.red
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1
//     }
// }

export async function getStaticProps() {
    // Fetch data from api
    const client = await MongoClient.connect('mongodb+srv://pegasus:pegasusDB@cluster0.szf3b.mongodb.net/meetupsdb?retryWrites=true&w=majority')

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const meetups = await meetupsCollection.find().toArray();

        client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image
            }))
        },
        revalidate: 1
    }
}
export default HomePage
