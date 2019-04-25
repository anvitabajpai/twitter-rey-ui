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

class SearchSPAContent extends Component {
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
        var values = this.props.formValues.SearchSPAContent.values;
        axios.get($C.ABSCORE_ACCOUNTDB_ENDPOINT+values.searchBar, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => {
            this.setState({ searchCompleted: true});
            this.setState({ searchData: JSON.parse(res.data) });
            console.log('searchCompleted: '+ this.state.searchCompleted);
            console.log('searchData: '+this.state.searchData);

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

                    {this.state.searchCompleted === true &&
                    <div>
                        <h2>Orders</h2>
                        <div style={{color: 'grey', fontSize: "0.75rem", fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>Orders fetched directly using SD API (Abscore Layer)</div>
                        <div className='break' />
                        <br/>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>OrderID</TableCell>
                                        <TableCell numeric>FirstName</TableCell>
                                        <TableCell numeric>LastName</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.searchData.map(row => {
                                        return (
                                            <TableRow  key={id += 1}>
                                                <TableCell component="th" scope="row">
                                                    <a href={'http://locallogin.abso.com/' + row[3]}>{row[0]}</a>
                                                </TableCell>
                                                <TableCell numeric>{row[2]}</TableCell>
                                                <TableCell numeric>{row[1]}</TableCell>
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

SearchSPAContent = reduxForm({
    form: 'SearchSPAContent', // a unique identifier for this form
})(SearchSPAContent);

function mapStateToProps(state) {
    return {
        formValues: state.form
    };
}

export default connect(mapStateToProps)(SearchSPAContent);



