import Head from 'next/head'
import Container from '../components/Container'
import fecth from 'isomorphic-fetch'
import Users from '../components/Users'

const Index = ({ users }) => {
    return (
        <Container>
            <Head>
                <title>NextJS Project - Home</title>
            </Head>
            <h1>NextJS index</h1>
            <Users users={users} />
        </Container>
    )
}

Index.getInitialProps = async (ctx) => {
    const res = await fecth('https://reqres.in/api/users')
    const resJSON = await res.json()
    return { users: resJSON.data }
}

export default Index