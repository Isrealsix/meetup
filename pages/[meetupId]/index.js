import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"


function MeetupDetails() {
    return (
            <MeetupDetail image='https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80' title='A First Meetup' address='1414 becker st.' description='The meetup description'/>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },

            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}


export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    // fetch data for a single meetup
    return {
        props: {
            meetupData: {
                image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
                id: 'm1',
                title: 'A First Meetup',
                address: '1414 becker st.',
                description: 'The meetup description'
            }
        }
    }
}


export default MeetupDetails
