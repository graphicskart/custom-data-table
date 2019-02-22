import React from 'react'
//import FontIcon from 'material-ui/FontIcon'
import { Table, Button, Row, Pagination } from 'react-bootstrap'
import Select from '../Select'
//import Loader from '../loader/Loader';

export default class CustomDataTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      range: 10,
      pageNumber: 0,
      sortItem: '',
      sortType: 'asc'
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.filterQuery != nextProps.filterQuery || (this.props.loading != nextProps.loading && !nextProps.loading)) {
     this.setState({pageNumber: 0})
    }
  }

  getProps (column, item) {

    let props = {}
    let predefinedProps = ['onClick', 'className']
    if (column.component_props) {
      Object.keys(column.component_props).map(key => {
        if (predefinedProps.indexOf(key) > -1)
          if (key == 'onClick') {
            props[key] = column.component_props.onClick.bind(this, item)
          }
          else
            props[key] = column.component_props[key]
        else
          props[key] = item[column.component_props[key]]
      })
    }
    return props
  }

  handleChange (event) {
    this.setState({range: event.target.value})
  }

  nextPage () {
    let {pageNumber} = this.state
    this.setState({pageNumber: pageNumber + 1})
  }

  prevPage () {
    let {pageNumber} = this.state
    this.setState({pageNumber: pageNumber - 1})
  }

  getFilteredData (data) {
    let filterQuery = this.props.filterQuery
    if (this.state.sortItem) {
      if (this.state.sortType === 'asc') {
        data = this.sortAsec(data, this.state.sortItem)
      }
      else {
        data = this.softDesc(data, this.state.sortItem)
      }
    }
    if (this.props.filterQuery.trim()) {
      let keys = Object.keys(data[0])
      var result = data.filter(item => {
        return Object.values(item).join().indexOf(filterQuery) > -1
      })
      return result
    }
    return data
  }

  sortAsec (data, key) {
    return data.sort(function (a, b) {return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0)})
  }

  softDesc (data, key) {
    return data.sort(function (a, b) {return (b[key] > a[key]) ? 1 : ((a[key] > b[key]) ? -1 : 0)})
  }

  setSortable (header) {
    let {sortItem, sortType} = this.state
    if (sortItem === header && sortType === 'asc') {
      sortType = 'desc'
    }
    else if (sortItem === header && sortType === 'desc') {
      sortType = 'asc'
    }
    else {
      sortType = 'asc'
    }
    this.setState({sortItem: header, sortType: sortType})
  }

  renderClass(){
    if (this.props.noDataPlaceholder && !this.props.data.length && !this.props.loading) {
      return 'haveNoData'
    }
  }

  renderData(){
    const {columns, data, filterQuery, loading = false, noDataPlaceholder} = this.props
    let {range, pageNumber, sortType, sortItem} = this.state
    let start = range * pageNumber
    let end = start + range
    let pageData = this.getFilteredData(data)
    if (end > pageData.length) {
      end = pageData.length
    }
    if (loading) {
      return <tr>
                <td colSpan={columns.length}>{/*<Loader />*/}Loading....</td>
              </tr>
    }

    if (pageData && pageData.length) {
      let rows = pageData.slice(start, end).map((item, i) => {
        return <tr key={i}>
                  {columns.map((column, index) => {
                    return (
                      column.component ?
                        <td key={index}> {React.cloneElement(column.component, this.getProps(column, item))}
                        </td> :
                        <td key={index}>{this.renderValue(item[column.value])}</td>
                    )
                  })}
                </tr>
      });
      return rows;
    } else if(!loading) {
      return <tr>
        <td colSpan={columns.length} style={{textAlign: 'center'}}>
            {noDataPlaceholder ? noDataPlaceholder : 'No data to display'}
        </td>
      </tr>
    }
  }

  renderValue(value){
    if (value) {
      return <span>{value}</span>
    } else {
      return <span>--</span>
    }
  }

  render () {
    const {columns, data, filterQuery, loading = false, noDataPlaceholder} = this.props
    let {range, pageNumber, sortType, sortItem} = this.state
    let start = range * pageNumber
    let end = start + range
    let pageData = this.getFilteredData(data)
    if (end > pageData.length) {
      end = pageData.length
    }
    return (
      <div className="table">
        <div className="">
          
        </div>
        <div className="tableBox">
        <Table style={{backgroundColor: '#fff'}} bordered striped className={this.renderClass()}>
          <thead>
          <tr>
            {columns.map((item, index) => {
              return (
                <th key={index} style={{...item.style, cursor: 'pointer'}}
                    onClick={!loading && this.setSortable.bind(this, item.value)}>
                  <span className="tableHeading">{item.header}</span>
                  {item.sortable &&
                  <div className="sort_header">
                    <i className={'material-icons ' + (sortItem == item.value && sortType == 'asc' ? 'active' : '')}>up</i>
                    <i className={'material-icons ' + (sortItem == item.value && sortType == 'desc' ? 'active' : '')}>down</i>
                  </div>}
                </th>
              )
            })}
          </tr>
          </thead>
          <tbody>
            {this.renderData()}
          </tbody>
        </Table>
        </div>
        <div className="mainfooter">
          <div className="innerfooter">
            <Pagination className="inner_pagination">
              <li className="pagination-detail">{start + 1}-{end} of {pageData.length}</li>
              <span><Pagination.Prev onClick={this.prevPage.bind(this)} disabled={start == 0}></Pagination.Prev></span>
              <span><Pagination.Next onClick={this.nextPage.bind(this)} disabled={end >= pageData.length}></Pagination.Next></span>
            </Pagination>
          </div>
          <div className="footer">
            <h5>View</h5>
            <Select
              value={this.state.range}
              onChange={this.handleChange.bind(this)}
              className="selectfield"
              style={{width: '60px'}}
              data={
                [{value: 10, text: 10},
                  {value: 20, text: 20},
                  {value: 50, text: 50},
                  {value: 100, text: 100}]
              }
            />
          </div>

        </div>

      </div>
    )
  }
}

