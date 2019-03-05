import React, { Component } from 'react';
import Markup from '../markup/index.jsx';
import style from './style.css';
import { connect } from 'react-redux';
import { load_category } from '../../../../flux/category.js';

class Category extends Component {
  constructor(props){
    super(props)

    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount(){
    if (this.props.items.length === 0){
      this.props.dispatch(load_category());
    }
  }

  handleCategory(e){
    this.props.set_category(e.target.value);
  }

  render(){
    return (
      <Markup state={this.props.category != "" } text="Categoria">
        <div className={style.body}>
          {!this.props.loading && this.props.items.length > 0 && (
            <select className={style.select} value={this.props.category} onChange={this.handleCategory} >
              <option value="">Seleccionar</option>
              {this.props.items.map((category) =>
                <option
                  key={category.id}
                  value={category.id}>{category.name}
                </option>
              )}
            </select>
          )}
          {this.props.loading && (
            <div className={style.loading}></div>
          )}
        </div>
      </Markup>
    )
  }
}

function mapStateToProps (state){
  return {
    loading: state.category.loading,
    items: state.category.items,
  }
}

export default connect(mapStateToProps)(Category);
