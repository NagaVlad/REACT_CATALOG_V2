import React from "react";
import Cart from "./Cart";
import Registration from "./Registration";
import "./App.css";
import axios from "axios";
import Search from "./Search";
import ProductFilter from "./Filter/ProductFilter";
import About from "./About";
import Main from "./Main";
import { Route, NavLink } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import { connect } from "react-redux";

import Counter from './Counter'
import {
  add, showCart, showReg, setDataFilter, addToCart,
  changeFiltredByNameData, changeFilterFlag,
  changeCurrentPaga, changeOfsset
} from './redux/actions/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      // filtredByNameData: [],
      // cart: [],
      // arrayRef: [], не используется
      // !!!
      // modal: false,
      // modalReg: false,
      //!!!
      // checkedFilter: false,
      // isEmpty: "true",

      searchString: "",
      // abv: 12,
      // total: 0,
      offset: 0,
      perPage: 9,
      currentPage: 0,
      // slice: [],
      // modal2: true,
    };
    // this.handleFormInputFilter = this.handleFormInputFilter.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  componentDidMount() {
    this.receivedData();
    // document.body.style.overflow = "visible";
  }
  // componentWillMount() {
  //   document.body.style.overflow = "visible";
  // }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.props.perPage;
    this.receivedData();

    this.props.changeCurrentPaga(selectedPage)
    this.props.changeOfsset(offset)

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  receivedData = async () => {
    let { data } = await axios.get(`https://api.punkapi.com/v2/beers`);
    data = data.map((el) => ({
      ...el,
      isChecked: false,
      ref: React.createRef(),
    }));

    this.setState({
      // data,
      // filtredByNameData: [...data],
    });

    this.props.setDataFilter(data)
  };

  // changeProductItemCheckedStatus = ({ id, isChecked, input }) => {
  //   // console.log((input.current.checked = isChecked))
  //   const productItem = this.props.data.find((el) => el.id === id);
  //   // const globalIndex = this.state.filtredByNameData.indexOf(productItem)
  //   productItem.isChecked = isChecked;
  //   if (isChecked) {
  //     this.props.cart.push(productItem);
  //   } else {
  //     const index = this.props.cart.indexOf(productItem);
  //     if (index > -1) {
  //       this.props.cart.splice(index, 1);
  //     }
  //   }
  //   this.props.addToCart(this.props.cart)

  //   input.current && (input.current.checked = isChecked);
  // };

  // counterHandler = () => {
  //   this.setState({
  //     total: this.props.cart.reduce((acc, currentValue) => {
  //       return Number(acc) + Number(currentValue[0]);
  //     }, 0),
  //   });
  // };

  //*ПОИСК
  handleChange = (e) => {
    this.setState(
      {
        searchString: e.target.value,
      },
      () => this.searching()
    );
  };

  searching = () => {
    let searchString = this.state.searchString.trim().toLowerCase();

    if (searchString.length > 0) {
      let filtredByNameData = this.props.data.filter((el) => {
        return el.name.toLowerCase().match(searchString);
      });


      this.props.changeFiltredByNameData(filtredByNameData)

      this.setState(
        {
          // filtredByNameData,
        },
        () => {
          console.log(this.props.data);
        }
      );
    } else {


      this.setState(
        {
          // filtredByNameData: [...this.props.data],
        },
        () => {
          console.log(this.props.data);
        }
      );
      this.props.changeFiltredByNameData(this.props.data)

    }
  };

  //*ФИЛЬТР
  // handleFormInputFilter(abv) {
  //   this.setState({
  //     abv: abv,
  //   });
  // }

  handleChangeFilter() {
    this.props.changeFilterFlag(this.props.checkedFilter)
    if (this.props.checkedFilter) {
      console.log("TRUEEEEEEEE!!!!!!!");
      this.handleFiltred();
    } else {
      console.log("FALSE!!!!!!");
      this.props.changeFiltredByNameData(this.props.data)
    }
    // this.setState(
    //   (prevState) => ({ checkedFilter: !this.state.checkedFilter }),
    //   // () => console.log("Соятояние фильтра", this.state.checkedFilter)
    //   () => {
    //     if (this.state.checkedFilter) {
    //       this.handleFiltred();
    //     } else {
    //       this.props.changeFiltredByNameData(this.props.data)
    //       this.setState((prevState) => ({
    //         // filtredByNameData: prevState.data,

    //         // filtredByNameData: this.props.data,
    //       }));
    //     }
    //   }
    // );

    ///////////////////////

  }

  handleFiltred() {
    var results = [];
    this.props.data.map((product) => {
      if (this.props.abv < product.abv) {
        results.push(product);
        console.log('ПУШУ В МАССИВ');
        this.props.changeFiltredByNameData(results)

        this.setState({
          // filtredByNameData: results,
        });
      } else {
      }
    });
  }

  render() {
    console.log("APP", this.props);
    return (
      <>
        <div className="container menuu ">
          <nav className="navig ">
            <ul className="navigation">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <li>
                  <NavLink to="/">Каталог товаров</NavLink>
                </li>
                <li>
                  <NavLink to="/about">О магазине</NavLink>
                </li>
                <li>
                  <NavLink to="/main">Контакты</NavLink>
                </li>
                <li>
                  <button
                    className="btn btn green"
                    onClick={() => {
                      // this.setState({ modal: true });//!!*МЕНЯЮ ТУТ
                      this.props.showCart()
                    }}
                  >
                    Корзина
                  </button>
                </li>
                <li>
                  <button
                    className="btn btn blue"
                    // onClick={() => this.setState({ modalReg: true })//!!*МЕНЯЮ ТУТ
                    onClick={() => { this.props.showReg() }}
                  >
                    Регистрация
                  </button>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        <h1 style={{ textAlign: "center" }}><i class="medium material-icons">shopping_cart</i>Каталог товаров<i class="medium material-icons">shopping_cart</i></h1>
        <Search
          handleChange={this.handleChange}
          searchString={this.state.searchString}
        />

        <div className="container">
          {/* Фильтр */}
          <ProductFilter
            // series={this.state.series}//!!
            // abv={this.state.abv}
            // data={this.props.data}//!!
            checked={this.state.checked}
            handleChangeFilter={this.handleChangeFilter}
          />
        </div>

        {/* Router */}
        <Route
          path="/"
          exact
          render={() => (
            <HomeLayout
              // filtredByNameData={this.props.filtredByNameData} //!!ТУТ ЕСТЬ ОШИБКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
              pageCount={this.state.pageCount}
            // changeProductItemCheckedStatus={
            //   this.changeProductItemCheckedStatus
            // }

            // pageCount={this.state.pageCount}
            />
          )}
        />
        <Route path="/about" exact component={About} />
        <Route path="/main" exact component={Main} />
        {/* Корзина */}
        {this.props.modal ? (
          <Cart
          // close={() => this.setState({ modal: false })}
          // cart={this.props.cart}
          // changeProductItemCheckedStatus={this.changeProductItemCheckedStatus}
          // total={this.state.total}
          />
        ) : null}

        {/* Форма регистрации */}
        {this.props.modalReg ? (
          <Registration close={() => this.setState({ modalReg: false })} />
        ) : null}

        {/* 
        {this.state.checked2 ? this.handleFiltred() : null} */}

        {/* <Modal
          modal2={this.state.modal2}
          setActive={this.setModalActive}
        /> */}

        {/*УДАЛИТЬ  */}
        {/* <button onClick={this.props.onAdd}>Redux</button>
        <h4>ФЛАГ {this.props.counter}</h4>
        <Counter /> */}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
    modal: state.appReducer.modal,
    modalReg: state.appReducer.modalReg,

    data: state.appReducer.data,
    filtredByNameData: state.appReducer.filtredByNameData,
    cart: state.appReducer.cart,
    checkedFilter: state.appReducer.checkedFilter,

    abv: state.appReducer.abv,
    total: state.appReducer.total,
    offset: state.appReducer.offset,
    perPage: state.appReducer.perPage,
    currentPage: state.appReducer.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    showCart: () => dispatch(showCart()),
    showReg: () => dispatch(showReg()),
    setDataFilter: (data) => dispatch(setDataFilter(data)),
    addToCart: (data) => dispatch(addToCart(data)),
    changeFiltredByNameData: (data) => dispatch(changeFiltredByNameData(data)),
    changeFilterFlag: (data) => dispatch(changeFilterFlag(data)),

    changeCurrentPaga: (data) => dispatch(changeCurrentPaga(data)),
    changeOfsset: (data) => dispatch(changeOfsset(data))
    // receivedData: prevState => dispatch(receivedData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
