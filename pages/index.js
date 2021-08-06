import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [{
    id: 'm1',
    title: 'A first Meetup',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    address: '1414 becker Street, Santiago',
    description: 'This is actually my first meetup!'
},
{
    id: 'm2',
    title: 'A second Meetup',
    image: 'https://images.unsplash.com/photo-1461595520627-42e3c83019bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
    address: '1414 becker Lane, Bernabeu',
    description: 'This is actually my first meetup!'
}
]
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
    // Fetch goes here

    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}
export default HomePage
