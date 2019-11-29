import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as contentful from 'contentful'
import Project from '../Project/Project';

const SPACE_ID = 'hn4b3jn66q2g'
const ACCESS_TOKEN = 'SRH9VhSQPkgqElawJTPWBVkmKSQoAvOxUCYHIj4BN04'

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class Projects extends Component {
    state = {
        websites: [],
        searchString: ''
    }

    constructor() {
        super()
        this.getWebsites()
    }

    getWebsites = () => {
        client.getEntries({
            content_type: 'website',
            query: this.state.searchString
        })
            .then((response) => {
                this.setState({ websites: response.items })
                console.log(this.state.websites)
            })
            .catch((error) => {
                console.log("Error occurred while fetching Entries")
                console.error(error)
            })
    }


    render() {
        return (
            <div>
                {this.state.websites ? (
                    <div>
                            <Typography m={4} style={{ paddingTop: '60px', paddingBottom: '50px', color: '#333' }} component="h3" variant="h3" align="center" color="primary" gutterBottom>
                                Latest Projects
                            </Typography>
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {this.state.websites.map(website => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Project website={website} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No websites found"}
            </div>
        )
    }
}
export default Projects;