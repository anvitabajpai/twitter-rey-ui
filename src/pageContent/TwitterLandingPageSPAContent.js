import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/index.css'
import { connect } from 'react-redux';
import Forum from '@material-ui/icons/Forum';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Grid from '@material-ui/core/Grid';
import MediaCard from '../components/core/MediaCard';
import AvatarIcon from '../components/core/Avatar';
import TextareaPage from '../components/core/BasicTextArea';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#2196F3',
        },
    },
});

class TwitterLandingPageSPAContent extends Component {

    constructor(props) {
        super(props);
        this.submitOrder = this.submitOrder.bind(this);
        this.state = {
            searchCompleted: false,
            searchData: [],
            searchESCompleted: false,
            searchESData: []
        };
    }
    submitOrder(){
        // var values = this.props.formValues.SearchSPAContent.values;
        // axios.get($C.ABSCORE_ACCOUNTDB_ENDPOINT+values.searchBar, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => {
        //     this.setState({ searchCompleted: true});
        //     this.setState({ searchData: JSON.parse(res.data) });
        //     console.log('searchCompleted: '+ this.state.searchCompleted);
        //     console.log('searchData: '+this.state.searchData);
        //
        // }).catch(function(error) {
        //     if(error.data) {
        //         console.log(error.data);
        //     }
        // });
    }

    render() {
            const {handleSubmit} = this.props;
            return (
                <form onSubmit={handleSubmit} className="hide-submit">
                    <Grid container
                          alignItems="center"
                          justify="center">
                          <Forum style={{ fontSize: 30 }} />
                        <b>TweetForum</b>
                    </Grid>

           <br/>

                    <Grid container
                          alignItems="center"
                          justify="center">
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <MediaCard/>
                            <Grid container>
                                <Grid item xs={5} sm={4} md={3} lg={2} xl={2}>
                                    <AvatarIcon />
                                </Grid>
                                <Grid item xs={7} sm={8} md={9} lg={10} xl={10}>
                                    <div><h1>Anvita Bajpai <MuiThemeProvider theme={theme}>
                                        <CheckCircle style={{ fontSize: 22 }} color="primary" />
                                    </MuiThemeProvider></h1></div>
                                    <b>@anvitabajpai </b>  Seattle, WA
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <br/><br/> <br/>
                    <TextareaPage/>
                </form>
            );
    }
}

TwitterLandingPageSPAContent = reduxForm({
    form: 'TwitterLandingPageSPAContent', // a unique identifier for this form
})(TwitterLandingPageSPAContent);

function mapStateToProps(state) {
    return {
        formValues: state.form
    };
}

export default connect(mapStateToProps)(TwitterLandingPageSPAContent);



