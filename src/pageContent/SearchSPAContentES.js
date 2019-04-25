import React, { Component } from 'react';
import renderSearchBar from '../components/core/SearchBar';
import { Field, reduxForm } from 'redux-form';
import '../css/index.css'
import axios from "axios";
import { connect } from 'react-redux';
import * as $C from "../containers/SearchSPA/constants";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Paper from "@material-ui/core/Paper/Paper";
import TableCell from "@material-ui/core/TableCell/TableCell";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(arr) {
    id += 1;
    let orderId = arr[0];
    let lastName = arr[1];
    let firstName = arr[2];
    return {id, orderId, firstName, lastName };
}

class SearchSPAContentES extends Component {
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
        var values = this.props.formValues.SearchSPAContentES.values;
        var val =  {
                "query_string":{
                    "query":values.searchBar
                }
        };
        axios.post('https://vpc-api-services-dev-yvh5yktrwrn3q3vxazcduqalwu.us-east-1.es.amazonaws.com/poc-turing/sdorders/_search', {
            query: val
        }).then(res => {
            this.setState({ searchESCompleted: true});
            var sources = res.data.hits.hits;
            var esData =[];
            for (var i =0; i<sources.length; i++) {
                esData[i] = JSON.stringify(sources[i]["_source"]);
            }
            this.setState({ searchESData: esData});
            console.log('searchESCompleted: '+ this.state.searchESCompleted);
            console.log('searchESData: '+this.state.searchESData);

        }).catch(function(error) {
            if(error.data) {
                console.log(error.data);
            }
        });
    }

    render() {
            const {handleSubmit} = this.props;
            return (
                <form onSubmit={handleSubmit} className="hide-submit">
                    <div className="center">
                        <img src="STS_Logo.png" alt="STS" width="250"/>
                    </div>
                    <div style={{textAlign: 'center'}}>

                    <Field name="searchBar" component={renderSearchBar} label="SearchBar *" />

                    </div>
                    <div className="center">
                        <input type="submit" value="Sterling Search" onClick={this.submitOrder} />
                        <a href="https://www.sterlingtalentsolutions.com/">
                            <input type="button" value="I am feeling lucky" />
                        </a>
                    </div>
                    <div className="doubleBreak"/>

<div className="doubleBreak"/>
                    {this.state.searchESCompleted === true &&
                    <div>
                        <h2>Orders</h2>
                        <div style={{color: 'grey', fontSize: "0.75rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>Orders fetched via Elastic Search (AWS ES Service)</div>
                        <div className='break' />
                        <br/>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>OrderID</TableCell>
                                        <TableCell>FirstName</TableCell>
                                        <TableCell>LastName</TableCell>
                                        <TableCell>ActID</TableCell>
                                        <TableCell>City</TableCell>
                                        <TableCell>CountryCode</TableCell>
                                        <TableCell>CustID</TableCell>
                                        <TableCell>DOB</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.searchESData.map(row => {
                                        return (
                                            <TableRow  key={id += 1}>
                                                <TableCell component="th" scope="row">{JSON.parse(row).BgOrderID}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).FirstName}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).LastName}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).ActID}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).City}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).CountryCode}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).CustID}</TableCell>
                                                <TableCell numeric>{JSON.parse(row).DOB}</TableCell>

                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </div>}
                </form>
            );
    }
}

SearchSPAContentES = reduxForm({
    form: 'SearchSPAContentES', // a unique identifier for this form
})(SearchSPAContentES);

function mapStateToProps(state) {
    return {
        formValues: state.form
    };
}

export default connect(mapStateToProps)(SearchSPAContentES);



