import React, { Component } from 'react';
import Markup from '../markup/index.jsx';
import style from './style.css';


class Category extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: [
        {name: 'prueba 1', id: 1},
        {name: 'prueba 2', id: 2},
        {name: 'prueba 3', id: 3},
        {name: 'prueba 4', id: 4},
        {name: 'prueba 5', id: 5},
      ],
    }

    this.handleCategory = this.handleCategory.bind(this);
  }

  handleCategory(e){
    this.props.set_category(e.target.value);
  }

  render(){
    return (
      <Markup state={this.props.category != "" } text="Categoria">
        <div className={style.body}>
          <select className={style.select} value={this.props.category} onChange={this.handleCategory} >
            <option value="">Seleccionar</option>
            {this.state.list.map((category) =>
              <option
                key={category.id}
                value={category.id}>{category.name}
              </option>
            )}
          </select>
        </div>
      </Markup>
    )
  }
}

export default Category;
